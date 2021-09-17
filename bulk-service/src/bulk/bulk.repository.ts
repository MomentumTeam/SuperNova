import {
  ChangeRoleHierarchyBulkReq,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  CreateRoleBulkRes,
  CreateRoleReq,
  Request,
  RequestType,
} from '../interfaces/protoc/proto/requestService';
import { RequestService } from '../services/request.service';
import { parseExcelFile } from '../utils/excel';

export class BulkRepository {
  private requestService: RequestService;
  constructor() {
    this.requestService = new RequestService();
  }

  async createRoleBulkRequest(
    createRoleBulkReq: CreateRoleBulkReq
  ): Promise<CreateRoleBulkRes> {
    return new Promise(async (createRoleBulkResolve, createRoleBulkReject) => {
      let bulkRequestId: any = undefined;
      try {
        const bulkRequest: Request =
          await this.requestService.createRoleBulkRequest(createRoleBulkReq);
        bulkRequestId = bulkRequest.id;

        const rows = await parseExcelFile(
          createRoleBulkReq.excelFilePath,
          RequestType.CREATE_ROLE_BULK
        );
        const promises: Promise<any>[] = rows.map((row: any) => {
          return new Promise((resolve, reject) => {
            let createRoleRequestReq: any = Object.assign(
              {},
              createRoleBulkReq
            );
            createRoleRequestReq = {
              ...createRoleRequestReq,
            };
            delete createRoleRequestReq.requestIds;
            delete createRoleRequestReq.rowErrors;
            delete createRoleRequestReq.excelFilePath;
            createRoleRequestReq.kartoffelParams = {
              ...createRoleRequestReq.kartoffelParams,
              jobTitle: row.jobTitle,
              clearance: row.clearance,
              type: 'domainUser', //always domainUser
              source: 'oneTree', //always oneTree
              isRoleAttachable: true,
              roleEntityType: row.roleEntityType,
            };
            createRoleRequestReq.adParams = {
              ...createRoleRequestReq.adParams,
              jobTitle: row.jobTitle,
            };
            createRoleRequestReq.isPartOfBulk = true;
            createRoleRequestReq.bulkRequestId = bulkRequestId;
            createRoleRequestReq.rowNumber = row.rowNumber;
            this.requestService
              .createRoleRequest(createRoleRequestReq)
              .then((createRoleRequestRes) => {
                resolve(createRoleRequestRes);
              })
              .catch((error: any) => reject(error));
          });
        });
        Promise.all(promises)
          .then(async (values) => {
            const requestIds = values.map((value) => value.id);
            const updatedBulkRequest: CreateRoleBulkRes =
              await this.requestService.updateRequest({
                id: bulkRequestId,
                requestProperties: { requestIds: requestIds },
              });
            createRoleBulkResolve(updatedBulkRequest);
          })
          .catch(async (error) => {
            await this.requestService.deleteRequest({ id: bulkRequestId });
            createRoleBulkReject(error);
          });
      } catch (error) {
        if (bulkRequestId) {
          await this.requestService.deleteRequest({ id: bulkRequestId });
        }
        createRoleBulkReject(error);
      }
    });
  }

  async changeRoleHierarchyBulkRequest(
    changeRoleHierarchyBulkReq: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes> {
    return new Promise(async (createRoleBulkResolve, createRoleBulkReject) => {
      let bulkRequestId: any = undefined;
      try {
        const bulkRequest: Request =
          await this.requestService.changeRoleHierarchyBulkRequest(
            changeRoleHierarchyBulkReq
          );
        bulkRequestId = bulkRequest.id;

        const rows = await parseExcelFile(
          changeRoleHierarchyBulkReq.excelFilePath,
          RequestType.CHANGE_ROLE_HIERARCHY_BULK
        );
        const promises: Promise<any>[] = rows.map((row: any) => {
          return new Promise((resolve, reject) => {
            let changeRoleHierarchyRequestReq: any = Object.assign(
              {},
              changeRoleHierarchyBulkReq
            );
            changeRoleHierarchyRequestReq = {
              ...changeRoleHierarchyRequestReq,
            };
            delete changeRoleHierarchyRequestReq.requestIds;
            delete changeRoleHierarchyRequestReq.rowErrors;
            delete changeRoleHierarchyRequestReq.excelFilePath;

            changeRoleHierarchyRequestReq.kartoffelParams = {
              ...changeRoleHierarchyRequestReq.kartoffelParams,
              roleId: row.roleId,
            };

            changeRoleHierarchyRequestReq.adParams = {
              ...changeRoleHierarchyRequestReq.adParams,
              samAccountName: row.roleId,
            };
            if (row.newJobTitle) {
              changeRoleHierarchyRequestReq.kartoffelParams.jobTitle =
                row.newJobTitle;
              changeRoleHierarchyRequestReq.adParams.jobTitle = row.newJobTitle;
            }
            changeRoleHierarchyRequestReq.isPartOfBulk = true;
            changeRoleHierarchyRequestReq.bulkRequestId = bulkRequestId;
            changeRoleHierarchyRequestReq.rowNumber = row.rowNumber;
            this.requestService
              .createRoleRequest(changeRoleHierarchyRequestReq)
              .then((createRoleRequestRes) => {
                resolve(createRoleRequestRes);
              })
              .catch((error: any) => reject(error));
          });
        });
        Promise.all(promises)
          .then(async (values) => {
            const requestIds = values.map((value) => value.id);
            const updatedBulkRequest: ChangeRoleHierarchyBulkRes =
              await this.requestService.updateRequest({
                id: bulkRequestId,
                requestProperties: { requestIds: requestIds },
              });
            createRoleBulkResolve(updatedBulkRequest);
          })
          .catch(async (error) => {
            await this.requestService.deleteRequest({ id: bulkRequestId });
            createRoleBulkReject(error);
          });
      } catch (error) {
        if (bulkRequestId) {
          await this.requestService.deleteRequest({ id: bulkRequestId });
        }
        createRoleBulkReject(error);
      }
    });
  }
}
