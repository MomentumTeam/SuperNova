import {
  ApproverType,
  approverTypeFromJSON,
} from '../interfaces/requestService';

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

export function approverTypeValidation(type: ApproverType): ApproverType {
  type = approverTypeFromJSON(type);
  if (type === ApproverType.UNKNOWN || type === ApproverType.UNRECOGNIZED) {
    throw Error('unsupported type');
  }

  return type;
}

