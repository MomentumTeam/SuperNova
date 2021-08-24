import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  CreateDIRequest,
  GetAllDIsRequest,
  DigitalIdentities,
  DigitalIdentity,
  GetDIByRoleIdRequest,
  SearchDIOrUniqueIdRequest,
  SuccessMessage,
  DeleteDIRequest,
  GetDIByUniqueIdRequest,
  UpdateDIRequest,
} from '../interfaces/protoc/proto/kartoffelService';

export class DiRepository {
  private kartoffelFaker: KartoffelFaker;
  private kartoffelUtils: KartoffelUtils;
  constructor(kartoffelUtils: KartoffelUtils, kartoffelFaker: KartoffelFaker) {
    this.kartoffelFaker = kartoffelFaker;
    this.kartoffelUtils = kartoffelUtils;
  }

  async getAllDIs(
    getAllDIsRequest: GetAllDIsRequest
  ): Promise<DigitalIdentities> {
    try {
      if (C.useFaker) {
        const digitalIdentities: DigitalIdentities =
          await this.kartoffelFaker.randomDiArray();
        return digitalIdentities;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities`,
          getAllDIsRequest
        );
        return res as DigitalIdentities;
      }
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: CreateDIRequest): Promise<DigitalIdentity> {
    try {
      if (C.useFaker) {
        const newDI: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return newDI;
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/digitalIdentities`,
          createDIRequest
        );
        return res as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async getDIByRoleId(
    getDIByRoleIdRequest: GetDIByRoleIdRequest
  ): Promise<DigitalIdentity> {
    try {
      if (C.useFaker) {
        const newDI: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return newDI;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/role/:${getDIByRoleIdRequest.roleId}`
        );
        return res as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchDIOrUniqueId(
    searchDIOrUniqueIdRequest: SearchDIOrUniqueIdRequest
  ): Promise<DigitalIdentities> {
    try {
      if (C.useFaker) {
        const digitalIdentities: DigitalIdentities =
          await this.kartoffelFaker.randomDiArray();
        return digitalIdentities;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/search`,
          searchDIOrUniqueIdRequest
        );
        return res as DigitalIdentities;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: DeleteDIRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/digitalIdentities/:${deleteDIRequest.id}`
        );
        return res as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }

  async getDIByUniqueId(
    getDIByUniqueIdRequest: GetDIByUniqueIdRequest
  ): Promise<DigitalIdentity> {
    try {
      if (C.useFaker) {
        const di: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return di;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/:${getDIByUniqueIdRequest.id}`
        );
        return res as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateDI(updateDIRequest: UpdateDIRequest): Promise<SuccessMessage> {
    try {
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/digitalIdentities/:${updateDIRequest.id}`,
          updateDIRequest
        );
        return res as SuccessMessage;
      }
    } catch (error) {
      throw error;
    }
  }
}
