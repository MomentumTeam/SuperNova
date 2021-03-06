import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as C from './config';
import { logger } from './logger';
import { sendMail, sendCustomMail } from './mail/mail.controller';

import { addHealthService } from './health';
import { findPath } from './utils/path';

const PROTO_PATH = `${findPath('proto')}/mailService.proto`;
export class Server {
  private server: grpc.Server;
  constructor() {
    this.server = new grpc.Server();
    addHealthService(this.server);
    this.initServer();
  }

  private getProtoDescriptor() {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const mailServiceDescriptor: any = protoDescriptor.MailService;
      logger.info(`Proto file ${PROTO_PATH} was loaded successfully`);
      return mailServiceDescriptor;
    } catch (error) {
      logger.error(`Error while loading the proto file`, { error: error });
      throw error;
    }
  }

  initServer() {
    try {
      const mailServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(mailServiceDescriptor.MailService.service, {
        SendMail: sendMail,
        SendCustomMail: sendCustomMail,
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error) {
      logger.error(`Error while initializing the server`, { error: error });
      throw error;
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            logger.error(`Error while binding to ${C.host}:${C.port}`, {
              error: bindError,
            });
            reject(bindError);
          } else {
            try {
              this.server.start();
              logger.info(`Server was started successfully`);
              resolve();
            } catch (startError) {
              reject(startError);
            }
          }
        }
      );
    });
  }
}
