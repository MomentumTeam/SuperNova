import { RequestManager } from './request.manager';
import * as grpc from 'grpc';
import {
  IsRequestApprovedRes,
  Request,
  RequestReq,
  RequestType,
  requestTypeToJSON,
  SuccessMessage,
  UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';

const requestManager: RequestManager = new RequestManager();

export async function transferRequestToApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to transferRequestToApprovers`, {
      callRequest: call.request,
    });
    const response = await requestManager.transferRequestToApprovers(
      call.request
    );
    logger.info(`transferRequestToApprovers OK`, {
      callRequest: call.request,
      response: response,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`transferRequestToApprovers ERROR`, {
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
}

export async function getRequestsUnderBulk(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRequestsUnderBulk`, {
      callRequest: call.request,
    });
    const response = await requestManager.getRequestsUnderBulk(call.request);
    logger.info(`getRequestsUnderBulk OK`, {
      callRequest: call.request,
      response: response,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`getRequestsUnderBulk ERROR`, {
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
}

export function createRequestFuncByType(type: RequestType) {
  const func = async function createRequest(
    call: any,
    callback: any
  ): Promise<void> {
    try {
      logger.info(`Call to createRequest`, {
        type: requestTypeToJSON(type),
        callRequest: call.request,
      });
      const response = await requestManager.createRequest(
        call.request as RequestReq,
        type
      );
      logger.info(`createRequest OK`, {
        callRequest: call.request,
        type: type,
        response: response,
      });
      callback(null, response);
    } catch (error: any) {
      logger.error(`createRequest ERROR`, {
        callRequest: call.request,
        type: requestTypeToJSON(type),
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
  return func;
}

export async function isRequestApproved(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to isRequestApproved`, {
      callRequest: call.request,
    });
    const isRequestApprovedRes: IsRequestApprovedRes =
      await requestManager.isRequestApproved(call.request);
    logger.info(`isRequestApproved OK`, {
      callRequest: call.request,
      response: isRequestApprovedRes,
    });
    callback(null, isRequestApprovedRes);
  } catch (error: any) {
    logger.error(`isRequestApproved ERROR`, {
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
}

export async function updateRequest(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateRequest`, {
      callRequest: call.request,
    });
    const updateRequestResponse: Request = await requestManager.updateRequest(
      call.request
    );
    logger.info(`updateRequest OK`, {
      callRequest: call.request,
      response: updateRequestResponse,
    });
    callback(null, updateRequestResponse);
  } catch (error: any) {
    logger.error(`updateRequest ERROR`, {
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
}

export async function updateApproverDecision(call: any, callback: any) {
  try {
    logger.info(`Call to updateApproverDecision`, {
      callRequest: call.request,
    });
    const response = await requestManager.updateApproverDecision(
      call.request as UpdateApproverDecisionReq
    );
    logger.info(`updateApproverDecision OK`, {
      callRequest: call.request,
      response: response,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`updateApproverDecision ERROR`, {
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
}

export async function canPushToADQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to canPushToADQueue`, {
      callRequest: call.request,
    });
    const requestsResponse = await requestManager.canPushToADQueue(
      call.request
    );
    logger.info(`canPushToADQueue OK`, {
      callRequest: call.request,
      response: requestsResponse,
    });
    callback(null, requestsResponse);
  } catch (error: any) {
    logger.error(`canPushToADQueue ERROR`, {
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
}

export async function canPushToKartoffelQueue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to canPushToKartoffelQueue`, {
      callRequest: call.request,
    });
    const requestsResponse = await requestManager.canPushToKartoffelQueue(
      call.request
    );
    logger.info(`canPushToKartoffelQueue OK`, {
      callRequest: call.request,
      response: requestsResponse,
    });
    callback(null, requestsResponse);
  } catch (error: any) {
    logger.error(`canPushToKartoffelQueue ERROR`, {
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
}

export async function getRequestBySerialNumber(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRequestBySerialNumber`, {
      callRequest: call.request,
    });
    const requestsResponse = await requestManager.getRequestBySerialNumber(
      call.request
    );
    logger.info(`getRequestBySerialNumber OK`, {
      callRequest: call.request,
      response: requestsResponse,
    });
    callback(null, requestsResponse);
  } catch (error: any) {
    logger.error(`getRequestBySerialNumber ERROR`, {
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
}

export async function updateKartoffelStatus(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to updateKartoffelStatus`, {
      callRequest: call.request,
    });
    const updateResponse: Request = await requestManager.updateKartoffelStatus(
      call.request
    );
    logger.info(`updateKartoffelStatus OK`, {
      callRequest: call.request,
      response: updateResponse,
    });
    callback(null, updateResponse);
  } catch (error: any) {
    logger.error(`updateKartoffelStatus ERROR`, {
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
}

export async function updateADStatus(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateADStatus`, {
      callRequest: call.request,
    });
    const updateResponse: Request = await requestManager.updateADStatus(
      call.request
    );
    logger.info(`updateADStatus OK`, {
      callRequest: call.request,
      response: updateResponse,
    });
    callback(null, updateResponse);
  } catch (error: any) {
    logger.error(`updateADStatus ERROR`, {
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
}

export async function deleteRequest(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteRequest`, {
      callRequest: call.request,
    });
    const deleteRequestResponse: SuccessMessage =
      await requestManager.deleteRequest(call.request);
    logger.info(`deleteRequest OK`, {
      callRequest: call.request,
      response: deleteRequestResponse,
    });
    callback(null, deleteRequestResponse);
  } catch (error: any) {
    logger.error(`deleteRequest ERROR`, {
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
}

export async function getRequestById(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getRequestById`, {
      callRequest: call.request,
    });
    const requestResponse = await requestManager.getRequestById(call.request);
    logger.info(`getRequestById OK`, {
      callRequest: call.request,
      response: requestResponse,
    });
    callback(null, requestResponse);
  } catch (error: any) {
    logger.error(`getRequestById ERROR`, {
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
}

export async function incrementKartoffelRetries(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to incrementKartoffelRetries`, {
      callRequest: call.request,
    });
    const request = await requestManager.incrementKartoffelRetries(
      call.request
    );
    logger.info(`incrementKartoffelRetries OK`, {
      callRequest: call.request,
      response: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.error(`incrementKartoffelRetries ERROR`, {
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
}

export async function updateCommanders(
  call: any,
  callback: any
): Promise<void> {
  try {
    const request = await requestManager.updateCommanders(call.request);
    callback(null, request);
  } catch (error: any) {
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

export async function updateSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    const request = await requestManager.updateSecurityApprovers(call.request);
    callback(null, request);
  } catch (error: any) {
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

export async function updateSuperSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    const request = await requestManager.updateSuperSecurityApprovers(
      call.request
    );
    callback(null, request);
  } catch (error: any) {
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

export async function getRequestsInProgressByDue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRequestsInProgressByDue`, {
      callRequest: call.request,
    });
    const requests = await requestManager.getRequestsInProgressByDue(
      call.request
    );
    logger.info(`getRequestsInProgressByDue OK`, {
      callRequest: call.request,
      response: requests,
    });
    callback(null, requests);
  } catch (error: any) {
    logger.error(`getRequestsInProgressByDue ERROR`, {
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
}

export async function getRequestIdsInProgressByDue(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRequestIdsInProgressByDue`, {
      callRequest: call.request,
    });
    const requestIds = await requestManager.getRequestIdsInProgressByDue(
      call.request
    );
    logger.info(`getRequestIdsInProgressByDue OK`, {
      callRequest: call.request,
      response: requestIds,
    });
    callback(null, requestIds);
  } catch (error: any) {
    logger.error(`getRequestIdsInProgressByDue ERROR`, {
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
}

export async function incrementADRetries(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to incrementADRetries`, {
      callRequest: call.request,
    });
    const request = await requestManager.incrementADRetries(call.request);
    logger.info(`incrementADRetries OK`, {
      callRequest: call.request,
      response: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.error(`incrementADRetries ERROR`, {
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
}

export async function getRequestsByPerson(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getRequestsByPerson`, {
      callRequest: call.request,
    });
    const requests = await requestManager.getRequestsByPerson(call.request);
    logger.info(`getRequestsByPerson OK`, {
      callRequest: call.request,
      response: requests,
    });
    callback(null, requests);
  } catch (error: any) {
    logger.error(`getRequestsByPerson ERROR`, {
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
}

export async function pushError(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to pushError`, {
      callRequest: call.request,
    });
    const request = await requestManager.pushError(call.request);
    logger.info(`pushError OK`, {
      callRequest: call.request,
      response: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.error(`pushError ERROR`, {
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
}

export async function syncBulkRequest(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to syncBulkRequest`, {
      callRequest: call.request,
    });
    const request = await requestManager.syncBulkRequest(call.request);
    logger.info(`syncBulkRequest OK`, {
      callRequest: call.request,
      response: request,
    });
    callback(null, request);
  } catch (error: any) {
    logger.error(`syncBulkRequest ERROR`, {
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
}
