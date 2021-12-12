import { ApproverType } from '../interfaces/requestService';
import ApproverService from '../services/approverService';
import KartoffelService from '../services/kartoffelService';

interface ApproverObj {
  approverDIs: Array<string>;
  type: ApproverType;
}

export function validateApprovers(approverObj: ApproverObj) {
  return approverObj.approverDIs.length > 0;
}

export async function addApprovers(approverObj: ApproverObj) {
  const promises = approverObj.approverDIs.map((diUniqueId) => {
    return new Promise((resolve, reject) => {
      KartoffelService.getEntityByDI({ uniqueId: diUniqueId })
        .then((entity) => {
          entity.type = approverObj.type;
          ApproverService.addApprover(entity)
            .then((approver) => {
              resolve(approver);
            })
            .catch((addApproverError) => {
              reject(addApproverError);
            });
        })
        .catch((getEntityByDIError) => {
          reject(getEntityByDIError);
        });
    });
  });
  try {
    await Promise.all(promises);
  } catch (error) {
    throw error;
  }
}
