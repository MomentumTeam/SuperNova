import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { findPath } from '../utils/path';
import {
  SendCustomMailReq,
  SendMailReq,
  SuccessMessage,
} from '../interfaces/protoc/proto/mailService';

const PROTO_PATH = `${findPath('proto')}/mailService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).MailService;

const notificationClient: any = new protoDescriptor.MailService(
  config.mailServiceUrl,
  grpc.credentials.createInsecure(),
  { 'grpc.keepalive_timeout_ms': 5000 }
);

export default class MailService {
  static async sendCustomMail(
    sendCustomMailReq: SendCustomMailReq
  ): Promise<SuccessMessage> {
    console.log('sendCustomMail');
    return new Promise((resolve, reject) => {
      notificationClient.SendCustomMail(
        sendCustomMailReq,
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

  static async sendMail(sendMailReq: SendMailReq): Promise<SuccessMessage> {
    console.log('sendMail');
    return new Promise((resolve, reject) => {
      notificationClient.SendMail(
        sendMailReq,
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
}
