import {
  KartoffelParams,
  Request,
  RequestType,
  requestTypeToJSON,
} from '../interfaces/protoc/proto/requestService';
import * as C from '../config';
import {
  ADStage,
  aDStageFromJSON,
} from '../interfaces/protoc/proto/producerService';

function isValidMobilePhone(mobilePhone: any) {
  if (mobilePhone === undefined || mobilePhone === null) {
    return false;
  }
  if (mobilePhone.length === 0) {
    return true;
  } else {
    const re = /^\d{2,3}-?\d{7}$/;
    return re.test(mobilePhone[0]);
  }
}

function splitFullName(jobTitle: string) {
  let lastName: string;
  let firstName: string;
  let fullName: string;
  let arrayName: string[] = jobTitle.trim().split(/[,.\s/]+/g);
  firstName = arrayName[0];
  if (arrayName.length > 1) {
    let sliceFullName: string[] = arrayName.slice(1);
    lastName = sliceFullName.join(' ');
  } else {
    lastName = C.brolDefaultLastName;
  }
  fullName = `${firstName} ${lastName}`;
  return {
    fullName,
    firstName,
    lastName,
  };
}

function isValidPhone(phone: any) {
  if (phone === undefined || phone === null) {
    return false;
  }
  if (phone.length === 0) {
    return true;
  } else {
    const re = /^\d{1,2}-?\d{6,7}$|^\*\d{3}$|^\d{4,5}$/;
    return re.test(phone[0]);
  }
}

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
      if (kartoffelParams.upn !== undefined) {
        const getJobTitle = splitFullName(kartoffelParams.jobTitle);
        message.data.firstName = getJobTitle.firstName;
        message.data.lastName = getJobTitle.lastName;
        message.data.fullName = getJobTitle.fullName;
        message.data.upn = kartoffelParams.upn;
      }
      break;
    case RequestType.CREATE_ENTITY:
      message.data = {
        firstName: kartoffelParams.firstName,
        lastName: kartoffelParams.lastName,
        identityCard: kartoffelParams.identityCard,
        clearance: kartoffelParams.clearance,
        sex:
          !kartoffelParams.sex || kartoffelParams.sex === ''
            ? undefined
            : kartoffelParams.sex,
        birthDate: kartoffelParams.birthdate,
        entityType: kartoffelParams.entityType,
      };
      if (isValidMobilePhone(kartoffelParams.mobilePhone)) {
        message.data.mobilePhone = kartoffelParams.phone;
      } else if (isValidPhone(kartoffelParams.phone)) {
        message.data.phone = kartoffelParams.phone;
      }
      if (kartoffelParams.entityType === C.soldier) {
        message.data.personalNumber = kartoffelParams.personalNumber;
        message.data.rank = kartoffelParams.rank;
        message.data.serviceType = kartoffelParams.serviceType;
      } else if (kartoffelParams.entityType === C.external) {
        message.data.organization = kartoffelParams.organization;
        message.data.employeeNumber = kartoffelParams.employeeNumber;
      }
      break;
    case RequestType.ASSIGN_ROLE_TO_ENTITY:
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
        needDisconnect: kartoffelParams.needDisconnect,
      };
      if (
        !kartoffelParams.needDisconnect ||
        kartoffelParams.needDisconnect === undefined ||
        kartoffelParams.needDisconnect === null
      ) {
        message.data.needDisconnect = false;
      }
      if (kartoffelParams.upn !== undefined) {
        message.data.upn = kartoffelParams.upn;
      }
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
        clearance: kartoffelParams.clearance,
      };
      break;
    case RequestType.EDIT_ENTITY:
      message.data = {
        id: kartoffelParams.id,
        properties: {
          firstName: kartoffelParams.firstName,
          lastName: kartoffelParams.lastName,
        },
      };
      if (isValidMobilePhone(kartoffelParams.mobilePhone)) {
        message.data.properties.mobilePhone = kartoffelParams.mobilePhone;
      }
      if (kartoffelParams.birthdate) {
        message.data.properties.birthDate = kartoffelParams.birthdate;
      }
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
    case RequestType.CONVERT_ENTITY_TYPE:
      message.data = {
        id: kartoffelParams.id,
        uniqueId: kartoffelParams.uniqueId,
        newEntityType: kartoffelParams.newEntityType,
        upn: kartoffelParams.upn,
      };
      if (kartoffelParams.identifier) {
        message.data.identifier = kartoffelParams.identifier;
      }
      break;
    default:
      throw new Error('type not supported!');
  }
  return message;
}

