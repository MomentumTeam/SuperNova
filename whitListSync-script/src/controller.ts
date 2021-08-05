import { approverClient } from './clients';
import {
  ApproverIdArray,
  Approver,
} from './interfaces/protoc/proto/approverService';

export function getAllApproverIds() {
  console.log('getAllApproverIds');
  return new Promise((resolve, reject) => {
    approverClient.getAllApproverIds((err: any, response: ApproverIdArray) => {
      if (err) {
        console.log('err', err);
        resolve(null);
      }
      console.log('response', response);
      resolve(response);
    });
  });
}

export async function sync(entityId: string) {
  console.log('sync');
  return new Promise((resolve, reject) => {
    approverClient.SyncApprover(
      { approverId: entityId },
      (err: any, response: Approver) => {
        if (err) {
          resolve(null);
        }
        resolve(response);
      }
    );
  });
}
