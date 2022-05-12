import * as grpc from "@grpc/grpc-js";
import { SearchSamAccountNameRes } from "../interfaces/protoc/proto/kartoffelService";
import { logger } from "../logger";
import { getErrorMessage, getStatusCode } from "../utils/errors.utils";
import { LdapUtils } from "../utils/ldap.utils";
import { LdapManager } from "./ldap.manager";

const ldapUtils: LdapUtils = new LdapUtils();

const ldapManager: LdapManager = new LdapManager(ldapUtils);

export async function searchSamAccountName(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to searchSamAccountName`, { callRequest: call.request });
    const searchSamAccountNameRes: SearchSamAccountNameRes = await ldapManager.searchSamAccountName(call.request);
    logger.info(`searchSamAccountName OK`, {
      callRequest: call.request,
    });
    callback(null, searchSamAccountNameRes);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchSamAccountName ERROR`, {
      callRequest: call.request,
      error: { message },
    });
    callback(
      {
        code: status,
        message,
        status: grpc.status.CANCELLED,
      },
      null
    );
  }
}
