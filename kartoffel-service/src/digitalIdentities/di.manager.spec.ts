require("../index");
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

const diExample = {
  uniqueId: "ophelia.little37@leonardo.com",
  type: "domainUser",
  source: "sf_name",
  mail: "enola.pouros@leonardo.com",
  isRoleAttachable: true,
  createdAt: "2021-11-10T06:53:20.644Z",
  updatedAt: "2021-11-10T06:53:21.189Z",
  entityId: "618b6c602da776001134abef",
};


const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

const newDI = {
  isRoleAttachable: true,
  mail: "test@gmail.com",
  source: "sf_name",
  type: "domainUser",
  uniqueId: "test@leonardo.com",
};

describe("createDI", ()=> {
    it("create di", async ()=> {
        const di = await diManager.createDI(newDI);
        expect(di).to.be.exist;
        expect(di.uniqueId).to.equal(newDI.uniqueId);
    })
})
describe("get di by uniqueid", () => {
  it("should get 1 di", async () => {
    const di: DigitalIdentity = await diManager.getDIByUniqueId({ id: diExample.uniqueId });
    expect(di).to.exist;
    expect(di.uniqueId).to.equal(diExample.uniqueId);
  });
  it("invalid id", async () => {
    try {
      const res = await diManager.getDIByUniqueId({ id: "blalalala" });
    } catch (error: any) {
        expect(error.response.status).to.equal(404);
    }
  });
});

