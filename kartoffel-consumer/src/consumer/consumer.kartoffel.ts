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
} from '../interfaces/protoc/proto/kartoffelService';
import { logger } from '../utils/logger';
import { config } from '../config';

export const createOG = async (createOGRequest: any) => {
  try {
    logger.info('createOG request received.', createOGRequest);
    const { name, directGroup, source } = createOGRequest;
    const newOrganizationGroup: OrganizationGroup =
      await KartoffelService.createOG({
        name: name,
        directGroup: directGroup,
        source: config.defaultRoleSource,
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

    const {
      type,
      source,
      uniqueId,
      mail,
      isRoleAttachable,
      roleEntityType,
      clearance,
      upn,
    } = data;
    const newDI: DigitalIdentity = await KartoffelService.createDI({
      isRoleAttachable: isRoleAttachable,
      mail: mail,
      source: config.defaultDISource,
      type: config.domainUser,
      uniqueId: uniqueId,
    });
    logger.info('Successfuly created DI', newDI);

    const { jobTitle, directGroup, roleId } = data;
    const newRole: Role = await KartoffelService.createRole({
      jobTitle: jobTitle,
      directGroup: directGroup,
      roleId: roleId,
      source: config.defaultRoleSource,
      clearance: clearance,
    });

    logger.info('Successfuly created Role', newRole);

    const successMessageKartoffel: SuccessMessage =
      await KartoffelService.connectRoleAndDI({
        roleId: newRole.roleId,
        uniqueId: newDI.uniqueId,
      });
    logger.info('Successfuly connected role and DI', successMessageKartoffel);

    if (roleEntityType === config.goalUser && upn) {
      //If goal user
      const goalUserEntity = await KartoffelService.createEntity({
        firstName: jobTitle,
        lastName: jobTitle,
        entityType: config.goalUser,
        phone: [],
        mobilePhone: [],
        goalUserId: newDI.uniqueId,
      });
      await KartoffelService.connectEntityAndDI({
        id: goalUserEntity.id,
        uniqueId: newDI.uniqueId,
        upn: upn,
      });
    }
    return newRole.roleId;
  } catch (error) {
    throw error;
  }
};

export const createEntity = async (createEntityRequest: any) => {
  try {
    const {
      firstName,
      lastName,
      identityCard,
      personalNumber,
      phone,
      mobilePhone,
      clearance,
      sex,
      birthDate,
    } = createEntityRequest;
    logger.info('createEntity request received', createEntityRequest);

    const createdEntity: Entity = await KartoffelService.createEntity({
      firstName: firstName,
      lastName: lastName && lastName !== '' ? lastName : firstName,
      identityCard: identityCard,
      personalNumber: personalNumber,
      phone: phone,
      mobilePhone: mobilePhone,
      clearance: clearance,
      sex: sex,
      birthDate: birthDate,
      entityType: config.civilian,
      rank: config.civilianDefaultRank,
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

    const { id, uniqueId, needDisconnect, upn } = connectEntityAndDIReq;
    try {
      const currentEntityWithUniqueId = await KartoffelService.getEntityByDI({
        uniqueId: uniqueId,
      });
      await KartoffelService.disconnectDIFromEntity({
        id: currentEntityWithUniqueId.id,
        uniqueId: uniqueId,
      });
    } catch (disconnectError: any) {
      logger.info('UniqueId is probably not connected to entity', {
        connectEntityAndDIReq,
        message: disconnectError.message,
      });
    }
    if (needDisconnect) {
      const entity: Entity = await KartoffelService.getEntityById({ id: id });
      for (let currentDI of entity.digitalIdentities) {
        if (config.diSources.includes(currentDI.source)) {
          await KartoffelService.disconnectDIFromEntity({
            id: id,
            uniqueId: currentDI.uniqueId,
          });
        }
      }
    }
    const body: any = {
      id: id,
      uniqueId: uniqueId,
    };
    if (upn !== undefined && config.sendUPNToKartoffel) {
      body.upn = upn;
    }
    const successMessage: SuccessMessage =
      await KartoffelService.connectEntityAndDI(body);
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
    const { roleId, directGroup } = changeRoleHierarchyReq;
    await KartoffelService.changeRoleOG({
      roleId: roleId,
      groupId: directGroup,
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
