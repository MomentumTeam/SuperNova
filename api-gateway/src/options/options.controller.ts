import { Response } from "express";
import { OptionsService } from "./options.service";
import { logger } from "../utils/logger/logger";
import { AuthenticationError } from "../utils/errors/userErrors";
import { statusCodeHandler } from "../utils/errors/errorHandlers";
import {
  FavoriteCommanderReq,
  GetOptionsByEntityIdReq,
  UpdateUserOptionsReq,
} from "../interfaces/protoc/proto/optionsService";

export default class OptionsController {
  // GET
  static async getMyOptions(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const getOptionsByEntityIdReq: GetOptionsByEntityIdReq = {
      entityId: req.user.id,
    };

    logger.info(`Call to getMyOptions in GTW`, {
      callRequest: getOptionsByEntityIdReq,
    });

    try {
      const options = await OptionsService.getUserOptions(
        getOptionsByEntityIdReq
      );
      res.send(options);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  // PUT
  static async updateMyOptions(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();

    const updateOptionsByEntityIdReq: UpdateUserOptionsReq = {
      entityId: req.user.id,
      ...req.body,
    };

    try {
      const response = await OptionsService.updateUserOptions(
        updateOptionsByEntityIdReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async addFavoriteCommander(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const addFavoriteCommanderReq: FavoriteCommanderReq = {
      entityId: req.user.id,
      commanderId: req.params.commanderId,
    };

    try {
      const response = await OptionsService.addFavoriteCommander(
        addFavoriteCommanderReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async removeFavoriteCommander(req: any, res: Response) {
    if (!req.user && !req.user.id) throw new AuthenticationError();
    const removeFavoriteCommanderReq: FavoriteCommanderReq = {
      entityId: req.user.id,
      commanderId: req.params.commanderId,
    };

    try {
      const response = await OptionsService.removeFavoriteCommander(
        removeFavoriteCommanderReq
      );
      res.send(response);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
