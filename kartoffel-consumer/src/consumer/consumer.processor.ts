import RequestService from '../services/requestService';
import { fromStringToObject } from '../utils/fromStringToObject';
import {
  RequestStatus,
  requestStatusFromJSON,
  RequestType,
  requestTypeFromJSON,
  StageStatus,
} from '../interfaces/protoc/proto/requestService';
import {
  createOG,
  createEntity,
  createRole,
  deleteOG,
  deleteRole,
  renameRole,
  renameOG,
  updateEntity,
  disconnectRoleAndDI,
  deleteEntity,
  changeRoleOG,
  connectEntityAndDI,
} from './consumer.kartoffel';
import { logger } from '../utils/logger';
import TeaService from '../services/teaService';

/**
 * requestProcessor - parse a message into an object and handle the request
 *
 * type:incomingRequest-
 * @param {enum RequestType (from requestService)} type
 * @param {string} id
 * @param {string} source
 * @param {look at producer service for data by each type} data
 */
export const requestProcessor = async (incomingRequest: any) => {
  let createdObjectId = undefined;
  let requestObject = undefined;
  let type: any = undefined;
  let validReq = true;

  try {
    requestObject = fromStringToObject(incomingRequest.value.toString());
    logger.info('requestProcessor received request', {
      incomingRequest: incomingRequest,
      requestObject: requestObject,
    });

    if (requestObject && requestObject.type) {
      type =
        typeof requestObject.type === typeof ''
          ? requestTypeFromJSON(requestObject.type)
          : requestObject.type;
      switch (type) {
        case RequestType.CREATE_OG: {
          createdObjectId = await createOG(requestObject.data);
          break;
        }
        case RequestType.CREATE_ROLE: {
          createdObjectId = await createRole(requestObject.data);
          break;
        }
        case RequestType.ASSIGN_ROLE_TO_ENTITY: {
          await connectEntityAndDI(requestObject.data);
          break;
        }
        case RequestType.CREATE_ENTITY: {
          createdObjectId = await createEntity(requestObject.data);
          break;
        }
        case RequestType.RENAME_OG: {
          await renameOG(requestObject.data);
          break;
        }
        case RequestType.RENAME_ROLE: {
          await renameRole(requestObject.data);
          break;
        }
        case RequestType.EDIT_ENTITY: {
          await updateEntity(requestObject.data);
          break;
        }
        case RequestType.DELETE_OG: {
          await deleteOG(requestObject.data);
          break;
        }
        case RequestType.DELETE_ROLE: {
          await deleteRole(requestObject.data);
          break;
        }
        case RequestType.DELETE_ENTITY: {
          await deleteEntity(requestObject.data);
          break;
        }
        case RequestType.DISCONNECT_ROLE: {
          await disconnectRoleAndDI(requestObject.data);
          break;
        }
        case RequestType.CHANGE_ROLE_HIERARCHY: {
          await changeRoleOG(requestObject.data);
          break;
        }
        default: {
          validReq = false;
          break;
        }
      }
    } else {
      validReq = false;
    }

    if (validReq) {
      await RequestService.UpdateKartoffelStatus({
        requestId: requestObject.id,
        status: StageStatus.STAGE_DONE,
        createdId: createdObjectId ? createdObjectId : '',
      });
      if (type === RequestType.CREATE_ROLE && createdObjectId) {
        await TeaService.reportTeaSuccess({
          tea: createdObjectId,
        });
      }
    } else {
      logger.error(
        'requestProcessor received invalid message',
        incomingRequest
      );
    }
  } catch (error) {
    logger.error('requestProcessor error', {
      error: { message: error.message },
    });
    try {
      if (requestObject && requestObject.id) {
        const updatedRequest = await RequestService.IncrementKartoffelRetries({
          id: requestObject.id,
          message: error.message,
        });
        const updatedStatus =
          typeof updatedRequest.status === typeof ''
            ? requestStatusFromJSON(updatedRequest.status)
            : updatedRequest.status;
        if (
          updatedStatus === RequestStatus.FAILED &&
          type === RequestType.CREATE_ROLE &&
          createdObjectId
        ) {
          await TeaService.throwTea({
            tea: createdObjectId,
          });
        }
      }
    } catch (catchError) {
      logger.error('requestProcessor catch error', {
        error: { message: catchError.message },
      });
    }
  }
};
