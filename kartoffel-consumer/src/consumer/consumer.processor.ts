import { fromStringToObject } from '../utils/fromStringToObject';
import RequestService from '../services/requestService';
import { StageStatus } from '../interfaces/protoc/proto/requestService';
import {
  createOG,
  createEntity,
  createRole,
  deleteOG,
  deleteRole,
  assignRoleToEntity,
  renameRole,
  renameOG,
  updateEntity,
  disconnectRoleAndDI,
} from './consumer.kartoffel';

// requestProcessor - Parse a message into object with structure:
// {
//   type (enum RequestType (from requestService))
//   requestId (string)
//   data: (look at producer service for data by each type)
// }
export const requestProcessor = async (incomingRequest: any) => {
  const requestObject = fromStringToObject(incomingRequest.value.toString());
  let createdObjectId = undefined;
  try {
    console.log('here', requestObject.type);
    switch (requestObject.type) {
      case 'CREATE_OG': {
        createdObjectId = await createOG(requestObject.data);
        break;
      }
      case 'CREATE_ROLE': {
        createdObjectId = await createRole(requestObject.data);
        break;
      }
      case 'ASSIGN_ROLE_TO_ENTITY': {
        await assignRoleToEntity(requestObject.data);
        break;
      }
      case 'CREATE_ENTITY': {
        createdObjectId = await createEntity(requestObject.data);
        break;
      }
      case 'RENAME_OG': {
        await renameOG(requestObject.data);
        break;
      }
      case 'RENAME_ROLE': {
        await renameRole(requestObject.data);
        break;
      }
      case 'EDIT_ENTITY': {
        await updateEntity(requestObject.data);
        break;
      }
      case 'DELETE_OG': {
        await deleteOG(requestObject.data);
        break;
      }
      case 'DELETE_ROLE': {
        await deleteRole(requestObject.data);
        break;
      }
      case 'DISCONNECT_ROLE': {
        await disconnectRoleAndDI(requestObject.data);
        break;
      }
      case 'UNRECOGNIZED': {
        break;
      }
    }

    if (createdObjectId != undefined) {
      RequestService.UpdateKartoffelStatus({
        requestId: requestObject.requestId,
        status: StageStatus.STAGE_DONE,
        createdId: createdObjectId,
      });
      createdObjectId = undefined;
    } else {
      RequestService.UpdateKartoffelStatus({
        requestId: requestObject.requestId,
        status: StageStatus.STAGE_DONE,
      });
    }
  } catch (error) {
    console.log(error);
    RequestService.IncrementKartoffelRetries({ id: requestObject.requestId });
  }
};
