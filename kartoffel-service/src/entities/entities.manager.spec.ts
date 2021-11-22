require("../envload");
import mongoose from "mongoose";
import { expect } from "chai";
import { DigitalIdentity, Entity, EntityArray, IdMessage, Role } from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { EntitiesManager } from "./entities.manager";
import {
  createRandomDI,
  createRandomEntity,
  createRandomRole,
  getRandomDI,
  getRandomEntity,
  getRandomRole,
} from "../utils/tests.utils";
import { RolesManager } from "../roles/roles.manager";
import { DiManager } from "../digitalIdentities/di.manager";

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();
const entitiesManager: EntitiesManager = new EntitiesManager(kartoffelUtils, kartoffelFaker);
const rolesManager: RolesManager = new RolesManager(kartoffelUtils, kartoffelFaker);
const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

let randomEntity: Entity;
let randomDI: DigitalIdentity;
let randomRole: Role;

const timeout = 5000;

before(async () => {
  randomEntity = await getRandomEntity();
  randomDI = getRandomDI();
  randomRole = getRandomRole();

  await Promise.all([createRandomDI(randomDI), createRandomRole(randomRole)]);
});

describe("Entity Manager", () => {
  beforeEach((done) => setTimeout(done, timeout));
  describe("CreateEntity", async () => {
    it("CreateEntity", async () => {
      const id = await createRandomEntity(randomEntity);
      expect(id).to.be.exist;
      randomEntity.id = id.id;
    });
  });

  describe("GetEntityById", () => {
    it("GetEntityById - valid", async () => {
      const entity = await entitiesManager.getEntityById({ id: randomEntity.id });
      expect(entity).to.be.exist;
      expect(entity.id).to.be.equal(randomEntity.id);
    });

    it("GetEntityById - invalid mongo id", async () => {
      const invalidId = "dkdkd";
      let entity;
      try {
        entity = await entitiesManager.getEntityById({ id: invalidId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `\"params.id\" with value \"${invalidId}\" fails to match the valid mongo id pattern`
        );
      }
      expect(entity).not.to.be.exist;
    });

    it("GetEntityById - mongo id that doesn't exist", async () => {
      const id = mongoose.Types.ObjectId().toString();
      let entity;
      try {
        entity = await entitiesManager.getEntityById({ id });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
        expect(error.response.data.message).to.equal("Not found");
      }

      expect(entity).not.to.be.exist;
    });
  });

  describe("GetEntitiesUnderOG", () => {
    it("GetEntitiesUnderOG", async () => {
      const entities: EntityArray = await entitiesManager.getEntitiesUnderOG({
        id: randomEntity.directGroup,
        direct: true,
        page: 1,
        pageSize: 50,
      });

      expect(entities).to.be.exist;
      expect(entities.entities).to.be.an("array");
      expect(entities.entities).to.have.length.within(0, 50);
    });
  });

  describe("GetEntityByIdentifier", () => {
    it("GetEntityByIdentifier - get by personalNumber", async () => {
      const entity = await entitiesManager.getEntityByIdentifier({ identifier: randomEntity.personalNumber });
      expect(entity).to.be.exist;
    });

    it("GetEntityByIdentifier - get by identityCard", async () => {
      const entity = await entitiesManager.getEntityByIdentifier({ identifier: randomEntity.identityCard });
      expect(entity).to.be.exist;
    });
  });

  describe("GetEntitiesUnderOG", () => {
    it("GetEntitiesUnderOG", async () => {
      const entities: EntityArray = await entitiesManager.getEntitiesUnderOG({
        id: randomEntity.directGroup,
        direct: true,
        page: 1,
        pageSize: 50,
      });

      expect(entities).to.be.exist;
      expect(entities.entities).to.be.an("array");
      expect(entities.entities).to.have.length.within(0, 50);
    });
  });

  describe("SearchEntitiesByFullName", () => {
    // TODO
  });

  describe("SearchCommandersByFullName", () => {
    // TODO
  });
  describe("SearchHighCommandersByFullName", () => {
    // TODO
  });

  describe("ConnectEntityAndDI", () => {
    it("ConnectEntityAndDI", async () => {
      const successMessage = await entitiesManager.connectEntityAndDI({
        id: randomEntity.id,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });
  });

  describe("GetEntityByDI", () => {
    it("GetEntityByDI after connect", async () => {
      const entity = await entitiesManager.getEntityByDI({ uniqueId: randomDI.uniqueId });
      expect(entity).to.be.exist;
      expect(entity.id).to.be.equal(randomEntity.id);
    });
  });

  describe("GetEntityByRole", () => {
    it("GetEntityByRoleId - before connect", async () => {
      let entity;
      try {
        entity = await entitiesManager.getEntityByRoleId({ roleId: randomRole.roleId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
        expect(error.response.data.message).to.equal("Not found");
      }
      expect(entity).not.to.be.exist;
    });

    it("ConnectRoleAndDI", async () => {
      await rolesManager.connectRoleAndDI({ roleId: randomRole.roleId, uniqueId: randomDI.uniqueId });
    });

    it("GetEntityByRoleId - after connect", async () => {
      const entity = await entitiesManager.getEntityByRoleId({ roleId: randomRole.roleId });
      expect(entity).to.be.exist;
      expect(entity.id).to.be.equal(randomEntity.id);
    });

    it("delete di", async () => {
      let res;
      try {
        res = await diManager.deleteDI({ id: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `digital identity: ${randomDI.uniqueId} is connected to entity`
        );
      }
      expect(res).not.to.be.exist;
    });
  });

  describe("DisconnectDIFromEntity", () => {
    it("DisconnectDIFromEntity", async () => {
      const successMessage = await entitiesManager.disconnectDIFromEntity({
        id: randomEntity.id,
        uniqueId: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });
  });

  // TODO: connect again. then delete the entity and than try to add the di a new entity

  describe("GetEntityByDI", () => {
    it("GetEntityByDI after disconnect", async () => {
      let entity;
      try {
        entity = await entitiesManager.getEntityByDI({ uniqueId: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
        expect(error.response.data.message).to.equal("Not found");
      }
      expect(entity).not.to.be.exist;
    });
  });

  describe("UpdateEntity", () => {
    // TODO: update and check
  });

  describe("DeleteEntity", () => {
    it("DeleteEntity - valid", async () => {
      const successMessage = await entitiesManager.deleteEntity({ id: randomEntity.id });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    it("DeleteEntity - not exists", async () => {
      const id = mongoose.Types.ObjectId().toString();
      let entity;
      try {
        entity = await entitiesManager.deleteEntity({ id });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
        expect(error.response.data.message).to.equal(`resource Entity: ${id} does not exist`);
      }
      expect(entity).not.to.be.exist;
    });
  });

  after(async () => {
    await rolesManager.disconnectRoleAndDI({ uniqueId: randomDI.uniqueId, roleId: randomRole.roleId });

    await Promise.all([
      await diManager.deleteDI({ id: randomDI.uniqueId }),
      await rolesManager.deleteRole({ roleId: randomRole.roleId }),
    ]);
  });
});
