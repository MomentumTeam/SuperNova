import path from 'path';
import * as grpc from '@grpc/grpc-js';
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
  IsBulkFileValidReq,
  IsBulkFileValidRes,
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

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.BulkService(
      config.endpoints.bulk,
      grpc.credentials.createInsecure(),
      {
        'grpc.keepalive_timeout_ms': 5000,
      }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class BulkService {
  // POST

  static async isBulkFileValid(isBulkFileValidReq: IsBulkFileValidReq) {
    logger.info(`Call to isBulkFileValid in GTW`, isBulkFileValidReq);

    return new Promise((resolve, reject) => {
      randomClient().IsBulkFileValid(
        isBulkFileValidReq,
        (err: any, response: IsBulkFileValidRes) => {
          if (err) {
            logger.error(`isBulkFileValid ERROR in GTW`, {
              err,
              callRequest: isBulkFileValidReq,
            });
            reject(err);
          }

          logger.info(`isBulkFileValid OK in GTW`, {
            response: response,
            callRequest: isBulkFileValidReq,
          });
          if (response.isFileValid) {
            resolve(response);
          } else {
            reject(new Error('File is invalid!'));
          }
        }
      );
    });
  }

  static async createRoleBulkRequest(createRoleBulkReq: CreateRoleBulkReq) {
    logger.info(`Call to createRoleBulkRequest in GTW`, createRoleBulkReq);

    return new Promise((resolve, reject) => {
      randomClient().CreateRoleBulkRequest(
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
      randomClient().ChangeRoleHierarchyBulkRequest(
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
      randomClient().GetBulkRequestExample(
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
      randomClient().GetCreateRoleBulkRequestById(
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
      randomClient().GetChangeRoleHierarchyBulkRequestById(
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
            callRequest: getBulkRequestByIdReq,
          });
          resolve(response);
        }
      );
    });
  }
}
