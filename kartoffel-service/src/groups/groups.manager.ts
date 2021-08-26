import {
  OGArray,
  SearchOGRequest,
  OrganizationGroup,
  CreateOGRequest,
  GetOGByHierarchyNameRequest,
  SuccessMessage,
  DeleteOGRequest,
  GetOGByIdRequest,
  GetChildrenOfOGRequest,
  UpdateOGParentRequest,
  RenameOGRequest,
  GetAllOGsRequest,
} from '../interfaces/protoc/proto/kartoffelService';
import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import { GroupsRepository } from './groups.repository';

export class GroupsManager {
  private groupsRepository: GroupsRepository;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.groupsRepository = new GroupsRepository(
      kartoffelUtils,
      kartoffelFaker
    );
  }

  async getAllOGs(getAllOGsRequest: GetAllOGsRequest): Promise<OGArray> {
    try {
      return await this.groupsRepository.getAllOGs(getAllOGsRequest);
    } catch (error) {
      throw error;
    }
  }

  async createOG(createOGRequest: CreateOGRequest): Promise<OrganizationGroup> {
    try {
      return await this.groupsRepository.createOG(createOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async getOGByHierarchyName(
    getOGByHierarchyName: GetOGByHierarchyNameRequest
  ): Promise<OrganizationGroup> {
    try {
      return await this.groupsRepository.getOGByHierarchyName(
        getOGByHierarchyName
      );
    } catch (error) {
      throw error;
    }
  }

  async searchOG(searchOGRequest: SearchOGRequest): Promise<OGArray> {
    try {
      return await this.groupsRepository.searchOG(searchOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async deleteOG(deleteOGRequest: DeleteOGRequest): Promise<SuccessMessage> {
    try {
      return await this.groupsRepository.deleteOG(deleteOGRequest);
    } catch (error) {
      throw error;
    }
  }

  async getOGById(
    getOGByIdRequest: GetOGByIdRequest
  ): Promise<OrganizationGroup> {
    try {
      return await this.groupsRepository.getOGById(getOGByIdRequest);
    } catch (error) {
      throw error;
    }
  }

  async getChildrenOfOG(
    getChildrenOfOGRequest: GetChildrenOfOGRequest
  ): Promise<OGArray> {
    try {
      return await this.groupsRepository.getChildrenOfOG(
        getChildrenOfOGRequest
      );
    } catch (error) {
      throw error;
    }
  }

  async updateOGParent(
    updateOGParentRequest: UpdateOGParentRequest
  ): Promise<SuccessMessage> {
    try {
      return await this.groupsRepository.updateOGParent(updateOGParentRequest);
    } catch (error) {
      throw error;
    }
  }

  async renameOG(renameOGRequest: RenameOGRequest): Promise<SuccessMessage> {
    try {
      return await this.groupsRepository.renameOG(renameOGRequest);
    } catch (error) {
      throw error;
    }
  }
}
