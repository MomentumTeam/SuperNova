import * as C from "../config";
import {
  Options,
  GetOptionsByEntityIdReq,
  UpdateUserOptionsReq,
  FavoriteCommanderReq,
} from "../interfaces/protoc/proto/optionsService";
import { OptionsModel } from "../models/options.model";
import { logger } from "../logger";

export class OptionsRepository {
  async getOptionsByEntityId(
    getOptionsByEntityIdRequest: GetOptionsByEntityIdReq
  ): Promise<Options> {
    const { entityId } = getOptionsByEntityIdRequest;
    const setOnInsert = {
      $setOnInsert: C.defaultOptions,
    };
    const document = await OptionsModel.findOneAndUpdate(
      { entityId },
      setOnInsert,
      {
        upsert: true,
        new: true
      }
    );
    return document;
  }

  async updateUserOptions(
    updateUserOptionsRequest: UpdateUserOptionsReq
  ): Promise<Options> {
    const { entityId, toggleProfilePicture, getMailNotifications, showPhoneNumber } = updateUserOptionsRequest;
    const setAndSetOnInsert = {
      $set: updateUserOptionsRequest,

      $setOnInsert: {
        ...C.defaultOptions,
        ...updateUserOptionsRequest
      },
    };
    const document = await OptionsModel.findOneAndUpdate(
      { entityId },
      setAndSetOnInsert,
      {
        new: true,
        upsert: true,
      }
    );
    return document;
  }

  async addFavoriteCommander(
    addFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    const { entityId, commanderId } = addFavoriteCommanderReq;
    const setOnInsert = {
      $setOnInsert: {
        entityId,
        ...C.defaultOptions
      },
    };
    const userOptions = await OptionsModel.findOneAndUpdate(
      { entityId },
      { setOnInsert, $addToSet: { favoriteCommanders: commanderId } },
      { new: true, upsert: true }
    );
    return userOptions;
  }

  async removeFavoriteCommander(
    removeFavoriteCommanderReq: FavoriteCommanderReq
  ): Promise<Options> {
    const { entityId, commanderId } = removeFavoriteCommanderReq;
    const setOnInsert = {
      $setOnInsert: {
        entityId,
        toggleProfilePicture: C.defaultOptions.toggleProfilePicture,
        getMailNotifications: C.defaultOptions.getMailNotifications,
        showPhoneNumber: C.defaultOptions.showPhoneNumber,
        favoriteCommanders: C.defaultOptions.favoriteCommanders,
      },
    };
    const userOptions = await OptionsModel.findOneAndUpdate(
      { entityId },
      { setOnInsert, $pull: { favoriteCommanders: commanderId } },
      { new: true, upsert: true }
    );
    return userOptions;
  }
}
