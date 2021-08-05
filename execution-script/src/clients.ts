import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from './config';

//requestClient

const RS_PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/requestService.proto')
  : path.join(__dirname, '../../proto/requestService.proto');

const rsPackageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  RS_PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const rsProtoDescriptor: any =
  grpc.loadPackageDefinition(rsPackageDefinition).RequestService;

export const requestClient: any = new rsProtoDescriptor.RequestService(
  config.requestServiceUrl,
  grpc.credentials.createInsecure()
);

//producerClient

const PS_PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/producerService.proto')
  : path.join(__dirname, '../../proto/producerService.proto');

const psPackageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PS_PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const psProtoDescriptor: any =
  grpc.loadPackageDefinition(psPackageDefinition).Producer;

export const producerClient: any = new psProtoDescriptor.Producer(
  config.producerUrl,
  grpc.credentials.createInsecure()
);
