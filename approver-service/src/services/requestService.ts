import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { Request, UpdateReq } from '../interfaces/protoc/proto/requestService';
import { findPath } from '../utils/path';

const PROTO_PATH = `${findPath('proto')}/requestService.proto`;

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

const requestClient: any = new protoDescriptor.RequestService(
  config.requestServiceUrl,
  grpc.credentials.createInsecure()
);

export default class RequestService {
  static async updateRequest(updateReq: UpdateReq): Promise<Request> {
    console.log('updateRequest');
    return new Promise((resolve, reject) => {
      requestClient.UpdateRequest(updateReq, (err: any, request: Request) => {
        if (err) {
          reject(err);
        } else {
          resolve(request);
        }
      });
    });
  }
}
