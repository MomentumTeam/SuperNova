import {
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
} from '../interfaces/protoc/proto/requestService';
import { BulkRepository } from './bulk.repository';
export class BulkManager {
  private BulkRepository: BulkRepository;
  constructor() {
    this.BulkRepository = new BulkRepository();
  }

  async createRoleBulkRequest(
    createRoleBulkReq: CreateRoleBulkReq
  ): Promise<CreateRoleBulkRes> {
    try {
      return (await this.BulkRepository.createRoleBulkRequest(
        createRoleBulkReq
      )) as CreateRoleBulkRes;
    } catch (error) {
      throw error;
    }
  }

  async isBulkFileValid(
    isBulkFileValidReq: IsBulkFileValidReq
  ): Promise<IsBulkFileValidRes> {
    try {
      return (await this.BulkRepository.isBulkFileValid(
        isBulkFileValidReq
      )) as IsBulkFileValidRes;
    } catch (error) {
      throw error;
    }
  }

  async changeRoleHierarchyBulkRequest(
    changeRoleHierarchyBulkReq: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes> {
    try {
      return (await this.BulkRepository.changeRoleHierarchyBulkRequest(
        changeRoleHierarchyBulkReq
      )) as ChangeRoleHierarchyBulkRes;
    } catch (error) {
      throw error;
    }
  }

  async getBulkRequestExample(
    getBulkRequestExampleReq: GetBulkRequestExampleReq
  ): Promise<GetBulkRequestExampleRes> {
    try {
      return (await this.BulkRepository.getBulkRequestExample(
        getBulkRequestExampleReq
      )) as GetBulkRequestExampleRes;
    } catch (error) {
      throw error;
    }
  }

  async getCreateRoleBulkRequestById(
    getCreateRoleBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedCreateRoleBulkRequest> {
    try {
      return (await this.BulkRepository.getCreateRoleBulkRequestById(
        getCreateRoleBulkRequestByIdReq
      )) as DetailedCreateRoleBulkRequest;
    } catch (error) {
      throw error;
    }
  }

  async getChangeRoleHierarchyBulkRequestById(
    getChangeRoleHierarchyBulkRequestByIdReq: GetBulkRequestByIdReq
  ): Promise<DetailedChangeRoleHierarchyBulkRequest> {
    try {
      return (await this.BulkRepository.getChangeRoleHierarchyBulkRequestById(
        getChangeRoleHierarchyBulkRequestByIdReq
      )) as DetailedChangeRoleHierarchyBulkRequest;
    } catch (error) {
      throw error;
    }
  }
}
