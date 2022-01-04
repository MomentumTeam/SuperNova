process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { findPath } from './utils/path';

if (process.env.NODE_ENV !== 'production') {
  const ENV_PATH = `${findPath('supernova.env')}`;
  require('dotenv').config({
    path: ENV_PATH,
  });
}

import { logger } from './logger';
import RequestService from './services/requestService';
import ProducerService from './services/producerService';
import ApproverService from './services/approverService';
import * as config from './config';
import {
  ApproverType,
  Request,
  RequestStatus,
  RequestType,
  requestTypeFromJSON,
} from './interfaces/protoc/proto/requestService';
import { resolveProjectReferencePath } from 'typescript';
const schedule = require('node-schedule');

async function main() {
  try {
    await execute();
    if (config.cronJob) {
      schedule.scheduleJob(`*/${config.minute} * * * *`, async function () {
        //run script every x minutes
        await execute();
      });
    }
  } catch (error: any) {
    logger.error(
      `Error while trying to start Execution-Script: ${error.message}`
    );
  }
}

async function execute() {
  logger.info(`Execution-Script started successfully!`);

  let requestsArray: any = await RequestService.getRequestsInProgress();

  requestsArray.requests.forEach((request: Request) => {
    request.type = requestTypeFromJSON(request.type);
  });

  const promises = requestsArray.requests.map(async (request: any) => {
    return new Promise((resolve, reject) => {
      if (request.type === RequestType.ADD_APPROVER) {
        ApproverService.addApprover(request.id, {
          entityId: request.additionalParams?.entityId || '',
          type: request.additionalParams?.type || ApproverType.UNRECOGNIZED,
          akaUnit: request.additionalParams?.akaUnit || '',
          displayName: request.additionalParams?.displayName || '',
          domainUsers: request.additionalParams?.domainUsers || [],
          directGroup: request.additionalParams?.directGroup || '',
          identityCard: request.additionalParams?.identityCard || '',
          personalNumber: request.additionalParams?.personalNumber || '',
          groupInChargeId:
            request.additionalParams?.groupInChargeId || config.rootId,
        })
          .then(() => {
            RequestService.updateRequest(request.id, {
              status: RequestStatus.DONE,
            })
              .then(() => {
                resolve(true);
              })
              .catch((updateError) => {
                reject(updateError);
              });
          })
          .catch((error) => {
            RequestService.updateRequest(request.id, {
              status: RequestStatus.FAILED,
            })
              .then(() => {
                reject(error);
              })
              .catch((updateError) => {
                reject(updateError);
              });
          });
      } else if (
        request.type === RequestType.CREATE_ROLE_BULK ||
        request.type === RequestType.CHANGE_ROLE_HIERARCHY_BULK
      ) {
        RequestService.syncBulkRequest(request.id)
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        ProducerService.executeRequest(request.id)
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });

  Promise.all(promises)
    .then((values) => {
      logger.info(`Promises were finished successfully`);
    })
    .catch((error) => {
      logger.error(`Promises exection failed`, {
        error: { message: error.message },
      });
    });
}

main().then().catch();
