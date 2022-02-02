import * as C from "../config";
import { GetRolesUnderOGRequest, OGArray, Role, RoleArray } from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { getSuggestions, jobTitleExists } from '../utils/jobTitles.utils';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { ogNameExists } from '../utils/ogName.utils';
import { GroupsRepository } from './groups.repository';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

export type isAlreadyTakenType = {
  isAlreadyTaken: boolean;
  suggestions?: string[];
};

const getRolesUnderOG = async(getRolesUnderOGRequest: GetRolesUnderOGRequest): Promise<RoleArray> => {
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
}
export const getDirectRolesForGroups = async (groups: any) => {
   await Promise.all(
     groups.map(async (group: any) => {
       let directRoles: any = [];
       let res: RoleArray;
       let pageCounter = 1;

       do {
         res = await getRolesUnderOG({
           direct: true,
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
}

export const isJobTitleAlreadyTakenCheck = async (jobTitle: any, directGroup: any): Promise<isAlreadyTakenType> => {
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
    suggestions: isJobTitleExists ? getSuggestions(roleArray, jobTitle) : [],
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

  return { isAlreadyTaken: ogNameExists(childrenArray, ogName) };
};
 
export const isOgNameOrJobTitleAlreadyTaken = async (
  groupsRepository: GroupsRepository,
  name: any,
  directGroup: any,
  addSuggestion = false
): Promise<isAlreadyTakenType> => {
  const isOgNameAlreadyTaken = await isOgNameAlreadyTakenCheck(groupsRepository, name, directGroup);
  const isJobTitleAlreadyTaken = await isJobTitleAlreadyTakenCheck(name, directGroup);

  return {
    isAlreadyTaken: isOgNameAlreadyTaken.isAlreadyTaken || isJobTitleAlreadyTaken.isAlreadyTaken,
    ...(addSuggestion && { suggestions: isJobTitleAlreadyTaken.suggestions }),
  };
};