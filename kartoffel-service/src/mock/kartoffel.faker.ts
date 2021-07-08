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
} from '../interfaces/protoc/proto/kartoffelService';

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
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
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
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
      isRoleAttachable: true,
      role: undefined,
    };
    return digitalIdentity;
  }

  async randomPicture(): Promise<Image> {
    return new Promise((resolve, reject) => {
      axios
        .get('https://picsum.photos/200', {
          responseType: 'arraybuffer',
        })
        .then((res) => {
          const image: Image = {
            width: 40,
            height: 40,
            data: new Uint8Array(res.data),
          };
          resolve(image);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  randomRole(): Role {
    const role: Role = {
      roleId: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      digitalIdentityUniqueId: faker.internet.email(),
      directGroup: faker.datatype.uuid(),
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      hierarchyIds: [],
      source: 'oneTree',
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
    };
    return role;
  }
  async randomEntity(): Promise<Entity> {
    try {
      const picture: Image = await this.randomPicture();
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
        akaUnit: faker.company.companyName(),
        dischargeDay: faker.datatype.datetime().getTime(),
        rank: 'אזרח',
        mail: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        phone: [faker.phone.phoneNumber()],
        mobilePhone: [faker.phone.phoneNumber()],
        address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
        clearance: '2',
        sex: 'זכר',
        birthdate: faker.datatype.datetime().getTime(),
        createdAt: faker.datatype.datetime().getTime(),
        updatedAt: faker.datatype.datetime().getTime(),
        digitalIdentities: [],
        picture: picture,
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
        name: faker.name.firstName(),
        children: this.randomChildrenAray(layers - 1),
      });
    }
    return children;
  }

  randomOGTree(): OGTree {
    return {
      id: mongoose.Types.ObjectId().toString(),
      name: faker.name.firstName(),
      children: this.randomChildrenAray(2),
    };
  }

  randomOGArray(): OGArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let ogArray = [];
    for (let i = 0; i < length; i++) {
      ogArray.push(this.randomOG());
    }
    return {
      groups: ogArray,
    };
  }

  randomRoleArray(): RoleArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let roleArray = [];
    for (let i = 0; i < length; i++) {
      roleArray.push(this.randomRole());
    }
    return { roles: roleArray };
  }

  async randomEntityArray(): Promise<EntityArray> {
    try {
      const length = faker.datatype.number({
        min: 1,
        max: 10,
      });
      let entityArray = [];
      for (let i = 0; i < length; i++) {
        let entity: Entity = await this.randomEntity();
        entityArray.push(entity);
      }
      return { entities: entityArray };
    } catch (err) {
      throw err;
    }
  }
}
