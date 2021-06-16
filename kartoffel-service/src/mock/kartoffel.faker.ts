import {
  DigitalIdentity,
  IDigitalIdentity,
} from "../interfaces/kartoffelTypes/digitalIdentity.interface";
import { Entity, IEntity } from "../interfaces/kartoffelTypes/entity.interface";
import {
  IOrganizationGroup,
  OrganizationGroup,
} from "../interfaces/kartoffelTypes/organizationGroup.interface";
import { IRole, Role } from "../interfaces/kartoffelTypes/role.interface";
import * as faker from "faker";
import {
  EntityArray,
  IEntityArray,
} from "../interfaces/kartoffelTypes/entityArray.interface";
import {
  IOGArray,
  OGArray,
} from "../interfaces/kartoffelTypes/ogArray.interface";
import {
  IRoleArray,
  RoleArray,
} from "../interfaces/kartoffelTypes/roleArray.interface";

export class KartoffelFaker {
  constructor() {}

  randomOG(): IOrganizationGroup {
    const organizationGroup: IOrganizationGroup = new OrganizationGroup(
      faker.datatype.uuid(),
      faker.company.companyName(),
      "oneTree",
      [faker.datatype.uuid()],
      `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      "active",
      true,
      faker.datatype.datetime().getTime(),
      faker.datatype.datetime().getTime(),
      [],
      []
    );
    return organizationGroup;
  }

  randomDI(): IDigitalIdentity {
    const digitalIdentity: IDigitalIdentity = new DigitalIdentity(
      "domainUser",
      "oneTree",
      faker.internet.email(),
      faker.internet.email(),
      faker.datatype.uuid(),
      faker.datatype.datetime().getTime(),
      faker.datatype.datetime().getTime(),
      true,
      null
    );
    return digitalIdentity;
  }

  randomRole(): IRole {
    const role: IRole = new Role(
      faker.internet.email(),
      faker.name.jobTitle(),
      faker.internet.email(),
      faker.datatype.uuid(),
      `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      [],
      "oneTree",
      faker.datatype.datetime().getTime(),
      faker.datatype.datetime().getTime()
    );
    return role;
  }

  randomEntity(): IEntity {
    const entity: IEntity = new Entity(
      faker.datatype.uuid(),
      `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      faker.datatype.uuid(),
      `${faker.company.companyName()}/${faker.company.companyName()}/${faker.company.companyName()}`,
      "soldier",
      faker.datatype.uuid(),
      faker.datatype.uuid(),
      "מילואים",
      faker.name.firstName(),
      faker.name.lastName(),
      faker.company.companyName(),
      faker.datatype.datetime().getTime(),
      "אזרח",
      faker.internet.email(),
      faker.name.jobTitle(),
      [faker.phone.phoneNumber()],
      [faker.phone.phoneNumber()],
      `${faker.address.streetAddress()}, ${faker.address.country()}`,
      "2",
      "זכר",
      faker.datatype.datetime().getTime(),
      faker.datatype.datetime().getTime(),
      faker.datatype.datetime().getTime(),
      []
    );
    return entity;
  }

  randomOGArray(): IOGArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let ogArray = [];
    for (let i = 0; i < length; i++) {
      ogArray.push(this.randomOG());
    }
    return new OGArray(ogArray);
  }

  randomRoleArray(): IRoleArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let roleArray = [];
    for (let i = 0; i < length; i++) {
      roleArray.push(this.randomRole());
    }
    return new RoleArray(roleArray);
  }

  randomEntityArray(): IEntityArray {
    const length = faker.datatype.number({
      min: 1,
      max: 10,
    });
    let entityArray = [];
    for (let i = 0; i < length; i++) {
      entityArray.push(this.randomEntity());
    }
    return new EntityArray(entityArray);
  }
}
