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
        new: true,
      }
    );
    return document;
  }

  async updateUserOptions(
    updateUserOptionsRequest: UpdateUserOptionsReq
  ): Promise<Options> {
    const { entityId, ...updateQuery } = updateUserOptionsRequest;
    const subtractFields = (obj1: any, obj2: any) =>
      Object.fromEntries(
        Object.entries(obj1).filter(([key]) => !(key in obj2))
      );
    const document = await OptionsModel.findOneAndUpdate(
      { entityId },
      {
        $set: updateQuery,
        $setOnInsert: subtractFields(C.defaultOptions, updateQuery),
      },
      { new: true, upsert: true }
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
        ...C.defaultOptions,
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
        ...C.defaultOptions
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
