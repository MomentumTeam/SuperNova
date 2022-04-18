import * as C from '../config';
import {
  GetRolesUnderOGRequest,
  HierarchyData,
  OGArray,
  Role,
  RoleArray,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import {
  getJobTitleSuggestions,
  jobTitleExists,
} from '../utils/jobTitles.utils';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { getOgNameSuggestions, ogNameExists } from '../utils/ogName.utils';
import { GroupsRepository } from './groups.repository';
import { DiRepository } from '../digitalIdentities/di.repository';
import { EntitiesRepository } from '../entities/entities.repository';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

export type isAlreadyTakenType = {
  isAlreadyTaken: boolean;
  suggestions: string[];
};

const diRepository: DiRepository = new DiRepository(
  kartoffelUtils,
  kartoffelFaker
);

const entitiesRepository: EntitiesRepository = new EntitiesRepository(
  kartoffelUtils,
  kartoffelFaker
);

const getRolesUnderOG = async (
  getRolesUnderOGRequest: GetRolesUnderOGRequest
): Promise<RoleArray> => {
  try {
    cleanUnderscoreFields(getRolesUnderOGRequest);
    if (C.useFaker) {
      return kartoffelFaker.randomRoleArray(getRolesUnderOGRequest.pageSize);
    } else {
      const groupId = getRolesUnderOGRequest.groupId;
      const req: any = getRolesUnderOGRequest;
      delete req.groupId;

      const roles: Role[] = await kartoffelUtils.kartoffelGet(
        `${C.kartoffelUrl}/api/roles/group/${groupId}`,
        req
      );
      return { roles: roles } as RoleArray;
    }
  } catch (error) {
    throw error;
  }
};

export const getDirectRolesForGroups = async (
  groups: any,
  direct: boolean = true
) => {
  await Promise.all(
    groups.map(async (group: any) => {
      let directRoles: any = [];
      let res: RoleArray;
      let pageCounter = 1;

      do {
        res = await getRolesUnderOG({
          direct,
          groupId: group.id,
          page: pageCounter,
          pageSize: 100,
        });

        directRoles = [...directRoles, ...res.roles];
        pageCounter++;
      } while (res.roles.length > 0);

      group.directRoles = directRoles;
    })
  );

  return groups;
};

export const exportHierarchyData = async (
  hierarchy: any,
  groupsRepository: GroupsRepository,
  direct: boolean = false
) => {
  let hierarchyName: any;
  if (hierarchy?.name) {
    hierarchyName = hierarchy?.hierarchy
      ? `${hierarchy.hierarchy}/${hierarchy.name}`
      : hierarchy.name;
  } else hierarchyName = undefined;

  return await Promise.all(
    hierarchy.directRoles.map(async (role: any) => {
      let newRow: any = {};

      newRow['jobTitle'] = role.jobTitle;
      newRow['roleId'] = role.roleId;

      if (!direct) {
        try {
          const roleOg = await groupsRepository.getOGById({
            id: role.directGroup,
          });
          newRow['hierarchyName'] = roleOg?.hierarchy
            ? `${roleOg.hierarchy}/${roleOg.name}`
            : roleOg.name;
        } catch (error) {
          newRow['hierarchyName'] = 'לא ידוע';
        }
      } else {
        newRow['hierarchyName'] = hierarchyName;
      }

      try {
        const di = await diRepository.getDIByUniqueId({
          uniqueId: role.digitalIdentityUniqueId,
        });
        newRow['upn'] = di?.upn ? di.upn : '---';
      } catch (error) {
        newRow['upn'] = 'לא ידוע';
      }

      try {
        const entity = await entitiesRepository.getEntityByRoleId({
          roleId: role.roleId,
        });
        newRow['entity'] = undefined;

        if (entity && (entity?.displayName || entity?.fullName)) {
          newRow['entity'] = entity.fullName
            ? entity.fullName
            : entity.displayName;
        }
      } catch (error) {
        newRow['entity'] = 'לא ידוע';
      }

      return newRow as HierarchyData;
    })
  );
};

export const isJobTitleAlreadyTakenCheck = async (
  jobTitle: any,
  directGroup: any
): Promise<isAlreadyTakenType> => {
  let roleArray: RoleArray;
  let pageCounter = 1;
  let isJobTitleExists = false;

  do {
    roleArray = await getRolesUnderOG({
      groupId: directGroup,
      direct: true,
      page: pageCounter,
      pageSize: 100,
    });
    isJobTitleExists = jobTitleExists(roleArray, jobTitle);
    pageCounter++;
  } while (roleArray.roles.length > 0 && !isJobTitleExists);

  return {
    isAlreadyTaken: isJobTitleExists,
    suggestions: isJobTitleExists
      ? getJobTitleSuggestions(roleArray, jobTitle)
      : [],
  };
};

export const isOgNameAlreadyTakenCheck = async (
  groupsRepository: GroupsRepository,
  ogName: any,
  parent: any
): Promise<isAlreadyTakenType> => {
  let childrenArray: OGArray = await groupsRepository.getChildrenOfOG({
    id: parent,
    direct: true,
  } as any);

  const isOgNameExists = ogNameExists(childrenArray, ogName);

  return {
    isAlreadyTaken: isOgNameExists,
    suggestions: isOgNameExists
      ? getOgNameSuggestions(childrenArray, ogName)
      : [],
  };
};

export const isOgNameOrJobTitleAlreadyTaken = async (
  groupsRepository: GroupsRepository,
  name: any,
  directGroup: any
): Promise<isAlreadyTakenType> => {
  const isOgNameAlreadyTaken = await isOgNameAlreadyTakenCheck(
    groupsRepository,
    name,
    directGroup
  );
  const isJobTitleAlreadyTaken = await isJobTitleAlreadyTakenCheck(
    name,
    directGroup
  );

  let suggestions: string[] = [];
  if (isOgNameAlreadyTaken.isAlreadyTaken) {
    suggestions = isOgNameAlreadyTaken.suggestions;
  } else if (isJobTitleAlreadyTaken.isAlreadyTaken) {
    suggestions = isJobTitleAlreadyTaken.suggestions;
  }

  return {
    isAlreadyTaken:
      isOgNameAlreadyTaken.isAlreadyTaken ||
      isJobTitleAlreadyTaken.isAlreadyTaken,
    suggestions,
  };
};
