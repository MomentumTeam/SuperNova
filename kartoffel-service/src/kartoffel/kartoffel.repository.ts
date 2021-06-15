import { IConnectEntityAndDIRequest } from "../interfaces/connectEntityAndDI/connectEntityAndDIRequest.interface";
import { IConnectRoleAndDIRequest } from "../interfaces/connectRoleAndDI/connectRoleAndDIRequest.interface";
import { ICreateDIRequest } from "../interfaces/createDI/createDIRequest.interface";
import { ICreateEntityRequest } from "../interfaces/createEntity/createEntityRequest.interface";
import { ICreateOGRequest } from "../interfaces/createOG/crateOGRequest.interface";
import { ICreateRoleRequest } from "../interfaces/createRole/createRoleRequest.interface";
import { IDeleteDIRequest } from "../interfaces/deleteDI/deleteDIRequest.interface";
import { IDeleteOGRequest } from "../interfaces/deleteOG/deleteOGRequest.interface";
import { IDeleteRoleRequest } from "../interfaces/deleteRole/deleteRoleRequest.interface";
import { IDisconnectDIFromEntityRequest } from "../interfaces/disconnectDIFromEntity/disconnectDIFromEntityRequest.interface";
import { IGetChildrenOfOGRequest } from "../interfaces/getChildrenOfOG/getChildrenOfOGRequest.interface";
import { IGetEntitiesUnderOGRequest } from "../interfaces/getEntitiesUnderOG/getEntitiesUnderOGRequest.interface";
import { IGetEntityByIdNumberRequest } from "../interfaces/getEntityByIdNumber/getEntityByIdNumber.interface";
import { IGetEntityByMongoIdRequest } from "../interfaces/getEntityByMongoId/getEntityByMongoIdRequest.interface";
import { IGetEntityByRoleIdRequest } from "../interfaces/getEntityByRoleId/getEntityByRoleIdRequest.interface";
import { IGetRoleByRoleIdRequest } from "../interfaces/getRoleByRoleId/getRoleByRoleId.interface";
import { IGetRolesUnderOGRequest } from "../interfaces/getRolesUnderOG/getRolesUnderOGRequest.interface";
import {
  DigitalIdentity,
  IDigitalIdentity,
} from "../interfaces/kartoffelTypes/digitalIdentity.interface";
import { Entity, IEntity } from "../interfaces/kartoffelTypes/entity.interface";
import {
  EntityArray,
  IEntityArray,
} from "../interfaces/kartoffelTypes/entityArray.interface";
import {
  IOGArray,
  OGArray,
} from "../interfaces/kartoffelTypes/ogArray.interface";
import {
  IOrganizationGroup,
  OrganizationGroup,
} from "../interfaces/kartoffelTypes/organizationGroup.interface";
import { IRole, Role } from "../interfaces/kartoffelTypes/role.interface";
import {
  IRoleArray,
  RoleArray,
} from "../interfaces/kartoffelTypes/roleArray.interface";
import {
  ISuccessMessage,
  SuccessMessage,
} from "../interfaces/kartoffelTypes/successMessage.interface";
import { ISearchEntitiesByFullNameRequest } from "../interfaces/searchEntitiesByFullName/searchEntitiesByFullNameRequest.interface";
import { ISearchOGRequest } from "../interfaces/searchOG/searchOGRequest.interface";

