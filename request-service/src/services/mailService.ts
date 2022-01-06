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

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.MailService(
      config.mailServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class MailService {
  static async sendCustomMail(
    sendCustomMailReq: SendCustomMailReq
  ): Promise<SuccessMessage> {
    console.log('sendCustomMail');
    return new Promise((resolve, reject) => {
      randomClient().SendCustomMail(
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
      randomClient().SendMail(
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
