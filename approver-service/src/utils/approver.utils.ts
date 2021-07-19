import { Approver, UserType } from '../interfaces/protoc/proto/approverService';
import {
  DigitalIdentity,
  Entity,
  EntityArray,
} from '../interfaces/protoc/proto/kartoffelService';

export function cleanUnderscoreFields(document: any): void {
  let keys: any = Object.keys(document);

  for (let key of keys) {
    if (key.startsWith('_') && key !== '_id') {
      delete document[key];
    }
  }
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
    document.type = document.type as UserType;
  }

  cleanUnderscoreFields(document);
}

export function getMongoApproverArray(approverMongoArray: any): Approver[] {
  if (approverMongoArray) {
    let documents: any = [];
    for (let i = 0; i < approverMongoArray.length; i++) {
      const requestObj: any = approverMongoArray[i].toObject();
      turnObjectIdsToStrings(requestObj);
      documents.push(requestObj);
    }
    return documents as Approver[];
  } else {
    return [];
  }
}

export function getApproverArrayByEntityArray(
  entityArray: EntityArray,
  type: UserType
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
