require('../envload');
import { expect } from 'chai';
import { DiManager } from '../digitalIdentities/di.manager';
import { EntitiesManager } from '../entities/entities.manager';
import {
  DigitalIdentity,
  Entity,
  Role,
  RoleArray,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import {
  createRandomDI,
  createRandomEntity,
  createRandomRole,
  getRandomDI,
  getRandomEntity,
  getRandomRole,
} from '../utils/tests.utils';
import { RolesManager } from './roles.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const rolesManager: RolesManager = new RolesManager(
  kartoffelUtils,
  kartoffelFaker
);
const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);
const entitiesManager: EntitiesManager = new EntitiesManager(
  kartoffelUtils,
  kartoffelFaker
);

// TODO: get the first and second group
let secondDirectGroup = '6184af552da7760011342d0d';
const randomRole: Role = getRandomRole();
const randomDI: DigitalIdentity = getRandomDI();
let randomEntity: Entity;

console.log(randomDI);
console.log(randomRole);

const timeout = 7000;
describe('Roles Manager', () => {
  before('create di and entity', async () => {
    randomEntity = await getRandomEntity();
    const id = await createRandomEntity(randomEntity);
    randomEntity.id = id.id;

    await createRandomDI(randomDI);
  });

  beforeEach((done) => setTimeout(done, timeout));

  describe('CreateRole', () => {
    it('create role', async () => {
      const res = await createRandomRole(randomRole);
      expect(res).to.be.exist;
    });

    it('create the same role', async () => {
      let res;
      try {
        res = await createRandomRole(randomRole);
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `role: ${randomRole.roleId} already exists`
        );
      }
      expect(res).not.to.be.exist;
    });
  });

  describe('GetAllRoles', () => {
    it('get all roles', async () => {
      const roles = await rolesManager.getAllRoles({ page: 1, pageSize: 50 });
      expect(roles).to.be.exist;
      expect(roles).to.be.an('array');
      expect(roles).to.have.length.within(0, 50);
    });
  });

  describe('GetRoleByRoleId', () => {
    it('should get 1 role', async () => {
      const role: Role = await rolesManager.getRoleByRoleId({
        roleId: randomRole.roleId,
      });
      expect(role).to.be.exist;
      expect(role.roleId.toLowerCase()).to.be.equal(
        randomRole.roleId.toLowerCase()
      );

      randomRole.hierarchy = role.hierarchy;
    });
  });

  describe('GetRolesUnderOG', () => {
    it('get all roles under og', async () => {
      const roles: RoleArray = await rolesManager.getRolesUnderOG({
        groupId: randomRole.directGroup,
        page: 1,
        pageSize: 50,
        direct: true,
      });
      expect(roles).to.be.exist;
      expect(roles.roles).to.be.an('array');
      expect(roles.roles).to.have.length.within(0, 50);
    });
  });

  describe('ConnectRoleAndDI', () => {
    it('connect role and di', async () => {
      const successMessage = await rolesManager.connectRoleAndDI({
        roleId: randomRole.roleId,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it('get role', async () => {
      const role = await rolesManager.getRoleByRoleId({
        roleId: randomRole.roleId,
      });
      expect(role.digitalIdentityUniqueId.toLowerCase()).to.be.equal(
        randomDI.uniqueId.toLowerCase()
      );
    });

    it('get di by role id - should be exists', async () => {
      const di = await diManager.getDIByRoleId({ roleId: randomRole.roleId });
      expect(di.uniqueId.toLowerCase()).to.be.equal(
        randomDI.uniqueId.toLowerCase()
      );
    });

    it('delete role', async () => {
      let res;
      try {
        res = await rolesManager.deleteRole({ roleId: randomRole.roleId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `role: ${randomRole.roleId.toLowerCase()} is connected to a digital Identity`
        );
      }
      expect(res).not.to.be.exist;
    });

    it('delete di', async () => {
      let res;
      try {
        res = await diManager.deleteDI({ id: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `digital identity: ${randomDI.uniqueId.toLowerCase()} is connected to role`
        );
      }
      expect(res).not.to.be.exist;
    });
  });

  describe('IsRoleAlreadyTaken', () => {
    it('check if role alreay taken, should be false', async () => {
      const res = await rolesManager.isRoleAlreadyTaken({
        roleId: randomRole.roleId,
      });
      expect(res.isRoleAlreadyTaken).to.be.false;
    });

    it('connect di and entity', async () => {
      await entitiesManager.connectEntityAndDI({
        id: randomEntity.id,
        uniqueId: randomDI.uniqueId,
      });
    });

    it('check if role alreay taken, should be true', async () => {
      const res = await rolesManager.isRoleAlreadyTaken({
        roleId: randomRole.roleId,
      });
      expect(res.isRoleAlreadyTaken).to.be.true;
    });
  });

  describe('DisconnectRoleAndDI', () => {
    it('disconnect role and di', async () => {
      const successMessage = await rolesManager.disconnectRoleAndDI({
        roleId: randomRole.roleId,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it('get di by role id', async () => {
      let di;
      try {
        di = await diManager.getDIByRoleId({ roleId: randomRole.roleId });
      } catch (error: any) {
        if (error.response?.data?.status)
          expect(error.response.data.status).to.equal(404);
      }

      expect(di).not.to.be.exist;
    });

    it('check if role alreay taken, should be false', async () => {
      const res = await rolesManager.isRoleAlreadyTaken({
        roleId: randomRole.roleId,
      });
      expect(res.isRoleAlreadyTaken).to.be.false;
    });
  });

  describe('GetRolesByHierarchy', () => {
    it('GetRolesByHierarchy', async () => {
      const roles: RoleArray = await rolesManager.getRolesByHierarchy({
        hierarchy: randomRole.hierarchy,
        direct: true,
        page: 1,
        pageSize: 50,
      });

      expect(roles).to.be.exist;
      expect(roles.roles).to.be.an('array');
      expect(roles.roles).to.have.length.within(0, 50);
    });
  });

  describe('IsJobTitleAlreadyTaken', () => {
    it('is job title exists - should be true', async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: randomRole.jobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.true;
      expect(res.suggestions).to.be.an('array');
      expect(res.suggestions).to.have.length.greaterThan(0);
    });
  });

  describe('RenameRole', () => {
    const newJobTitle = kartoffelFaker.randomJobTitle();

    it('change name for role', async () => {
      const successMessage = await rolesManager.renameRole({
        roleId: randomRole.roleId,
        jobTitle: newJobTitle,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('get the same role', async () => {
      const role = await rolesManager.getRoleByRoleId({
        roleId: randomRole.roleId,
      });
      expect(role).to.be.exist;
      expect(role.roleId.toLowerCase()).to.be.equal(
        randomRole.roleId.toLowerCase()
      );
      expect(role.jobTitle.toLowerCase()).to.be.equal(
        newJobTitle.toLowerCase()
      );
    });

    it('is old job title exists - should be false', async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: randomRole.jobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.false;
      expect(res.suggestions).to.be.an('array');
      expect(res.suggestions).to.have.length(0);
    });

    it('is new job title exists - should be true', async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: newJobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.true;
      expect(res.suggestions).to.be.an('array');
      expect(res.suggestions).to.have.length.greaterThan(0);
    });
  });

  describe('ChangeRoleOG', () => {
    it('change role og', async () => {
      const successMessage = await rolesManager.changeRoleOG({
        roleId: randomRole.roleId,
        groupId: secondDirectGroup,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it('check if the group id is changed', async () => {
      const role = await rolesManager.getRoleByRoleId({
        roleId: randomRole.roleId,
      });
      expect(role.directGroup).to.be.equal(secondDirectGroup);
    });

    // TODO: change role to group with existing jobtitle
  });

  describe('DeleteRole', () => {
    it('delete role', async () => {
      const successMessage: SuccessMessage = await rolesManager.deleteRole({
        roleId: randomRole.roleId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('check if deleted', async () => {
      let role;
      try {
        role = await rolesManager.getRoleByRoleId({
          roleId: randomRole.roleId,
        });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
      expect(role).not.to.be.exist;
    });
  });

  after(async () => {
    await diManager.deleteDI({ id: randomDI.uniqueId });
  });
});
