import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  Request,
  UpdateKartoffelStatusReq,
  IncrementRetriesReq,
} from '../interfaces/protoc/proto/requestService';
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
  static async UpdateKartoffelStatus(updateKartoffelStatusReq: UpdateKartoffelStatusReq): Promise<Request> {
    console.log('UpdateKartoffelStatus');
    return new Promise((resolve, reject) => {
      requestClient.UpdateKartoffelStatus(updateKartoffelStatusReq, (err: any, request: Request) => {
        if (err) {
          reject(err);
        } else {
          resolve(request);
        }
      });
    });
  }

  static async IncrementKartoffelRetries(incrementKartoffelRetries: IncrementRetriesReq): Promise<Request> {
    console.log('IncrementKartoffelRetries');
    return new Promise((resolve, reject) => {
      requestClient.IncrementKartoffelRetries(IncrementRetriesReq, (err: any, request: Request) => {
        if (err) {
          reject(err);
        } else {
          resolve(request);
        }
      });
    });
  }
}
