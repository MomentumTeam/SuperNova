import { RequestManager } from "./request.manager";
import * as grpc from "@grpc/grpc-js";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { IAssignRoleToEntityRequest } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequest.interface";
import { IAssignRoleToEntityRequestReq } from "../interfaces/assignRoleToEntityRequest/createOGRequestReq.interface";
const requestManager: RequestManager = new RequestManager();

export async function createOGRequest(call: any, callback: any): Promise<void> {
  try {
    const createOGResponse: ICreateOGRequest =
      await requestManager.createOGRequest(call.request as ICreateOGRequestReq);
    callback(null, createOGResponse);
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

export async function assignRoleToEntityRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const assignRoleToEntityResponse: IAssignRoleToEntityRequest =
      await requestManager.assignRoleToEntityRequest(
        call.request as IAssignRoleToEntityRequestReq
      );
    callback(null, assignRoleToEntityResponse);
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

export async function createRoleRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const createRoleResponse: ICreateRoleRequest =
      await requestManager.createRoleRequest(
        call.request as ICreateRoleRequestReq
      );
    callback(null, createRoleResponse);
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

export async function getRequestById(call: any, callback: any): Promise<void> {
  try {
    const requestResponse = await requestManager.getRequestById(call.request);
    callback(null, requestResponse);
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

export async function getRequestsByCommander(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requests = await requestManager.getRequestsByCommander(call.request);
    callback(null, requests);
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
