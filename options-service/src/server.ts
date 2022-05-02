import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { logger } from './logger';
import * as C from './config';
import { findPath } from './utils/path';
import { addHealthService } from './health';
import { addFavoriteCommander, getOptionsByEntityId, removeFavoriteCommander, updateUserOptions } from './options/options.controller';

const PROTO_PATH = `${findPath('proto')}/optionsService.proto`;

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
          oneofs: true,
        });
      const protoDescriptor: grpc.GrpcObject =
        grpc.loadPackageDefinition(packageDefinition);
      const optionsServiceDescriptor: any = protoDescriptor.OptionsService;
      return optionsServiceDescriptor;
    } catch (error: any) {
      logger.error(`Error while loading the proto file`, {
        error: { message: error.message },
      });
      throw error;
    }
  }

  initServer() {
    try {
      const optionsServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(optionsServiceDescriptor.OptionsService.service, {
        GetOptionsByEntityId: getOptionsByEntityId,
        UpdateUserOptions: updateUserOptions,
        AddFavoriteCommander: addFavoriteCommander,
        RemoveFavoriteCommander: removeFavoriteCommander 
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error: any) {
      logger.error(`Error while initializing the server: ${error.message}`);
    }
  }

  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(
        `${C.host}:${C.port}`,
        grpc.ServerCredentials.createInsecure(),
        (bindError) => {
          if (bindError) {
            reject(bindError);
          } else {
            try {
              this.server.start();
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
