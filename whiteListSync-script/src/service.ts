import { logger } from "./logger";
import { approverClient } from "./clients";
import {
  ApproverIdArray,
  Approver,
} from "./interfaces/protoc/proto/approverService";



export function getAllApproverIds() {
  logger.info(`Call to getAllApproverIds in WLS`);

  return new Promise((resolve, reject) => {
    approverClient.getAllApproverIds((err: any, response: ApproverIdArray) => {
      if (err) {
        logger.error(`SyncApprover ERROR in WLS`, { err });
        resolve(null);
      }

      logger.info(`SyncApprover OK in WLS`, {
        response: response,
      });

      resolve(response);
    });
  });
}

export function sync(entityId: string) {
  logger.info(`Call to SyncApprover in WLS`, {
    callRequest: { approverId: entityId },
  });

  return new Promise((resolve, reject) => {
    approverClient.SyncApprover(
      { approverId: entityId },
      (err: any, response: Approver) => {
        if (err) {
          logger.error(`SyncApprover ERROR in WLS`, {
            err,
            callRequest: { approverId: entityId },
          });
          resolve(null);
        }

        logger.info(`SyncApprover OK in WLS`, {
          response: response,
          callRequest: { approverId: entityId },
        });

        resolve(response);
      }
    );
  });
}
