import { OptionsManager } from "./options.manager";
import * as grpc from "@grpc/grpc-js";
const optionsManager: OptionsManager = new OptionsManager();

export async function getOptionsByEntityId(call: any, callback: any) {
  try {
    const userOptions = await optionsManager.getOptionsByEntityId(call.request);
    callback(null, userOptions);
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

export async function updateUserOptions(call: any, callback: any) {
  try {
    const userOptions = await optionsManager.updateUserOptions(call.request);
    callback(null, userOptions);
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

export async function addFavoriteCommander(call: any, callback: any) {
  try {
    const userOptions = await optionsManager.addFavoriteCommander(call.request);
    callback(null, userOptions);
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

export async function removeFavoriteCommander(call: any, callback: any) {
  try {
    const userOptions = await optionsManager.removeFavoriteCommander(
      call.request
    );
    callback(null, userOptions);
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
