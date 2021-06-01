import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { getSpikeToken } from "./spike/spike.controller";
import fs from "fs";
import axios from "axios";
import * as C from "./config";
import { logger } from "./logger";

const PROTO_PATH = __dirname.includes("dist")
  ? path.join(__dirname, "../../proto/spikeService.proto")
  : path.join(__dirname, "../proto/spikeService.proto");

export class Server {
  private spikeKey: Buffer;
  private server: grpc.Server;
  constructor() {
    this.spikeKey = Buffer.alloc(0);
    this.getSpikePubKey();
    this.server = new grpc.Server();
    this.initServer();
  }

  private async getSpikePubKey() {
    if (!fs.existsSync(C.localSpikePublicKeyFullPath)) {
      logger.log({
        level: "info",
        message: `Spike public key does not exist at ${C.localSpikePublicKeyFullPath}`,
        label: "getSpikePubKey",
      });
      try {
        const response = await axios.get(C.spikePubKeyPath);
        if (response.status === 200) {
          fs.appendFileSync(C.localSpikePublicKeyFullPath, response.data);
          logger.log({
            level: "info",
            message: `Spike public key successfully obtained, and saved into path ${C.localSpikePublicKeyFullPath}`,
            label: "getSpikePubKey",
          });
        } else {
          logger.log({
            level: "error",
            message: `Error while downloading Spike public key, statusCode: ${response.status}`,
            label: "getSpikePubKey",
          });
        }
      } catch (err) {
        logger.log({
          level: "error",
          message: `Error while downloading Spike public key, ${err.message}`,
          label: "getSpikePubKey",
        });
      }
    }
    this.spikeKey = fs.readFileSync(C.localSpikePublicKeyFullPath);
    logger.log({
      level: "info",
      message: `Spike public key was found at ${C.localSpikePublicKeyFullPath}`,
      label: "getSpikePubKey",
    });
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
    } catch (error) {
      throw error;
    }
  }

  initServer() {
    try {
      const spikeServiceDescriptor: any = this.getProtoDescriptor();
      logger.log({
        level: "info",
        message: `Proto was loaded successfully from file: ${PROTO_PATH}`,
        label: "initServer",
      });
      this.server.addService(spikeServiceDescriptor.Spike.service, {
        GetSpikeToken: getSpikeToken,
      });
      logger.log({
        level: "info",
        message: `Grpc services were successfully added to the server`,
        label: "initServer",
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Error while initializing the server: ${error.message}`,
        label: "initServer",
      });
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
