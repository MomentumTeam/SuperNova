import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  Entity,
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
  GetPrefixByOGIdRequest,
  OGPrefix,
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
        const organizationGroup: OrganizationGroup = await this.getOGById({
          id: getOGTreeRequest.directGroupId,
        });
        let treeDepth =
          organizationGroup.ancestors.length < C.kartoffelTreeDepth
            ? organizationGroup.ancestors.length
            : C.kartoffelTreeDepth;

        const rootTree: OrganizationGroup =
          treeDepth === 0
            ? organizationGroup
            : await this.getOGById({
                id: organizationGroup.ancestors[treeDepth - 1],
              });

        return await this.getTree(
          treeDepth,
          [
            organizationGroup.id,
            ...organizationGroup.ancestors.slice(0, treeDepth - 1),
          ],
          rootTree
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getPrefixByOGId(
    getPrefixByOGIdRequest: GetPrefixByOGIdRequest
  ): Promise<OGPrefix> {
    try {
      if (C.useFaker) {
        const prefix = this.kartoffelFaker.randomNumber(1000, 9999);
        return { prefix: prefix.toString(), source: 'oneTree' };
      } else {
        //TODO
        const prefix = this.kartoffelFaker.randomNumber(1000, 9999);
        return { prefix: prefix.toString(), source: 'oneTree' };
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllOGs(getAllOGsRequest: GetAllOGsRequest): Promise<OGArray> {
    try {
      if (C.useFaker) {
        const ogArray: OGArray = await this.kartoffelFaker.randomOGArray(getAllOGsRequest.pageSize);
        return ogArray;
      } else {
        getAllOGsRequest.source = getAllOGsRequest.source
          ? getAllOGsRequest.source
          : 'oneTree';
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
        const newOG: OrganizationGroup = await this.kartoffelFaker.randomOG();
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
        const og: OrganizationGroup = await this.kartoffelFaker.randomOG();
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
        const og: OrganizationGroup = await this.kartoffelFaker.randomOG();
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
        const ogChildern: OGArray = await this.kartoffelFaker.randomOGArray(getChildrenOfOGRequest.pageSize);
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

  async getChildrenOfRootOG(): Promise<OGArray> {
    try {
      if (C.useFaker) {
        const ogChildern: OGArray = await this.kartoffelFaker.randomOGArray();
        return ogChildern;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/${C.kartoffelRootID}/children`,
          { direct: true }
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

  async getTree(
    currentDepth: number,
    groupsToQuery: Array<String>,
    currentChild: OrganizationGroup
  ): Promise<OGTree> {
    if (!groupsToQuery.includes(currentChild.id)) {
      return { id: currentChild.id, label: currentChild.name, children: [] };
    } else {
      if (currentDepth <= 0) {
        const members: Entity[] = await this.kartoffelUtils.kartoffelGet(
          // TODO: use existed api
          `${C.kartoffelUrl}/api/entities/group/${currentChild.id}?direct=true&expanded=false&page=1`
        );
        const childrenInTree: OGTree[] = members.map((member) => {
          return { id: member.id, label: member.jobTitle, children: [] };
        });
        return {
          id: currentChild.id,
          label: currentChild.name,
          children: childrenInTree,
        };
      } else {
        const OGchildren: OrganizationGroup[] = (
          await this.getChildrenOfOG({
            direct: true,
            id: currentChild.id,
            page: 1,
            pageSize: 100000,
          })
        ).groups;

        const childrenInTree: OGTree[] = await Promise.all(
          OGchildren.map(async (ogChild) => {
            return await this.getTree(currentDepth--, groupsToQuery, ogChild);
          })
        );
        return {
          id: currentChild.id,
          label: currentChild.name,
          children: childrenInTree,
        };
      }
    }
  }
}
