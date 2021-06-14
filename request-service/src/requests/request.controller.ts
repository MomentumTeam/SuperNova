import { RequestManager } from "./request.manager";
import * as grpc from "@grpc/grpc-js";
import { ICreateOGRequest } from "../interfaces/createOGRequest/createOGRequest.interface";
import { ICreateOGRequestReq } from "../interfaces/createOGRequest/createOGRequestReq.interface";
import { ICreateRoleRequest } from "../interfaces/createRoleRequest/createRoleRequest.interface";
import { ICreateRoleRequestReq } from "../interfaces/createRoleRequest/createRoleRequestReq.interface";
import { IAssignRoleToEntityRequest } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequest.interface";
import { IAssignRoleToEntityRequestReq } from "../interfaces/assignRoleToEntityRequest/assignRoleToEntityRequestReq.interface";
import { ICreateEntityRequest } from "../interfaces/createEntityRequest/createEntityRequest.interface";
import { ICreateEntityRequestReq } from "../interfaces/createEntityRequest/createEntityRequestReq.interface";
import { PersonTypeInRequest } from "../enums/PersonTypeInRequest.enum";
import { IRenameOGRequest } from "../interfaces/renameOGRequest/renameOGRequest.interface";
import { IRenameOGRequestReq } from "../interfaces/renameOGRequest/renameOGRequestReq.interface";
import { IRenameRoleRequest } from "../interfaces/renameRoleRequest/renameRoleRequest.interface";
import { IRenameRoleRequestReq } from "../interfaces/renameRoleRequest/renameRoleRequestReq.interface";
import { IEditEntityRequest } from "../interfaces/editEntityRequest/editEntityRequest.interface";
import { IEditEntityRequestReq } from "../interfaces/editEntityRequest/editEntityRequestReq.interface";
import { IDeleteOGRequest } from "../interfaces/deleteOGRequest/deleteOGRequest.interface.ts";
import { IDeleteOGRequestReq } from "../interfaces/deleteOGRequest/deleteOGRequestReq.interface";
import { IDeleteRoleRequest } from "../interfaces/deleteRoleRequest/deleteRoleRequest.interface.ts";
import { IDeleteRoleRequestReq } from "../interfaces/deleteRoleRequest/deleteRoleRequestReq.interface";
import { IRequest } from "../interfaces/request.interface";
import { IDeleteRequestRes } from "../interfaces/deleteRequest/deleteRequestRes.interface";
import { Source } from "../enums/source.enum";
import { RequestType } from "../enums/requestType.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
const requestManager: RequestManager = new RequestManager();

export async function updateRequest(call: any, callback: any): Promise<void> {
  try {
    const updateRequestResponse: IRequest = await requestManager.updateRequest(
      call.request
    );
    callback(null, updateRequestResponse);
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

export async function deleteRequest(call: any, callback: any): Promise<void> {
  try {
    const deleteRequestResponse: IDeleteRequestRes =
      await requestManager.deleteRequest(call.request);
    callback(null, deleteRequestResponse);
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

export async function deleteRoleRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const deleteRoleResponse: IDeleteRoleRequest =
      await requestManager.deleteRoleRequest(
        call.request as IDeleteRoleRequestReq
      );
    callback(null, deleteRoleResponse);
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

export async function deleteOGRequest(call: any, callback: any): Promise<void> {
  try {
    const deleteOGResponse: IDeleteOGRequest =
      await requestManager.deleteOGRequest(call.request as IDeleteOGRequestReq);
    callback(null, deleteOGResponse);
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

export async function renameOGRequest(call: any, callback: any): Promise<void> {
  try {
    const renameOGRequest: IRenameOGRequest =
      await requestManager.renameOGRequest(call.request as IRenameOGRequestReq);
    callback(null, renameOGRequest);
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

export async function editEntityRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const editEntityRequest: IEditEntityRequest =
      await requestManager.editEntityRequest(
        call.request as IEditEntityRequestReq
      );
    callback(null, editEntityRequest);
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

export async function renameRoleRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const renameRoleRequest: IRenameRoleRequest =
      await requestManager.renameRoleRequest(
        call.request as IRenameRoleRequestReq
      );
    callback(null, renameRoleRequest);
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

export async function createEntityRequest(
  call: any,
  callback: any
): Promise<void> {
  try {
    const createEntityResponse: ICreateEntityRequest =
      await requestManager.createEntityRequest(
        call.request as ICreateEntityRequestReq
      );
    callback(null, createEntityResponse);
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

export async function getAllRequests(call: any, callback: any): Promise<void> {
  try {
    const requestsResponse = await requestManager.getAllRequests(call.request);
    callback(null, requestsResponse);
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
    const requests = await requestManager.getRequestsByPersonId(
      call.request,
      PersonTypeInRequest.COMMANDER
    );
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

export async function getRequestsSubmittedBy(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requests = await requestManager.getRequestsByPersonId(
      call.request,
      PersonTypeInRequest.SUBMITTER_BY
    );
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
