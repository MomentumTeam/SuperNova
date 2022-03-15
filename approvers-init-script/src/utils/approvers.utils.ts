import { ApproverType } from '../interfaces/protoc/proto/requestService';
import ApproverService from '../services/approverService';
import KartoffelService from '../services/kartoffelService';
interface ApproverObj {
  approverDIs: Array<string>;
  type: ApproverType;
  groupInChargeId?: any;
}

export function validateApprovers(approverObj: ApproverObj) {
  return approverObj.approverDIs.length > 0;
}

export async function addApprovers(approverObj: ApproverObj) {
  const promises = approverObj.approverDIs.map((diUniqueId, index) => {
    return new Promise((resolve, reject) => {
      KartoffelService.getEntityByDI({ uniqueId: diUniqueId })
        .then((entity) => {
          entity.type = approverObj.type;
          if (
            entity.type === ApproverType.ADMIN ||
            entity.type === ApproverType.SECURITY_ADMIN
          ) {
            entity.groupInChargeId = approverObj.groupInChargeId[index];
          }
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
