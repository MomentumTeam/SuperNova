import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as C from "../config";

const PROTO_PATH = __dirname.includes("dist")
  ? path.join(__dirname, "../../../proto/spikeService.proto")
  : path.join(__dirname, "../../proto/spikeService.proto");

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
  grpc.loadPackageDefinition(packageDefinition).Spike;

const client: any = new protoDescriptor.Spike(
  C.spikeServiceUrl,
  grpc.credentials.createInsecure()
);

export class SpikeService {
  client: any;
  constructor() {
    this.client = this.initClient();
  }

  async getSpikeToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.GetSpikeToken({}, (err: any, res: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  private initClient(): any {
    try {
      const packageDefinition: protoLoader.PackageDefinition =
        protoLoader.loadSync(PROTO_PATH, {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        });
      const protoDescriptor: any =
        grpc.loadPackageDefinition(packageDefinition).Spike;

      const client: any = new protoDescriptor.Spike(
        C.spikeServiceUrl,
        grpc.credentials.createInsecure()
      );
      return client;
    } catch (error) {
      throw error;
    }
  }
}
