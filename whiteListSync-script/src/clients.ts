import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from './config';



//approverClient

const APS_PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/approverService.proto')
  : path.join(__dirname, '../../proto/approverService.proto');

const apsPackageDefinition: protoLoader.PackageDefinition =
  protoLoader.loadSync(APS_PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

const apsProtoDescriptor: any =
  grpc.loadPackageDefinition(apsPackageDefinition).ApproverService;

export const approverClient: any = new apsProtoDescriptor.ApproverService(
  config.approverServiceUrl,
  grpc.credentials.createInsecure()
);
