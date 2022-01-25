import * as jwt from 'jsonwebtoken';
import { config } from '../config';
import { NotFoundError } from '../utils/errors/user.error';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { IUser } from '../kartoffel/kartoffel.interface';
import { logger } from '../logger';
import { ApproverService } from '../approver/approver.service';
import { approverTypeToJSON } from '../interfaces/protoc/proto/requestService';
import { IShragaUser } from '../passport/passport.interface';
import { IUserToken } from './auth.interface';
import { timeout } from '../utils/timeout';

export class AuthManager {
  static async createToken(populatedShragaUser: IShragaUser) {
    const shragaUser: IShragaUser =
      AuthManager.extractShragaUser(populatedShragaUser);
    let { genesisId, adfsId, iat, exp } = shragaUser;

    if (config.authentication.useShragaLocalMap) {
      if (config.authentication.getEntityByAdfsId) {
        adfsId = config.authentication.diToId[adfsId] ? config.authentication.diToId[adfsId] : adfsId;
      } else {
        genesisId = config.authentication.diToId[adfsId] ? config.authentication.diToId[adfsId] : genesisId;
      }
    }

    const kartoffelUser: IUser = config.authentication.getEntityByAdfsId
      ? await AuthManager.extractKartoffelUserByAdfsId(adfsId)
      : await AuthManager.extractKartoffelUserByGenesisId(genesisId);

    const {
      id,
      displayName,
      identityCard,
      personalNumber,
      fullName,
      rank,
      directGroup,
      ancestors,
    } = kartoffelUser;

    const types = config.approver.enrich
      ? await AuthManager.extractUserType(id)
      : {};

    const userToken: IUserToken = {
      id,
      genesisId,
      iat,
      exp,
      displayName,
      fullName,
      identityCard,
      personalNumber,
      types,
      rank,
      directGroup,
      ancestors,
    };
    let userInformation = { ...userToken };

    if (config.approver.enrich)
      userInformation = { ...userInformation, ...types };
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

  private static async extractKartoffelUserByGenesisId(genesisId: string) {
    const kartoffelUser: any = await timeout(
      KartoffelService.getEntityById(genesisId),
      config.kartoffel.timeout
    );
    if (kartoffelUser.directGroup) {
      const group = await KartoffelService.getOGById(kartoffelUser.directGroup);
      kartoffelUser.ancestors = group.ancestors;
    }

    return kartoffelUser as IUser;
  }

  private static async extractKartoffelUserByAdfsId(roleId: string) {
    const kartoffelUser: any = await timeout(
      KartoffelService.getEntityByRoleId(roleId),
      config.kartoffel.timeout
    );

    if (kartoffelUser.directGroup) {
      const group = await KartoffelService.getOGById(kartoffelUser.directGroup);
      kartoffelUser.ancestors = group.ancestors;
    }

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
