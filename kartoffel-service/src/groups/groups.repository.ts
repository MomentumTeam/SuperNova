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
  IsOGNameAlreadyTakenReq,
  IsOGNameAlreadyTakenRes,
  IdMessage,
  ExportHierarchyDataReq,
  ExportHierarchyDataRes,
} from '../interfaces/protoc/proto/kartoffelService';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { EntitiesRepository } from '../entities/entities.repository';
import {
  getDirectRolesForGroups,
  isOgNameOrJobTitleAlreadyTaken,
  exportHierarchyData,
} from './groups.utils';

export class GroupsRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  private entitiesRepository: EntitiesRepository;

  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
    this.entitiesRepository = new EntitiesRepository(
      kartoffelUtils,
      kartoffelFaker
    );
  }

  async isOGNameAlreadyTaken(
    isOGNameAlreadyTakenReq: IsOGNameAlreadyTakenReq
  ): Promise<IsOGNameAlreadyTakenRes> {
    try {
      cleanUnderscoreFields(isOGNameAlreadyTakenReq);
      if (C.useFaker) {
        const isOGNameAlreadyTaken = Math.random() < 0.5;
        let res: any = { isOGNameAlreadyTaken: isOGNameAlreadyTaken };
        return res as IsOGNameAlreadyTakenRes;
      } else {
        const isOGTaken = await isOgNameOrJobTitleAlreadyTaken(
          this,
          isOGNameAlreadyTakenReq.name,
          isOGNameAlreadyTakenReq.parent
        );
        return { isOGNameAlreadyTaken: isOGTaken.isAlreadyTaken };
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGTree(getOGTreeRequest: GetOGTreeRequest): Promise<OGTree> {
    try {
      cleanUnderscoreFields(getOGTreeRequest);
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

        // return await this.getTree(
        //   treeDepth,
        //   [
        //     organizationGroup.id,
        //     ...organizationGroup.ancestors.slice(0, treeDepth),
        //   ],
        //   rootTree
        // );
        return await this.getBranch(
          treeDepth,
          [
            organizationGroup.id,
            ...organizationGroup.ancestors.slice(0, treeDepth),
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
      cleanUnderscoreFields(getPrefixByOGIdRequest);
      if (C.useFaker) {
        const prefix = this.kartoffelFaker.randomNumber(1000, 9999);
        return { prefix: prefix.toString(), source: 'oneTree' };
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/${getPrefixByOGIdRequest.id}/diPrefix`
        );
        return { prefix: res.diPrefix } as OGPrefix;
      }
    } catch (error) {
      throw error;
    }
  }

  async getAllOGs(getAllOGsRequest: GetAllOGsRequest): Promise<OGArray> {
    try {
      cleanUnderscoreFields(getAllOGsRequest);
      if (C.useFaker) {
        const ogArray: OGArray = await this.kartoffelFaker.randomOGArray(
          getAllOGsRequest.pageSize
        );
        return ogArray;
      } else {
        getAllOGsRequest.source = getAllOGsRequest.source
          ? getAllOGsRequest.source
          : C.defaultRoleSource;
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups`,
          getAllOGsRequest
        );
        return { groups: res } as OGArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async createOG(createOGRequest: CreateOGRequest): Promise<IdMessage> {
    try {
      cleanUnderscoreFields(createOGRequest);
      if (C.useFaker) {
        const newOG: OrganizationGroup = await this.kartoffelFaker.randomOG();
        return newOG;
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/groups`,
          createOGRequest
        );
        return { id: res.id } as IdMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGByHierarchyName(
    getOGByHierarchyName: GetOGByHierarchyNameRequest
  ): Promise<OrganizationGroup> {
    try {
      cleanUnderscoreFields(getOGByHierarchyName);
      if (C.useFaker) {
        const og: OrganizationGroup = await this.kartoffelFaker.randomOG();
        return og;
      } else {
        const url = `${
          C.kartoffelUrl
        }/api/groups/hierarchy/${encodeURIComponent(
          getOGByHierarchyName.hierarchy
        )}`;
        const res = await this.kartoffelUtils.kartoffelGet(url, {});

        let group = res;
        if (getOGByHierarchyName.withRoles) {
          const direct = getOGByHierarchyName?.direct;

          let groupwithroles = await getDirectRolesForGroups([res], direct);
          group = groupwithroles[0];
        }

        return group as OrganizationGroup;
      }
    } catch (error) {
      throw error;
    }
  }

  async exportHierarchyData(
    exportHierarchyDataReq: ExportHierarchyDataReq
  ): Promise<ExportHierarchyDataRes> {
    try {
      cleanUnderscoreFields(exportHierarchyDataReq);
      //TODO - add faker

      const groupData = await this.getOGByHierarchyName(exportHierarchyDataReq);
     
      groupData.directRoles.sort((a: any, b: any) =>
        a.directGroup > b.directGroup ? 1 : -1
      );

      const hierarchyData: any[] = await exportHierarchyData(
        groupData,
        this,
        exportHierarchyDataReq.direct
      );

      const res: ExportHierarchyDataRes = {
        hierarchyData: hierarchyData,
        fatherHierarchyName: groupData.name,
      };

      return res as ExportHierarchyDataRes;
    } catch (error) {
      throw error;
    }
  }

  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      cleanUnderscoreFields(searchOGRequest);
      if (C.useFaker) {
        const ogArray: OGArray = await this.kartoffelFaker.randomOGArray();
        return ogArray;
      } else {
        searchOGRequest.source = searchOGRequest.source
          ? searchOGRequest.source
          : C.defaultOGSource;
        const queryParams: any = { ...searchOGRequest };
        delete queryParams.withRoles;

        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/groups/search`,
          queryParams
        );

        let groups = res as OrganizationGroup[];
        if (searchOGRequest.withRoles) {
          groups = await getDirectRolesForGroups(groups);
        }

        return { groups: groups } as OGArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(deleteOGRequest);
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/groups/${deleteOGRequest.id}`
        );
        return { success: true } as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOGById(
    getOGByIdRequest: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    try {
      cleanUnderscoreFields(getOGByIdRequest);
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
      cleanUnderscoreFields(getChildrenOfOGRequest);
      if (C.useFaker) {
        const ogChildern: OGArray = await this.kartoffelFaker.randomOGArray(
          getChildrenOfOGRequest.pageSize
        );
        return ogChildern;
      } else {
        const queryParams: any = { ...getChildrenOfOGRequest };
        delete queryParams.id;
        delete queryParams.withRoles;
        delete queryParams.withParent;

        if (!queryParams.page || !queryParams.pageSize) {
          //get all children
          let page = 1;
          let groups: OrganizationGroup[] = [];
          if (getChildrenOfOGRequest.withParent) {
            const parent = await this.getOGById({
              id: getChildrenOfOGRequest.id,
            });
            groups.push(parent);
          }

          while (true) {
            const currentPage = await this.getChildrenOfOG({
              id: getChildrenOfOGRequest.id,
              direct: getChildrenOfOGRequest.direct,
              page: page,
              pageSize: 100,
              withRoles: getChildrenOfOGRequest.withRoles,
            });
            if (!currentPage.groups || currentPage.groups.length === 0) {
              break;
            }

            groups.push(...currentPage.groups);
            page++;
          }
          return { groups: groups } as OGArray;
        } else {
          let groups:any = [];
          if (getChildrenOfOGRequest.withParent) {
            const parent = await this.getOGById({
              id: getChildrenOfOGRequest.id,
            });
            groups.push(parent);
          }
          const res = await this.kartoffelUtils.kartoffelGet(
            `${C.kartoffelUrl}/api/groups/${getChildrenOfOGRequest.id}/children`,
            queryParams
          );
          let resGroups = res as OrganizationGroup[];
          groups.push(...resGroups);

          if (getChildrenOfOGRequest.withRoles) {
            groups = await getDirectRolesForGroups(groups);
          }
          return { groups: groups } as OGArray;
        }
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
        const ogArray: OGArray = await this.getChildrenOfOG({
          id: C.kartoffelRootID,
          direct: true,
          withRoles: false,
        });
        return ogArray;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateOGParent(
    updateOGParentRequest: UpdateOGParentRequest
  ): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(updateOGParentRequest);
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelPut(
          `${C.kartoffelUrl}/api/groups/${updateOGParentRequest.id}/parent/${updateOGParentRequest.parentId}`
        );
        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          return { success: false };
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async renameOG(renameOGRequest: RenameOGRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(renameOGRequest);
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const body: any = { ...renameOGRequest };
        delete body.id;
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/groups/${renameOGRequest.id}/rename`,
          body
        );
        return { success: true } as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async getBranch(
    currentDepth: number,
    groupsToQuery: string[],
    currentChild: OrganizationGroup
  ): Promise<OGTree> {
    if (!groupsToQuery.includes(currentChild.id)) {
      return { id: currentChild.id, label: currentChild.name, children: [] };
    } else {
      if (currentDepth <= 0) {
        const members: Entity[] = (
          await this.entitiesRepository.getEntitiesUnderOG({
            id: currentChild.id,
            direct: true,
          })
        ).entities;

        const childrenInTree: OGTree[] = members.map((member) => {
          return { id: member.id, label: member.fullName, children: [] };
        });
        return {
          id: currentChild.id,
          label: currentChild.name,
          children: childrenInTree,
        };
      } else {
        const nextChild: OrganizationGroup = await this.getOGById({
          id: groupsToQuery[currentDepth - 1],
        });

        const childrenInBranch: OGTree[] = [
          await this.getBranch(currentDepth - 1, groupsToQuery, nextChild),
        ];
        return {
          id: currentChild.id,
          label: currentChild.name,
          children: childrenInBranch,
        };
      }
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
        const members: Entity[] = (
          await this.entitiesRepository.getEntitiesUnderOG({
            id: currentChild.id,
            direct: true,
          })
        ).entities;

        const childrenInTree: OGTree[] = members.map((member) => {
          return { id: member.id, label: member.fullName, children: [] };
        });
        return {
          id: currentChild.id,
          label: currentChild.name,
          children: childrenInTree,
        };
      } else {
        const ogChildren: OrganizationGroup[] = (
          await this.getChildrenOfOG({
            direct: true,
            id: currentChild.id,
            withRoles: false,
          })
        ).groups;

        const childrenInTree: OGTree[] = await Promise.all(
          ogChildren.map(async (ogChild) => {
            return await this.getTree(currentDepth - 1, groupsToQuery, ogChild);
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
