import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as C from "./config";
import { logger } from "./logger";
import {
  getRequestById,
  createOGRequest,
  createRoleRequest,
  getRequestsByCommander,
  assignRoleToEntityRequest,
  createEntityRequest,
  getRequestsSubmittedBy,
  renameOGRequest,
  renameRoleRequest,
  deleteOGRequest,
  editEntityRequest,
  deleteRoleRequest,
  updateRequest,
} from "./requests/request.controller";

const PROTO_PATH = __dirname.includes("dist")
  ? path.join(__dirname, "../../proto/requestService.proto")
  : path.join(__dirname, "../proto/requestService.proto");

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
        level: "info",
        message: `Proto was loaded successfully from file: ${PROTO_PATH}`,
        label: "initServer",
      });
      this.server.addService(requestServiceDescriptor.RequestService.service, {
        CreateOGRequest: createOGRequest,
        GetRequestById: getRequestById,
        CreateRoleRequest: createRoleRequest,
        AssignRoleToEntityRequest: assignRoleToEntityRequest,
        GetRequestsByCommander: getRequestsByCommander,
        CreateEntityRequest: createEntityRequest,
        GetRequestsSubmittedBy: getRequestsSubmittedBy,
        RenameOGRequest: renameOGRequest,
        RenameRoleRequest: renameRoleRequest,
        EditEntityRequest: editEntityRequest,
        DeleteOGRequest: deleteOGRequest,
        DeleteRoleRequest: deleteRoleRequest,
        UpdateRequest: updateRequest,
      });
      logger.log({
        level: "info",
        message: `Grpc services were successfully added to the server`,
        label: "initServer",
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Error while initializing the server: ${error.message}`,
        label: "initServer",
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
