import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as config from '../config';
import { findPath } from '../utils/path';
import { IncludesSpecialGroupReq ,IncludesSpecialGroupRes} from '../interfaces/protoc/proto/approverService';

const PROTO_PATH = `${findPath('proto')}/approverService.proto`;

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
  grpc.loadPackageDefinition(packageDefinition).ApproverService;

const clients: any = [];
for (let i = 0; i < config.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.ApproverService(
      config.approverServiceUrl,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export default class ApproverService {
  static async includesSpecialGroup(
    includesSpecialGroupReq: IncludesSpecialGroupReq
  ): Promise<IncludesSpecialGroupRes> {
    return new Promise((resolve, reject) => {
      randomClient().IncludesSpecialGroup(
        includesSpecialGroupReq,
        (err: any, includes: IncludesSpecialGroupRes) => {
          if (err) {
            reject(err);
          } else {
            resolve(includes);
          }
        }
      );
    });
  }


  
}
