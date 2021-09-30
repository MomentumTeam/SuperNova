import path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import {
  ChangeRoleHierarchyBulkReq,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  CreateRoleBulkRes,
} from '../interfaces/protoc/proto/requestService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/bulkService.proto')
  : path.join(__dirname, '../../proto/bulkService.proto');

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).BulkService;

const bulkClient: any = new protoDescriptor.BulkService(
  config.endpoints.bulk,
  grpc.credentials.createInsecure()
);

export class BulkService {
  static async createRoleBulkRequest(createRoleBulkReq: CreateRoleBulkReq) {
    logger.info(`Call to createRoleBulkRequest in GTW`, createRoleBulkReq);

    return new Promise((resolve, reject) => {
      bulkClient.CreateRoleBulkRequest(
        createRoleBulkReq,
        (err: any, response: CreateRoleBulkRes) => {
          if (err) {
            logger.error(`createRoleBulkRequest ERROR in GTW`, {
              err,
              callRequest: createRoleBulkReq,
            });
            reject(err);
          }

          logger.info(`createRoleBulkRequest OK in GTW`, {
            response: response,
            callRequest: createRoleBulkReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async changeRoleHierarchyBulkRequest(
    changeRoleHierarchyBulkReq: ChangeRoleHierarchyBulkReq
  ) {
    logger.info(
      `Call to changeRoleHierarchyBulkRequest in GTW`,
      changeRoleHierarchyBulkReq
    );

    return new Promise((resolve, reject) => {
      bulkClient.ChangeRoleHierarchyBulkRequest(
        changeRoleHierarchyBulkReq,
        (err: any, response: ChangeRoleHierarchyBulkRes) => {
          if (err) {
            logger.error(`changeRoleHierarchyBulkRequest ERROR in GTW`, {
              err,
              callRequest: changeRoleHierarchyBulkReq,
            });
            reject(err);
          }

          logger.info(`changeRoleHierarchyBulkRequest OK in GTW`, {
            response: response,
            callRequest: changeRoleHierarchyBulkReq,
          });
          resolve(response);
        }
      );
    });
  }
}
