import { RequestManager } from './request.manager';
import * as grpc from '@grpc/grpc-js';
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

export async function sendSubmissionMail(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to sendSubmissionMail`, {
      callRequest: call.request,
    });
    const response = await requestManager.sendSubmissionMail(call.request);
    logger.info(`sendSubmissionMail OK`, {
      callRequest: call.request,
    });
    callback(null, response);
  } catch (error: any) {
    logger.error(`sendSubmissionMail ERROR`, {
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


