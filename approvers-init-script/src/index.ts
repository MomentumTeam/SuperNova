import { parseExcelFile } from './utils/excel';
import { ApproverType } from './interfaces/protoc/proto/requestService';
import { addApprovers, validateApprovers } from './utils/approvers.utils';
import { logger } from './logger';

async function main() {
  try {
    const excelArray: any = await parseExcelFile();

    const approversToAdd = [
      {
        approverDIs: excelArray.commanders,
        type: ApproverType.COMMANDER,
      },
      {
        approverDIs: excelArray.security,
        type: ApproverType.SECURITY,
      },
      {
        approverDIs: excelArray.superSecurity,
        type: ApproverType.SUPER_SECURITY,
      },
      {
        approverDIs: excelArray.bulk,
        type: ApproverType.BULK,
      },
      {
        approverDIs: excelArray.admin,
        type: ApproverType.ADMIN,
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
