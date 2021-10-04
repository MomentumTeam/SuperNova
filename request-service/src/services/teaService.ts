import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { findPath } from '../utils/path';
import {
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveByEntityReq,
  RetrieveTeaByUnitReq,
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

const notificationClient: any = new protoDescriptor.Tea(
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
      notificationClient.ReportTeaFail(
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

  static async retrieveTeaByUnit(
    retrieveTeaByUnitReq: RetrieveTeaByUnitReq
  ): Promise<TeaMessage> {
    console.log('retrieveTeaByUnit');
    return new Promise((resolve, reject) => {
      notificationClient.RetrieveTeaByUnit(
        retrieveTeaByUnitReq,
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
      notificationClient.RetrieveUPNByEntity(
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
      notificationClient.RetrieveUPNByEntityId(
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
