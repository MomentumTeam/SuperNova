require('../envload');
import { expect } from 'chai';
import {
  OGPrefix,
  OrganizationGroup,
  SuccessMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { createRandomOG, getRandomOG } from '../utils/tests.utils';
import { GroupsManager } from './groups.manager';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

const groupsManager: GroupsManager = new GroupsManager(
  kartoffelUtils,
  kartoffelFaker
);

let directGroupId: string;
let randomOG: OrganizationGroup;
let randomOGId: any;
const newOGName = 'TheBestOGName1234';
const newDirectGroupId = '619e31fef235dc001846f10b';
const timeout = 7000;
describe('Groups Manager', () => {
  before(async () => {
    randomOG = await getRandomOG();
    directGroupId = randomOG.directGroup;
  });
  beforeEach((done) => setTimeout(done, timeout));

  describe('CreateOG', () => {
    it('create groups', async () => {
      const res = await createRandomOG(randomOG);
      expect(res).to.be.exist;
      randomOGId = res.id;
      randomOG.id = randomOGId;
    });

    it('create the same group', async () => {
      try {
        const group = await createRandomOG(randomOG);
      } catch (error: any) {
        expect(error.response.data.status).to.equal(400);
        expect(error.response.data.message).to.equal(`group already exists`);
      }
    });
  });

  describe('GetOGById', () => {
    it('get groups by id', async () => {
      const group = await groupsManager.getOGById({ id: randomOGId });
      expect(group).to.be.exist;
      expect(group.id).to.be.equal(randomOGId);
      randomOG.hierarchy = group.hierarchy;
    });
  });

  describe('GetAllOGs', () => {
    it('get all groups', async () => {
      const ogArray = (await groupsManager.getAllOGs({ page: 1, pageSize: 50 }))
        .groups;
      expect(ogArray).to.be.exist;
      expect(ogArray).to.be.an('array');
      expect(ogArray).to.have.length.within(0, 50);
    });
  });

  describe('GetOGByHierarchyName', () => {
    it('get groups by hierarchy', async () => {
      const ogByHierarchy = await groupsManager.getOGByHierarchyName({
        hierarchy: `${randomOG.hierarchy}/${randomOG.name}`,
      });
      expect(ogByHierarchy).to.be.exist;
      expect(ogByHierarchy.id).to.equal(randomOGId);
    });
  });

  describe('SearchOG', () => {
    it('search groups', async () => {
      const searchOGArray = (
        await groupsManager.searchOG({ nameAndHierarchy: randomOG.hierarchy })
      ).groups;
      expect(searchOGArray).to.have.length.greaterThanOrEqual(1);
      expect(searchOGArray.map((og) => og.id)).to.include(randomOGId);
    });
  });

  describe('GetChildrenOfOG', () => {
    it('get children of groups', async () => {
      const children = (
        await groupsManager.getChildrenOfOG({
          id: directGroupId,
          direct: true,
          withRoles: false,
        })
      ).groups;
      expect(children).to.be.exist;
      expect(children).to.be.an('array');
      expect(children.map((child) => child.id)).to.include(randomOGId);
    });
  });

  describe('GetPrefixByOGId', () => {
    it('get prefix of groups', async () => {
      const ogPrefix: OGPrefix = await groupsManager.getPrefixByOGId({
        id: randomOGId,
      });
      expect(ogPrefix).to.be.exist;
      expect(ogPrefix.prefix).to.be.equal(randomOG.diPrefix);
    });
  });

  describe('IsOGNameAlreadyTaken', () => {
    it('when name is already taken', async () => {
      const isOGNameAlreadyTaken = await groupsManager.isOGNameAlreadyTaken({
        parent: directGroupId,
        name: randomOG.name,
      });
      expect(isOGNameAlreadyTaken).to.be.exist;
      expect(isOGNameAlreadyTaken.isOGNameAlreadyTaken).to.be.true;
    });
    it('when name should be available', async () => {
      const isOGNameAlreadyTaken = await groupsManager.isOGNameAlreadyTaken({
        parent: directGroupId,
        name: 'TheBestRandomOGName123456',
      });
      expect(isOGNameAlreadyTaken).to.be.exist;
      expect(isOGNameAlreadyTaken.isOGNameAlreadyTaken).to.be.false;
    });
  });

  describe('RenameOG', () => {
    it('rename group', async () => {
      const successMessage = await groupsManager.renameOG({
        id: randomOGId,
        name: newOGName,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('get the same group', async () => {
      const group = await groupsManager.getOGById({ id: randomOGId });
      expect(group).to.be.exist;
      expect(group.id).to.be.equal(randomOGId);
      expect(group.name).to.be.equal(newOGName);
    });
  });

  describe('UpdateOGParent', () => {
    it('update directGroup', async () => {
      const successMessage: SuccessMessage = await groupsManager.updateOGParent(
        {
          id: randomOGId,
          parentId: newDirectGroupId,
        }
      );
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('check if directGroup has been changed', async () => {
      const group = await groupsManager.getOGById({ id: randomOGId });
      expect(group).to.be.exist;
      expect(group.id.toLowerCase()).to.be.equal(randomOGId);
      expect(group.directGroup).to.be.equal(newDirectGroupId);
    });
  });

  describe('DeleteOG', () => {
    it('delete OG', async () => {
      const successMessage: SuccessMessage = await groupsManager.deleteOG({
        id: randomOGId,
      });
      expect(successMessage).to.be.exist;
      expect(successMessage.success).to.be.true;
    });

    before((done) => setTimeout(done, timeout));
    it('check if deleted', async () => {
      try {
        const group = await groupsManager.getOGById({
          id: randomOGId,
        });
      } catch (error: any) {
        expect(error.response.data.status).to.equal(404);
      }
    });
  });
});
