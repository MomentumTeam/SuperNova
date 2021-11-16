require("../envload");
import { expect } from "chai";
import { DigitalIdentity, SuccessMessage } from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { DiManager } from "./di.manager";


const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

const randomDI: any = kartoffelFaker.randomDI(false);
const randomDIUniqueId = randomDI.uniqueId.toLowerCase();

delete randomDI.createdAt;
delete randomDI.updatedAt;
delete randomDI.entityId;

const randomDIWithRole: any = kartoffelFaker.randomDI();
delete randomDIWithRole.createdAt;
delete randomDIWithRole.updatedAt;
delete randomDIWithRole.entityId;

console.log(randomDI);

describe("DI Manager", () => {
  describe("CreateDI", () => {
    it("create di", async () => {
      const di = await diManager.createDI(randomDI);
      expect(di).to.be.exist;
      expect(di.uniqueId.toLowerCase()).to.equal(randomDIUniqueId);
    });

    it("create the same di", async () => {
      try {
        const di = await diManager.createDI(randomDI);
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
    let diwithrole: DigitalIdentity;
    it("creatediwithrole", async () => {
      diwithrole = await diManager.createDI(randomDIWithRole);
    });
    it("should get di", async () => {
      if (randomDIWithRole.role?.roleId) {
        const di: DigitalIdentity = await diManager.getDIByRoleId({ roleId: randomDIWithRole.role?.roleId });
        expect(di).to.be.exist;
        expect(di.uniqueId.toLowerCase()).to.be.equal(diwithrole.uniqueId.toLowerCase());
      }
    });
  });

  describe("UpdateDI", () => {
    it("change role attachable to false", async () => {
      const updatedDI = await diManager.updateDI({ id: randomDI.uniqueId, isRoleAttachable: false });
      expect(updatedDI).to.be.exist;
      expect(updatedDI.uniqueId.toLowerCase()).to.be.equal(randomDIUniqueId);
      expect(updatedDI.isRoleAttachable).to.be.false;
    });
    after("get the same role", async () => {
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

    after("check if deleted", async () => {
      try {
        const di = await diManager.getDIByUniqueId({ id: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });
});
