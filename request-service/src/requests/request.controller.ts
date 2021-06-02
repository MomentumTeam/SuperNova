import { RequestManager } from "./request.manager";
import * as grpc from "@grpc/grpc-js";
import { ICreateHierarchyRequest } from "../interfaces/createHierarchyRequest/createHierarchyRequest.interface";
import { ICreateHierarchyRequestReq } from "../interfaces/createHierarchyRequest/createHierarchyRequestReq.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
const requestManager: RequestManager = new RequestManager();

export async function createHierarchyRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const createHierarchyResponse: ICreateHierarchyRequest =
      await requestManager.createHierarchyRequest(
        call.request as ICreateHierarchyRequestReq
      );
    callback(null, createHierarchyResponse);
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
    const createHierarchyResponse = await requestManager.getRequestById(
      call.request
    );
    callback(null, createHierarchyResponse);
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
