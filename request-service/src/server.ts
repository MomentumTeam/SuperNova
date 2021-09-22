import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  getRequestById,
  updateRequest,
  deleteRequest,
  getAllRequests,
  createRequestFuncByType,
  updateKartoffelStatus,
  updateADStatus,
  canPushToKartoffelQueue,
  canPushToADQueue,
  getRequestBySerialNumber,
  searchRequestsByDisplayNameFuncByPersonType,
  incrementKartoffelRetries,
  incrementADRetries,
  getRequestsInProgressByDue,
  getRequestIdsInProgressByDue,
  updateCommanders,
  updateSecurityApprovers,
  getRequestsByPerson,
  updateApproverDecision,
  isRequestApproved,
  updateSuperSecurityApprovers,
  syncBulkRequest,
  pushError,
} from './requests/request.controller';
import {
  PersonTypeInRequest,
  RequestType,
} from './interfaces/protoc/proto/requestService';
import { findPath } from './utils/path';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;
export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    addHealthService(this.server);
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          // defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const requestServiceDescriptor: any = protoDescriptor.RequestService;
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return requestServiceDescriptor;
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const requestServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(requestServiceDescriptor.RequestService.service, {
        CreateOGRequest: createRequestFuncByType(RequestType.CREATE_OG),
        CreateRoleRequest: createRequestFuncByType(RequestType.CREATE_ROLE),
        AssignRoleToEntityRequest: createRequestFuncByType(
          RequestType.ASSIGN_ROLE_TO_ENTITY
        ),
        CreateNewApproverRequest: createRequestFuncByType(
          RequestType.ADD_APPROVER
        ),
        CreateEntityRequest: createRequestFuncByType(RequestType.CREATE_ENTITY),
        RenameOGRequest: createRequestFuncByType(RequestType.RENAME_OG),
        RenameRoleRequest: createRequestFuncByType(RequestType.RENAME_ROLE),
        EditEntityRequest: createRequestFuncByType(RequestType.EDIT_ENTITY),
        DeleteOGRequest: createRequestFuncByType(RequestType.DELETE_OG),
        DeleteRoleRequest: createRequestFuncByType(RequestType.DELETE_ROLE),
        DisconectRoleFromEntityRequest: createRequestFuncByType(
          RequestType.DISCONNECT_ROLE
        ),
        ChangeRoleHierarchyRequest: createRequestFuncByType(
          RequestType.CHANGE_ROLE_HIERARCHY
        ),
        CreateRoleBulkRequest: createRequestFuncByType(
          RequestType.CREATE_ROLE_BULK
        ),
        ChangeRoleHierarchyBulkRequest: createRequestFuncByType(
          RequestType.CHANGE_ROLE_HIERARCHY_BULK
        ),
        GetRequestsByPerson: getRequestsByPerson,
        GetRequestById: getRequestById,
        UpdateRequest: updateRequest,
        UpdateKartoffelStatus: updateKartoffelStatus,
        UpdateADStatus: updateADStatus,
        DeleteRequest: deleteRequest,
        GetAllRequests: getAllRequests,
        GetRequestBySerialNumber: getRequestBySerialNumber,
        SearchRequestsByDisplayName: searchRequestsByDisplayNameFuncByPersonType,
        SearchRequestsBySubmitterDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.SUBMITTER
          ),
        SearchRequestsByCommanderDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.COMMANDER_APPROVER
          ),
        SearchRequestsBySecurityDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.SECURITY_APPROVER
          ),
        SearchRequestsByApproverDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.APPROVER
          ),
        CanPushToKartoffelQueue: canPushToKartoffelQueue,
        CanPushToADQueue: canPushToADQueue,
        IncrementKartoffelRetries: incrementKartoffelRetries,
        IncrementADRetries: incrementADRetries,
        UpdateApproverDecision: updateApproverDecision,
        GetRequestsInProgressByDue: getRequestsInProgressByDue,
        GetRequestIdsInProgressByDue: getRequestIdsInProgressByDue,
        UpdateCommanders: updateCommanders,
        UpdateSecurityApprovers: updateSecurityApprovers,
        UpdateSuperSecurityApprovers: updateSuperSecurityApprovers,
        IsRequestApproved: isRequestApproved,
        SyncBulkRequest: syncBulkRequest,
        PushError: pushError,
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error: any) {
      logger.error(`Error while initializing the server`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            logger.error(`Error while binding to ${C.host}:${C.port}`, {
              error: bindError,
            });
            reject(bindError);
          } else {
            try {
              this.server.start();
              logger.info(`Server was started successfully`);
              resolve();
            } catch (startError) {
              reject(startError);
            }
          }
        }
      );
    });
  }
}
