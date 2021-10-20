import * as jwt from "jsonwebtoken";
import { config } from "../config";
import { NotFoundError } from "../utils/errors/user.error";
import { IShragaUser } from "./auth.interface";
import { KartoffelService } from "../kartoffel/kartoffel.service";
import { IUser } from "../kartoffel/kartoffel.interface";
import { logger } from "../logger";
import { ApproverService } from "../approver/approver.service";
import { ApproverType } from "../interfaces/protoc/proto/requestService";

export class AuthManager {
  static async createToken(populatedShragaUser: IShragaUser) {
    const shragaUser = AuthManager.extractShragaUser(populatedShragaUser);

    const { genesisId } = populatedShragaUser;

    const kartoffelUser = config.kartoffel.enrich ? await AuthManager.extractKartoffelUser(genesisId): {};
    const userType = config.approver.enrich ? await AuthManager.extractUserType(genesisId) : {};

    const userInformation = {
      ...shragaUser,
      ...userType,
    };

    return jwt.sign(userInformation, config.authentication.secret);
  }

  private static extractShragaUser(shragaUser: IShragaUser) {
    // Get shragaUser
    let parsedUser: IShragaUser = JSON.parse(JSON.stringify(shragaUser));
    if (!parsedUser) throw new NotFoundError();

    const millisecondsExpires = config.authentication.daysExpires * (1000 * 60 * 60 * 24);
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + millisecondsExpires;

    const user = { ...parsedUser, iat, exp };
    return user;
  }

  private static async extractKartoffelUser(genesisId: string) {
    const user: any = {};

    if (!config.kartoffel.enrich) return user;

    const kartoffelUser: IUser = await KartoffelService.getEntityById(genesisId);
    return kartoffelUser;
  }

  private static async extractUserType(genesisId: string) {
    const userWithType = { types: config.defaultUserTypes };
    try {
      logger.info(`Call to addUserType in AS:`, genesisId);
      const userResponse = await ApproverService.getUserType({
        entityId: genesisId,
      });

      userWithType.types =
        userResponse.type.length > 0 ? userResponse.type.map((type) => ApproverType[type]) : config.defaultUserTypes;

      logger.info("addUserType OK in AS", { user: userWithType });
    } catch (err) {
      logger.error(`addUserType Error in AS:`, {
        err,
        user: userWithType,
      });
    }

    return userWithType;
  }
}
