import * as grpc from '@grpc/grpc-js';
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

export async function getAllSuperSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getAllSuperSecurityApprovers`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray =
      await approverManager.getAllSuperSecurityApprovers(call.request);
    logger.info(`getAllSuperSecurityApprovers OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error) {
    logger.error(`getAllSuperSecurityApprovers ERROR`, {
      error,
      callRequest: call.request,
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

export async function addSuperSecurityApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to addSuperSecurityApprover`, {
      callRequest: call.request,
    });
    const approver: Approver = await approverManager.addSuperSecurityApprover(
      call.request
    );
    logger.info(`addSuperSecurityApprover OK`, {
      callRequest: call.request,
      response: approver,
    });
    callback(null, approver);
  } catch (error) {
    logger.error(`addSuperSecurityApprover ERROR`, {
      callRequest: call.request,
      error,
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

export async function addCommanderApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to addCommanderApprover`, {
      callRequest: call.request,
    });
    const approver: Approver = await approverManager.addCommanderApprover(
      call.request
    );
    logger.info(`addCommanderApprover OK`, {
      response: approver,
      callRequest: call.request,
    });
    callback(null, approver);
  } catch (error) {
    logger.error(`addCommanderApprover ERROR`, {
      callRequest: call.request,
      error,
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

export async function addSecurityApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to addSecurityApprover`, {
      callRequest: call.request,
    });
    const approver: Approver = await approverManager.addSecurityApprover(
      call.request
    );
    logger.info(`addSecurityApprover OK`, {
      response: approver,
      callRequest: call.request,
    });
    callback(null, approver);
  } catch (error) {
    logger.error(`addSecurityApprover ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`getUserType ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`searchApproverByDisplayName ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`searchApproverByDomainUser ERROR`, {
      callRequest: call.request,
      error,
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

export async function getAllSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getAllSecurityApprovers`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray =
      await approverManager.getAllSecurityApprovers(call.request);
    logger.info(`getAllSecurityApprovers OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error) {
    logger.error(`getAllSecurityApprovers ERROR`, {
      callRequest: call.request,
      error,
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

export async function getAllCommanderApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getAllCommanderApprovers`, {
      callRequest: call.request,
    });
    const approverArray: ApproverArray =
      await approverManager.getAllCommanderApprovers(call.request);
    logger.info(`getAllCommanderApprovers OK`, {
      response: approverArray,
      callRequest: call.request,
    });
    callback(null, approverArray);
  } catch (error) {
    logger.error(`getAllCommanderApprovers ERROR`, {
      callRequest: call.request,
      error,
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

export async function updateCommanderDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to updateCommanderDecision`, {
      callRequest: call.request,
    });
    const request: Request = await approverManager.updateCommanderDecision(
      call.request
    );
    logger.info(`updateCommanderDecision OK`, {
      response: request,
      callRequest: call.request,
    });
    callback(null, request);
  } catch (error) {
    logger.error(`updateCommanderDecision ERROR`, {
      callRequest: call.request,
      error,
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

export async function updateSecurityDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to updateSecurityDecision`, {
      callRequest: call.request,
    });
    const request: Request = await approverManager.updateSecurityDecision(
      call.request
    );
    logger.info(`updateSecurityDecision OK`, {
      response: request,
      callRequest: call.request,
    });
    callback(null, request);
  } catch (error) {
    logger.error(`updateSecurityDecision ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`getAllApprovers ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`deleteApprover ERROR`, {
      callRequest: call.request,
      error,
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
  } catch (error) {
    logger.error(`getAllApproverIds ERROR`, {
      callRequest: call.request,
      error,
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
    const approver: Approver = await approverManager.syncApprover(call.request);
    logger.info(`syncApprover OK`, {
      response: approver,
      callRequest: call.request,
    });
    callback(null, approver);
  } catch (error) {
    logger.error(`syncApprover ERROR`, {
      callRequest: call.request,
      error,
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

export async function updateSuperSecurityDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to updateSuperSecurityDecision`, {
      callRequest: call.request,
    });
    const request: Request = await approverManager.updateSuperSecurityDecision(
      call.request
    );
    logger.info(`updateSuperSecurityDecision OK`, {
      response: request,
      callRequest: call.request,
    });
    callback(null, request);
  } catch (error) {
    logger.error(`updateSuperSecurityDecision ERROR`, {
      callRequest: call.request,
      error,
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
