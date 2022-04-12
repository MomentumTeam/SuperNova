import * as C from "../config";
import {
  Options,
  GetOptionsByEntityIdReq,
  UpdateUserOptionsReq,
  FavoriteCommanderReq,
} from "../interfaces/protoc/proto/optionsService";
import { OptionsModel } from "../models/options.model";
// import { logger } from '../logger';

export class OptionsRepository {
  async getOptionsByEntityId(
    getOptionsByEntityIdRequest: GetOptionsByEntityIdReq
  ): Promise<Options> {
    const entityId = getOptionsByEntityIdRequest.entityId;
    const document = await OptionsModel.findOne({ entityId });
    if (!document) return this.createAndReturnUserOptions(entityId);
    return document;
  }

  async updateUserOptions(
    updateUserOptionsRequest: UpdateUserOptionsReq
  ): Promise<Options> {
    const entityId = updateUserOptionsRequest.entityId;
    const updatedOptions = await OptionsModel.findOneAndUpdate(
      { entityId },
      updateUserOptionsRequest,
      { new: true }
    );
    if (!updatedOptions) return this.createAndReturnUserOptions(entityId);
    return updatedOptions;
  }

  async addFavoriteCommander(
    addFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    const { entityId, commanderId } = addFavoriteCommanderReq;
    const userOptions = await OptionsModel.findOneAndUpdate(
      { entityId },
      { $addToSet: { favoriteCommanders: commanderId } },
      { new: true }
    );
    return userOptions;
  }

  async removeFavoriteCommander(
    removeFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    const { entityId, commanderId } = removeFavoriteCommanderReq;
    const userOptions = await OptionsModel.findOneAndUpdate(
      { entityId },
      { $pull: { favoriteCommanders: commanderId } },
      { new: true }
    );
    return userOptions;
  }

  async createAndReturnUserOptions(entityId: string): Promise<Options> {
    const {
      toggleProfilePicture,
      getMailNotifications,
      showPhoneNumber,
      favoriteCommanders,
    } = C.defaultOptions;
    return OptionsModel.create({
      entityId,
      toggleProfilePicture,
      getMailNotifications,
      showPhoneNumber,
      favoriteCommanders,
    });
  }
}
