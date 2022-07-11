import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { logger } from '../utils/logger/logger';
import { SendHierarchyDataReq, SuccessMessage } from '../interfaces/protoc/proto/mailService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/mailService.proto')
  : path.join(__dirname, '../../proto/mailService.proto');

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

const mailClients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  mailClients.push(
    new protoDescriptor.MailService(
      config.endpoints.mail,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return mailClients[Math.floor(Math.random() * mailClients.length)];
}



export class MailService {
  static async sendHierarchyDataMail(
    sendHierarchyDataReq: SendHierarchyDataReq
  ) {
    logger.info(`Call to sendHierarchyDataMail in GTW`, sendHierarchyDataReq);

    return new Promise((resolve, reject) => {
      randomClient().SendHierarchyDataMail(
        sendHierarchyDataReq,
        (err: any, response: SuccessMessage) => {
          if (err) {
            logger.error(`sendHierarchyDataMail ERROR in GTW`, {
              err,
              callRequest: sendHierarchyDataReq,
            });
            reject(err);
          }

          logger.info(`sendHierarchyDataMail OK in GTW`, {
            callRequest: sendHierarchyDataReq,
          });
          resolve(response);
        }
      );
    });
  }
}
