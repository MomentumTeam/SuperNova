import path from 'path';
import { config } from '../config';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/notificationService.proto')
  : path.join(__dirname, '../../proto/notificationService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).NotificationService;

export const notificationsClient: any = new protoDescriptor.NotificationService(
  config.endpoints.notification,
  grpc.credentials.createInsecure()
);
