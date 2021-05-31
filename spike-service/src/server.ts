import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { getSpikeToken } from "./spike/spike.controller";
import fs from "fs";
import axios from "axios";
import * as C from "./config";

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
      try {
        const response = await axios.get(C.spikePubKeyPath);
        if (response.status === 200) {
          fs.appendFileSync(C.localSpikePublicKeyFullPath, response.data);
          console.log(
            `spike pubkey successfully obtained , and saved to path ${C.localSpikePublicKeyFullPath}`
          );
        } else {
          console.log(`an error occured! ${response.status}`);
        }
      } catch (err) {
        console.log("getSpikePubKey caught error!");
        console.log(err);
      }
    }
    this.spikeKey = fs.readFileSync(C.localSpikePublicKeyFullPath);
    console.log(
      `spike pubkey found in local files in: ${C.localSpikePublicKeyFullPath}`
    );
    console.log(this.spikeKey);
  }

  private getProtoDescriptor() {
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
  }

  initServer() {
    const spikeServiceDescriptor: any = this.getProtoDescriptor();
    this.server.addService(spikeServiceDescriptor.Spike.service, {
      GetSpikeToken: getSpikeToken,
    });
  }

  startServer(): void {
    this.server.bindAsync(
      `${C.host}:${C.port}`,
      grpc.ServerCredentials.createInsecure(),
      () => {
        this.server.start();
      }
    );
  }
}
