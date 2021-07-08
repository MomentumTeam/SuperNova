import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import * as config from '../config';
import { SuccessMessage } from '../interfaces/protoc/proto/producerService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/producerService.proto')
  : path.join(__dirname, '../../proto/producerService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).Producer;

const producerClient: any = new protoDescriptor.Producer(
  config.producerUrl,
  grpc.credentials.createInsecure()
);

export default class ProducerController {
  static async produceToKartoffelQueue(req: Request, res: Response) {
    console.log('ProduceToKartoffelQueue');

    producerClient.ProduceToKartoffelQueue(
      { id: req.body.id },
      (err: any, response: SuccessMessage) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }

  static async produceToADQueue(req: Request, res: Response) {
    console.log('ProduceToADQueue');

    producerClient.ProduceToADQueue(
      { id: req.body.id },
      (err: any, response: SuccessMessage) => {
        if (err) {
          res.send(null);
        }
        res.send(response);
      }
    );
  }
}
