require("../envload");
import { expect } from "chai";
import { Entity } from "../interfaces/protoc/proto/kartoffelService";
import { KartoffelFaker } from "../mock/kartoffel.faker";
import { KartoffelUtils } from "../utils/kartoffel.utils";
import { EntitiesManager } from "./entities.manager";

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const entitiesManager: EntitiesManager = new EntitiesManager(kartoffelUtils, kartoffelFaker);

let randomEntity: Entity;
const timeout = 5000;

before(async () => {
  randomEntity = await kartoffelFaker.randomEntityForTests();
  console.log(randomEntity);
});

describe("Entity Manager", () => {
  before("create entity with min param", async () => {
    const entity = await entitiesManager.createEntity({phone: [], mobilePhone:[]});
  });

  beforeEach((done) => setTimeout(done, timeout));
});
