import { KartoffelFaker } from '../mock/kartoffel.faker';
import { KartoffelUtils } from '../utils/kartoffel.utils';
import * as C from '../config';
import {
  CreateDIRequest,
  GetAllDIsRequest,
  DigitalIdentities,
  DigitalIdentity,
  GetDIByRoleIdRequest,
  SearchDIByUniqueIdRequest,
  SuccessMessage,
  DeleteDIRequest,
  GetDIByUniqueIdRequest,
  UpdateDIRequest,
  UniqueIdMessage,
} from '../interfaces/protoc/proto/kartoffelService';
import { cleanUnderscoreFields } from '../utils/json.utils';

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
      cleanUnderscoreFields(getAllDIsRequest);
      if (C.useFaker) {
        const digitalIdentities: DigitalIdentities =
          await this.kartoffelFaker.randomDiArray(getAllDIsRequest.pageSize);
        return digitalIdentities;
      } else {
        const res: DigitalIdentity[] = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities`,
          getAllDIsRequest
        );
        return { digitalIdentities: res } as DigitalIdentities;
      }
    } catch (error) {
      throw error;
    }
  }

  async createDI(createDIRequest: CreateDIRequest): Promise<UniqueIdMessage> {
    try {
      cleanUnderscoreFields(createDIRequest);
      if (C.useFaker) {
        const newDI: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return { uniqueId: newDI.uniqueId };
      } else {
        const res = await this.kartoffelUtils.kartoffelPost(
          `${C.kartoffelUrl}/api/digitalIdentities`,
          createDIRequest
        );

        if (res === C.kartoffelOK) {
          return { uniqueId: createDIRequest.uniqueId };
        } else {
          throw new Error('res not ok');
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getDIByRoleId(
    getDIByRoleIdRequest: GetDIByRoleIdRequest
  ): Promise<DigitalIdentity> {
    try {
      cleanUnderscoreFields(getDIByRoleIdRequest);
      if (C.useFaker) {
        const newDI: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return newDI;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/role/${encodeURIComponent(
            getDIByRoleIdRequest.roleId
          )}`
        );
        return res as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async searchDIByUniqueId(
    searchDIByUniqueIdRequest: SearchDIByUniqueIdRequest
  ): Promise<DigitalIdentities> {
    try {
      cleanUnderscoreFields(searchDIByUniqueIdRequest);
      if (C.useFaker) {
        const digitalIdentities: DigitalIdentities =
          await this.kartoffelFaker.randomDiArray();
        return digitalIdentities;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/search`,
          {...searchDIByUniqueIdRequest, expanded: true }
        );

        return { digitalIdentities: res } as DigitalIdentities;
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteDI(deleteDIRequest: DeleteDIRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(deleteDIRequest);
      if (C.useFaker) {
        const successMessage: SuccessMessage = { success: true };
        return successMessage;
      } else {
        const res = await this.kartoffelUtils.kartoffelDelete(
          `${C.kartoffelUrl}/api/digitalIdentities/${encodeURIComponent(
            deleteDIRequest.id
          )}`
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error('res not ok');
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getDIByUniqueId(
    getDIByUniqueIdRequest: GetDIByUniqueIdRequest
  ): Promise<DigitalIdentity> {
    try {
      cleanUnderscoreFields(getDIByUniqueIdRequest);
      if (C.useFaker) {
        const di: DigitalIdentity = await this.kartoffelFaker.randomDI();
        return di;
      } else {
        const res = await this.kartoffelUtils.kartoffelGet(
          `${C.kartoffelUrl}/api/digitalIdentities/${encodeURIComponent(
            getDIByUniqueIdRequest.id
          )}`
        );
        return res as DigitalIdentity;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateDI(updateDIRequest: UpdateDIRequest): Promise<SuccessMessage> {
    try {
      cleanUnderscoreFields(updateDIRequest);
      if (C.useFaker) {
        // TODO?
        const digitalIdentity: DigitalIdentity = this.kartoffelFaker.randomDI();
        return { success: true };
      } else {
        const id = updateDIRequest.id;
        const req: any = updateDIRequest;
        delete req.id;

        const res: any = await this.kartoffelUtils.kartoffelPatch(
          `${C.kartoffelUrl}/api/digitalIdentities/${encodeURIComponent(id)}`,
          req
        );

        if (res === C.kartoffelOK) {
          return { success: true };
        } else {
          throw new Error('res not ok');
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
