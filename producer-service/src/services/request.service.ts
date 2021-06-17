import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as C from "../config";
import { IRequest } from "../interfaces/requestService/request.interface";
import { IRequestReq } from "../interfaces/requestService/requestReq.interface";
import { IGetRequestByIdReq } from "../interfaces/requestService/getRequestById/getRequestByIdReq.interface";

const PROTO_PATH = __dirname.includes("dist")
  ? path.join(__dirname, "../../../proto/requestService.proto")
  : path.join(__dirname, "../../proto/requestService.proto");

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

const client: any = new protoDescriptor.RequestService(
  C.requestServiceUrl,
  grpc.credentials.createInsecure()
);

export class RequestService {
  client: any;
  constructor() {
    this.client = this.initClient();
  }

  async createOGRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.CreateOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async createRoleRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.CreateRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async assignRoleToEntityRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.AssignRoleToEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async createEntityRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.CreateEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async renameOGRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.RenameOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async renameRoleRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.RenameRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async editEntityRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.EditEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async deleteOGRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.DeleteOGRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async deleteRoleRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.DeleteRoleRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async disconectRoleFromEntityRequest(req: IRequestReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.DisconectRoleFromEntityRequest(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
        }
      });
    });
  }

  async getRequestById(req: IGetRequestByIdReq): Promise<IRequest> {
    return new Promise((resolve, reject) => {
      this.client.GetRequestById(req, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res as IRequest);
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
