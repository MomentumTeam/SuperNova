import {
  Request,
  RequestType,
  requestTypeToJSON,
} from '../interfaces/protoc/proto/requestService';
import * as C from '../config';

export function generateKartoffelQueueMessage(request: Request): any {
  const message: any = {
    requestId: request.id,
    type: requestTypeToJSON(request.type),
    domain: C.oldDomain,
  };
  const kartoffelParams: any = request.kartoffelParams;
  switch (request.type) {
    case RequestType.CREATE_OG: {
      message.data = {
        name: kartoffelParams.name,
        parent: kartoffelParams.parent,
        source: kartoffelParams.source,
      };
      break;
    }
    case RequestType.CREATE_ROLE: {
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
    }
    case RequestType.CREATE_ENTITY: {
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
    }
    case RequestType.ASSIGN_ROLE_TO_ENTITY: {
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    }
    case RequestType.RENAME_OG: {
      message.data = {
        id: kartoffelParams.id,
        name: kartoffelParams.name,
      };
      break;
    }
    case RequestType.RENAME_ROLE: {
      message.data = {
        roleId: kartoffelParams.roleId,
        jobTitle: kartoffelParams.jobTitle,
      };
      break;
    }
    case RequestType.EDIT_ENTITY: {
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
    }
    case RequestType.DELETE_OG: {
      message.data = {
        id: kartoffelParams.id,
      };
      break;
    }
    case RequestType.DELETE_ROLE: {
      message.data = {
        roleId: kartoffelParams.roleId,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    }
    case RequestType.DISCONNECT_ROLE: {
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
      };
      break;
    }
  }
  return message;
}

export function generateADQueueMessage(request: Request): any {
  const message: any = {
    requestId: request.id,
    type: requestTypeToJSON(request.type),
    domain: C.oldDomain,
  };
  const adParams: any = request.adParams;
  switch (request.type) {
    case RequestType.CREATE_OG: {
      message.data = {
        ouDisplayName: adParams.ouDisplayName,
        ouName: adParams.ouName,
        name: adParams.name,
      };
      break;
    }
    case RequestType.CREATE_ROLE: {
      message.data = {
        samAccountName: adParams.samAccountName,
        ouDisplayName: adParams.ouDisplayName,
        jobTitle: adParams.jobTitle,
      };
      break;
    }
    case RequestType.CREATE_ENTITY: {
      // Probably nothing
      message.data = {};
      break;
    }
    case RequestType.ASSIGN_ROLE_TO_ENTITY: {
      message.data = {
        oldSAMAccountName: adParams.oldSAMAccountName,
        newSAMAccountName: adParams.newSAMAccountName,
        upn: adParams.upn,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
        rank: adParams.rank,
        roleSerialCode: adParams.roleSerialCode,
      };
      break;
    }
    case RequestType.RENAME_OG: {
      message.data = {
        ouDisplayName: adParams.ouDisplayName,
        oldOuName: adParams.oldOuName,
        newOuName: adParams.newOuName,
      };
      break;
    }
    case RequestType.RENAME_ROLE: {
      message.data = {
        samAccountName: adParams.samAccountName,
        jobTitle: adParams.jobTitle,
      };
      break;
    }
    case RequestType.EDIT_ENTITY: {
      message.data = {
        samAccountName: adParams.samAccountName,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
      };
      break;
    }
    case RequestType.DELETE_OG: {
      //TODO UNKNOWN PARAMETERS
      message.data = {};
      break;
    }
    case RequestType.DELETE_ROLE: {
      message.data = {
        samAccountName: adParams.samAccountName,
      };
      break;
    }
    case RequestType.DISCONNECT_ROLE: {
      message.data = {
        samAccountName: adParams.samAccountName,
      };
      break;
    }
  }
  return message;
}
