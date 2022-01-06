require('../envload');
import { expect } from 'chai';
import {
  DigitalIdentity,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { createRandomDI, getRandomDI } from '../utils/tests.utils';
import { DiManager } from './di.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const diManager: DiManager = new DiManager(kartoffelUtils, kartoffelFaker);

const randomDI: DigitalIdentity = getRandomDI();
const randomDIUniqueId = randomDI.uniqueId.toLowerCase();
console.log(randomDI);

const timeout = 7000;
describe('DI Manager', () => {
  beforeEach((done) => setTimeout(done, timeout));

  describe('CreateDI', () => {
    it('create di', async () => {
      const res = await createRandomDI(randomDI);
      expect(res).to.be.exist;
      expect(res.uniqueId.toLowerCase()).to.equal(randomDIUniqueId);
    });

    it('create the same di', async () => {
      try {
        const di = await createRandomDI(randomDI);
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(
          `digital identity: ${randomDI.uniqueId} already exists`
        );
      }
    });
  });

  describe('GetAllDIs', () => {
    it('get all di', async () => {
      const arrdi = await diManager.getAllDIs({ page: 1, pageSize: 50 });
      expect(arrdi).to.be.exist;
      expect(arrdi.digitalIdentities).to.be.an('array');
      expect(arrdi.digitalIdentities).to.have.length.within(0, 50);
    });
  });

  describe('SearchDIByUniqueId', () => {
    it('search di by uniqueId', async () => {
      const arrdi = await diManager.searchDIByUniqueId({
        uniqueId: randomDIUniqueId,
      });
      expect(arrdi).to.be.exist;
      expect(arrdi.digitalIdentities).to.be.an('array');
      expect(arrdi.digitalIdentities.map((di) => di.uniqueId)).to.include(
        randomDIUniqueId
      );
    });
  });

  describe('GetDIByUniqueId', () => {
    it('should get 1 di', async () => {
      const di: DigitalIdentity = await diManager.getDIByUniqueId({
        uniqueId: randomDI.uniqueId,
      });
      expect(di).to.exist;
      expect(di.uniqueId.toLowerCase()).to.equal(randomDIUniqueId);
    });
    it('invalid id', async () => {
      try {
        const res = await diManager.getDIByUniqueId({ uniqueId: 'blalalala' });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });

  describe('UpdateDI', () => {
    it('change role attachable to false', async () => {
      const successMessage = await diManager.updateDI({
        id: randomDI.uniqueId,
        isRoleAttachable: false,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('get the same role', async () => {
      const di = await diManager.getDIByUniqueId({ uniqueId: randomDI.uniqueId });
      expect(di).to.be.exist;
      expect(di.uniqueId.toLowerCase()).to.be.equal(randomDIUniqueId);
      expect(di.isRoleAttachable).to.be.false;
    });
  });

  describe('DeleteDI', () => {
    it('delete di', async () => {
      const successMessage: SuccessMessage = await diManager.deleteDI({
        id: randomDI.uniqueId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('check if deleted', async () => {
      try {
        const di = await diManager.getDIByUniqueId({ uniqueId: randomDI.uniqueId });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });
});
