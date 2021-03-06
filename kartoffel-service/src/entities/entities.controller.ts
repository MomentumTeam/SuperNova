import * as grpc from '@grpc/grpc-js';
import {
  Entity,
  EntityArray,
  IdMessage,
  Image,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { getErrorMessage, getStatusCode } from '../utils/errors.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { EntitiesManager } from './entities.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const entitiesManager: EntitiesManager = new EntitiesManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function getPictureByEntityIdentifier(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getPictureByEntityIdentifier`, {
      callRequest: call.request,
    });
    const image: Image = await entitiesManager.getPictureByEntityIdentifier(
      call.request
    );
    logger.info(`getPictureByEntityIdentifier OK`, {
      callRequest: call.request,
    });
    callback(null, image);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getPictureByEntityIdentifier ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function createEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createEntity`, { callRequest: call.request });
    const idMessage: IdMessage = await entitiesManager.createEntity(
      call.request
    );
    logger.info(`createEntity OK`, {
      callRequest: call.request,
    });
    callback(null, idMessage);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`createEntity ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntityByDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getEntityByDI`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.getEntityByDI(call.request);
    logger.info(`getEntityByDI OK`, {
      callRequest: call.request,
    });
    callback(null, entity);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getEntityByDI ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntityByRoleId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntityByRoleId`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.getEntityByRoleId(
      call.request
    );
    logger.info(`getEntityByRoleId OK`, {
      callRequest: call.request,
    });
    callback(null, entity);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getEntityByRoleId ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntitiesUnderOG(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntitiesUnderOG`, { callRequest: call.request });
    const entityArray: EntityArray = await entitiesManager.getEntitiesUnderOG(
      call.request
    );
    logger.info(`getEntitiesUnderOG OK`, {
      callRequest: call.request,
    });
    callback(null, entityArray);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getEntitiesUnderOG ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntitiesByHierarchy(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getEntitiesByHierarchy`, {
      callRequest: call.request,
    });
    const entities: EntityArray = await entitiesManager.getEntitiesByHierarchy(
      call.request
    );
    logger.info(`getEntitiesByHierarchy OK`, {
      callRequest: call.request,
    });
    callback(null, entities);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getEntitiesByHierarchy ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntityByIdentifier(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchEntitiesByIdentifier`, {
      callRequest: call.request,
    });
    const entity: Entity = await entitiesManager.getEntityByIdentifier(
      call.request
    );
    logger.info(`searchEntitiesByIdentifier OK`, {
      callRequest: call.request,
    });
    callback(null, entity);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchEntitiesByIdentifier ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function searchCommandersByFullName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchCommandersByFullName`, {
      callRequest: call.request,
    });
    const entityArray: EntityArray =
      await entitiesManager.searchCommandersByFullName(call.request);
    logger.info(`searchCommandersByFullName OK`, {
      callRequest: call.request,
    });
    callback(null, entityArray);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchCommandersByFullName ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function searchHighCommandersByFullName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchHighCommandersByFullName`, {
      callRequest: call.request,
    });
    const entityArray: EntityArray =
      await entitiesManager.searchHighCommandersByFullName(call.request);
    logger.info(`searchHighCommandersByFullName OK`, {
      callRequest: call.request,
    });
    callback(null, entityArray);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchHighCommandersByFullName ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function searchEntitiesByFullName(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to searchEntitiesByFullName`, {
      callRequest: call.request,
    });
    const entityArray: EntityArray =
      await entitiesManager.searchEntitiesByFullName(call.request);
    logger.info(`searchEntitiesByFullName OK`, {
      callRequest: call.request,
    });
    callback(null, entityArray);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`searchEntitiesByFullName ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function getEntityById(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getEntityById`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.getEntityById(call.request);
    logger.info(`getEntityById OK`, {
      callRequest: call.request,
    });
    callback(null, entity);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`getEntityById ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function deleteEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteEntity`, { callRequest: call.request });
    const successMessage: SuccessMessage = await entitiesManager.deleteEntity(
      call.request
    );
    logger.info(`deleteEntity OK`, {
      callRequest: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`deleteEntity ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function updateEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateEntity`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.updateEntity(call.request);
    logger.info(`updateEntity OK`, {
      callRequest: call.request,
    });
    callback(null, entity);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`updateEntity ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function disconnectDIFromEntity(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to disconnectDIFromEntity`, {
      callRequest: call.request,
    });
    const successMessage: SuccessMessage =
      await entitiesManager.disconnectDIFromEntity(call.request);
    logger.info(`disconnectDIFromEntity OK`, {
      callRequest: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`disconnectDIFromEntity ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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

export async function connectEntityAndDI(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to connectEntityAndDI`, { callRequest: call.request });
    const successMessage: SuccessMessage =
      await entitiesManager.connectEntityAndDI(call.request);
    logger.info(`connectEntityAndDI OK`, {
      callRequest: call.request,
    });
    callback(null, successMessage);
  } catch (error: any) {
    const code = getStatusCode(error);
    const message = getErrorMessage(error);

    logger.error(`connectEntityAndDI ERROR`, {
      callRequest: call.request,
      error: { message },
    });
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
