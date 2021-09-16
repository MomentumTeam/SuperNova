import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as config from './config';
import { findPath } from './utils/path';

//approverClient

const APS_PROTO_PATH = `${findPath('proto')}/approverService.proto`;

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
