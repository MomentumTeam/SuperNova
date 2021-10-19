import {
  Domain,
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveTeaByOGIdReq,
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

export async function retrieveUPNByEntityId(id: string) {
  let retrieveUPNByEntityIdReq: RetrieveByEntityIdReq = {
    entityId: id,
    domain: Domain.OLD,
  };
  const upnMessage = await TeaService.retrieveUPNByEntityId(
    retrieveUPNByEntityIdReq
  );
  return upnMessage.upn;
}
