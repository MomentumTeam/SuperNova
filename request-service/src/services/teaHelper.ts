import {
  Domain,
  ReportTeaReq,
  RetrieveByEntityIdReq,
  RetrieveTeaByUnitReq,
} from '../interfaces/protoc/proto/teaService';
import TeaService from './teaService';

export async function reportTeaFail(tea: string) {
  let reportTeaReq: ReportTeaReq = {
    tea: tea,
  };
  const successMessage = await TeaService.reportTeaFail(reportTeaReq);
  return successMessage.success;
}

export async function retrieveTeaByUnit(unit: string) {
  let retrieveTeaByUnitReq: RetrieveTeaByUnitReq = {
    id: unit,
  };
  const teaMessage = await TeaService.retrieveTeaByUnit(retrieveTeaByUnitReq);
  return teaMessage.tea;
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
