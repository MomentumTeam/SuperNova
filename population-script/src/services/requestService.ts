import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import {
  CreateOGReq,
  CreateRoleReq,
  GetRequestByIdReq,
  Request,
  RequestReq,
  RequestType,
  AssignRoleToEntityReq,
  CreateEntityReq,
  RenameOGReq,
  RenameRoleReq,
  EditEntityReq,
  DeleteOGReq,
  DeleteRoleReq,
  DisconectRoleFromEntityReq,
  CreateNewApproverReq,
  DeleteEntityReq,
  ChangeRoleHierarchyReq,
} from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class RequestService {
  client: any;
  constructor() {
    this.client = this.initClient();
  }

  async createOGRequest(req: CreateOGReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.CreateOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async createRoleRequest(req: CreateRoleReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.CreateRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async deleteEntityRequest(req: DeleteEntityReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.DeleteEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async changeRoleHierarchyRequest(
    req: ChangeRoleHierarchyReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.ChangeRoleHierarchyRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async assignRoleToEntityRequest(
    req: AssignRoleToEntityReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.AssignRoleToEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async createEntityRequest(req: CreateEntityReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.CreateEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async renameOGRequest(req: RenameOGReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.RenameOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async renameRoleRequest(req: RenameRoleReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.RenameRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async editEntityRequest(req: EditEntityReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.EditEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async deleteOGRequest(req: DeleteOGReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.DeleteOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async deleteRoleRequest(req: DeleteRoleReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.DeleteRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async disconectRoleFromEntityRequest(
    req: DisconectRoleFromEntityReq
  ): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.DisconectRoleFromEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as Request);
        }
      });
    });
  }

  async getRequestById(req: GetRequestByIdReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.GetRequestById(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  async createNewApproverRequest(req: CreateNewApproverReq): Promise<Request> {
    return new Promise((resolve, reject) => {
      this.client.CreateNewApproverRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          res.type = RequestType[res.type];
          resolve(res as Request);
        }
      });
    });
  }

  private initClient(): any {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: any =
        grpc.loadPackageDefinition(packageDefinition).RequestService;

      const client: any = new protoDescriptor.RequestService(
        C.requestServiceUrl,
        grpc.credentials.createInsecure(),
        { 'grpc.keepalive_timeout_ms': 5000 }
      );
      return client;
    } catch (error) {
      throw error;
    }
  }
}
