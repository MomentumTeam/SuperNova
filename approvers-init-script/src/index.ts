import { parseExcelFile, parseExcelFileAdmin } from './utils/excel';
import { ApproverType } from './interfaces/protoc/proto/requestService';
import { addApprovers, validateApprovers } from './utils/approvers.utils';
import { logger } from './logger';

async function main() {
  try {
    let commanders: any = await parseExcelFile(0);
    let security: any = await parseExcelFile(1);
    let superSecurity: any = await parseExcelFile(2);
    let bulk: any = await parseExcelFile(3);
    let adminIo: any = await parseExcelFileAdmin();

    const approversToAdd = [
      {
        approverDIs: commanders,
        type: ApproverType.COMMANDER,
      },
      {
        approverDIs: security,
        type: ApproverType.SECURITY,
      },
      {
        approverDIs: superSecurity,
        type: ApproverType.SUPER_SECURITY,
      },
      {
        approverDIs: bulk,
        type: ApproverType.BULK,
      },
      {
        approverDIs: adminIo.admin,
        type: ApproverType.ADMIN,
        groupInChargeId: adminIo.io,
      },
    ];

    approversToAdd.forEach(async (approversToAdd) => {
      if (validateApprovers(approversToAdd)) {
        await addApprovers(approversToAdd);
      }
    });
  } catch (error) {
    throw error;
  }
}

main()
  .then(() => {
    logger.info('approver-init-script finished successfully');
  })
  .catch((error) => {
    logger.error('approver-init-script finished with errors', {
      error: { message: error.message },
    });
  });
