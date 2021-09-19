import path from 'path';
import { config } from '../config';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import {
  CanPushToQueueReq,
  CanPushToQueueRes,
  CreateRoleReq,
  CreateRoleRes,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonReq,
  Request,
  RequestArray,
  SearchRequestsByDisplayNameReq,
  StageStatus,
  UpdateADStatusReq,
  UpdateApproverDecisionReq,
  UpdateApproversReq,
  UpdateKartoffelStatusReq,
  UpdateReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../utils/logger/logger';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/requestService.proto')
  : path.join(__dirname, '../../proto/requestService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).RequestService;

export const requestsClient: any = new protoDescriptor.RequestService(
  config.endpoints.request,
  grpc.credentials.createInsecure()
);

export class RequestsService {
  // GET
  static async getRequestById(getRequestByIdReq: GetRequestByIdReq) {
    logger.info(`Call to getRequestById in GTW`, getRequestByIdReq);

    return new Promise((resolve, reject) => {
      requestsClient.GetRequestById(
        getRequestByIdReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`getRequestById ERROR in GTW`, {
              err,
              callRequest: getRequestByIdReq,
            });
            reject(err);
          }

          logger.info(`getRequestById OK in GTW`, {
            response: response,
            callRequest: getRequestByIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRequestsByPerson(
    getRequestsByPersonReq: GetRequestsByPersonReq
  ) {
    logger.info(`Call to getRequestsByPerson in GTW`, getRequestsByPersonReq);

    return new Promise((resolve, reject) => {
      requestsClient.GetRequestsByPerson(
        getRequestsByPersonReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`getRequestsByPerson ERROR in GTW`, {
              err,
              callRequest: getRequestsByPersonReq,
            });
            reject(err);
          }

          logger.info(`getRequestsByPerson OK in GTW`, {
            response: response,
            callRequest: getRequestsByPersonReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getRequestBySerialNumber(
    getRequestBySerialNumberReq: GetRequestBySerialNumberReq
  ) {
    logger.info(
      `Call to getRequestBySerialNumber in GTW`,
      getRequestBySerialNumberReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.GetRequestBySerialNumber(
        getRequestBySerialNumberReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`getRequestBySerialNumber ERROR in GTW`, {
              err,
              callRequest: getRequestBySerialNumberReq,
            });
            reject(err);
          }

          logger.info(`getRequestBySerialNumber OK in GTW`, {
            response: response,
            callRequest: getRequestBySerialNumberReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchRequestsBySubmitterDisplayName(
    searchRequestsBySubmitterDisplayNameReq: SearchRequestsByDisplayNameReq
  ) {
    logger.info(
      `Call to searchRequestsBySubmitterDisplayName in GTW`,
      searchRequestsBySubmitterDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.SearchRequestsBySubmitterDisplayName(
        searchRequestsBySubmitterDisplayNameReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`searchRequestsBySubmitterDisplayName ERROR in GTW`, {
              err,
              callRequest: searchRequestsBySubmitterDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`searchRequestsBySubmitterDisplayName OK in GTW`, {
            response: response,
            callRequest: searchRequestsBySubmitterDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchRequestsByCommanderDisplayName(
    searchRequestsByCommanderDisplayNameReq: SearchRequestsByDisplayNameReq
  ) {
    logger.info(
      `Call to searchRequestsByCommanderDisplayName in GTW`,
      searchRequestsByCommanderDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.SearchRequestsByCommanderDisplayName(
        searchRequestsByCommanderDisplayNameReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`searchRequestsByCommanderDisplayName ERROR in GTW`, {
              err,
              callRequest: searchRequestsByCommanderDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`searchRequestsByCommanderDisplayName OK in GTW`, {
            response: response,
            callRequest: searchRequestsByCommanderDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchRequestsBySecurityDisplayName(
    searchRequestsBySecurityDisplayNameReq: SearchRequestsByDisplayNameReq
  ) {
    logger.info(
      `Call to searchRequestsBySecurityDisplayName in GTW`,
      searchRequestsBySecurityDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.searchRequestsBySecurityDisplayName(
        searchRequestsBySecurityDisplayNameReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`searchRequestsBySecurityDisplayName ERROR in GTW`, {
              err,
              callRequest: searchRequestsBySecurityDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`searchRequestsBySecurityDisplayName OK in GTW`, {
            response: response,
            callRequest: searchRequestsBySecurityDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchRequestsByApproverDisplayName(
    searchRequestsByApproverDisplayNameReq: SearchRequestsByDisplayNameReq
  ) {
    logger.info(
      `Call to searchRequestsByApproverDisplayName in GTW`,
      searchRequestsByApproverDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.SearchRequestsByApproverDisplayName(
        searchRequestsByApproverDisplayNameReq,
        (err: any, response: RequestArray) => {
          if (err) {
            logger.error(`searchRequestsByApproverDisplayName ERROR in GTW`, {
              err,
              callRequest: searchRequestsByApproverDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`searchRequestsByApproverDisplayName OK in GTW`, {
            response: response,
            callRequest: searchRequestsByApproverDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  // PUT
  static async updateADStatus(updateADStatus: UpdateADStatusReq) {
    logger.info(`Call to updateADStatus in GTW`, updateADStatus);

    return new Promise((resolve, reject) => {
      requestsClient.UpdateADStatus(
        updateADStatus,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateADStatus ERROR in GTW`, {
              err,
              callRequest: updateADStatus,
            });
            reject(err);
          }

          logger.info(`updateADStatus OK in GTW`, {
            response: response,
            callRequest: updateADStatus,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateKartoffelStatus(requestId: string) {
    const updateKartoffelStatusReq: UpdateKartoffelStatusReq = {
      requestId: requestId,
      status: StageStatus.STAGE_IN_PROGRESS,
    };

    logger.info(
      `Call to updateKartoffelStatus in GTW`,
      updateKartoffelStatusReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.UpdateKartoffelStatus(
        updateKartoffelStatusReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateKartoffelStatus ERROR in GTW`, {
              err,
              callRequest: updateKartoffelStatusReq,
            });
            reject(err);
          }

          logger.info(`updateKartoffelStatus OK in GTW`, {
            response: response,
            callRequest: updateKartoffelStatusReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateRequest(updateRequestReq: UpdateReq) {
    logger.info(`Call to updateRequest in GTW`, updateRequestReq);

    return new Promise((resolve, reject) => {
      requestsClient.UpdateRequest(
        updateRequestReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateRequest ERROR in GTW`, {
              err,
              callRequest: updateRequestReq,
            });
            reject(err);
          }

          logger.info(`updateRequest OK in GTW`, {
            response: response,
            callRequest: updateRequestReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateCommanders(updateCommandersReq: UpdateApproversReq) {
    logger.info(`Call to updateCommanders in GTW`, updateCommandersReq);

    return new Promise((resolve, reject) => {
      requestsClient.UpdateCommanders(
        updateCommandersReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateCommanders ERROR in GTW`, {
              err,
              callRequest: updateCommandersReq,
            });
            reject(err);
          }

          logger.info(`updateCommanders OK in GTW`, {
            response: response,
            callRequest: updateCommandersReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateSecurityApprovers(
    updateSecurityApproversReq: UpdateApproversReq
  ) {
    logger.info(
      `Call to updateSecurityApprovers in GTW`,
      updateSecurityApproversReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.UpdateSecurityApprovers(
        updateSecurityApproversReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateSecurityApprovers ERROR in GTW`, {
              err,
              callRequest: updateSecurityApproversReq,
            });
            reject(err);
          }

          logger.info(`updateSecurityApprovers OK in GTW`, {
            response: response,
            callRequest: updateSecurityApproversReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ) {
    logger.info(
      `Call to updateApproverDecision in GTW`,
      updateApproverDecisionReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.UpdateApproverDecision(
        updateApproverDecisionReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateApproverDecision ERROR in GTW`, {
              err,
              callRequest: updateApproverDecisionReq,
            });
            reject(err);
          }

          logger.info(`updateApproverDecision OK in GTW`, {
            response: response,
            callRequest: updateApproverDecisionReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async canPushToADQueue(
    canPushToADQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    logger.info(`Call to canPushToADQueue in GTW`, canPushToADQueueReq);

    return new Promise((resolve, reject) => {
      requestsClient.CanPushToADQueue(
        canPushToADQueueReq,
        (err: any, response: CanPushToQueueRes) => {
          if (err) {
            logger.error(`canPushToADQueue ERROR in GTW`, {
              err,
              callRequest: canPushToADQueueReq,
            });
            resolve({
              canPushToQueue: false, //defalut in case of an error
            });
          }

          logger.info(`canPushToADQueue OK in GTW`, {
            response: response,
            callRequest: canPushToADQueueReq,
          });
          resolve(response);
        }
      );
    });
  }

  // POST
  static async createRoleRequest(createRoleReq: CreateRoleReq) {
    logger.info(`Call to createRoleRequest in GTW`, createRoleReq);

    return new Promise((resolve, reject) => {
      requestsClient.CreateRoleRequest(
        createRoleReq,
        (err: any, response: CreateRoleRes) => {
          if (err) {
            logger.error(`createRoleRequest ERROR in GTW`, {
              err,
              callRequest: createRoleReq,
            });
            reject(err);
          }

          logger.info(`createRoleRequest OK in GTW`, {
            response: response,
            callRequest: createRoleReq,
          });
          resolve(response);
        }
      );
    });
  }
}
