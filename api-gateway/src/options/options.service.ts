import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import { FavoriteCommanderReq, GetOptionsByEntityIdReq, Options, UpdateUserOptionsReq } from '../interfaces/protoc/proto/optionsService';
import { logger } from '../utils/logger/logger';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/optionsService.proto')
  : path.join(__dirname, '../../proto/optionsService.proto');

const packageDefinition: protoLoader.PackageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);

const protoDescriptor: any =
  grpc.loadPackageDefinition(packageDefinition).OptionsService;

const clients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  clients.push(
    new protoDescriptor.OptionsService(
      config.endpoints.options,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return clients[Math.floor(Math.random() * clients.length)];
}

export class OptionsService {
  static async getUserOptions(
    getOptionsByEntityIdReq: GetOptionsByEntityIdReq
  ): Promise<Options> {
    logger.info(
      `Call to getOptionsByEntityIdReq in GTW`,
      getOptionsByEntityIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetOptionsByEntityId(
        getOptionsByEntityIdReq,
        (err: any, response: Options) => {
          if (err) {
            logger.error(`getOptionsByEntityId ERROR in GTW`, {
              err,
              callRequest: getOptionsByEntityIdReq,
            });
            reject(err);
          }

          logger.info(`getOptionsByEntityId OK in GTW`, {
            callRequest: getOptionsByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateUserOptions(updateOptionsByEntityIdReq: UpdateUserOptionsReq) {
    logger.info(`Call to updateUserOptions in GTW`, updateOptionsByEntityIdReq);

    return new Promise((resolve, reject) => {
      randomClient().UpdateUserOptions(
        updateOptionsByEntityIdReq,
        (err: any, response: Options) => {
          if (err) {
            logger.error(`updateUserOptions ERROR in GTW`, {
              err,
              callRequest: updateOptionsByEntityIdReq,
            });
            reject(err);
          }

          logger.info(`updateUserOptions OK in GTW`, {
            callRequest: updateOptionsByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async addFavoriteCommander(
    favoriteCommanderReq: FavoriteCommanderReq
  ) {
    logger.info(
      `Call to addFavoriteCommander in GTW`,
      favoriteCommanderReq
    );
    return new Promise((resolve, reject) => {
      randomClient().AddFavoriteCommander(
        favoriteCommanderReq,
        (err: any, response: Options) => {
          if (err) {
            logger.error(`addFavoriteCommander ERROR in GTW`, {
              err,
              callRequest: favoriteCommanderReq,
            });
            reject(err);
          }

          logger.info(`addFavoriteCommander OK in GTW`, {
            callRequest: favoriteCommanderReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async removeFavoriteCommander(
    favoriteCommanderReq: FavoriteCommanderReq
  ) {
    logger.info(
      `Call to removeFavoriteCommander in GTW`,
      favoriteCommanderReq
    );

    return new Promise((resolve, reject) => {
      randomClient().RemoveFavoriteCommander(
        favoriteCommanderReq,
        (err: any, response: Options) => {
          if (err) {
            logger.error(`removeFavoriteCommander ERROR in GTW`, {
              err,
              callRequest: favoriteCommanderReq,
            });
            reject(err);
          }

          logger.info(`removeFavoriteCommander OK in GTW`, {
            callRequest: favoriteCommanderReq,
          });
          resolve(response);
        }
      );
    });
  }

}
