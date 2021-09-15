import KartoffelService from './services/kartoffelService';
import {
  ConnectRoleAndDIRequest,
  CreateEntityRequest,
  CreateOGRequest,
  DeleteOGRequest,
  DeleteRoleRequest,
  DigitalIdentity,
  Entity,
  OrganizationGroup,
  Role,
  SuccessMessage,
  RenameRoleRequest,
  RenameOGRequest,
  UpdateEntityRequest,
  DisconnectRoleAndDIRequest,
} from './interfaces/protoc/proto/kartoffelService';
import { logger } from './logger';

export const createOG = async (createOGRequest: CreateOGRequest) => {
  logger.info('createOG request received.');
  const { name, parent, source } = createOGRequest;
  const newOrganizationGroup: OrganizationGroup =
    await KartoffelService.createOG({
      name: name,
      parent: parent,
      source: source,
    });
  logger.info('Successfuly created OG', newOrganizationGroup);

  return newOrganizationGroup.id;
};

// TODO: change data definition after looking at how this kind of requests are passed in kafka.
export const createRole = async (data: any) => {
  logger.info('createRole request received.');

  const { entityId, isRoleAttachable, mail, source, type, uniqueId } = data;
  const newDI: DigitalIdentity = await KartoffelService.createDI({
    entityId: entityId,
    isRoleAttachable: isRoleAttachable,
    mail: mail,
    source: source,
    type: type,
    uniqueId: uniqueId,
  });
  logger.info('Successfuly created DI', newDI);

  const { jobTitle, directGroup, roleId } = data;
  const newRole: Role = await KartoffelService.createRole({
    jobTitle: jobTitle,
    directGroup: directGroup,
    source: source,
    roleId: roleId,
  });

  logger.info('Successfuly created Role', newRole);

  const successMessage: SuccessMessage =
    await KartoffelService.connectRoleAndDI({
      id: newRole.roleId,
      uniqueId: newDI.uniqueId,
    });
  logger.info('Successfuly connected role and DI', successMessage);
  return newRole.roleId;
};

export const createEntity = async (
  createEntityRequest: CreateEntityRequest
) => {
  const {
    firstName,
    lastName,
    identityCard,
    personalNumber,
    serviceType,
    phone,
    mobilePhone,
    address,
    clearance,
    sex,
    birthDate,
    entityType,
    akaUnit,
    dischargeDay,
    rank,
  } = createEntityRequest;
  logger.info('createEntity request received');

  const createdEntity: Entity = await KartoffelService.createEntity({
    firstName: firstName,
    lastName: lastName,
    identityCard: identityCard,
    personalNumber: personalNumber,
    serviceType: serviceType,
    phone: phone,
    mobilePhone: mobilePhone,
    address: address,
    clearance: clearance,
    sex: sex,
    birthDate: birthDate,
    entityType: entityType,
    akaUnit: akaUnit,
    dischargeDay: dischargeDay,
    rank: rank,
  });
  logger.info('Successfuly created Entity', createEntity);
  return createdEntity.id;
};

export const assignRoleToEntity = async (
  connectRoleToDIReq: ConnectRoleAndDIRequest
) => {
  logger.info('assignRoleToEntity request received');

  const { id, uniqueId } = connectRoleToDIReq;
  const successMessage: SuccessMessage =
    await KartoffelService.connectRoleAndDI({ id: id, uniqueId: uniqueId });
  logger.info('Successfuly assigned role to entity', successMessage);
};

export const deleteOG = async (deleteOGrequest: DeleteOGRequest) => {
  logger.info('deleteOG request received');
  const { id } = deleteOGrequest;
  const successMessage: SuccessMessage = await KartoffelService.deleteOG({
    id: id,
  });
  logger.info('Successfuly deleted OG', successMessage);
};

export const deleteRole = async (deleteRoleRequest: DeleteRoleRequest) => {
  logger.info('deleteRole request received');
  const { roleId } = deleteRoleRequest;
  const successMessage: SuccessMessage = await KartoffelService.deleteRole({
    roleId: roleId,
  });
  logger.info('Successfuly deleted role', successMessage);
};

export const renameRole = async (renameRoleRequest: RenameRoleRequest) => {
  logger.info('renameRole request received');
  const { jobTitle, roleId } = renameRoleRequest;
  const successMessage: SuccessMessage = await KartoffelService.renameRole({
    roleId: roleId,
    jobTitle: jobTitle,
  });
  logger.info('Successfuly updated role', successMessage);
};

export const renameOG = async (renameOGRequest: RenameOGRequest) => {
  logger.info('renameOG request received');
  const { name, id } = renameOGRequest;
  const successMessage: SuccessMessage = await KartoffelService.renameOG({
    id: id,
    name: name,
  });
  logger.info('Successfuly updated OG', successMessage);
};

export const updateEntity = async (
  updateEntityRequest: UpdateEntityRequest
) => {
  logger.info('updateEntity request received');
  const { id, properties } = updateEntityRequest;
  const successMessage: SuccessMessage = await KartoffelService.updateEntity({
    id: id,
    properties: properties,
  });
  logger.info('Successfuly updated Entity', successMessage);
};

export const disconnectRoleAndDI = async (
  disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
) => {
  logger.info('disconnectRoleAndDI request received');
  const { roleId, uniqueId } = disconnectRoleAndDIRequest;
  const successMessage: SuccessMessage =
    await KartoffelService.disconnectRoleAndDI({
      roleId: roleId,
      uniqueId: uniqueId,
    });
  logger.info('Successfuly disconnected role from DI', successMessage);
};
