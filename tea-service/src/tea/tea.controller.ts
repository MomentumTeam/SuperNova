import {
  SuccessMessage,
  TeaAndUPN,
  Unit,
} from '../interfaces/protoc/proto/teaService';
import { TeaManager } from './tea.manager';
import * as grpc from 'grpc';

const teaManager: TeaManager = new TeaManager();

export async function retrieveTeaAndUPNByEntity(
  call: any,
  callback: any
): Promise<void> {
  try {
    const teaAndUpn: TeaAndUPN = await teaManager.retrieveTeaAndUPNByEntity(
      call.request
    );
    callback(null, teaAndUpn);
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

export async function retrieveTeaAndUPNByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    const teaAndUpn: TeaAndUPN = await teaManager.retrieveTeaAndUPNByEntityId(
      call.request
    );
    callback(null, teaAndUpn);
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

export async function reportTeaSuccess(
  call: any,
  callback: any
): Promise<void> {
  try {
    const successMessage: SuccessMessage = await teaManager.reportTeaSuccess(
      call.request
    );
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

export async function reportTeaFail(call: any, callback: any): Promise<void> {
  try {
    const successMessage: SuccessMessage = await teaManager.reportTeaFail(
      call.request
    );
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

export async function getUnit(call: any, callback: any): Promise<void> {
  try {
    const unit: Unit = await teaManager.getUnit(call.request);
    callback(null, unit);
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

export async function addUnit(call: any, callback: any): Promise<void> {
  try {
    const unit: Unit = await teaManager.addUnit(call.request);
    callback(null, unit);
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

export async function updateUnit(call: any, callback: any): Promise<void> {
  try {
    const unit: Unit = await teaManager.updateUnit(call.request);
    callback(null, unit);
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

export async function deleteUnit(call: any, callback: any): Promise<void> {
  try {
    const successMessage: SuccessMessage = await teaManager.deleteUnit(
      call.request
    );
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
