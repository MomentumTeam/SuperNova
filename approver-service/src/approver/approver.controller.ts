import * as grpc from '@grpc/grpc-js';
import {
  Approver,
  ApproverArray,
  GetUserTypeRes,
  SuccessMessage,
} from '../interfaces/protoc/proto/approverService';
import { ApproverManager } from './approver.manager';

const approverManager: ApproverManager = new ApproverManager();

export async function getAllSuperSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approverArray: ApproverArray =
      await approverManager.getAllSuperSecurityApprovers(call.request);
    callback(null, approverArray);
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

export async function addSuperSecurityApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approver: Approver = await approverManager.addSuperSecurityApprover(
      call.request
    );
    callback(null, approver);
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

export async function addCommanderApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approver: Approver = await approverManager.addCommanderApprover(
      call.request
    );
    callback(null, approver);
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

export async function addSecurityApprover(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approver: Approver = await approverManager.addSecurityApprover(
      call.request
    );
    callback(null, approver);
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

export async function getUserType(call: any, callback: any): Promise<void> {
  try {
    const userTypeRes: GetUserTypeRes = await approverManager.getUserType(
      call.request
    );
    callback(null, userTypeRes);
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

export async function searchApproverByDisplayName(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approverArray: ApproverArray =
      await approverManager.searchApproverByDisplayName(call.request);
    callback(null, approverArray);
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

export async function searchApproverByDomainUser(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approverArray: ApproverArray =
      await approverManager.searchApproverByDomainUser(call.request);
    callback(null, approverArray);
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

export async function getAllSecurityApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approverArray: ApproverArray =
      await approverManager.getAllSecurityApprovers(call.request);
    callback(null, approverArray);
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

export async function getAllCommanderApprovers(
  call: any,
  callback: any
): Promise<void> {
  try {
    const approverArray: ApproverArray =
      await approverManager.getAllCommanderApprovers(call.request);
    callback(null, approverArray);
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

export async function updateCommanderDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    const successMessage: SuccessMessage =
      await approverManager.updateCommanderDecision(call.request);
    callback(null, successMessage);
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

export async function updateSecurityDecision(
  call: any,
  callback: any
): Promise<void> {
  try {
    const successMessage: SuccessMessage =
      await approverManager.updateSecurityDecision(call.request);
    callback(null, successMessage);
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
