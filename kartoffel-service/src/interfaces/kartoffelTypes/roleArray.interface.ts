import { IRole } from "./role.interface";

export interface IRoleArray {
  roles: IRole[];
}

export class RoleArray implements IRoleArray {
  roles: IRole[];
  constructor(roles: IRole[]) {
    this.roles = roles;
  }
}
