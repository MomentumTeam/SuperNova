import * as grpc from "@grpc/grpc-js";
import * as socketIO from "socket.io";
import { logger } from "../utils/logger/logger";
import { SocketManager } from "./socket.manager";

const socketManager: SocketManager = new SocketManager();

export function sendEventWithIo(io: socketIO.Server) {
  return async function sendEvent(call: any, callback: any): Promise<void> {
    try {
      logger.info("Call to SocketManager", {
        callRequest: call.request,
      });
      const successMessage = await socketManager.SendEvent(io, call.request);
      logger.info("sendEvent OK", {
        callRequest: call.request,
        successMessage,
      });
      callback(null, successMessage);
    } catch (error: any) {
      logger.error("sendEvent ERROR", {
        callRequest: call.request,
        error: { message: error.message },
      });
      callback(
        {
          code: 400,
          message: error.message,
          status: grpc.status.CANCELLED,
        },
        null
      );
    }
  };
}
