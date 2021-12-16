import faker from 'faker';
import mongoose from 'mongoose';
import axios from 'axios';
import {
  OrganizationGroup,
  DigitalIdentity,
  Role,
  Entity,
  OGArray,
  RoleArray,
  EntityArray,
  OGTree,
  Image,
  DigitalIdentities,
} from '../interfaces/protoc/proto/kartoffelService';
import * as C from '../config';
import { sample } from 'lodash';
import { kartoffelConfig } from '../utils/kartoffelConfig';
export class KartoffelFaker {
  constructor() {}

  randomIdentityCard(): string {
    const getRandomInt = (min = 1, max = 100) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getInc = (num: number, i: number) => {
      var inc = Number(num) * ((i % 2) + 1);
      return inc > 9 ? (inc -= 9) : inc;
    };

    let iid = '',
      num,
      counter = 0;
    for (let i = 0; i < 8; i++) {
      num = getRandomInt(i < 2 ? 2 : 0, i < 2 ? 3 : 9);
      iid += num.toString();
      counter += getInc(num, i);
    }
    return iid + (10 - (counter % 10)).toString();
  }
  randomJobTitle(): string {
    return faker.name.jobTitle();
  }

  async randomOG(): Promise<OrganizationGroup> {
    const organizationGroup: OrganizationGroup = {
      id: mongoose.Types.ObjectId().toString(),
      name: faker.company.companyName(),
      source: C.defaultRoleSource,
      ancestors: [mongoose.Types.ObjectId().toString()],
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      status: 'active',
      isLeaf: true,
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      directEntities: [],
      directRoles: [],
      directGroup: mongoose.Types.ObjectId().toString(),
    };

    let roleLength = faker.datatype.number({
      min: 1,
      max: 10,
    });
    for (let i = 0; i < roleLength; i++) {
      organizationGroup.directRoles.push(this.randomRole());
    }

    let entityLength = faker.datatype.number({
      min: 1,
      max: 10,
    });
    for (let i = 0; i < entityLength; i++) {
      const entity = await this.randomEntity(false);
      organizationGroup.directEntities.push(entity);
    }

    return organizationGroup;
  }

  randomDI(withRole = true): DigitalIdentity {
    const domain = sample(
      kartoffelConfig.valueObjects.digitalIdentityId.domain.values
    );
    const type = sample(kartoffelConfig.valueObjects.digitalIdentityType);
    const source = sample(kartoffelConfig.valueObjects.source.values);

    const digitalIdentity: DigitalIdentity = {
      type: type && !withRole ? type : 'domainUser',
      source: source ? source : 'oa_name',
      mail: faker.internet.email(),
      uniqueId: faker.internet.email(undefined, undefined, domain),
      entityId: mongoose.Types.ObjectId().toString(),
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      isRoleAttachable: true,
    };

    if (
      digitalIdentity.type ===
      kartoffelConfig.valueObjects.digitalIdentityType.VirtualUser
    )
      digitalIdentity.isRoleAttachable = false;
    if (
      withRole &&
      type !== kartoffelConfig.valueObjects.digitalIdentityType.VirtualUser
    ) {
      digitalIdentity.role = this.randomRole();
    }

    return digitalIdentity;
  }

  randomDiArray(pageSize?: number): DigitalIdentities {
    let length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    if (pageSize) length = pageSize;

    let DigitalIdentities = [];
    for (let i = 0; i < length; i++) {
      DigitalIdentities.push(this.randomDI());
    }
    return {
      digitalIdentities: DigitalIdentities,
    };
  }

  async randomPicture(): Promise<Image> {
    return new Promise((resolve, reject) => {
      axios
        .get('https://picsum.photos/200', {
          responseType: 'arraybuffer',
        })
        .then((res) => {
          const image: Image = {
            image: Buffer.from(res.data).toString('base64'),
          };
          resolve(image);
        })
        .catch((err) => {
          const image: Image = {
            image: C.defaultImage,
          };
          resolve(image);
        });
    });
  }

