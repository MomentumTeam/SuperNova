import KartoffelService from '../services/kartoffelService';
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
  DeleteEntityRequest,
  ChangeRoleOGRequest,
  ConnectEntityAndDIRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../utils/logger';

export const createOG = async (createOGRequest: any) => {
  try {
    logger.info('createOG request received.', createOGRequest);
    const { name, directGroup, source } = createOGRequest;
    const newOrganizationGroup: OrganizationGroup =
      await KartoffelService.createOG({
        name: name,
        directGroup: createOGRequest.parent,
        source: source,
      });
    logger.info('Successfuly created OG', {
      newOrganizationGroup,
    });
    return newOrganizationGroup.id;
  } catch (error) {
    throw error;
  }
};

// TODO: change data definition after looking at how this kind of requests are passed in kafka.
export const createRole = async (data: any) => {
  try {
    logger.info('createRole request received.', data);

    const { type, source, uniqueId, mail, isRoleAttachable, roleEntityType } =
      data;
    const newDI: DigitalIdentity = await KartoffelService.createDI({
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
      roleId: roleId,
      source: source,
    });

    logger.info('Successfuly created Role', newRole);

    const successMessageKartoffel: SuccessMessage =
      await KartoffelService.connectRoleAndDI({
        roleId: newRole.roleId,
        uniqueId: newDI.uniqueId,
      });
    logger.info('Successfuly connected role and DI', successMessageKartoffel);

    if (roleEntityType === 'goalUser') {
      //If goal user
      const goalUserEntity = await KartoffelService.createEntity({
        firstName: jobTitle,
        lastName: '',
        entityType: 'goalUser',
        serviceType: 'goalUser',
        phone: [],
        mobilePhone: [],
      });
      await KartoffelService.connectEntityAndDI({
        id: goalUserEntity.id,
        uniqueId: newDI.uniqueId,
      });
    }
    return newRole.roleId;
  } catch (error) {
    throw error;
  }
};

export const createEntity = async (
  createEntityRequest: CreateEntityRequest
) => {
  try {
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
    logger.info('createEntity request received', createEntityRequest);

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
    logger.info('Successfuly created Entity', createdEntity);
    return createdEntity.id;
  } catch (error) {
    throw error;
  }
};

export const connectEntityAndDI = async (connectEntityAndDIReq: any) => {
  try {
    logger.info(
      'connectEntityAndDIReq request received',
      connectEntityAndDIReq
    );

    const { id, uniqueId, needToDisconnect } = connectEntityAndDIReq;
    if (needToDisconnect) {
      const entity: Entity = await KartoffelService.getEntityById({ id: id });
      for (let currentDi of entity.digitalIdentities) {
        if (currentDi.source === 'oneTree') {
          await KartoffelService.disconnectDIFromEntity({
            id: id,
            uniqueId: uniqueId,
          });
          break;
        }
      }
    }
    const successMessage: SuccessMessage =
      await KartoffelService.connectEntityAndDI({
        id: id,
        uniqueId: uniqueId,
      });
    logger.info('Successfuly assigned role to entity', successMessage);
  } catch (error) {
    throw error;
  }
};

export const deleteOG = async (deleteOGrequest: DeleteOGRequest) => {
  try {
    logger.info('deleteOG request received', deleteOGrequest);
    const { id } = deleteOGrequest;
    const successMessage: SuccessMessage = await KartoffelService.deleteOG({
      id: id,
    });
    logger.info('Successfuly deleted OG', successMessage);
  } catch (error) {
    throw error;
  }
};

export const deleteRole = async (deleteRoleRequest: DeleteRoleRequest) => {
  try {
    logger.info('deleteRole request received', deleteRoleRequest);
    const { roleId } = deleteRoleRequest;
    const successMessage: SuccessMessage = await KartoffelService.deleteRole({
      roleId,
    });
    logger.info('Successfuly deleted role', successMessage);
  } catch (error) {
    throw error;
  }
};

export const deleteEntity = async (
  deleteEntityRequest: DeleteEntityRequest
) => {
  try {
    logger.info('deleteEntity request received', deleteEntityRequest);
    const successMessage: SuccessMessage = await KartoffelService.deleteEntity(
      deleteEntityRequest
    );
    logger.info('Successfuly deleted entity', successMessage);
  } catch (error) {
    throw error;
  }
};

export const renameRole = async (renameRoleRequest: RenameRoleRequest) => {
  try {
    logger.info('renameRole request received', renameRoleRequest);
    const { jobTitle, roleId } = renameRoleRequest;
    const successMessage: SuccessMessage = await KartoffelService.renameRole({
      roleId: roleId,
      jobTitle: jobTitle,
    });
    logger.info('Successfuly renamed role', successMessage);
  } catch (error) {
    throw error;
  }
};

export const renameOG = async (renameOGRequest: RenameOGRequest) => {
  try {
    logger.info('renameOG request received', renameOGRequest);
    const { name, id } = renameOGRequest;
    const successMessage: SuccessMessage = await KartoffelService.renameOG({
      id: id,
      name: name,
    });
    logger.info('Successfuly renamed OG', successMessage);
  } catch (error) {
    throw error;
  }
};

export const updateEntity = async (
  updateEntityRequest: UpdateEntityRequest
) => {
  try {
    logger.info('updateEntity request received', updateEntityRequest);
    const { id, properties } = updateEntityRequest;
    const successMessage: SuccessMessage = await KartoffelService.updateEntity({
      id: id,
      properties: properties,
    });
    logger.info('Successfuly updated Entity', successMessage);
  } catch (error) {
    throw error;
  }
};

export const disconnectRoleAndDI = async (
  disconnectRoleAndDIRequest: DisconnectRoleAndDIRequest
) => {
  try {
    logger.info(
      'disconnectRoleAndDI request received',
      disconnectRoleAndDIRequest
    );
    const { roleId, uniqueId } = disconnectRoleAndDIRequest;
    const successMessage: SuccessMessage =
      await KartoffelService.disconnectRoleAndDI({
        roleId: roleId,
        uniqueId: uniqueId,
      });
    logger.info('Successfuly disconnected role from DI', successMessage);
  } catch (error) {
    throw error;
  }
};

export const changeRoleOG = async (changeRoleHierarchyReq: any) => {
  try {
    logger.info('changeRoleOG request received', changeRoleHierarchyReq);
    const { roleId, groupId } = changeRoleHierarchyReq;
    await KartoffelService.changeRoleOG({
      roleId: roleId,
      groupId: groupId,
    });
    logger.info('Successfuly changeRoleOG', {
      changeRoleHierarchyReq,
    });
    if (changeRoleHierarchyReq.newJobTitle) {
      await KartoffelService.renameRole({
        roleId: roleId,
        jobTitle: changeRoleHierarchyReq.newJobTitle,
      });
      logger.info('Successfuly renamed role', {
        changeRoleHierarchyReq,
      });
    }
  } catch (error) {
    throw error;
  }
};
