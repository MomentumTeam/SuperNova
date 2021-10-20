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

export class KartoffelFaker {
  constructor() {}

  randomOG(): OrganizationGroup {
    const organizationGroup: OrganizationGroup = {
      id: mongoose.Types.ObjectId().toString(),
      name: faker.company.companyName(),
      source: 'oneTree',
      ancestors: [mongoose.Types.ObjectId().toString()],
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      status: 'active',
      isLeaf: true,
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      directEntities: [],
      directRoles: [],
    };
    return organizationGroup;
  }

  randomDI(): DigitalIdentity {
    const digitalIdentity: DigitalIdentity = {
      type: 'domainUser',
      source: 'oneTree',
      mail: faker.internet.email(),
      uniqueId: faker.internet.email(),
      entityId: mongoose.Types.ObjectId().toString(),
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      isRoleAttachable: true,
      role: this.randomRole(),
    };
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
    const role: Role = {
      roleId: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      digitalIdentityUniqueId: faker.internet.email(),
      directGroup: mongoose.Types.ObjectId().toString(),
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      hierarchyIds: [],
      source: 'oneTree',
      createdAt: faker.datatype.datetime().toString(),
      updatedAt: faker.datatype.datetime().toString(),
      clearance: '1',
    };
    return role;
  }
  async randomEntity(needPicture: boolean): Promise<Entity> {
    try {
      const picture: Image = needPicture
        ? await this.randomPicture()
        : { image: 'pictureUrl' };
      const entity: Entity = {
        id: mongoose.Types.ObjectId().toString(),
        displayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        directGroup: mongoose.Types.ObjectId().toString(),
        hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
        entityType: 'soldier',
        identityCard: faker.datatype
          .number({ min: 100000, max: 999999 })
          .toString(),
        personalNumber: faker.datatype
          .number({ min: 100000000, max: 999999999 })
          .toString(),
        serviceType: 'מילואים',
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
        akaUnit: faker.company.companyName(),
        dischargeDay: faker.datatype.datetime().toString(),
        rank: 'אזרח',
        mail: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phone: [faker.phone.phoneNumber()],
        mobilePhone: [faker.phone.phoneNumber()],
        address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
        clearance: '2',
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

  randomOGArray(pageSize?: number): OGArray {
    let length = faker.datatype.number({
      min: 1,
      max: 10,
    });

    if (pageSize) length = pageSize;

    let ogArray = [];
    for (let i = 0; i < length; i++) {
      ogArray.push(this.randomOG());
    }
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
