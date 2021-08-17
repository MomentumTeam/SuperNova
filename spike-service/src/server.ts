import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { getSpikeToken } from './spike/spike.controller';
import fs from 'fs';
import axios from 'axios';
import * as C from './config';
import { logger } from './logger';
import { findPath } from './utils/path';
import { addHealthService } from './health';

const PROTO_PATH = `${findPath('proto')}/spikeService.proto`;

export class Server {
  private spikeKey: Buffer;
  private server: grpc.Server;
  constructor() {
    this.spikeKey = Buffer.alloc(0);
    this.getSpikePubKey();
    this.server = new grpc.Server();
    addHealthService(this.server);
    this.initServer();
  }

  private async getSpikePubKey() {
    if (!fs.existsSync(C.localSpikePublicKeyFullPath)) {
      logger.info(
        `Spike public key does not exist at ${C.localSpikePublicKeyFullPath}`
      );
      try {
        const response = await axios.get(C.spikePubKeyPath);
        if (response.status === 200) {
          fs.appendFileSync(C.localSpikePublicKeyFullPath, response.data);
          logger.info(
            `Spike public key successfully obtained, and saved into path ${C.localSpikePublicKeyFullPath}`,
            { pubKey: response.data }
          );
        } else {
          logger.info(
            `Error while downloading Spike public key, statusCode: ${response.status}`
          );
        }
      } catch (err) {
        logger.error(`Error while downloading Spike public key`, { err: err });
      }
    }
    this.spikeKey = fs.readFileSync(C.localSpikePublicKeyFullPath);
    logger.info(
      `Spike public key was found at ${C.localSpikePublicKeyFullPath}`
    );
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
      const spikeServiceDescriptor: any = protoDescriptor.Spike;
      return spikeServiceDescriptor;
    } catch (err) {
      logger.error(`Error while loading the proto file`, { err: err });
      throw err;
    }
  }

  initServer() {
    try {
      const spikeServiceDescriptor: any = this.getProtoDescriptor();
      logger.info(`Proto was loaded successfully from file: ${PROTO_PATH}`);
      this.server.addService(spikeServiceDescriptor.Spike.service, {
        GetSpikeToken: getSpikeToken,
      });
      logger.info(`Grpc services were successfully added to the server`);
    } catch (error) {
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
