import KartoffelService from "./services/kartoffelService";
import ApproverService from "./services/approverService";
import { parseExcelFile } from "./utils/excel";
import { ApproverType } from "./interfaces/requestService";

interface approverObj {
  approverTs: Array<string>;
  type: ApproverType;
}

async function main() {
  try {
    const excelArray: any = await parseExcelFile();

    const approversToAdd = [
      {
        approverTs: excelArray.commanders,
        type: ApproverType.COMMANDER,
      },
      {
        approverTs: excelArray.security,
        type: ApproverType.SECURITY,
      },
      {
        approverTs: excelArray.superSecurity,
        type: ApproverType.SUPER_SECURITY,
      },
    ];

    approversToAdd.forEach((toAdd) => {
      validateTs(toAdd);
    });
    // const commandersEntities = commanders.map(async (commanderT: string) => {
    //   return await KartoffelService.getEntityByRoleId({ roleId: commanderT });
    // });

    // const securityEntities = security.map(async (securityT: string) => {
    //   await KartoffelService.getEntityByRoleId({roleId:securityT});
    // });

    // const superSecurityEntities = superSecurity.map(
    //   async (superSecurityT: string) => {
    //     await KartoffelService.getEntityByRoleId({roleId:superSecurityT});
    //   }
    // );

    // const addCommanderApprover = commandersEntities.map(
    //   async (commanderInfo: any) => {
    //     commanderInfo.type = ApproverType.COMMANDER;
    //     await ApproverService.addApprover(commanderInfo);
    //   }
    // );
    // const addSecuirtyApprover = securityEntities.map(
    //   async (securityInfo: any) => {
    //     securityInfo.type = ApproverType.SECURITY;
    //     await ApproverService.addApprover(securityInfo);
    //   }
    // );
    // const addSuperSecuirtyApprover = superSecurityEntities.map(
    //   async (superSecurityInfo: any) => {
    //     superSecurityInfo.type = ApproverType.SUPER_SECURITY;
    //     await ApproverService.addApprover(superSecurityInfo);
    //   }
    // );
  } catch (error) {
    throw Error;
  }
}

function validateTs(approverObj: approverObj) {
  if (approverObj.approverTs.length > 0) {
    AddApprover(approverObj);
  }
}

function AddApprover(approverObj: approverObj) {
  const approverEntities = approverObj.approverTs.map(async (type: string) => {
    return await KartoffelService.getEntityByRoleId({ roleId: type });
  });

  const addApproverd = approverObj.approverTs.map(async (entity: any) => {
    entity.type = approverObj.type;
    return await ApproverService.addApprover(entity);
  });
}

main();