  randomRole(): Role {
    const source = sample(kartoffelConfig.valueObjects.source.values);
    const role: Role = {
      // roleId: faker.internet.email(),
      roleId: `${faker.internet.userName()}@leonardo`,
      jobTitle: faker.name.jobTitle(),
      digitalIdentityUniqueId: faker.internet.email(),
      directGroup: mongoose.Types.ObjectId().toString(),
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      hierarchyIds: [],
      source: source ? source : 'oa_name',
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      clearance: '1',
      displayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
    };
    return role;
  }
  async randomEntityForTests(): Promise<Entity> {
    try {
      const entityType = sample(kartoffelConfig.valueObjects.EntityType);

      let onlyCitizenFields = false;
      if (entityType === kartoffelConfig.valueObjects.EntityType.Civilian) {
        onlyCitizenFields = true;
      }
      const clearanceTypes = ['3', '2', '1'];
      const clearance = sample(clearanceTypes);

      const serviceType = sample(
        kartoffelConfig.valueObjects.serviceType.values
      );
      const rank = sample(kartoffelConfig.valueObjects.rank.values);
      const sex = sample(kartoffelConfig.valueObjects.Sex);

      const entity: Entity = {
        id: mongoose.Types.ObjectId().toString(),
        displayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        directGroup: mongoose.Types.ObjectId().toString(),
        hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        entityType: entityType ? entityType : 'digimon',
        identityCard: this.randomIdentityCard(),
        personalNumber: faker.datatype
          .number({ min: 100000000, max: 999999999 })
          .toString(),
        serviceType: serviceType ? serviceType : 'A',
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        akaUnit: faker.company.companyName(),
        dischargeDay: faker.datatype.datetime().toString(),
        rank: rank ? rank : 'unknown',
        mail: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phone: [faker.phone.phoneNumber()],
        mobilePhone: [faker.phone.phoneNumber()],
        address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
        clearance: clearance ? clearance : '1',
        sex: sex ? sex : 'male',
        birthDate: faker.datatype.datetime().toString(),
        createdAt: faker.datatype.datetime().toString(),
        updatedAt: faker.datatype.datetime().toString(),
        digitalIdentities: this.randomDiArray().digitalIdentities,
        picture: '',
        goalUserID: mongoose.Types.ObjectId().toString(),
      };
      return entity;
    } catch (err) {
      throw err;
    }
  }
  async randomEntity(needPicture: boolean = false): Promise<Entity> {
    try {
      const entityTypes = ['אזרח', 'רסל', 'טוראי'];
      const entityType = sample(entityTypes);

      let onlyCitizenFields = false;
      if (entityType === 'אזרח') {
        onlyCitizenFields = true;
      }
      const clearanceTypes = ['3', '2', '1'];
      let clearanceNum = faker.datatype.number({
        min: 0,
        max: 2,
      });

      const serviceType = ['אזרח', 'מילואים', 'חייל'];
      let serviceTypeNum = faker.datatype.number({
        min: 0,
        max: 2,
      });

      const picture: Image = needPicture
        ? await this.randomPicture()
        : { image: 'pictureUrl' };
      const entity: Entity = {
        id: mongoose.Types.ObjectId().toString(),
        displayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        directGroup: mongoose.Types.ObjectId().toString(),
        hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        entityType: 'soldier',
        identityCard: this.randomIdentityCard(),
        personalNumber: faker.datatype
          .number({ min: 100000000, max: 999999999 })
          .toString(),
        serviceType: serviceType[serviceTypeNum],
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        akaUnit: faker.company.companyName(),
        dischargeDay: faker.datatype.datetime().toString(),
        rank: entityType ? entityType : 'אזרח',
        mail: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phone: [faker.phone.phoneNumber()],
        mobilePhone: [faker.phone.phoneNumber()],
        address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
        clearance: clearanceTypes[clearanceNum],
        sex: 'זכר',
        birthDate: faker.datatype.datetime().toString(),
        createdAt: faker.datatype.datetime().toString(),
        updatedAt: faker.datatype.datetime().toString(),
        digitalIdentities: this.randomDiArray().digitalIdentities,
        picture: picture.image,
        goalUserID: mongoose.Types.ObjectId().toString(),
      };
      return entity;
    } catch (err) {
      throw err;
    }
  }

  randomChildrenAray(layers: number): OGTree[] {
    if (layers == 0) {
      return [];
    }
    let children = [];
    const childrenCount = Math.floor(Math.random() * 4);
    for (let i = 0; i < childrenCount; i++) {
      children.push({
        id: mongoose.Types.ObjectId().toString(),
        label: faker.name.firstName(),
        children: this.randomChildrenAray(layers - 1),
      });
    }
    return children;
  }

  randomOGTree(): OGTree {
    return {
      id: mongoose.Types.ObjectId().toString(),
      label: faker.name.firstName(),
      children: this.randomChildrenAray(2),
    };
  }

  async randomOGArray(pageSize?: number): Promise<OGArray> {
    let length = faker.datatype.number({
      min: 1,
      max: 10,
    });

    if (pageSize) length = pageSize;

    let ogArray = new Array(length).fill(0);
    ogArray = await Promise.all(
      ogArray.map(async (og) => {
        let ogGroup: OrganizationGroup = await this.randomOG();
        return ogGroup;
      })
    );

    return {
      groups: ogArray,
    };
  }

  randomRoleArray(pageSize?: number): RoleArray {
    let length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    if (pageSize) length = pageSize;

    let roleArray = [];
    for (let i = 0; i < length; i++) {
      roleArray.push(this.randomRole());
    }
    return { roles: roleArray };
  }

  async randomEntityArray(
    needPicture: boolean,
    pageSize?: number
  ): Promise<EntityArray> {
    try {
      let length = faker.datatype.number({
        min: 1,
        max: 10,
      });
      if (pageSize) length = pageSize;

      let entityArray = [];
      for (let i = 0; i < length; i++) {
        let entity: Entity = await this.randomEntity(needPicture);
        entityArray.push(entity);
      }
      return { entities: entityArray };
    } catch (err) {
      throw err;
    }
  }

  randomNumber(from: number, to: number) {
    return faker.datatype.number({ min: from, max: to });
  }
}