export function generateADQueueMessage(
  request: Request,
  adStage: any = undefined
): any {
  if (adStage !== undefined) {
    adStage = typeof adStage === typeof '' ? aDStageFromJSON(adStage) : adStage;
  }
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
    // OG
    case RequestType.CREATE_OG: //Reviewed with Orin, CreateOU
      message.data = {
        ouDName: adParams.ouDisplayName,
        hierarchyOu: adParams.ouName,
        newOuName: adParams.name,
      };
      break;
    case RequestType.DELETE_OG:
      message.data = {
        displayName: adParams.ouDisplayName,
      };
    case RequestType.CREATE_ROLE: //reviewed with Orin, CreateRole
      if (request.adParams && request.adParams.upn !== undefined && request.adParams.upn !== null) {
        if (adStage === undefined || adStage === ADStage.FIRST_AD_STAGE) {
          //First Stage - Create Role
          message.id = `${message.id}@1`;
          message.data = {
            userID: adParams.samAccountName,
            ouName: adParams.ouDisplayName,
            roleName: adParams.jobTitle,
          };
        } else {
          message.id = `${message.id}@2`;
          //secondStage - treat it like ConnectNewRole
          message.type = C.shmuelRequestTypes[requestTypeToJSON(RequestType.ASSIGN_ROLE_TO_ENTITY)];
          const getJobTitle = splitFullName(adParams.jobTitle);
          message.data = {
            userID: adParams.samAccountName,
            UPN: `${adParams.upn}@${C.upnSuffix}`,
            firstName: getJobTitle.firstName,
            lastName: getJobTitle.lastName,
            fullName: getJobTitle.fullName,
            rank: "לא ידוע",
            ID: adParams.samAccountName,
            // pdoName: 'x',
          };
        }
      } else {
        message.data = {
          userID: adParams.samAccountName,
          ouName: adParams.ouDisplayName,
          roleName: adParams.jobTitle,
        };
      }
      break;
    case RequestType.ASSIGN_ROLE_TO_ENTITY: //reviewed with Orin
      if (request.kartoffelParams?.needDisconnect && adParams.oldSAMAccountName) {
        //MoveRole
        message.data = {
          samAccountName: adParams.oldSAMAccountName,
          toSamAccountName: adParams.newSAMAccountName,
          upn: `${adParams.upn}@${C.upnSuffix}`,
          firstName: adParams.firstName,
          lastName: adParams.lastName,
          fullName: adParams.fullName,
          nickname: adParams.fullName,
          rank: adParams.rank ? adParams.rank : "לא ידוע",
          jobNumber: "0",
        };
      } else {
        //ConnectNewRole
        message.data = {
          userID: adParams.newSAMAccountName,
          UPN: `${adParams.upn}@${C.upnSuffix}`,
          firstName: adParams.firstName,
          lastName: adParams.lastName,
          fullName: adParams.fullName,
          rank: adParams.rank ? adParams.rank : "לא ידוע",
          ID: adParams.newSAMAccountName,
          // pdoName: 'x',
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
        samAccountName: adParams.samAccountName,
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
    case RequestType.CONVERT_ENTITY_TYPE:
      message.data = {
        samAccountName: adParams.samAccountName,
        firstName: adParams.firstName,
        lastName: adParams.lastName,
        fullName: adParams.fullName,
        roleSerialCode: adParams.roleSerialCode,
      };
      if (adParams.upn) {
        message.data.upn = adParams.upn;
      } else if (adParams.rank) {
        message.data.rank = adParams.rank;
      }
      break;
    default:
      throw new Error("type not supported!");
  }
  return message;
}
