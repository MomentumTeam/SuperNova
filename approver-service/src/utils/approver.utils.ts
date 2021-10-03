import { Approver } from '../interfaces/protoc/proto/approverService';
import {
  DigitalIdentity,
  Entity,
  EntityArray,
} from '../interfaces/protoc/proto/kartoffelService';
import * as C from '../config';
import {
  ApproverType,
  approverTypeFromJSON,
} from '../interfaces/protoc/proto/requestService';

export function cleanUnderscoreFields(document: any): void {
  Object.keys(document).map((key) => {
    if (key.startsWith('_') && key !== '_id') delete document[key];
  });
}

export function turnObjectIdsToStrings(document: any): void {
  //_id
  if (document._id) {
    document._id = document._id.toString();
    document.id = document._id;
  }

  //entityId
  if (document.entityId) {
    document.entityId = document.entityId.toString();
  }

  //type
  if (document.type) {
    document.type = document.type as ApproverType;
  }

  cleanUnderscoreFields(document);
}

export function hasCommanderRank(entity: Entity): boolean {
  return C.commanderRanks.indexOf(entity.rank) != -1;
}

export function getMongoApproverArray(approverMongoArray: any): Approver[] {
  if (approverMongoArray) {
    const documents = approverMongoArray.map((approverMongo: any) => {
      const requestObj: any = approverMongo.toObject();
      turnObjectIdsToStrings(requestObj);
      return requestObj;
    });

    return documents as Approver[];
  } else {
    return [];
  }
}

export function approverTypeValidation(type: ApproverType): ApproverType {
  type = approverTypeFromJSON(type);
  if (type === ApproverType.UNKNOWN || type === ApproverType.UNRECOGNIZED) {
    throw Error('unsupported type');
  }

  return type;
}

export function getApproverArrayByEntityArray(
  entityArray: EntityArray,
  type: ApproverType
): Approver[] {
  try {
    return entityArray.entities.map((entity: Entity) => {
      return {
        entityId: entity.id,
        displayName: entity.displayName,
        domainUsers: entity.digitalIdentities.map((di: DigitalIdentity) => {
          return di.mail;
        }), //entity may have multiple emails
        type: type,
        akaUnit: entity.akaUnit,
        id: entity.id,
      };
    });
  } catch (error) {
    throw error;
  }
}