export class KartoffelRepository {
  async searchOG(searchOGRequest: ISearchOGRequest): Promise<IOGArray> {
    try {
      return new OGArray([]);
    } catch (error) {
      throw error;
    }
  }
  async createOG(
    createOGRequest: ICreateOGRequest
  ): Promise<IOrganizationGroup> {
    try {
      return new OrganizationGroup(
        "123456",
        "צוות מומנטום",
        "oneTree",
        ["122as1da25sd1a5sd"],
        "מערך ספיר/ענף יסודות/מדור קריפטון/צוות מומנטום",
        "active",
        true,
        213513615,
        6161165114,
        [],
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: ICreateDIRequest): Promise<IDigitalIdentity> {
    try {
      return new DigitalIdentity(
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
    } catch (error) {
      throw error;
    }
  }

  async createRole(createRoleRequest: ICreateRoleRequest): Promise<IRole> {
    try {
      return new Role(
        "T14541541@gmail.com",
        "עתודאי",
        "T14541541@gmail.com",
        "561651abf141561",
        "מערך ספיר/ענף יסודות/מדור קריפטון/צוות מומנטום",
        [],
        "oneTree",
        15413212,
        15641141
      );
    } catch (error) {
      throw error;
    }
  }

  async connectRoleAndDI(
    connectRoleAndDIRequest: IConnectRoleAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async searchEntitiesByFullName(
    searchEntitiesByFullNameRequest: ISearchEntitiesByFullNameRequest
  ): Promise<IEntityArray> {
    try {
      return new EntityArray([]);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByIdNumber(
    getEntityByIdNumberRequest: IGetEntityByIdNumberRequest
  ): Promise<IEntity> {
    try {
      return new Entity(
        "5745457",
        "אהלן/מה/העניינים",
        "11541121a1213bf321",
        "אהלן/מה/העניינים",
        "soldier",
        "12313151",
        "25615614",
        "מילואים",
        "ברק",
        "שטינדל",
        "ספיר",
        1451454,
        "קאב",
        "T45151@gmail.com",
        "מתכנת",
        ["0521234567"],
        ["02821554"],
        "הכרמל 323",
        "2",
        "זכר",
        1454121,
        15132121,
        125412541,
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async getRoleByRoleId(
    getRoleByRoleIdRequest: IGetRoleByRoleIdRequest
  ): Promise<IRole> {
    try {
      return new Role(
        "T14541541@gmail.com",
        "עתודאי",
        "T14541541@gmail.com",
        "561651abf141561",
        "מערך ספיר/ענף יסודות/מדור קריפטון/צוות מומנטום",
        [],
        "oneTree",
        15413212,
        15641141
      );
    } catch (error) {
      throw error;
    }
  }

  async getRolesUnderOG(
    getRolesUnderOGRequest: IGetRolesUnderOGRequest
  ): Promise<IRoleArray> {
    try {
      return new RoleArray([
        new Role(
          "T14541541@gmail.com",
          "עתודאי",
          "T14541541@gmail.com",
          "561651abf141561",
          "מערך ספיר/ענף יסודות/מדור קריפטון/צוות מומנטום",
          [],
          "oneTree",
          15413212,
          15641141
        ),
      ]);
    } catch (error) {
      throw error;
    }
  }

  async connectEntityAndDI(
    connectEntityAndDIRequest: IConnectEntityAndDIRequest
  ): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async createEntity(
    createEntityRequest: ICreateEntityRequest
  ): Promise<IEntity> {
    try {
      return new Entity(
        "5745457",
        "אהלן/מה/העניינים",
        "11541121a1213bf321",
        "אהלן/מה/העניינים",
        "soldier",
        "12313151",
        "25615614",
        "מילואים",
        "ברק",
        "שטינדל",
        "ספיר",
        1451454,
        "קאב",
        "T45151@gmail.com",
        "מתכנת",
        ["0521234567"],
        ["02821554"],
        "הכרמל 323",
        "2",
        "זכר",
        1454121,
        15132121,
        125412541,
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async getEntityByRoleId(
    getEntityByRoleIdRequest: IGetEntityByRoleIdRequest
  ): Promise<IEntity> {
    try {
      return new Entity(
        "5745457",
        "אהלן/מה/העניינים",
        "11541121a1213bf321",
        "אהלן/מה/העניינים",
        "soldier",
        "12313151",
        "25615614",
        "מילואים",
        "ברק",
        "שטינדל",
        "ספיר",
        1451454,
        "קאב",
        "T45151@gmail.com",
        "מתכנת",
        ["0521234567"],
        ["02821554"],
        "הכרמל 323",
        "2",
        "זכר",
        1454121,
        15132121,
        125412541,
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async disconnectDIFromEntity(
    disconnectDIFromEntityRequest: IDisconnectDIFromEntityRequest
  ): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async getEntityByMongoId(
    getEntityByMongoIdRequest: IGetEntityByMongoIdRequest
  ): Promise<IEntity> {
    try {
      return new Entity(
        "5745457",
        "אהלן/מה/העניינים",
        "11541121a1213bf321",
        "אהלן/מה/העניינים",
        "soldier",
        "12313151",
        "25615614",
        "מילואים",
        "ברק",
        "שטינדל",
        "ספיר",
        1451454,
        "קאב",
        "T45151@gmail.com",
        "מתכנת",
        ["0521234567"],
        ["02821554"],
        "הכרמל 323",
        "2",
        "זכר",
        1454121,
        15132121,
        125412541,
        []
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: IDeleteOGRequest): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: IGetChildrenOfOGRequest
  ): Promise<IOGArray> {
    try {
      return new OGArray([
        new OrganizationGroup(
          "123456",
          "צוות מומנטום",
          "oneTree",
          ["122as1da25sd1a5sd"],
          "מערך ספיר/ענף יסודות/מדור קריפטון/צוות מומנטום",
          "active",
          true,
          213513615,
          6161165114,
          [],
          []
        ),
      ]);
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(
    deleteRoleRequest: IDeleteRoleRequest
  ): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: IDeleteDIRequest): Promise<ISuccessMessage> {
    try {
      return new SuccessMessage(true);
    } catch (error) {
      throw error;
    }
  }

  async getEntitiesUnderOG(
    getEntitiesUnderOGRequest: IGetEntitiesUnderOGRequest
  ): Promise<IEntityArray> {
    try {
      return new EntityArray([]);
    } catch (error) {
      throw error;
    }
  }
}
