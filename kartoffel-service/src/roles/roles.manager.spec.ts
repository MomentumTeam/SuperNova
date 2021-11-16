require("../envload");
import { expect } from "chai";
import { CreateRoleRequest, Role, SuccessMessage } from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { RolesManager } from "./roles.manager";

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const rolesManager: RolesManager = new RolesManager(kartoffelUtils, kartoffelFaker);

const randomRole: Role = kartoffelFaker.randomRole();

console.log(randomRole);

const timeout = 5000;
describe("Roles Manager", () => {
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

    it("create the same di", async () => {
      try {
        const di = await rolesManager.createRole(req);
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(`digital identity: ${randomDI.uniqueId} already exists`);
      }
    });
  });

  describe("GetAllDIs", () => {
    it("get all di", async () => {
      const arrdi = await diManager.getAllDIs({ page: 1, pageSize: 50 });
      expect(arrdi).to.be.exist;
      expect(arrdi).to.be.an("array");
      expect(arrdi).to.have.length.within(0, 50);
    });
  });

  describe("SearchDIOrUniqueId", () => {
    // TODO
  });

  describe("GetDIByUniqueId", () => {
    it("should get 1 di", async () => {
      const di: DigitalIdentity = await diManager.getDIByUniqueId({ id: randomDI.uniqueId });
      expect(di).to.exist;
      expect(di.uniqueId.toLowerCase()).to.equal(randomDIUniqueId);
    });
    it("invalid id", async () => {
      try {
        const res = await diManager.getDIByUniqueId({ id: "blalalala" });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });

  describe("GetDIByRoleId", () => {
    // TODO
    // it("should get di", async () => {
    //   if (randomDIWithRole.role?.roleId) {
    //     const di: DigitalIdentity = await diManager.getDIByRoleId({ roleId: randomDIWithRole.role?.roleId });
    //     expect(di).to.be.exist;
    //     expect(di.uniqueId.toLowerCase()).to.be.equal(randomDIWithRole.uniqueId.toLowerCase());
    //   }
    // });
  });

  describe("UpdateDI", () => {
    it("change role attachable to false", async () => {
      const successMessage = await diManager.updateDI({ id: randomDI.uniqueId, isRoleAttachable: false });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it("get the same role", async () => {
      const di = await diManager.getDIByUniqueId({ id: randomDI.uniqueId });
      expect(di).to.be.exist;
      expect(di.uniqueId.toLowerCase()).to.be.equal(randomDIUniqueId);
      expect(di.isRoleAttachable).to.be.false;
    });
  });

  describe("DeleteDI", () => {
    it("delete di", async () => {
      const successMessage: SuccessMessage = await diManager.deleteDI({ id: randomDI.uniqueId });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it("check if deleted", async () => {
      try {
        const di = await diManager.getDIByUniqueId({ id: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });
});
