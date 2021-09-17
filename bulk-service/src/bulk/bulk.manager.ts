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
}
