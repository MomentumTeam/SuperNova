import * as grpc from 'grpc';
import {
  GetChildrenOfOGRequest,
  OGArray,
  OrganizationGroup,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { GroupsManager } from './groups.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const groupsManager: GroupsManager = new GroupsManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function searchOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to searchOG`, { callRequest: call.request });
    const ogArray: OGArray = await groupsManager.searchOG(call.request);
    logger.info(`searchOG OK`, {
      callRequest: call.request,
      response: ogArray,
    });
    callback(null, ogArray);
  } catch (error) {
    logger.error(`searchOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function createOG(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createOG`, {
      callRequest: call.request,
    });
    const newOG: OrganizationGroup = await groupsManager.createOG(call.request);
    logger.info(`createOG OK`, {
      callRequest: call.request,
      response: newOG,
    });
    callback(null, newOG);
  } catch (error) {
    logger.error(`createOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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
  } catch (error) {
    logger.error(`getOGByHierarchy ERROR`, {
      callRequest: call.request,
      error: error.message,
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
  } catch (error) {
    logger.error(`deleteOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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
  } catch (error) {
    logger.error(`getOGById ERROR`, {
      callRequest: call.request,
      error: error.message,
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
  } catch (error) {
    logger.error(`getChildrenOfOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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

export async function updateOGParent(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateOGParent`, {
      callRequest: call.request,
    });
    const ogArray: OGArray = await groupsManager.getChildrenOfOG(call.request);
    logger.info(`updateOGParent OK`, {
      callRequest: call.request,
      response: ogArray,
    });
    callback(null, ogArray);
  } catch (error) {
    logger.error(`updateOGParent ERROR`, {
      callRequest: call.request,
      error: error.message,
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
  } catch (error) {
    logger.error(`renameOG ERROR`, {
      callRequest: call.request,
      error: error.message,
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
