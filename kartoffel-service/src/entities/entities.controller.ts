import * as grpc from 'grpc';
import {
  Entity,
  EntityArray,
  Image,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../logger';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { EntitiesManager } from './entities.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const entitiesManager: EntitiesManager = new EntitiesManager(
  kartoffelUtils,
  kartoffelFaker
);

export async function getPictureByEntityId(
  call: any,
  callback: any
): Promise<void> {
  try {
    logger.info(`Call to getPictureByEntityId`, { callRequest: call.request });
    const image: Image = await entitiesManager.getPictureByEntityId(
      call.request
    );
    logger.info(`getPictureByEntityId OK`, {
      callRequest: call.request,
      response: image,
    });
    callback(null, image);
  } catch (error: any) {
    logger.error(`getPictureByEntityId ERROR`, {
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

export async function createEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to createEntity`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.createEntity(call.request);
    logger.info(`createEntity OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`createEntity ERROR`, {
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

export async function getEntityByDI(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getEntityByDI`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.getEntityByDI(call.request);
    logger.info(`getEntityByDI OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`getEntityByDI ERROR`, {
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
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`getEntityByRoleId ERROR`, {
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
      response: entityArray,
    });
    callback(null, entityArray);
  } catch (error: any) {
    logger.error(`getEntitiesUnderOG ERROR`, {
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
      response: entities,
    });
    callback(null, entities);
  } catch (error: any) {
    logger.error(`getEntitiesByHierarchy ERROR`, {
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
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`searchEntitiesByIdentifier ERROR`, {
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
      response: entityArray,
    });
    callback(null, entityArray);
  } catch (error: any) {
    logger.error(`searchEntitiesByFullName ERROR`, {
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

export async function getEntityById(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to getEntityById`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.getEntityById(call.request);
    logger.info(`getEntityById OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`getEntityById ERROR`, {
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

export async function deleteEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to deleteEntity`, { callRequest: call.request });
    const successMessage: SuccessMessage = await entitiesManager.deleteEntity(
      call.request
    );
    logger.info(`deleteEntity OK`, {
      callRequest: call.request,
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`deleteEntity ERROR`, {
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

export async function updateEntity(call: any, callback: any): Promise<void> {
  try {
    logger.info(`Call to updateEntity`, { callRequest: call.request });
    const entity: Entity = await entitiesManager.updateEntity(call.request);
    logger.info(`updateEntity OK`, {
      callRequest: call.request,
      response: entity,
    });
    callback(null, entity);
  } catch (error: any) {
    logger.error(`updateEntity ERROR`, {
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
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`disconnectDIFromEntity ERROR`, {
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
      response: successMessage,
    });
    callback(null, successMessage);
  } catch (error: any) {
    logger.error(`connectEntityAndDI ERROR`, {
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
