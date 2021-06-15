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

export const organizationGroup: IOrganizationGroup = new OrganizationGroup(
  "123456",
  "צוות מומנטום",
  "oneTree",
  ["122as1da25sd1a5sd"],
  "מערך מגניב/ענף נחמד/מדור אחלה/צוות מומנטום",
  "active",
  true,
  213513615,
  6161165114,
  [],
  []
);

export const digitalIdentity: IDigitalIdentity = new DigitalIdentity(
  "domainUser",
  "oneTree",
  "T14541@gmail.com",
  "T14541@gmail.com",
  "41a654156b415f641d",
  45415415,
  14541541,
  true,
  null
);

export const role: IRole = new Role(
  "T14541541@gmail.com",
  "עתודאי",
  "T14541541@gmail.com",
  "561651abf141561",
  "מערך מגניב/ענף נחמד/מדור אחלה/צוות מומנטום",
  [],
  "oneTree",
  15413212,
  15641141
);

export const entity: IEntity = new Entity(
  "5745457",
  "אהלן/מה/העניינים",
  "11541121a1213bf321",
  "אהלן/מה/העניינים",
  "soldier",
  "12313151",
  "25615614",
  "מילואים",
  "ברק",
  "מרק",
  "סססאפ",
  1451454,
  "אזרח",
  "T45151@gmail.com",
  "מתכנת",
  ["0521234567"],
  ["028215111154"],
  "איינשטיין 323",
  "2",
  "זכר",
  1454121,
  15132121,
  125412541,
  []
);
