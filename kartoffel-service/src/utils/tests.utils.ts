import { DiManager } from '../digitalIdentities/di.manager';
import { EntitiesManager } from '../entities/entities.manager';
import { GroupsManager } from '../groups/groups.manager';
import {
  CreateRoleRequest,
  CreateOGRequest,
  DigitalIdentity,
  Entity,
  IdMessage,
  OrganizationGroup,
  Role,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { RolesManager } from '../roles/roles.manager';
import { KartoffelUtils } from './kartoffel.utils';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

// Managers
const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);
const groupsManager: GroupsManager = new GroupsManager(
  kartoffelUtils,
  kartoffelFaker
);
const rolesManager: RolesManager = new RolesManager(
  kartoffelUtils,
  kartoffelFaker
);
const entitiesManager: EntitiesManager = new EntitiesManager(
  kartoffelUtils,
  kartoffelFaker
);

export const getRandomEntity = async () => {
  const randomEntity = await kartoffelFaker.randomEntityForTests();
  return randomEntity;
};
export const createRandomEntity = async (randomEntity: Entity) => {
  const id: IdMessage = await entitiesManager.createEntity({
    firstName: randomEntity.firstName,
    lastName: randomEntity.lastName,
    entityType: randomEntity.entityType,
    identityCard: randomEntity.identityCard,
    personalNumber: randomEntity.personalNumber,
    phone: [],
    mobilePhone: [],
    rank: randomEntity.rank,
  });

  return id;
};

export const getRandomDI = () => {
  const randomDI: DigitalIdentity = kartoffelFaker.randomDI();
  return randomDI;
};

export const createRandomDI = async (randomDI: DigitalIdentity) => {
  return await diManager.createDI({
    uniqueId: randomDI.uniqueId,
    isRoleAttachable: true,
    source: randomDI.source,
    type: randomDI.type,
    mail: randomDI.mail,
  });
};

export const getRandomRole = () => {
  // TODO: get group
  let directGroup = '619e31e9f235dc001846e2f7';
  const randomRole: Role = kartoffelFaker.randomRole();
  randomRole.directGroup = directGroup;

  return randomRole;
};

export const getRandomOG = async () => {
  let directGroup = '619e31e9f235dc001846e2f7';
  let diPrefix = '1769';
  const randomOG: OrganizationGroup = await kartoffelFaker.randomOG();
  randomOG.directGroup = directGroup;
  randomOG.diPrefix = diPrefix;
  return randomOG;
};

export const createRandomOG = async (randomOG: OrganizationGroup) => {
  const req: CreateOGRequest = {
    name: randomOG.name,
    directGroup: randomOG.directGroup,
    source: randomOG.source,
    diPrefix: randomOG.diPrefix,
  };
  return await groupsManager.createOG(req);
};

export const createRandomRole = async (randomRole: Role) => {
  // create role
  const req: CreateRoleRequest = {
    directGroup: randomRole.directGroup,
    jobTitle: randomRole.jobTitle,
    source: randomRole.source,
    roleId: randomRole.roleId,
  };
  return await rolesManager.createRole(req);
};
