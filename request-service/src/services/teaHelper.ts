import {
  Domain,
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveTeaByOGIdReq,
  RetrieveByIdentifierReq,
} from '../interfaces/protoc/proto/teaService';
import TeaService from './teaService';

export async function reportTeaFail(tea: string) {
  let reportTeaReq: ReportTeaReq = {
    tea: tea,
  };
  const successMessage = await TeaService.reportTeaFail(reportTeaReq);
  return successMessage.success;
}

export async function retrieveTeaByOGId(id: string) {
  let retrieveTeaByOGIdReq: RetrieveTeaByOGIdReq = {
    id: id,
  };
  const teaMessage = await TeaService.retrieveTeaByOGId(retrieveTeaByOGIdReq);
  return teaMessage;
}

export async function retrieveUPNByEntityId(
  id: string,
  entityType: any = undefined
) {
  let retrieveUPNByEntityIdReq: RetrieveByEntityIdReq = {
    entityId: id,
    domain: Domain.OLD,
  };
  if (entityType !== undefined) {
    retrieveUPNByEntityIdReq.entityType = entityType;
  }
  const upnMessage = await TeaService.retrieveUPNByEntityId(
    retrieveUPNByEntityIdReq
  );
  return upnMessage.upn;
}

export async function retrieveUPNByIdentifier(
  entityType: string,
  identifier: string
) {
  let retrieveByIdentifierReq: RetrieveByIdentifierReq = {
    entityType: entityType,
    identifier: identifier,
    domain: Domain.OLD,
  };
  const upnMessage = await TeaService.retrieveUPNByIdentifier(
    retrieveByIdentifierReq
  );
  return upnMessage.upn;
}

export async function retrieveBrol() {
  const upnMessage = await TeaService.retrieveBrol();
  return upnMessage.upn;
}
