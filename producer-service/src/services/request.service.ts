import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from '../config';
import {
  GetRequestByIdReq,
  Request,
  RequestReq,
  RequestType,
} from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

export class RequestService {
  client: any;
  constructor() {
    this.client = this.initClient();
  }

  async createOGRequest(req: RequestReq): Promise<Request> {
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

  async createRoleRequest(req: RequestReq): Promise<Request> {
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

  async assignRoleToEntityRequest(req: RequestReq): Promise<Request> {
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

  async createEntityRequest(req: RequestReq): Promise<Request> {
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

  async renameOGRequest(req: RequestReq): Promise<Request> {
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

  async renameRoleRequest(req: RequestReq): Promise<Request> {
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

  async editEntityRequest(req: RequestReq): Promise<Request> {
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

  async deleteOGRequest(req: RequestReq): Promise<Request> {
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

  async deleteRoleRequest(req: RequestReq): Promise<Request> {
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

  async disconectRoleFromEntityRequest(req: RequestReq): Promise<Request> {
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
        grpc.credentials.createInsecure()
      );
      return client;
    } catch (error) {
      throw error;
    }
  }
}
