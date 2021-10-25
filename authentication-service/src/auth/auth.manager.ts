import * as jwt from 'jsonwebtoken';
import { config } from '../config';
import { NotFoundError } from '../utils/errors/user.error';
import { IShragaUser } from './auth.interface';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { IUser } from '../kartoffel/kartoffel.interface';
import { logger } from '../logger';
import { ApproverService } from '../approver/approver.service';
import {
  ApproverType,
  approverTypeToJSON,
} from '../interfaces/protoc/proto/requestService';

export class AuthManager {
  static async createToken(populatedShragaUser: IShragaUser) {
    const shragaUser: any = AuthManager.extractShragaUser(populatedShragaUser);
    delete shragaUser['adfsId'];
    delete shragaUser['jti'];
    delete shragaUser['name'];
    delete shragaUser['provider'];
    delete shragaUser['iat'];
    delete shragaUser['exp'];
    const { id } = populatedShragaUser;

    const kartoffelUser = await AuthManager.extractKartoffelUser(id);
    shragaUser.identityCard = kartoffelUser.identityCard
      ? kartoffelUser.identityCard
      : '';
    shragaUser.personalNumber = kartoffelUser.personalNumber
      ? kartoffelUser.personalNumber
      : '';
    shragaUser.displayName = kartoffelUser.displayName
      ? kartoffelUser.displayName
      : '';
    shragaUser.fullName = kartoffelUser.fullName ? kartoffelUser.fullName : '';
    const userType = config.approver.enrich
      ? await AuthManager.extractUserType(id)
      : {};

    let userInformation = {
      ...shragaUser,
    };

    if (config.approver.enrich)
      userInformation = { ...userInformation, ...userType };
    if (config.kartoffel.enrich)
      userInformation = { ...userInformation, ...kartoffelUser };
    return jwt.sign(userInformation, config.authentication.secret);
  }

  private static extractShragaUser(shragaUser: IShragaUser) {
    // Get shragaUser
    let parsedUser: IShragaUser = JSON.parse(JSON.stringify(shragaUser));
    if (!parsedUser) throw new NotFoundError();

    const millisecondsExpires =
      config.authentication.daysExpires * (1000 * 60 * 60 * 24);
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + millisecondsExpires;

    const user = { ...parsedUser, iat, exp };
    return user;
  }

  private static async extractKartoffelUser(genesisId: string) {
    // const user: any = {};
    // if (!config.kartoffel.enrich) return user;

    const kartoffelUser = await KartoffelService.getEntityById(genesisId);
    return kartoffelUser as IUser;
  }

  private static async extractUserType(genesisId: string) {
    const userWithType: any = { types: config.defaultUserTypes };
    try {
      logger.info(`Call to addUserType in AS:`, genesisId);
      const userResponse = await ApproverService.getUserType({
        entityId: genesisId,
      });

      userWithType.types =
        userResponse.type.length > 0
          ? userResponse.type.map((type) =>
              typeof type === typeof '' ? type : approverTypeToJSON(type)
            )
          : config.defaultUserTypes;

      logger.info('addUserType OK in AS', { user: userWithType });
    } catch (err) {
      logger.error(`addUserType Error in AS:`, {
        err,
        user: userWithType,
      });
    }

    return userWithType;
  }
}
