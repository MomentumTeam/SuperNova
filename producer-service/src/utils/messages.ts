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
        directGroup: kartoffelParams.parent,
        source: kartoffelParams.source
          ? kartoffelParams.source
          : C.defaultSource,
      };
      break;
    case RequestType.CREATE_ROLE:
      message.data = {
        //for role
        jobTitle: kartoffelParams.jobTitle,
        directGroup: kartoffelParams.directGroup,
        roleId: kartoffelParams.roleId,
        clearance: kartoffelParams.clearance,
        //for digitalIdentity
        type: kartoffelParams.type ? kartoffelParams.type : 'domainUser',
        source: kartoffelParams.source
          ? kartoffelParams.source
          : C.defaultSource,
        uniqueId: kartoffelParams.uniqueId,
        mail: kartoffelParams.mail,
        isRoleAttachable: kartoffelParams.isRoleAttachable,

        //in case of goalUser - need to create an entity and assign it to the role
        roleEntityType: kartoffelParams.roleEntityType,
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
        needDisconnect: kartoffelParams.needDisconnect,
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
        properties: {
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
        },
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
        roleId: kartoffelParams.roleId,
        directGroup: kartoffelParams.directGroup,
        currentJobTitle: kartoffelParams.currentJobTitle,
      };
      if (kartoffelParams.newJobTitle) {
        message.data.newJobTitle = kartoffelParams.newJobTitle;
      }
      break;
    default:
      throw new Error('type not supported!');
  }
  return message;
}

export function generateADQueueMessage(request: Request): any {
  const message: any = {
    id: request.id,
    type: C.shmuelRequestTypes[requestTypeToJSON(request.type)],
    source: C.oldDomain,
  };
  if (
    request.type === RequestType.ASSIGN_ROLE_TO_ENTITY &&
    request.kartoffelParams?.needDisconnect
  ) {
    message.type = 'MoveRole';
  }
  const adParams: any = request.adParams;
  switch (request.type) {
    case RequestType.CREATE_OG: //Reviewed with Orin, CreateOU
      message.data = {
        ouDName: adParams.ouDisplayName,
        hierarchyOu: adParams.ouName,
        newOuName: adParams.name,
      };
      break;
    case RequestType.CREATE_ROLE: //reviewed with Orin, CreateRole
      message.data = {
        userID: adParams.samAccountName,
        ouName: adParams.ouDisplayName,
        roleName: adParams.jobTitle,
      };
      break;
    case RequestType.ASSIGN_ROLE_TO_ENTITY: //reviewed with Orin
      if (request.kartoffelParams?.needDisconnect) {
        //MoveRole
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
      } else {
        //ConnectNewRole
        message.data = {
          userID: adParams.newSAMAccountName,
          UPN: adParams.upn,
          firstName: adParams.firstName,
          lastName: adParams.lastName,
          fullName: adParams.fullName,
          rank: adParams.rank,
          ID: adParams.newSAMAccountName, //?
          pdoName: adParams.roleSerialCode, //?
        };
      }
      break;
    case RequestType.RENAME_OG: //Reviewed with Orin, EditOU
      message.data = {
        ouDName: adParams.ouDisplayName,
        hierarchyOu: adParams.oldOuName,
        newOuName: adParams.newOuName,
      };
      break;
    case RequestType.RENAME_ROLE: //Reviewed with Orin, EditRoleName
      message.data = {
        userT: adParams.samAccountName,
        newRole: adParams.jobTitle,
      };
      break;
    case RequestType.EDIT_ENTITY: //Reviewed with Orin, EditSpecialRole
      message.data = {
        samAccountName: adParams.samAccountName,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
      };
      break;
    case RequestType.DELETE_ROLE: // Reviewed with Orin, PurgeRole
      message.data = {
        userT: adParams.samAccountName,
      };
      break;
    case RequestType.DISCONNECT_ROLE: // Reviewed with Orin, DisconnectRole
      message.data = {
        userID: adParams.samAccountName,
      };
      break;
    case RequestType.CHANGE_ROLE_HIERARCHY: // ChangeRole
      message.data = {
        userT: adParams.samAccountName,
        ouDisplayName: adParams.ouDisplayName,
      };
      if (adParams.newJobTitle) {
        message.data.newName = adParams.newJobTitle;
      }
      break;
    default:
      throw new Error('type not supported!');
  }
  return message;
}
