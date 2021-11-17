require("../envload");
import { expect } from "chai";
import { DiManager } from "../digitalIdentities/di.manager";
import {
  CreateRoleRequest,
  DigitalIdentity,
  Role,
  RoleArray,
  SuccessMessage,
} from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { RolesManager } from "./roles.manager";

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const rolesManager: RolesManager = new RolesManager(kartoffelUtils, kartoffelFaker);
const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

// TODO: get the first and second group
let directGroup = "6184af5e2da77600113431f7";
let secondDirectGroup = "6184af552da7760011342d0d";
const randomRole: Role = kartoffelFaker.randomRole();
randomRole.directGroup = directGroup;

const randomDI: DigitalIdentity = kartoffelFaker.randomDI();

console.log(randomDI);
console.log(randomRole);

const timeout = 5000;
describe("Roles Manager", () => {
  before("create di", async () => {
    const di = await diManager.createDI({
      uniqueId: randomDI.uniqueId,
      isRoleAttachable: true,
      source: randomDI.source,
      type: randomDI.type,
      mail: randomDI.mail,
    });

  });

  beforeEach((done) => setTimeout(done, timeout));

  const req: CreateRoleRequest = {
    directGroup: randomRole.directGroup,
    jobTitle: randomRole.jobTitle,
    source: randomRole.source,
    roleId: randomRole.roleId,
  };

  describe("CreateRole", () => {
    it("create role", async () => {
      const res = await rolesManager.createRole(req);
      expect(res).to.be.exist;
    });

    it("create the same role", async () => {
      try {
        const res = await rolesManager.createRole(req);
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(`role: ${randomRole.roleId} already exists`);
      }
    });
  });

  describe("GetAllRoles", () => {
    it("get all roles", async () => {
      const roles = await rolesManager.getAllRoles({ page: 1, pageSize: 50 });
      expect(roles).to.be.exist;
      expect(roles).to.be.an("array");
      expect(roles).to.have.length.within(0, 50);
    });
  });

  describe("GetRoleByRoleId", () => {
    it("should get 1 role", async () => {
      const role: Role = await rolesManager.getRoleByRoleId({ roleId: randomRole.roleId });
      expect(role).to.be.exist;
      expect(role.roleId.toLowerCase()).to.be.equal(randomRole.roleId.toLowerCase());

      randomRole.hierarchy = role.hierarchy;
    });
  });

  describe("GetRolesUnderOG", () => {
    it("get all roles under og", async () => {
      const roles: RoleArray = await rolesManager.getRolesUnderOG({
        groupId: randomRole.directGroup,
        page: 1,
        pageSize: 50,
        direct: true,
      });
      expect(roles).to.be.exist;
      expect(roles.roles).to.be.an("array");
      expect(roles.roles).to.have.length.within(0, 50);
    });
  });

  describe("ConnectRoleAndDI", () => {
    it("connect role and di", async () => {
      const successMessage = await rolesManager.connectRoleAndDI({
        roleId: randomRole.roleId,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it("get role", async () => {
      const role = await rolesManager.getRoleByRoleId({ roleId: randomRole.roleId });
      expect(role.digitalIdentityUniqueId.toLowerCase()).to.be.equal(randomDI.uniqueId.toLowerCase());
    });

    it("get di by role id", async () => {
      const di = await diManager.getDIByRoleId({ roleId: randomRole.roleId });
      expect(di.uniqueId.toLowerCase()).to.be.equal(randomDI.uniqueId.toLowerCase());
    });
  });

  describe("DisconnectRoleAndDI", () => {
    it("disconnect role and di", async () => {
      const successMessage = await rolesManager.disconnectRoleAndDI({
        roleId: randomRole.roleId,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it("get di by role id", async () => {
      try {
        const di = await diManager.getDIByRoleId({ roleId: randomRole.roleId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });

  describe("GetRolesByHierarchy", () => {
    it("GetRolesByHierarchy", async () => {
      const roles: RoleArray = await rolesManager.getRolesByHierarchy({
        hierarchy: randomRole.hierarchy,
        direct: true,
        page: 1,
        pageSize: 50,
      });

      expect(roles).to.be.exist;
      expect(roles.roles).to.be.an("array");
      expect(roles.roles).to.have.length.within(0, 50);
    });
  });

  describe("IsRoleAlreadyTaken", () => {
    it("check if role alreay taken, should be false", async() => {
      const res = await rolesManager.isRoleAlreadyTaken({roleId: randomRole.roleId})
      expect(res.isRoleAlreadyTaken).to.be.false;
    })

    // TODO: add role to entity (connect)

    // it("check if role alreay taken, should be true", async() => {
    //   const res = await rolesManager.isRoleAlreadyTaken({ roleId: randomRole.roleId });
    //   expect(res.isRoleAlreadyTaken).to.be.true;
    // });
  });

  describe("IsJobTitleAlreadyTaken", () => {
    it("is job title exists - should be true", async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: randomRole.jobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.true;
      expect(res.suggestions).to.be.an("array");
      expect(res.suggestions).to.have.length.greaterThan(0);
    });
  });

  describe("RenameRole", () => {
    const newJobTitle = kartoffelFaker.randomJobTitle();

    it("change name for role", async () => {
      const successMessage = await rolesManager.renameRole({ roleId: randomRole.roleId, jobTitle: newJobTitle });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it("get the same role", async () => {
      const role = await rolesManager.getRoleByRoleId({ roleId: randomRole.roleId });
      expect(role).to.be.exist;
      expect(role.roleId.toLowerCase()).to.be.equal(randomRole.roleId.toLowerCase());
      expect(role.jobTitle.toLowerCase()).to.be.equal(newJobTitle.toLowerCase());
    });

    it("is old job title exists - should be false", async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: randomRole.jobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.false;
      expect(res.suggestions).to.be.an("array");
      expect(res.suggestions).to.have.length(0);
    });

    it("is new job title exists - should be true", async () => {
      const res = await rolesManager.isJobTitleAlreadyTaken({
        directGroup: randomRole.directGroup,
        jobTitle: newJobTitle,
      });
      expect(res.isJobTitleAlreadyTaken).to.be.true;
      expect(res.suggestions).to.be.an("array");
      expect(res.suggestions).to.have.length.greaterThan(0);
    });
  });

  describe("ChangeRoleOG", () => {
    it("change role og", async () => {
      const successMessage = await rolesManager.changeRoleOG({
        roleId: randomRole.roleId,
        groupId: secondDirectGroup,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it("check if the group id is changed", async () => {
      const role = await rolesManager.getRoleByRoleId({ roleId: randomRole.roleId });
      expect(role.directGroup).to.be.equal(secondDirectGroup);
    });

    // TODO: change role to group with existing jobtitle
  });

  describe("DeleteRole", () => {
    it("delete role", async () => {
      const successMessage: SuccessMessage = await rolesManager.deleteRole({ roleId: randomRole.roleId });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it("check if deleted", async () => {
      try {
        const role = await rolesManager.getRoleByRoleId({ roleId: randomRole.roleId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });

  after(async () => {
    await diManager.deleteDI({ id: randomDI.uniqueId });
  });
});
