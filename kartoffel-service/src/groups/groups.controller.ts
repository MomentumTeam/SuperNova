import * as grpc from '@grpc/grpc-js';
import {
  IdMessage,
  IsOGNameAlreadyTakenRes,
  OGArray,
  OGPrefix,
  OGTree,
  OrganizationGroup,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { GroupsManager } from './groups.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const groupsManager: GroupsManager = new GroupsManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function isOGNameAlreadyTaken(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to isOGNameAlreadyTaken`, {
      callRequest: call.request,
    });

    const isOGNameAlreadyTakenRes: IsOGNameAlreadyTakenRes =
      await groupsManager.isOGNameAlreadyTaken(call.request);
    logger.info(`isOGNameAlreadyTaken OK`, {
      callRequest: call.request,
      response: isOGNameAlreadyTakenRes,
    });

    callback(null, isOGNameAlreadyTakenRes);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`isOGNameAlreadyTaken ERROR`, {
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

export async function getPrefixByOGId(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getPrefixByOGId`, {
      callRequest: call.request,
    });

    const prefix: OGPrefix = await groupsManager.getPrefixByOGId(call.request);
    logger.info(`getPrefixByOGId OK`, {
      callRequest: call.request,
      response: prefix,
    });

    callback(null, prefix);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getPrefixByOGId ERROR`, {
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

export async function getAllOGs(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getAllOGs`, {
      callRequest: call.request,
    });

    const ogArray: OGArray = await groupsManager.getAllOGs(call.request);
    logger.info(`getAllOGs OK`, {
      callRequest: call.request,
      response: ogArray,
    });

    callback(null, ogArray);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getAllOGs ERROR`, {
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

export async function createOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createOG`, {
      callRequest: call.request,
    });
    const idMessage: IdMessage = await groupsManager.createOG(call.request);
    logger.info(`createOG OK`, {
      callRequest: call.request,
      response: idMessage,
    });
    callback(null, idMessage);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`createOG ERROR`, {
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

export async function getOGTree(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getOGTree`, { callRequest: call.request });
    const ogTree: OGTree = await groupsManager.getOGTree(call.request);
    logger.info(`getOGTree OK`, {
      callRequest: call.request,
      response: ogTree,
    });
    callback(null, ogTree);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getOGTree ERROR`, {
      callRequest: call.request,
      error: { message },
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

export async function getOGByHierarchyName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getOGByHierarchy`, {
      callRequest: call.request,
    });
    const og: OrganizationGroup = await groupsManager.getOGByHierarchyName(
      call.request
    );
    logger.info(`getOGByHierarchy OK`, {
      callRequest: call.request,
      response: og,
    });
    callback(null, og);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getOGByHierarchy ERROR`, {
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

export async function searchOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to searchOG`, { callRequest: call.request });
    const ogArray: OGArray = await groupsManager.searchOG(call.request);
    logger.info(`searchOG OK`, {
      callRequest: call.request,
      response: ogArray,
    });
    callback(null, ogArray);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchOG ERROR`, {
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

export async function deleteOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteOG`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage = await groupsManager.deleteOG(
      call.request
    );
    logger.info(`deleteOG OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`deleteOG ERROR`, {
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

export async function getOGById(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getOGById`, {
      callRequest: call.request,
    });
    const og: OrganizationGroup = await groupsManager.getOGById(call.request);
    logger.info(`getOGById OK`, {
      callRequest: call.request,
      response: og,
    });
    callback(null, og);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getOGById ERROR`, {
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

export async function getChildrenOfOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getChildrenOfOG`, {
      callRequest: call.request,
    });
    const ogChildern: OGArray = await groupsManager.getChildrenOfOG(
      call.request
    );
    logger.info(`getChildrenOfOG OK`, {
      callRequest: call.request,
      response: ogChildern,
    });
    callback(null, ogChildern);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getChildrenOfOG ERROR`, {
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

export async function getChildrenOfRootOG(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getChildrenOfRootOG`, {
      callRequest: call.request,
    });
    const rooOGChildern: OGArray = await groupsManager.getChildrenOfRootOG();
    logger.info(`getChildrenOfRootOG OK`, {
      callRequest: call.request,
      response: rooOGChildern,
    });
    callback(null, rooOGChildern);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getChildrenOfRootOG ERROR`, {
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

export async function updateOGParent(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateOGParent`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage = await groupsManager.updateOGParent(
      call.request
    );
    logger.info(`updateOGParent OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`updateOGParent ERROR`, {
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

export async function renameOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to renameOG`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage = await groupsManager.renameOG(
      call.request
    );
    logger.info(`renameOG OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const status = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`renameOG ERROR`, {
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
