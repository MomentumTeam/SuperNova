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
import {
  DetailedCreateRoleBulkRequest,
  GetBulkRequestByIdReq,
  GetBulkRequestExampleReq,
  GetBulkRequestExampleRes,
} from '../interfaces/protoc/proto/bulkService';

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
  grpc.credentials.createInsecure(),
  {
    'grpc.keepalive_timeout_ms': 5000,
  }
);

export class BulkService {
  // POST
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

  // PUT
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

  // GET
  static async getBulkRequestExample(
    getBulkRequestExampleReq: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes> {
    logger.info(
      `Call to getBulkRequestExample in GTW`,
      getBulkRequestExampleReq
    );

    return new Promise((resolve, reject) => {
      bulkClient.GetBulkRequestExample(
        getBulkRequestExampleReq,
        (err: any, response: GetBulkRequestExampleRes) => {
          if (err) {
            logger.error(`getBulkRequestExample ERROR in GTW`, {
              err,
              callRequest: getBulkRequestExampleReq,
            });
            reject(err);
          }

          logger.info(`getBulkRequestExample OK in GTW`, {
            response: response,
            callRequest: getBulkRequestExampleReq,
          });
          resolve(response);
        }
      );
    });
  }

  // GET
  static async getCreateRoleBulkRequestById(
    getBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest> {
    logger.info(
      `Call to getCreateRoleBulkRequestById in GTW`,
      getBulkRequestByIdReq
    );

    return new Promise((resolve, reject) => {
      bulkClient.GetCreateRoleBulkRequestById(
        getBulkRequestByIdReq,
        (err: any, response: DetailedCreateRoleBulkRequest) => {
          if (err) {
            logger.error(`getCreateRoleBulkRequestById ERROR in GTW`, {
              err,
              callRequest: getBulkRequestByIdReq,
            });
            reject(err);
          }

          logger.info(`getCreateRoleBulkRequestById OK in GTW`, {
            response: response,
            callRequest: getBulkRequestByIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  // GET
  static async getChangeRoleHierarchyBulkRequestById(
    getBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest> {
    logger.info(
      `Call to getChangeRoleHierarchyBulkRequestById in GTW`,
      getBulkRequestByIdReq
    );

    return new Promise((resolve, reject) => {
      bulkClient.GetChangeRoleHierarchyBulkRequestById(
        getBulkRequestByIdReq,
        (err: any, response: DetailedCreateRoleBulkRequest) => {
          if (err) {
            logger.error(`getChangeRoleHierarchyBulkRequestById ERROR in GTW`, {
              err,
              callRequest: getBulkRequestByIdReq,
            });
            reject(err);
          }

          logger.info(`getChangeRoleHierarchyBulkRequestById OK in GTW`, {
            response: response,
            callRequest: getBulkRequestByIdReq,
          });
          resolve(response);
        }
      );
    });
  }
}
