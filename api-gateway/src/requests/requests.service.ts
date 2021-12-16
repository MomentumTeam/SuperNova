import path from 'path';
import { config } from '../config';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {
  AssignRoleToEntityReq,
  AssignRoleToEntityRes,
  CanPushToQueueReq,
  CanPushToQueueRes,
  ChangeRoleHierarchyReq,
  ChangeRoleHierarchyRes,
  CreateEntityRes,
  CreateNewApproverReq,
  CreateNewApproverRes,
  CreateOGReq,
  CreateOGRes,
  CreateRoleReq,
  CreateRoleRes,
  DeleteEntityReq,
  DeleteEntityRes,
  DeleteOGReq,
  DeleteOGRes,
  DeleteReq,
  DeleteRoleReq,
  DeleteRoleRes,
  DisconectRoleFromEntityReq,
  DisconectRoleFromEntityRes,
  EditEntityReq,
  EditEntityRes,
  GetRequestByIdReq,
  GetRequestBySerialNumberReq,
  GetRequestsByPersonReq,
  IsRequestApprovedReq,
  IsRequestApprovedRes,
  RenameOGReq,
  RenameOGRes,
  RenameRoleReq,
  RenameRoleRes,
  Request,
  RequestArray,
  StageStatus,
  SuccessMessage,
  TransferRequestToApproversReq,
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
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export class RequestsService {
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

  // PUT
  static async transferRequestToApprovers(
    transferRequestToApproversReq: TransferRequestToApproversReq
  ) {
    logger.info(
      `Call to transferRequestToApprovers in GTW`,
      transferRequestToApproversReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.TransferRequestToApprovers(
        transferRequestToApproversReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`transferRequestToApprovers ERROR in GTW`, {
              err,
              callRequest: transferRequestToApproversReq,
            });
            reject(err);
          }

          logger.info(`transferRequestToApprovers OK in GTW`, {
            response: response,
            callRequest: transferRequestToApproversReq,
          });
          resolve(response);
        }
      );
    });
  }

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
  ): Promise<Request> {
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
  static async createRoleRequest(
    createRoleReq: CreateRoleReq
  ): Promise<CreateRoleRes> {
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

  static async assignRoleToEntityRequest(
    assignRoleToEntityReq: AssignRoleToEntityReq
  ) {
    logger.info(
      `Call to assignRoleToEntityRequest in GTW`,
      assignRoleToEntityReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.AssignRoleToEntityRequest(
        assignRoleToEntityReq,
        (err: any, response: AssignRoleToEntityRes) => {
          if (err) {
            logger.error(`assignRoleToEntityRequest ERROR in GTW`, {
              err,
              callRequest: assignRoleToEntityReq,
            });
            reject(err);
          }

          logger.info(`assignRoleToEntityRequest OK in GTW`, {
            response: response,
            callRequest: assignRoleToEntityReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async createOGRequest(createOGReq: CreateOGReq) {
    logger.info(`Call to createOGRequest in GTW`, createOGReq);

    return new Promise((resolve, reject) => {
      requestsClient.CreateOGRequest(
        createOGReq,
        (err: any, response: CreateOGRes) => {
          if (err) {
            logger.error(`createOGRequest ERROR in GTW`, {
              err,
              callRequest: createOGReq,
            });
            reject(err);
          }

          logger.info(`createOGRequest OK in GTW`, {
            response: response,
            callRequest: createOGReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async createNewApproverRequest(
    createNewApproverReq: CreateNewApproverReq
  ) {
    logger.info(
      `Call to createNewApproverRequest in GTW`,
      createNewApproverReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.CreateNewApproverRequest(
        createNewApproverReq,
        (err: any, response: CreateNewApproverRes) => {
          if (err) {
            logger.error(`createNewApproverRequest ERROR in GTW`, {
              err,
              callRequest: createNewApproverReq,
            });
            reject(err);
          }

          logger.info(`createNewApproverRequest OK in GTW`, {
            response: response,
            callRequest: createNewApproverReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async createEntityRequest(createEntityReq: CreateNewApproverReq) {
    logger.info(`Call to createEntityRequest in GTW`, createEntityReq);

    return new Promise((resolve, reject) => {
      requestsClient.CreateEntityRequest(
        createEntityReq,
        (err: any, response: CreateEntityRes) => {
          if (err) {
            logger.error(`createEntityRequest ERROR in GTW`, {
              err,
              callRequest: createEntityReq,
            });
            reject(err);
          }

          logger.info(`createEntityRequest OK in GTW`, {
            response: response,
            callRequest: createEntityReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async renameOGRequest(renameOGReq: RenameOGReq) {
    logger.info(`Call to renameOGRequest in GTW`, renameOGReq);

    return new Promise((resolve, reject) => {
      requestsClient.RenameOGRequest(
        renameOGReq,
        (err: any, response: RenameOGRes) => {
          if (err) {
            logger.error(`renameOGRequest ERROR in GTW`, {
              err,
              callRequest: renameOGReq,
            });
            reject(err);
          }

          logger.info(`renameOGRequest OK in GTW`, {
            response: response,
            callRequest: renameOGReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async renameRoleRequest(renameRoleReq: RenameRoleReq) {
    logger.info(`Call to renameRoleRequest in GTW`, renameRoleReq);

    return new Promise((resolve, reject) => {
      requestsClient.RenameRoleRequest(
        renameRoleReq,
        (err: any, response: RenameRoleRes) => {
          if (err) {
            logger.error(`renameRoleRequest ERROR in GTW`, {
              err,
              callRequest: renameRoleReq,
            });
            reject(err);
          }

          logger.info(`renameRoleRequest OK in GTW`, {
            response: response,
            callRequest: renameRoleReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async editEntityRequest(editEntityReq: EditEntityReq) {
    logger.info(`Call to editEntityRequest in GTW`, editEntityReq);

    return new Promise((resolve, reject) => {
      requestsClient.EditEntityRequest(
        editEntityReq,
        (err: any, response: EditEntityRes) => {
          if (err) {
            logger.error(`editEntityRequest ERROR in GTW`, {
              err,
              callRequest: editEntityReq,
            });
            reject(err);
          }

          logger.info(`editEntityRequest OK in GTW`, {
            response: response,
            callRequest: editEntityReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async changeRoleHierarchyRequest(
    changeRoleHierarchyRequest: ChangeRoleHierarchyReq
  ) {
    logger.info(
      `Call to changeRoleHierarchyRequest in GTW`,
      changeRoleHierarchyRequest
    );

    return new Promise((resolve, reject) => {
      requestsClient.ChangeRoleHierarchyRequest(
        changeRoleHierarchyRequest,
        (err: any, response: ChangeRoleHierarchyRes) => {
          if (err) {
            logger.error(`changeRoleHierarchyRequest ERROR in GTW`, {
              err,
              callRequest: changeRoleHierarchyRequest,
            });
            reject(err);
          }

          logger.info(`changeRoleHierarchyRequest OK in GTW`, {
            response: response,
            callRequest: changeRoleHierarchyRequest,
          });
          resolve(response);
        }
      );
    });
  }

  // DELETE
  static async deleteRoleRequest(deleteRoleReq: DeleteRoleReq) {
    logger.info(`Call to deleteRoleRequest in GTW`, deleteRoleReq);

    return new Promise((resolve, reject) => {
      requestsClient.DeleteRoleRequest(
        deleteRoleReq,
        (err: any, response: DeleteRoleRes) => {
          if (err) {
            logger.error(`deleteRoleRequest ERROR in GTW`, {
              err,
              callRequest: deleteRoleReq,
            });
            reject(err);
          }

          logger.info(`deleteRoleRequest OK in GTW`, {
            response: response,
            callRequest: deleteRoleReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async deleteOGRequest(deleteOGReq: DeleteOGReq) {
    logger.info(`Call to deleteOGRequest in GTW`, deleteOGReq);

    return new Promise((resolve, reject) => {
      requestsClient.DeleteOGRequest(
        deleteOGReq,
        (err: any, response: DeleteOGRes) => {
          if (err) {
            logger.error(`deleteOGRequest ERROR in GTW`, {
              err,
              callRequest: deleteOGReq,
            });
            reject(err);
          }

          logger.info(`deleteOGRequest OK in GTW`, {
            response: response,
            callRequest: deleteOGReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async deleteEntityRequest(deleteEntityRequest: DeleteEntityReq) {
    logger.info(`Call to deleteEntityRequest in GTW`, deleteEntityRequest);

    return new Promise((resolve, reject) => {
      requestsClient.DeleteEntityRequest(
        deleteEntityRequest,
        (err: any, response: DeleteEntityRes) => {
          if (err) {
            logger.error(`deleteEntityRequest ERROR in GTW`, {
              err,
              callRequest: deleteEntityRequest,
            });
            reject(err);
          }

          logger.info(`deleteEntityRequest OK in GTW`, {
            response: response,
            callRequest: deleteEntityRequest,
          });
          resolve(response);
        }
      );
    });
  }

  static async disconectRoleFromEntityRequest(
    disconectRoleFromEntityReq: DisconectRoleFromEntityReq
  ) {
    logger.info(
      `Call to disconectRoleFromEntityRequest in GTW`,
      disconectRoleFromEntityReq
    );

    return new Promise((resolve, reject) => {
      requestsClient.DisconectRoleFromEntityRequest(
        disconectRoleFromEntityReq,
        (err: any, response: DisconectRoleFromEntityRes) => {
          if (err) {
            logger.error(`disconectRoleFromEntityRequest ERROR in GTW`, {
              err,
              callRequest: disconectRoleFromEntityReq,
            });
            reject(err);
          }

          logger.info(`disconectRoleFromEntityRequest OK in GTW`, {
            response: response,
            callRequest: disconectRoleFromEntityReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async deleteRequest(deleteReq: DeleteReq) {
    logger.info(`Call to deleteRequest in GTW`, deleteReq);

    return new Promise((resolve, reject) => {
      requestsClient.DeleteRequest(
        deleteReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`deleteRequest ERROR in GTW`, {
              err,
              callRequest: deleteReq,
            });
            reject(err);
          }

          logger.info(`deleteRequest OK in GTW`, {
            response: response,
            callRequest: deleteReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async isRequestApproved(
    isRequestApprovedReq: IsRequestApprovedReq
  ) {
    logger.info(`Call to isRequestApproved in GTW`, isRequestApprovedReq);

    return new Promise((resolve, reject) => {
      requestsClient.IsRequestApproved(isRequestApprovedReq, (err: any, response: IsRequestApprovedRes) => {
        if (err) {
          logger.error(`isRequestApproved ERROR in GTW`, {
            err,
            callRequest: isRequestApprovedReq,
          });
          reject(err);
        }

        logger.info(`isRequestApproved OK in GTW`, {
          response: response,
          callRequest: isRequestApprovedReq,
        });
        resolve(response);
      });
    });
  }
}
