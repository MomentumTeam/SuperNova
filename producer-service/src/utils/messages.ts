import {
  Request,
  RequestType,
  requestTypeToJSON,
} from '../interfaces/protoc/proto/requestService';
import * as C from '../config';

export function generateKartoffelQueueMessage(request: Request): any {
  const message: any = {
    id: request.id,
    type: requestTypeToJSON(request.type),
    source: C.oldDomain,
  };
  const kartoffelParams: any = request.kartoffelParams;
  switch (request.type) {
    case RequestType.CREATE_OG:
      message.data = {
        name: kartoffelParams.name,
        parent: kartoffelParams.parent,
        source: kartoffelParams.source,
      };
      break;
    case RequestType.CREATE_ROLE:
      message.data = {
        //for role
        jobTitle: kartoffelParams.jobTitle,
        directGroup: kartoffelParams.directGroup,
        roleId: kartoffelParams.roleId,
        //for digitalIdentity
        type: kartoffelParams.jobTitle,
        source: kartoffelParams.source,
        uniqueId: kartoffelParams.uniqueId,
        mail: kartoffelParams.mail,
        isRoleAttachable: kartoffelParams.isRoleAttachable,
      };
      break;
    case RequestType.CREATE_ENTITY:
      message.data = {
        firstName: kartoffelParams.firstName,
        lastName: kartoffelParams.lastName,
        identityCard: kartoffelParams.identityCard,
        personalNumber: kartoffelParams.firstName,
        serviceType: kartoffelParams.serviceType,
        phone: kartoffelParams.phone,
        address: kartoffelParams.address,
        clearance: kartoffelParams.clearance,
        sex: kartoffelParams.sex,
        birthdate: kartoffelParams.birthdate,
        entityType: kartoffelParams.entityType,
      };
      break;
    case RequestType.ASSIGN_ROLE_TO_ENTITY:
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    case RequestType.RENAME_OG:
      message.data = {
        id: kartoffelParams.id,
        name: kartoffelParams.name,
      };
      break;
    case RequestType.RENAME_ROLE:
      message.data = {
        roleId: kartoffelParams.roleId,
        jobTitle: kartoffelParams.jobTitle,
      };
      break;
    case RequestType.EDIT_ENTITY:
      message.data = {
        id: kartoffelParams.id,
        firstName: kartoffelParams.firstName,
        lastName: kartoffelParams.lastName,
        identityCard: kartoffelParams.identityCard,
        personalNumber: kartoffelParams.firstName,
        serviceType: kartoffelParams.serviceType,
        phone: kartoffelParams.phone,
        address: kartoffelParams.address,
        clearance: kartoffelParams.clearance,
        sex: kartoffelParams.sex,
        birthdate: kartoffelParams.birthdate,
        entityType: kartoffelParams.entityType,
      };
      break;
    case RequestType.DELETE_OG:
      message.data = {
        id: kartoffelParams.id,
      };
      break;
    case RequestType.DELETE_ROLE:
      message.data = {
        roleId: kartoffelParams.roleId,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    case RequestType.DISCONNECT_ROLE:
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    case RequestType.DELETE_ENTITY:
      message.data = {
        id: kartoffelParams.id,
      };
      break;
    case RequestType.CHANGE_ROLE_HIERARCHY:
      message.data = {
        //TODO
      };
      break;
    default:
      message.data = {};
      break;
  }
  return message;
}

export function generateADQueueMessage(request: Request): any {
  const message: any = {
    id: request.id,
    type: C.shmuelRequestTypes[requestTypeToJSON(request.type)],
    source: C.oldDomain,
  };
  const adParams: any = request.adParams;
  switch (request.type) {
    case RequestType.CREATE_OG: //Reviewed with Orin
      message.data = {
        ouDName: adParams.ouDisplayName,
        ouName: adParams.ouName,
        moveOuDName: adParams.ouDisplayName, //TODO put new name at the end
        moveOuName: adParams.name,
      };
      break;
    case RequestType.CREATE_ROLE: //reviewed with Orin
      message.data = {
        userID: adParams.samAccountName,
        ouName: adParams.ouDisplayName,
        roleName: adParams.jobTitle,
      };
      break;
    case RequestType.ASSIGN_ROLE_TO_ENTITY: //reviewed with Orin
      message.data = {
        samAccountName: adParams.oldSAMAccountName,
        toSamAccountName: adParams.newSAMAccountName,
        upn: adParams.upn,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
        nickname: adParams.fullName,
        rank: adParams.rank,
        jobNumber: adParams.roleSerialCode,
      };
      break;
    case RequestType.RENAME_OG: //Reviewed with Orin
      message.data = {
        ouName: adParams.ouDisplayName,
        hierarchyOu: adParams.oldOuName,
        newOuName: adParams.newOuName,
      };
      break;
    case RequestType.RENAME_ROLE: //Reviewed with Orin
      message.data = {
        userT: adParams.samAccountName,
        newRole: adParams.jobTitle,
      };
      break;
    case RequestType.EDIT_ENTITY: //Reviewed with Orin
      message.data = {
        samAccountName: adParams.samAccountName,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
      };
      break;
    case RequestType.DELETE_ROLE: // Reviewed with Orin
      message.data = {
        userT: adParams.samAccountName,
      };
      break;
    case RequestType.DISCONNECT_ROLE: // Reviewed with Orin
      message.data = {
        userID: adParams.samAccountName,
      };
      break;
    case RequestType.CHANGE_ROLE_HIERARCHY: // TODO
      message.data = {};
      break;
    case RequestType.DELETE_OG: // TODO
      message.data = {};
      break;
    default:
      //DELETE_ENTITY, CREATE_ENTITY NEVER GONNA ENTER THIS
      message.data = {};
      break;
  }
  return message;
}
