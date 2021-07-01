import faker from "faker";
import {
  OrganizationGroup,
  DigitalIdentity,
  Role,
  Entity,
  OGArray,
  RoleArray,
  EntityArray,
  OGTree,
} from "../interfaces/protoc/proto/kartoffelService";

export class KartoffelFaker {
  constructor() {}

  randomOG(): OrganizationGroup {
    const organizationGroup: OrganizationGroup = {
      id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      source: "oneTree",
      ancestors: [faker.datatype.uuid()],
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      status: "active",
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
      type: "domainUser",
      source: "oneTree",
      mail: faker.internet.email(),
      uniqueId: faker.internet.email(),
      entityId: faker.datatype.uuid(),
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
      isRoleAttachable: true,
      role: undefined,
    };
    return digitalIdentity;
  }

  randomRole(): Role {
    const role: Role = {
      roleId: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      digitalIdentityUniqueId: faker.internet.email(),
      directGroup: faker.datatype.uuid(),
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      hierarchyIds: [],
      source: "oneTree",
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
    };
    return role;
  }
  randomEntity(): Entity {
    const entity: Entity = {
      id: faker.datatype.uuid(),
      displayName: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      directGroup: faker.datatype.uuid(),
      hierarchy: `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      entityType: "soldier",
      identityCard: faker.datatype.uuid(),
      personalNumber: faker.datatype.uuid(),
      serviceType: "מילואים",
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      akaUnit: faker.company.companyName(),
      dischargeDay: faker.datatype.datetime().getTime(),
      rank: "אזרח",
      mail: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phone: [faker.phone.phoneNumber()],
      mobilePhone: [faker.phone.phoneNumber()],
      address: `${faker.address.streetAddress()}, ${faker.address.country()}`,
      clearance: "2",
      sex: "זכר",
      birthdate: faker.datatype.datetime().getTime(),
      createdAt: faker.datatype.datetime().getTime(),
      updatedAt: faker.datatype.datetime().getTime(),
      digitalIdentities: [],
    };
    return entity;
  }

  randomOGTree(): OGTree {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      children: [
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          children: [],
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          children: [
            {
              id: faker.datatype.uuid(),
              name: faker.name.firstName(),
              children: [],
            },
            {
              id: faker.datatype.uuid(),
              name: faker.name.firstName(),
              children: [],
            },
          ],
        },
        {
          id: faker.datatype.uuid(),
          name: faker.name.firstName(),
          children: [],
        },
      ],
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

  randomEntityArray(): EntityArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let entityArray = [];
    for (let i = 0; i < length; i++) {
      entityArray.push(this.randomEntity());
    }
    return { entities: entityArray };
  }
}
