import RequestService from '../services/requestService';
import { fromStringToObject } from '../utils/fromStringToObject';
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
  deleteEntity,
  changeRoleOG,
} from './consumer.kartoffel';
import { logger } from '../utils/logger';
import { SuccessMessage } from '../interfaces/protoc/proto/teaService';
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
  let validReq = true;
  let requestObject = undefined; 

  try {
      requestObject = fromStringToObject(incomingRequest.value.toString());
      logger.info('got a request in requestProcessor', {
          incomingRequest: incomingRequest,
          requestObject: requestObject,
      });
      
      if(requestObject && requestObject.type) {
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
            case 'DELETE_ENTITY': {
                await deleteEntity(requestObject.data);
                break;
            }
            case 'DISCONNECT_ROLE': {
                await disconnectRoleAndDI(requestObject.data);
                break;
            }
            case 'CHANGE_ROLE_HIERARCHY': {
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
          if (createdObjectId != undefined) {
              RequestService.UpdateKartoffelStatus({
                  requestId: requestObject.id,
                  status: StageStatus.STAGE_DONE,
                  createdId: createdObjectId,
              });

              if (requestObject.type === 'CREATE_ROLE') {
                  const successMessageTea: SuccessMessage = await TeaService.reportTeaSuccess({
                      tea: createdObjectId,
                  });
                  logger.info('Successfuly tea report', successMessageTea);
              }
          } else {
              RequestService.UpdateKartoffelStatus({
                  requestId: requestObject.id,
                  status: StageStatus.STAGE_DONE,
              });
          }
      } else {
          console.log('got unsupported message: ', incomingRequest);
      }
  } catch (error) {
      console.log(error);
      
      if (requestObject && requestObject.id) {
          RequestService.IncrementKartoffelRetries({ id: requestObject.id });

          if (requestObject.type === 'CREATE_ROLE' && createdObjectId != undefined) {
              const successMessageTea: SuccessMessage = await TeaService.reportTeaFail({ tea: createdObjectId });
              logger.info('fail tea report: ', successMessageTea);
          }
      }
  }
};
