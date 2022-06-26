import * as socketIO from "socket.io";
import { SendEventReq, SuccessMessage } from "../interfaces/protoc/proto/socketService";
import { SocketRepository } from "./socket.repository";

export class SocketManager {
  private socketRepository: SocketRepository;
  constructor() {
    this.socketRepository = new SocketRepository();
  }

  async SendEvent(io: socketIO.Server, sendEventReq: SendEventReq): Promise<SuccessMessage> {
    try {
      return await this.socketRepository.sendEvent(io, sendEventReq);
    } catch (error) {
      throw error;
    }
  }
}
