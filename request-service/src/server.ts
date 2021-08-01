import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import {
  getRequestById,
  getRequestsByCommander,
  getRequestsSubmittedBy,
  updateRequest,
  deleteRequest,
  getAllRequests,
  createRequestFuncByType,
  updateKartoffelStatus,
  updateADStatus,
  getRequestsByIdentifierFuncByPersonType,
  canPushToKartoffelQueue,
  canPushToADQueue,
  getRequestBySerialNumber,
  searchRequestsByDisplayNameFuncByPersonType,
} from './requests/request.controller';
import {
  GetRequestsByIdentifierReq,
  RequestType,
} from './interfaces/protoc/proto/requestService';
import { findPath } from './utils/path';
import { PersonTypeInRequest } from './enums/personTypeInRequest.enum';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const requestServiceDescriptor: any = protoDescriptor.RequestService;
      return requestServiceDescriptor;
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const requestServiceDescriptor: any = this.getProtoDescriptor();
      logger.log({
        level: 'info',
        message: `Proto was loaded successfully from file: ${PROTO_PATH}`,
        label: 'initServer',
      });
      this.server.addService(requestServiceDescriptor.RequestService.service, {
        CreateOGRequest: createRequestFuncByType(RequestType.CREATE_OG),
        CreateRoleRequest: createRequestFuncByType(RequestType.CREATE_ROLE),
        AssignRoleToEntityRequest: createRequestFuncByType(
          RequestType.ASSIGN_ROLE_TO_ENTITY
        ),
        CreateApproverRequest: createRequestFuncByType(
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
        GetRequestsByCommander: getRequestsByCommander,
        GetRequestsSubmittedBy: getRequestsSubmittedBy,
        GetRequestById: getRequestById,
        UpdateRequest: updateRequest,
        UpdateKartoffelStatus: updateKartoffelStatus,
        UpdateADStatus: updateADStatus,
        DeleteRequest: deleteRequest,
        GetAllRequests: getAllRequests,
        GetRequestBySerialNumber: getRequestBySerialNumber,
        GetRequestsBySubmitterIdentifier:
          getRequestsByIdentifierFuncByPersonType(
            PersonTypeInRequest.SUBMITTED_BY
          ),
        GetRequestsByCommanderIdentifier:
          getRequestsByIdentifierFuncByPersonType(
            PersonTypeInRequest.COMMANDER
          ),
        GetRequestsBySecurityIdentifier:
          getRequestsByIdentifierFuncByPersonType(
            PersonTypeInRequest.SECURITY_APPROVER
          ),
        GetRequestsByApproverIdentifier:
          getRequestsByIdentifierFuncByPersonType(PersonTypeInRequest.APPROVER),
        SearchRequestsBySubmitterDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.SUBMITTED_BY
          ),
        SearchRequestsByCommanderDisplayName:
          searchRequestsByDisplayNameFuncByPersonType(
            PersonTypeInRequest.COMMANDER
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
      });
      logger.log({
        level: 'info',
        message: `Grpc services were successfully added to the server`,
        label: 'initServer',
      });
    } catch (error) {
      logger.log({
        level: 'error',
        message: `Error while initializing the server: ${error.message}`,
        label: 'initServer',
      });
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            reject(bindError);
          } else {
            try {
              this.server.start();
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
