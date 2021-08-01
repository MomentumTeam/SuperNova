import { RequestManager } from './request.manager';
import * as grpc from '@grpc/grpc-js';
import { PersonTypeInRequest } from '../enums/personTypeInRequest.enum';
import {
  GetRequestsByIdentifierReq,
  Request,
  RequestReq,
  RequestType,
  SearchRequestsByDisplayNameReq,
  SuccessMessage,
} from '../interfaces/protoc/proto/requestService';

const requestManager: RequestManager = new RequestManager();

export function searchRequestsByDisplayNameFuncByPersonType(
  personType: PersonTypeInRequest
) {
  const func = async function searchRequestsByDisplayName(
    call: any,
    callback: any
  ): Promise<void> {
    try {
      const response = await requestManager.searchRequestsByDisplayName(
        call.request as SearchRequestsByDisplayNameReq,
        personType
      );
      callback(null, response);
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
  };
  return func;
}

export function getRequestsByIdentifierFuncByPersonType(
  personType: PersonTypeInRequest
) {
  const func = async function getRequestsByIdentifier(
    call: any,
    callback: any
  ): Promise<void> {
    try {
      const response = await requestManager.getRequestsByIdentifier(
        call.request as GetRequestsByIdentifierReq,
        personType
      );
      callback(null, response);
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
  };
  return func;
}

export function createRequestFuncByType(type: RequestType) {
  const func = async function createRequest(
    call: any,
    callback: any
  ): Promise<void> {
    try {
      const response = await requestManager.createRequest(
        call.request as RequestReq,
        type
      );
      callback(null, response);
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
  };
  return func;
}

export async function canPushToADQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requestsResponse = await requestManager.canPushToADQueue(
      call.request
    );
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

export async function canPushToKartoffelQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requestsResponse = await requestManager.canPushToKartoffelQueue(
      call.request
    );
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

export async function getRequestBySerialNumber(
  call: any,
  callback: any
): Promise<void> {
  try {
    const requestsResponse = await requestManager.getRequestBySerialNumber(
      call.request
    );
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

export async function updateKartoffelStatus(
  call: any,
  callback: any
): Promise<void> {
  try {
    const updateResponse: Request = await requestManager.updateKartoffelStatus(
      call.request
    );
    callback(null, updateResponse);
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

export async function updateADStatus(call: any, callback: any): Promise<void> {
  try {
    const updateResponse: Request = await requestManager.updateADStatus(
      call.request
    );
    callback(null, updateResponse);
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

export async function updateRequest(call: any, callback: any): Promise<void> {
  try {
    const updateRequestResponse: Request = await requestManager.updateRequest(
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
    const deleteRequestResponse: SuccessMessage =
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
      PersonTypeInRequest.SUBMITTED_BY
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
