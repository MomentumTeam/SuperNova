import * as C from "../config";
import { GetRolesUnderOGRequest, Role, RoleArray } from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { cleanUnderscoreFields } from '../utils/json.utils';
import { KartoffelUtils } from '../utils/kartoffel.utils';

const kartoffelFaker: KartoffelFaker = new KartoffelFaker();
const kartoffelUtils: KartoffelUtils = new KartoffelUtils();

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