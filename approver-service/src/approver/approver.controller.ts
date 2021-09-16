import * as grpc from 'grpc';
import {
  Approver,
  ApproverArray,
  ApproverIdArray,
  GetUserTypeRes,
  SuccessMessage,
} from '../interfaces/protoc/proto/approverService';
import { Request } from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import { ApproverManager } from './approver.manager';

const approverManager: ApproverManager = new ApproverManager();

export async function addApprover(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to addApprover`, {
      callRequest: call.request,
    });
    const approver: Approver = await approverManager.addApprover(call.request);
    logger.info(`addApprover OK`, {
      response: approver,
      callRequest: call.request,
    });
    callback(null, approver);
  } catch (error: any) {
    logger.error(`addApprover ERROR`, {
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

export async function getUserType(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getUserType`, {
      callRequest: call.request,
    });
    const userTypeRes: GetUserTypeRes = await approverManager.getUserType(
      call.request
    );
    logger.info(`getUserType OK`, {
      response: userTypeRes,
      callRequest: call.request,
    });
    callback(null, userTypeRes);
  } catch (error: any) {
    logger.error(`getUserType ERROR`, {
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

export async function searchApproverByDisplayName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchApproverByDisplayName`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray =
      await approverManager.searchApproverByDisplayName(call.request);
    logger.info(`searchApproverByDisplayName OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error: any) {
    logger.error(`searchApproverByDisplayName ERROR`, {
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

export async function searchApproverByDomainUser(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchApproverByDomainUser`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray =
      await approverManager.searchApproverByDomainUser(call.request);
    logger.info(`searchApproverByDomainUser OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error: any) {
    logger.error(`searchApproverByDomainUser ERROR`, {
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

export async function updateApproverDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to updateApproverDecision`, {
      callRequest: call.request,
    });
    const request: Request = await approverManager.updateApproverDecision(
      call.request
    );
    logger.info(`updateApproverDecision OK`, {
      response: request,
      callRequest: call.request,
    });
    callback(null, request);
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

export async function getAllApprovers(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getAllApprovers`, {
      callRequest: call.request,
    });
    const approvers: ApproverArray = await approverManager.getAllApprovers(
      call.request
    );
    logger.info(`getAllApprovers OK`, {
      response: approvers,
      callRequest: call.request,
    });
    callback(null, approvers);
  } catch (error: any) {
    logger.error(`getAllApprovers ERROR`, {
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

export async function deleteApprover(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteApprover`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage = await approverManager.deleteApprover(
      call.request
    );
    logger.info(`deleteApprover OK`, {
      response: successMessage,
      callRequest: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`deleteApprover ERROR`, {
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

export async function getAllApproverIds(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getAllApproverIds`, {
      callRequest: call.request,
    });
    const approverIdArray: ApproverIdArray =
      await approverManager.getAllApproverIds(call.request);
    logger.info(`getAllApproverIds OK`, {
      response: approverIdArray,
      callRequest: call.request,
    });
    callback(null, approverIdArray);
  } catch (error: any) {
    logger.error(`getAllApproverIds ERROR`, {
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

export async function syncApprover(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to syncApprover`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray = await approverManager.syncApprover(
      call.request
    );
    logger.info(`syncApprover OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error: any) {
    logger.error(`syncApprover ERROR`, {
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
