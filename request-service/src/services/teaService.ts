import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import {
  CreateCustomNotificationReq,
  CreateNotificationsReq,
  Notification,
  NotificationArray,
} from '../interfaces/protoc/proto/notificationService';
import { findPath } from '../utils/path';
import {
  RetrieveByEntityIdReq,
  RetrieveByEntityReq,
  RetrieveTeaByUnitReq,
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
  grpc.credentials.createInsecure()
);

export default class TeaService {
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
