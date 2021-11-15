import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { findPath } from '../utils/path';
import {
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveByEntityReq,
  RetrieveTeaByOGIdReq,
  SuccessMessage,
  TeaMessage,
  UPNMessage,
} from '../interfaces/protoc/proto/teaService';

const PROTO_PATH = `${findPath('proto')}/teaService.proto`;

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

const protoDescriptor: any = grpc.loadPackageDefinition(packageDefinition).Tea;

const teaClient: any = new protoDescriptor.Tea(
  config.teaServiceUrl,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class TeaService {
  static async reportTeaFail(
    reportTeaReq: ReportTeaReq
  ): Promise<SuccessMessage> {
    console.log('reportTeaFail');
    return new Promise((resolve, reject) => {
      teaClient.ReportTeaFail(
        reportTeaReq,
        (err: any, successMessage: SuccessMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(successMessage);
          }
        }
      );
    });
  }

  static async retrieveTeaByOGId(
    retrieveTeaByOGIdReq: RetrieveTeaByOGIdReq
  ): Promise<TeaMessage> {
    console.log('retrieveTeaByOGId');
    return new Promise((resolve, reject) => {
      teaClient.RetrieveTeaByOGId(
        retrieveTeaByOGIdReq,
        (err: any, teaMessage: TeaMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(teaMessage);
          }
        }
      );
    });
  }

  static async retrieveUPNByEntity(
    retrieveUPNByEntityReq: RetrieveByEntityReq
  ): Promise<UPNMessage> {
    console.log('retrieveUPNByEntity');
    return new Promise((resolve, reject) => {
      teaClient.RetrieveUPNByEntity(
        retrieveUPNByEntityReq,
        (err: any, upnMessage: UPNMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(upnMessage);
          }
        }
      );
    });
  }

  static async retrieveUPNByEntityId(
    retrieveUPNByEntityIdReq: RetrieveByEntityIdReq
  ): Promise<UPNMessage> {
    console.log('retrieveUPNByEntityId');
    return new Promise((resolve, reject) => {
      teaClient.RetrieveUPNByEntityId(
        retrieveUPNByEntityIdReq,
        (err: any, upnMessage: UPNMessage) => {
          if (err) {
            reject(err);
          } else {
            resolve(upnMessage);
          }
        }
      );
    });
  }
}
