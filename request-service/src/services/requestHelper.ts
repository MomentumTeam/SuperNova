import { requestTypeFromJSON } from '../interfaces/protoc/proto/requestService';

export function cleanUnderscoreFields(document: any): void {
  let keys: any = Object.keys(document);

  for (let key of keys) {
    if (key.startsWith('_') && key !== '_id') {
      delete document[key];
    }
  }
}

export function cleanNullFields(document: any): void {
  let keys: any = Object.keys(document);

  for (let key of keys) {
    if (
      typeof document[key] !== typeof true &&
      (!document[key] || document[key] == null)
    ) {
      delete document[key];
    }
  }
  if (document.kartoffelParams) {
    keys = Object.keys(document.kartoffelParams);

    for (let key of keys) {
      if (
        !document.kartoffelParams[key] ||
        document.kartoffelParams[key] == null
      ) {
        delete document.kartoffelParams[key];
      }
    }
  }
  if (document.adParams) {
    keys = Object.keys(document.adParams);

    for (let key of keys) {
      if (!document.adParams[key] || document.adParams[key] == null) {
        delete document.adParams[key];
      }
    }
  }
}

export function turnIdOfApproverToString(approver: any) {
  if (approver.id) {
    approver.id = approver.id.toString();
  }
  return approver;
}

export function turnObjectIdsToStrings(document: any): void {
  //   if (document.type) {
  //     document.type = requestTypeFromJSON(document.type);
  //   }
  //_id
  if (document._id) {
    document._id = document._id.toString();
    document.id = document._id;
  }

  //submittedBy
  if (document.submittedBy) {
    turnIdOfApproverToString(document.submittedBy);
  }

  //commanderDecision
  if (document.commanderDecision && document.commanderDecision.approver) {
    turnIdOfApproverToString(document.commanderDecision.approver);
  }

  //securityDecision
  if (document.securityDecision && document.securityDecision.approver) {
    turnIdOfApproverToString(document.securityDecision.approver);
  }

  //superSecurityDecision
  if (
    document.superSecurityDecision &&
    document.superSecurityDecision.approver
  ) {
    turnIdOfApproverToString(document.superSecurityDecision.approver);
  }

  //commanders
  if (document.commanders) {
    document.commanders.forEach((commander: any) => {
      turnIdOfApproverToString(commander);
    });
  }

  //securityApprovers
  if (document.securityApprovers) {
    document.securityApprovers.forEach((securityApprover: any) => {
      turnIdOfApproverToString(securityApprover);
    });
  }

  if (document.kartoffelProperties && document.kartoffelProperties.id) {
    document.kartoffelProperties.id =
      document.kartoffelProperties.id.toString();
  }

  if (document.bulkRequestId) {
    document.bulkRequestId = document.bulkRequestId.toString();
  }
  if (document.requestIds) {
    document.requestIds = document.requestIds.map((requestObjectId: any) =>
      requestObjectId.toString()
    );
  }
  cleanUnderscoreFields(document);
  cleanNullFields(document);
}
