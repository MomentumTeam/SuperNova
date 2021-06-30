import { Request, Response } from 'express';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import * as config from "../config";
import { Request as RequestS, RequestArray} from "../interfaces/protoc/proto/requestService";

const PROTO_PATH = __dirname.includes("dist")
  ? path.join(__dirname, "../../proto/requestService.proto")
    : path.join(__dirname, "../proto/requestService.proto");
  


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
    grpc.loadPackageDefinition(packageDefinition).RequestService;
  

const requestsClient: any = new protoDescriptor.RequestService(

    config.requestServiceUrl,
    grpc.credentials.createInsecure()
);

enum StageStatus{
    UNKNOWN = "UNKNOWN",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
    FAILED = "FAILED",
}

export default class RequestsController {
    static async ui(req: Request, res: Response) {
        res.send("ghgfhgfhgfhgfhghghghghg")

        
    }

    static async getRequestById(req: Request, res: Response) {
        console.log('GetRequestById')

        requestsClient.GetRequestById({ id: "60d0473693f396e9719e8297"}, (err: any, response: RequestS) => {
            if (err) {
                console.log('err')
                res.send(err);
            }
            res.send(response);
        });
    }

    static async getAllRequests(req: Request, res: Response) {
        console.log('GetAllRequests')

        requestsClient.GetAllRequests({ from: req.params.from, to: req.params.to }, (err: any, response: RequestArray) => {
            if (err) {
                res.send(err);
            }
            res.send(response);
        });
    }

    static async getRequestsSubmittedBy(req: Request, res: Response) {
        console.log('GetRequestsSubmittedBy');

        requestsClient.GetRequestsSubmittedBy({ id: req.params.id, from: req.params.from, to: req.params.to }, (err: any, response: RequestArray) => {
            if (err) {
                console.log('err', err)
                res.send(err);
            }
            console.log('response', response)
            res.send(response);
        });
    }

    static async getRequestsByCommander(req: Request, res: Response) {
        console.log('GetRequestsByCommander')

        requestsClient.GetRequestsByCommander({ id: req.params.id, from: req.params.from, to: req.params.to }, (err: any, response: RequestArray) => {
            if (err) {
                res.send(err);
            }
            res.send(response);
          });
    }

    static async updateADStatus(req: Request, res: Response) {
        console.log('UpdateADStatus')

        const status: string = req.body.status;
        const stageStatus: StageStatus = (<any>StageStatus)[status];

        requestsClient.UpdateADStatus({ requestId: req.body.requestId, status: stageStatus, message: req.body.message }, (err: any, response: RequestS) => {
            if (err) {
                res.send(err);
            }
            res.send(response);
          });
    }
}
