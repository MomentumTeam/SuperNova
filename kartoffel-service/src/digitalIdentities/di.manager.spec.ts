require("../envload");
import { expect } from "chai";
import { DigitalIdentity } from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { DiManager } from "./di.manager";

const userExample = {
  _id: "6187edac2da776001134860c",
  phone: ["089225048"],
  mobilePhone: ["0526639648"],
  firstName: "ברק",
  lastName: "שטינדל",
  entityType: "agumon",
  personalNumber: "8071170",
  identityCard: "313162208",
  rank: "rookie",
  clearance: "1",
  sex: "male",
  serviceType: "A",
  address: "כרמל 5 רחובות",
  createdAt: "2021-11-07T15:15:56.369Z",
  updatedAt: "2021-11-07T15:15:56.369Z",
  fullName: "ברק שטינדל",
  id: "6187edac2da776001134860c",
};

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

const randomDI = kartoffelFaker.randomDI(false);
const randomDIWithRole = kartoffelFaker.randomDI();

console.log(randomDI);

describe("DI Manager", () => {
  describe("CreateDI", () => {
    it("create di", async () => {
      const di = await diManager.createDI(randomDI);
      expect(di).to.be.exist;
      expect(di.uniqueId).to.equal(randomDI.uniqueId);
    });

    it("create the same di", async () => {
      try {
        const di = await diManager.createDI(randomDI);
      } catch (error: any) {
        expect(error.response.status).to.equal(400);
        expect(error.response.message).to.equal(`digital identity: ${randomDI.uniqueId} already exists`);
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
      expect(di.uniqueId).to.equal(randomDI.uniqueId);
    });
    it("invalid id", async () => {
      try {
        const res = await diManager.getDIByUniqueId({ id: "blalalala" });
      } catch (error: any) {
        expect(error.response.status).to.equal(404);
      }
    });
  });

  describe("GetDIByRoleId", () => {
    let diwithrole: DigitalIdentity;
    before(async() => {
      diwithrole = await diManager.createDI(randomDIWithRole);
    })
    it("should get di", async() => {
      if (randomDIWithRole.role?.roleId) {
        const di: DigitalIdentity = await diManager.getDIByRoleId({ roleId: randomDIWithRole.role?.roleId });
        expect(di).to.be.exist;
        expect(di.uniqueId).to.be.equal(diwithrole.uniqueId)
      }
    })
  });

  describe("UpdateDI", () => {
    it("change role attachable", async() => {
      await diManager.updateDI({id: randomDI.uniqueId, isRoleAttachable: false});
    })
  });

  describe("DeleteDI", () => {
    // TODO
  });
});
