import { RequestManager } from "./producer.manager";
import * as grpc from "@grpc/grpc-js";
import { SuccessMessage } from "../interfaces/protoc/proto/producerService";
const requestManager: RequestManager = new RequestManager();

export async function produceToKartoffelQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    const successMessage: SuccessMessage =
      await requestManager.produceToKartoffelQueue(call.request);
    callback(null, successMessage);
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function produceToADQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    const successMessage: SuccessMessage =
      await requestManager.produceToADQueue(call.request);
    callback(null, successMessage);
  } catch (error) {
    callback(
      {
        code: 400,
        message: error.message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
