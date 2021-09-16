import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  OGArray,
  SearchOGRequest,
  OrganizationGroup,
  CreateOGRequest,
  GetOGByHierarchyNameRequest,
  SuccessMessage,
  DeleteOGRequest,
  GetOGByIdRequest,
  GetChildrenOfOGRequest,
  UpdateOGParentRequest,
  RenameOGRequest,
  GetAllOGsRequest,
  GetOGTreeRequest,
  OGTree,
} from '../interfaces/protoc/proto/kartoffelService';

export class GroupsRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async getOGTree(getOGTreeRequest: GetOGTreeRequest): Promise<OGTree> {
    try {
      if (C.useFaker) {
        return this.kartoffelFaker.randomOGTree();
      } else {
        //TODO
        return this.kartoffelFaker.randomOGTree();
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllOGs(getAllOGsRequest: GetAllOGsRequest): Promise<OGArray> {
    try {
      if (C.useFaker) {
        const ogArray: OGArray = this.kartoffelFaker.randomOGArray();
        return ogArray;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups`,
          getAllOGsRequest
        );
        return res as OGArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async createOG(createOGRequest: CreateOGRequest): Promise<OrganizationGroup> {
    try {
      if (C.useFaker) {
        const newOG: OrganizationGroup = this.kartoffelFaker.randomOG();
        return newOG;
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/groups`,
          createOGRequest
        );
        return res as OrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGByHierarchyName(
    getOGByHierarchyName: GetOGByHierarchyNameRequest
  ): Promise<OrganizationGroup> {
    try {
      if (C.useFaker) {
        const og: OrganizationGroup = this.kartoffelFaker.randomOG();
        return og;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/hierarchy/${getOGByHierarchyName.hierarchy}`,
          {}
        );
        return res as OrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      if (C.useFaker) {
        const ogArray: OGArray = await this.kartoffelFaker.randomOGArray();
        return ogArray;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/search`,
          searchOGRequest
        );
        return res as OGArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/groups/${deleteOGRequest.id}`
        );
        return res as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGById(
    getOGByIdRequest: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    try {
      if (C.useFaker) {
        const og: OrganizationGroup = this.kartoffelFaker.randomOG();
        return og;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/${getOGByIdRequest.id}`,
          {}
        );
        return res as OrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: GetChildrenOfOGRequest
  ): Promise<OGArray> {
    try {
      if (C.useFaker) {
        const ogChildern: OGArray = this.kartoffelFaker.randomOGArray();
        return ogChildern;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/${getChildrenOfOGRequest.id}/children`,
          getChildrenOfOGRequest
        );
        return res as OGArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateOGParent(
    updateOGParentRequest: UpdateOGParentRequest
  ): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/groups/${updateOGParentRequest.id}/parent/${updateOGParentRequest.parentId}`,
          updateOGParentRequest
        );
        return res as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async renameOG(renameOGRequest: RenameOGRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/groups/${renameOGRequest.id}/rename`,
          renameOGRequest
        );
        return res as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }
}
