import path from 'path';
import { config } from '../config';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import {
  ApproverType,
  AssignRoleToEntityReq,
  AssignRoleToEntityRes,
  CanPushToQueueReq,
  CanPushToQueueRes,
  ChangeRoleHierarchyReq,
  ChangeRoleHierarchyRes,
  CreateEntityReq,
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
  HasSecurityAdminReq,
  HasSecurityAdminRes,
  IsRequestApprovedReq,
  IsRequestApprovedRes,
  RemoveApproverFromApproversReq,
  RenameOGReq,
  RenameOGRes,
  RenameRoleReq,
  RenameRoleRes,
  Request,
  RequestArray,
  RequestStatus,
  RequestType,
  requestTypeFromJSON,
  StageStatus,
  SuccessMessage,
  TransferRequestToApproversReq,
  UpdateADStatusReq,
  UpdateApproverDecisionReq,
  UpdateApproversReq,
  UpdateKartoffelStatusReq,
  UpdateReq,
  ConvertEntityTypeReq,
  ConvertEntityTypeRes,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../utils/logger/logger';
import { ApproverService } from '../approver/approver.service';
import ProducerService from '../producer/producer.service';

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

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.RequestService(
      config.endpoints.request,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class RequestsService {
  static async executeRequestIfNeeded(request: any) {
    try {
      const requestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;
      const isRequestApprovedRes: any = await RequestsService.isRequestApproved(
        { id: request.id }
      );
      if (isRequestApprovedRes.isRequestApproved) {
        if (requestType === RequestType.ADD_APPROVER) {
          try {
            await ApproverService.addApprover({
              entityId: request.additionalParams?.entityId || '',
              type: request.additionalParams?.type || ApproverType.UNRECOGNIZED,
              akaUnit: request.additionalParams?.akaUnit || '',
              displayName: request.additionalParams?.displayName || '',
              domainUsers: request.additionalParams?.domainUsers || [],
              directGroup: request.additionalParams?.directGroup || '',
              identityCard: request.additionalParams?.identityCard || '',
              personalNumber: request.additionalParams?.personalNumber || '',
              groupInChargeId:
                request.additionalParams?.groupInChargeId ||
                config.fields.rootId,
              specialGroupId: request.additionalParams?.specialGroupId || '',
            });
            await RequestsService.updateRequest({
              id: request.id,
              requestProperties: { status: RequestStatus.DONE },
            });
          } catch (addApproverError) {
            await RequestsService.updateRequest({
              id: request.id,
              requestProperties: { status: RequestStatus.FAILED },
            });
          }
        } else {
          await ProducerService.executeRequest(request.id);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  static async getRequestById(getRequestByIdReq: GetRequestByIdReq) {
    logger.info(`Call to getRequestById in GTW`, getRequestByIdReq);

    return new Promise((resolve, reject) => {
      randomClient().GetRequestById(
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
      randomClient().GetRequestsByPerson(
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
      randomClient().GetRequestBySerialNumber(
        getRequestBySerialNumberReq,
        (err: any, response: any) => {
          if (err) {
            logger.error(`getRequestBySerialNumber ERROR in GTW`, {
              err,
              callRequest: getRequestBySerialNumberReq,
            });
            reject(err);
          }

          logger.info(`getRequestBySerialNumber OK in GTW`, {
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
      randomClient().TransferRequestToApprovers(
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
      randomClient().UpdateADStatus(
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
      randomClient().UpdateKartoffelStatus(
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
            callRequest: updateKartoffelStatusReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateRequest(updateRequestReq: any) {
    logger.info(`Call to updateRequest in GTW`, updateRequestReq);

    return new Promise((resolve, reject) => {
      randomClient().UpdateRequest(
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
      randomClient().UpdateCommanders(
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
      randomClient().UpdateSecurityApprovers(
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
      randomClient().UpdateApproverDecision(
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
      randomClient().CanPushToADQueue(
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

  static async canPushToKartoffelQueue(
    canPushToKartoffelQueueReq: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    logger.info(
      `Call to canPushToKartoffelQueue in GTW`,
      canPushToKartoffelQueueReq
    );

    return new Promise((resolve, reject) => {
      randomClient().CanPushToKartoffelQueue(
        canPushToKartoffelQueueReq,
        (err: any, response: CanPushToQueueRes) => {
          if (err) {
            logger.error(`canPushToKartoffelQueue ERROR in GTW`, {
              err,
              callRequest: canPushToKartoffelQueueReq,
            });
            resolve({
              canPushToQueue: false, //defalut in case of an error
            });
          }

          logger.info(`canPushToKartoffelQueue OK in GTW`, {
            response: response,
            callRequest: canPushToKartoffelQueueReq,
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
      randomClient().CreateRoleRequest(
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
      randomClient().AssignRoleToEntityRequest(
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
      randomClient().CreateOGRequest(
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
      randomClient().CreateNewApproverRequest(
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
            callRequest: createNewApproverReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async createEntityRequest(createEntityReq: CreateEntityReq) {
    logger.info(`Call to createEntityRequest in GTW`, createEntityReq);

    return new Promise((resolve, reject) => {
      randomClient().CreateEntityRequest(
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
      randomClient().RenameOGRequest(
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
      randomClient().RenameRoleRequest(
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
      randomClient().EditEntityRequest(
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
      randomClient().ChangeRoleHierarchyRequest(
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
            callRequest: changeRoleHierarchyRequest,
          });
          resolve(response);
        }
      );
    });
  }

  // DELETE

  // PUT

  static async convertEntityTypeRequest(convertEntityTypeReq: ConvertEntityTypeReq) {
    logger.info(`Call to convertEntityTypeRequest in GTW`, convertEntityTypeReq);

    return new Promise((resolve, reject) => {
      randomClient().ConvertEntityTypeRequest(
        convertEntityTypeReq,
        (err: any, response: ConvertEntityTypeRes) => {
          if (err) {
            logger.error(`convertEntityTypeRequest ERROR in GTW`, {
              err,
              callRequest: convertEntityTypeReq,
            });
            reject(err);
          }

          logger.info(`convertEntityTypeRequest OK in GTW`, {
            callRequest: convertEntityTypeReq,
          });
          resolve(response);
        }
      );
    });
  }


  static async removeApproverFromApprovers(
    removeApproverFromApproversReq: RemoveApproverFromApproversReq
  ) {
    logger.info(
      `Call to removeApproverFromApprovers in GTW`,
      removeApproverFromApproversReq
    );

    return new Promise((resolve, reject) => {
      randomClient().RemoveApproverFromApprovers(
        removeApproverFromApproversReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`removeApproverFromApprovers ERROR in GTW`, {
              err,
              callRequest: removeApproverFromApproversReq,
            });
            reject(err);
          }

          logger.info(`removeApproverFromApprovers OK in GTW`, {
            response: response,
            callRequest: removeApproverFromApproversReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async deleteRoleRequest(deleteRoleReq: DeleteRoleReq) {
    logger.info(`Call to deleteRoleRequest in GTW`, deleteRoleReq);

    return new Promise((resolve, reject) => {
      randomClient().DeleteRoleRequest(
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
      randomClient().DeleteOGRequest(
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
      randomClient().DeleteEntityRequest(
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
      randomClient().DisconectRoleFromEntityRequest(
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
      randomClient().DeleteRequest(
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

  static async isRequestApproved(isRequestApprovedReq: IsRequestApprovedReq) {
    logger.info(`Call to isRequestApproved in GTW`, isRequestApprovedReq);

    return new Promise((resolve, reject) => {
      randomClient().IsRequestApproved(
        isRequestApprovedReq,
        (err: any, response: IsRequestApprovedRes) => {
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
        }
      );
    });
  }

  static async hasSecurityAdmin(hasSecurityAdminReq: HasSecurityAdminReq) {
    logger.info(`Call to hasSecurityAdmin in GTW`, hasSecurityAdminReq);

    return new Promise((resolve, reject) => {
      randomClient().HasSecurityAdmin(
        hasSecurityAdminReq,
        (err: any, response: HasSecurityAdminRes) => {
          if (err) {
            logger.error(`hasSecurityAdmin ERROR in GTW`, {
              err,
              callRequest: hasSecurityAdminReq,
            });
            reject(err);
          }

          logger.info(`hasSecurityAdmin OK in GTW`, {
            response: response,
            callRequest: hasSecurityAdminReq,
          });
          resolve(response);
        }
      );
    });
  }
}
