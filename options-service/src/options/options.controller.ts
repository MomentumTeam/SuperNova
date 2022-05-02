import * as grpc from "@grpc/grpc-js";
import { OptionsManager } from "./options.manager";
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';

const optionsManager: OptionsManager = new OptionsManager();

export async function getOptionsByEntityId(call: any, callback: any): Promise<void> {
  try {
    const userOptions = await optionsManager.getOptionsByEntityId(call.request);
    callback(null, userOptions);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);
    callback(
      {
        code,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function updateUserOptions(call: any, callback: any): Promise<void> {
  try {
    const userOptions = await optionsManager.updateUserOptions(call.request);
    callback(null, userOptions);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);
    callback(
      {
        code,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function addFavoriteCommander(call: any, callback: any): Promise<void> {
  try {
    const userOptions = await optionsManager.addFavoriteCommander(call.request);
    callback(null, userOptions);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);
    callback(
      {
        code,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}

export async function removeFavoriteCommander(call: any, callback: any): Promise<void> {
  try {
    const userOptions = await optionsManager.removeFavoriteCommander(
      call.request
    );
    callback(null, userOptions);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);
    callback(
      {
        code,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
