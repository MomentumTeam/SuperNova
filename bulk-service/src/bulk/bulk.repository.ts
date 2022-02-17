import { exampleFiles } from '../config';
import {
  BulkType,
  bulkTypeFromJSON,
  ChangeRoleHierarchyRow,
  CreateRoleRow,
  DetailedChangeRoleHierarchyBulkRequest,
  DetailedCreateRoleBulkRequest,
  GetBulkRequestByIdReq,
  GetBulkRequestExampleReq,
  GetBulkRequestExampleRes,
  IsBulkFileValidReq,
  IsBulkFileValidRes,
} from '../interfaces/protoc/proto/bulkService';
import {
  ChangeRoleHierarchyBulkReq,
  ChangeRoleHierarchyBulkRes,
  CreateRoleBulkReq,
  CreateRoleBulkRes,
  Request,
  RequestArray,
  RequestType,
} from '../interfaces/protoc/proto/requestService';
import { RequestService } from '../services/request.service';
import { parseExcelFile } from '../utils/excel';
import * as C from '../config';

export class BulkRepository {
  private requestService: RequestService;
  constructor() {
    this.requestService = new RequestService();
  }

  async isBulkFileValid(
    isBulkFileValidReq: IsBulkFileValidReq
  ): Promise<IsBulkFileValidRes> {
    try {
      const type =
        typeof isBulkFileValidReq.type === typeof ''
          ? bulkTypeFromJSON(isBulkFileValidReq.type)
          : isBulkFileValidReq.type;
      const requestType =
        type === BulkType.CHANGE_ROLE_HIERARCHY_REQUEST
          ? RequestType.CHANGE_ROLE_HIERARCHY_BULK
          : RequestType.CREATE_ROLE_BULK;
      const res = await parseExcelFile(
        isBulkFileValidReq.fileName,
        requestType
      );
      return { isFileValid: res.legal, errorRows:res?.errorRows };
    } catch (error: any) {
      throw error;
    }
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

        const res = await parseExcelFile(
          createRoleBulkReq.excelFilePath,
          RequestType.CREATE_ROLE_BULK
        );
        
        const promises: Promise<any>[] = res.rows.map((row: any) => {
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
              type: C.domainUser, //always domainUser
              source: C.defaultRoleSource, //always oneTree
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
            try {
              await this.requestService.sendSubmissionMail({
                id: bulkRequestId,
              });
            } catch (notificationError) {}
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

        const res = await parseExcelFile(
          changeRoleHierarchyBulkReq.excelFilePath,
          RequestType.CHANGE_ROLE_HIERARCHY_BULK
        );
        const promises: Promise<any>[] = res.rows.map((row: any) => {
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
              roleId: `${row.roleId.split('@')[0]}@${C.defaultRoleSuffix}`,
              currentJobTitle: row.currentJobTitle,
            };

            changeRoleHierarchyRequestReq.adParams = {
              ...changeRoleHierarchyRequestReq.adParams,
              samAccountName: row.roleId.split('@')[0],
            };
            if (row.newJobTitle) {
              changeRoleHierarchyRequestReq.kartoffelParams.newJobTitle =
                row.newJobTitle;
              changeRoleHierarchyRequestReq.adParams.newJobTitle =
                row.newJobTitle;
            }
            changeRoleHierarchyRequestReq.isPartOfBulk = true;
            changeRoleHierarchyRequestReq.bulkRequestId = bulkRequestId;
            changeRoleHierarchyRequestReq.rowNumber = row.rowNumber;
            this.requestService
              .changeRoleHierarchyRequest(changeRoleHierarchyRequestReq)
              .then((changeRoleHierarchyRequestRes) => {
                resolve(changeRoleHierarchyRequestRes);
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
            try {
              await this.requestService.sendSubmissionMail({
                id: bulkRequestId,
              });
            } catch (notificationError) {}
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

  async getBulkRequestExample(
    getBulkRequestExampleReq: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes> {
    return new Promise(
      async (getBulkRequestExampleResolve, getBulkRequestExampleReject) => {
        try {
          let filename;
          const type = bulkTypeFromJSON(getBulkRequestExampleReq.bulkType);
          switch (type) {
            case BulkType.CHANGE_ROLE_HIERARCHY_REQUEST:
              filename = exampleFiles.changeRoleHierarchyRequest;
              break;
            case BulkType.CREATE_ROLE_REQUEST:
              filename = exampleFiles.createRoleRequest;
              break;
            default:
              break;
          }

          if (filename) {
            const getBulkRequestExampleRes: GetBulkRequestExampleRes = {
              bulkFileName: filename,
            };
            getBulkRequestExampleResolve(getBulkRequestExampleRes);
          } else {
            throw new Error('file name not found');
          }
        } catch (error) {
          getBulkRequestExampleReject(error);
        }
      }
    );
  }

  async getCreateRoleBulkRequestById(
    getBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest> {
    try {
      const bulkRequest: Request = await this.requestService.getRequestById({
        id: getBulkRequestByIdReq.id,
      });
      const requestsUnderBulk: RequestArray =
        await this.requestService.getRequestsUnderBulk({
          id: getBulkRequestByIdReq.id,
        });
      const rows: CreateRoleRow[] = requestsUnderBulk.requests.map(
        (requestUnderBulk: Request) => {
          return {
            id: requestUnderBulk.id ? requestUnderBulk.id : '',
            jobTitle: requestUnderBulk.kartoffelParams?.jobTitle
              ? requestUnderBulk.kartoffelParams?.jobTitle
              : '',
            clearance: requestUnderBulk.kartoffelParams?.clearance
              ? requestUnderBulk.kartoffelParams?.clearance
              : '',
            roleEntityType: requestUnderBulk.kartoffelParams?.roleEntityType
              ? C.kartoffelEntityTypeToHeb[
                  requestUnderBulk.kartoffelParams?.roleEntityType
                ]
              : '',
            rowNumber: requestUnderBulk.rowNumber
              ? requestUnderBulk.rowNumber
              : '-',
            status: requestUnderBulk.status
              ? requestUnderBulk.status
              : undefined,
          };
        }
      );
      return { request: bulkRequest, rows: rows };
    } catch (error: any) {
      throw error;
    }
  }

  async getChangeRoleHierarchyBulkRequestById(
    getBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedChangeRoleHierarchyBulkRequest> {
    try {
      const bulkRequest: Request = await this.requestService.getRequestById({
        id: getBulkRequestByIdReq.id,
      });
      const requestsUnderBulk: RequestArray =
        await this.requestService.getRequestsUnderBulk({
          id: getBulkRequestByIdReq.id,
        });
      const rows: ChangeRoleHierarchyRow[] = requestsUnderBulk.requests.map(
        (requestUnderBulk: Request) => {
          return {
            id: requestUnderBulk.id ? requestUnderBulk.id : '',
            roleId: requestUnderBulk.kartoffelParams?.roleId
              ? requestUnderBulk.kartoffelParams?.roleId
              : '',
            currentJobTitle: requestUnderBulk.kartoffelParams?.currentJobTitle
              ? requestUnderBulk.kartoffelParams?.currentJobTitle
              : '',
            newJobTitle: requestUnderBulk.kartoffelParams?.newJobTitle
              ? requestUnderBulk.kartoffelParams?.newJobTitle
              : '',
            rowNumber: requestUnderBulk.rowNumber
              ? requestUnderBulk.rowNumber
              : '-',
            status: requestUnderBulk.status
              ? requestUnderBulk.status
              : undefined,
          };
        }
      );
      return { request: bulkRequest, rows: rows };
    } catch (error: any) {
      throw error;
    }
  }
}
