import {
  Request,
  requestTypeFromJSON,
  RequestType,
} from '../interfaces/protoc/proto/requestService';
import {
  IsRollbackValidReq,
  RollbackReq,
  IsRollbackValidRes,
  RollbackRes,
} from '../interfaces/protoc/proto/rollbackService';
import {
  DigitalIdentity,
  Entity,
  IsJobTitleAlreadyTakenRes,
  OrganizationGroup,
  Role,
} from '../interfaces/protoc/proto/kartoffelService';

import { logger } from '../logger';
import ProducerService from '../services/producer.service';
import RequestService from '../services/request.service';
import KartoffelService from '../services/kartoffel.service';
import ApproverService from '../services/approver.service';
import * as C from '../config';

export class RollbackRepository {
  async isRollbackValid(
    isRollbackValidReq: IsRollbackValidReq
  ): Promise<IsRollbackValidRes> {
    try {
      const request: Request = await RequestService.getRequestById({
        id: isRollbackValidReq.id,
      });
      const requestType =
        typeof request.type === typeof ''
          ? requestTypeFromJSON(request.type)
          : request.type;

      switch (requestType) {
        case RequestType.CREATE_ROLE:
        case RequestType.DISCONNECT_ROLE: {
          try {
            const uniqueId: DigitalIdentity =
              await KartoffelService.getDIByUniqueId({
                uniqueId: request.kartoffelParams?.uniqueId as any,
              });
            if (uniqueId.entityId) {
              return {
                isValid: false,
                message: 'DI is connected to an Entity',
              };
            } else {
              if (requestType === RequestType.DISCONNECT_ROLE) {
                const entity: Entity = await KartoffelService.getEntityById({
                  id: request.kartoffelParams?.id as any,
                });
                for (let currentDI of entity.digitalIdentities) {
                  if (
                    currentDI.uniqueId === request.kartoffelParams?.uniqueId
                  ) {
                    return {
                      isValid: false,
                      message:
                        'ERROR The user is already logged in to this role',
                    };
                  }
                }
                return {
                  isValid: true,
                  message: 'OK',
                };
              }
            }
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }

        case RequestType.CREATE_OG: {
          try {
            const og: OrganizationGroup = await KartoffelService.getOGById({
              id: request.kartoffelStatus?.createdId as any,
            });
            if (og.isLeaf) {
              return { isValid: true, message: 'OK' };
            } else {
              return { isValid: false, message: 'Error: The OG has children' };
            }
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }

        case RequestType.CREATE_ENTITY: {
          try {
            let identifier;

            switch (request.kartoffelParams?.entityType) {
              case C.civilian:
                identifier = request.kartoffelParams?.identityCard;
                break;
              case C.soldier:
                identifier = request.kartoffelParams?.personalNumber;
                break;
              case C.external:
                identifier = `${request.kartoffelParams?.organization}-${request.kartoffelParams?.employeeNumber}`;
                break;
            }

            await KartoffelService.getEntityByIdentifier(identifier as any);
            return { isValid: true, message: 'The entity exists' };
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }

        case RequestType.ASSIGN_ROLE_TO_ENTITY: {
          try {
            const getEntityByRoleId: Entity =
              await KartoffelService.getEntityByRoleId({
                roleId: request.kartoffelParams?.roleId,
              } as any);
            if (getEntityByRoleId.id === request.kartoffelParams?.id) {
              if (request.kartoffelParams.needDisconnect) {
                const oldUniqueId: DigitalIdentity =
                  await KartoffelService.getDIByUniqueId({
                    uniqueId: request.kartoffelParams.oldUniqueId as any,
                  });
                if (oldUniqueId.entityId) {
                  return {
                    isValid: false,
                    message: 'ERROR The previous position is already occupied',
                  };
                } else {
                  return { isValid: true, message: 'OK' };
                }
              } else {
                return { isValid: true, message: 'OK' };
              }
            } else {
              return {
                isValid: false,
                message: 'The entity is not linked to the position',
              };
            }
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }
        case RequestType.EDIT_ENTITY: {
          return { isValid: true, message: 'OK' };
        }
        case RequestType.RENAME_ROLE:
        case RequestType.RENAME_OG: {
          try {
            let jobTitle;
            let directGroup;
            if (requestType === RequestType.RENAME_ROLE) {
              const role: Role = await KartoffelService.getRoleByRoleId({
                roleId: request.kartoffelParams?.roleId as any,
              });
              jobTitle = request.kartoffelParams?.oldJobTitle;
              directGroup = role.directGroup;
            } else {
              const oldHierarchyArray: any =
                request.kartoffelParams?.oldHierarchy?.split('/');

              const og: OrganizationGroup = await KartoffelService.getOGById({
                id: request.kartoffelParams?.id as any,
              });
              jobTitle = oldHierarchyArray[oldHierarchyArray.length - 1];
              directGroup = og.directGroup;
            }
            const isAlreadyTaken: IsJobTitleAlreadyTakenRes =
              await KartoffelService.isJobTitleAlreadyTaken({
                jobTitle: jobTitle,
                directGroup: directGroup,
              } as any);
            if (isAlreadyTaken.isJobTitleAlreadyTaken) {
              return { isValid: false, message: 'Is already exists ' };
            } else {
              return { isValid: true, message: 'OK' };
            }
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }
        case RequestType.CHANGE_ROLE_HIERARCHY: {
          try {
            const og: OrganizationGroup = await KartoffelService.getOGById({
              id: request.kartoffelParams?.oldOGId as any,
            });
            if (og) {
              const role: Role = await KartoffelService.getRoleByRoleId({
                roleId: request.kartoffelParams?.roleId as any,
              });
              const isAlreadyTaken: IsJobTitleAlreadyTakenRes =
                await KartoffelService.isJobTitleAlreadyTaken({
                  jobTitle: role.jobTitle,
                  directGroup: request.kartoffelParams?.oldDirectGroup,
                } as any);
              if (isAlreadyTaken.isJobTitleAlreadyTaken) {
                return { isValid: false, message: 'Is already exists' };
              } else {
                return { isValid: true, message: 'OK' };
              }
            } else {
              return {
                isValid: false,
                message: 'ERROR: The previous hierarchy does not exist',
              };
            }
          } catch (error: any) {
            return { isValid: false, message: error.message };
          }
        }
        // case RequestType.DELETE_OG: {
        //   return { isValid: false, message: 'ERROR' };
        // }
        // case RequestType.DELETE_ROLE: {
        //   return { isValid: false, message: 'ERROR' };
        // }
        // case RequestType.DELETE_ENTITY: {
        //   try {
        //     let identifier;

        //     switch (request.kartoffelParams?.entityType) {
        //       case C.civilian:
        //         identifier = request.kartoffelParams?.identityCard;
        //         break;
        //       case C.soldier:
        //         identifier = request.kartoffelParams?.personalNumber;
        //         break;
        //       case C.external:
        //         identifier = request.kartoffelParams?.employeeId;
        //         break;
        //     }

        //     await KartoffelService.getEntityByIdentifier(identifier as any);
        //     return { isValid: false, message: 'The entity already exists ' };
        //   } catch {
        //     return { isValid: true, message: 'OK' };
        //   }
        // }
        default: {
          return {
            isValid: false,
            message: 'type not supported!',
          };
        }
      }
    } catch (error: any) {
      logger.error('isRollbackValid ERROR', {
        error: { message: error.message },
        isRollbackValidReq,
      });
      return { isValid: false, message: error.message };
    }
  }

  async rollbackInAD(rollbackReq: RollbackReq): Promise<RollbackRes> {
    try {
      const isRollbackValid: IsRollbackValidRes = await this.isRollbackValid(
        rollbackReq
      );
      if (isRollbackValid.isValid === true) {
        await ProducerService.produceToADQueue({
          id: rollbackReq.id,
          isRollback: true,
        });
        return {
          success: true,
          message: 'rollback in AD valid',
        };
      } else {
        return {
          success: false,
          message: 'rollback in AD is invalid',
        };
      }
    } catch (error: any) {
      logger.error('rollbackInAD ERROR', {
        error: { message: error.message },
        rollbackReq,
      });
      throw error;
    }
  }

  async rollbackInKartoffel(rollbackReq: RollbackReq): Promise<RollbackRes> {
    try {
      const isRollbackValid: any = this.isRollbackValid(rollbackReq);
      if (isRollbackValid === true) {
        await ProducerService.produceToKartoffelQueue({
          id: rollbackReq.id,
          isRollback: true,
        });
        return {
          success: true,
          message: 'rollback in Kartoffel valid',
        };
      } else {
        return {
          success: false,
          message: 'rollback in Kartoffel is invalid',
        };
      }
    } catch (error: any) {
      logger.error('rollbackInKartoffel ERROR', {
        error: { message: error.message },
        rollbackReq,
      });
      throw error;
    }
  }
}
