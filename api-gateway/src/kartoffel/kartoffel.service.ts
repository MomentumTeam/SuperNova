import path from 'path';
import { config } from '../config';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/kartoffelService.proto')
  : path.join(__dirname, '../../proto/kartoffelService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).Kartoffel;

export const kartoffelClient: any = new protoDescriptor.Kartoffel(
  config.endpoints.kartoffel,
  grpc.credentials.createInsecure()
);
