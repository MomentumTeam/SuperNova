import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  AddApproverReq,
  Approver,
  ApproverArray,
  DeleteApproverReq,
  GetAllApproversReq,
  GetApproverByEntityIdReq,
  GetUserTypeReq,
  GetUserTypeRes,
  IncludesSpecialGroupReq,
  IsApproverValidForOGReq,
  IsApproverValidForOGRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
  SearchHighCommandersByDisplayNameReq,
  UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/approverService';
import { logger } from '../utils/logger/logger';
import {
  ApproverType,
  Request,
} from '../interfaces/protoc/proto/requestService';
import {
  DigitalIdentity,
  Entity,
  EntityArray,
} from '../interfaces/protoc/proto/kartoffelService';

const PROTO_PATH = __dirname.includes('dist')
  ? path.join(__dirname, '../../../proto/approverService.proto')
  : path.join(__dirname, '../../proto/approverService.proto');

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
  grpc.loadPackageDefinition(packageDefinition).ApproverService;

const approverClients: any = [];
for (let i = 0; i < config.fields.grpcPoolSize; i++) {
  approverClients.push(
    new protoDescriptor.ApproverService(
      config.endpoints.approver,
      grpc.credentials.createInsecure(),
      { 'grpc.keepalive_timeout_ms': 5000 }
    )
  );
}

function randomClient(): any {
  return approverClients[Math.floor(Math.random() * approverClients.length)];
}

export class ApproverService {
  static async getApproverByEntityId(
    getApproverByEntityIdReq: GetApproverByEntityIdReq
  ): Promise<Approver> {
    logger.info(
      `Call to getApproverByEntityId in GTW`,
      getApproverByEntityIdReq
    );

    return new Promise((resolve, reject) => {
      randomClient().GetApproverByEntityId(
        getApproverByEntityIdReq,
        (err: any, response: Approver) => {
          if (err) {
            logger.error(`getApproverByEntityId ERROR in GTW`, {
              err,
              callRequest: getApproverByEntityIdReq,
            });
            reject(err);
          }

          logger.info(`getApproverByEntityId OK in GTW`, {
            callRequest: getApproverByEntityIdReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async isApproverValidForOG(
    isApproverValidForOGReq: IsApproverValidForOGReq
  ) {
    logger.info(
      `Call to isApproverValidForOGReq in GTW`,
      isApproverValidForOGReq
    );

    return new Promise((resolve, reject) => {
      randomClient().IsApproverValidForOG(
        isApproverValidForOGReq,
        (err: any, response: IsApproverValidForOGRes) => {
          if (err) {
            logger.error(`isApproverValidForOGReq ERROR in GTW`, {
              err,
              callRequest: isApproverValidForOGReq,
            });
            reject(err);
          }

          logger.info(`isApproverValidForOGReq OK in GTW`, {
            callRequest: isApproverValidForOGReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getAllApprovers(getAllApproversReq: GetAllApproversReq) {
    logger.info(`Call to GetAllApprovers in GTW`, getAllApproversReq);

    return new Promise((resolve, reject) => {
      randomClient().GetAllApprovers(
        getAllApproversReq,
        (err: any, response: ApproverArray) => {
          if (err) {
            logger.error(`getAllApprovers ERROR in GTW`, {
              err,
              callRequest: getAllApproversReq,
            });
            reject(err);
          }

          logger.info(`getAllApprovers OK in GTW`, {
            callRequest: getAllApproversReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchHighCommandersByDisplayName(
    searchHighCommandersByDisplayNameReq: SearchHighCommandersByDisplayNameReq
  ) {
    logger.info(
      `Call to searchHighCommandersByDisplayName in GTW`,
      searchHighCommandersByDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      randomClient().SearchHighCommandersByDisplayName(
        searchHighCommandersByDisplayNameReq,
        (err: any, response: ApproverArray) => {
          if (err) {
            logger.error(`searchHighCommandersByDisplayName ERROR in GTW`, {
              err,
              callRequest: searchHighCommandersByDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`searchHighCommandersByDisplayName OK in GTW`, {
            callRequest: searchHighCommandersByDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchApproverByDisplayName(
    searchByDisplayNameReq: SearchByDisplayNameReq
  ) {
    logger.info(
      `Call to SearchApproverByDisplayName in GTW`,
      searchByDisplayNameReq
    );

    return new Promise((resolve, reject) => {
      randomClient().SearchApproverByDisplayName(
        searchByDisplayNameReq,
        (err: any, response: ApproverArray) => {
          if (err) {
            logger.error(`SearchApproverByDisplayName ERROR in GTW`, {
              err,
              callRequest: searchByDisplayNameReq,
            });
            reject(err);
          }

          logger.info(`SearchApproverByDisplayName OK in GTW`, {
            callRequest: searchByDisplayNameReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async searchApproverByDomainUser(
    searchByDomainUserReq: SearchByDomainUserReq
  ) {
    logger.info(
      `Call to searchApproverByDomainUser in GTW`,
      searchByDomainUserReq
    );

    return new Promise((resolve, reject) => {
      randomClient().SearchApproverByDomainUser(
        searchByDomainUserReq,
        (err: any, response: ApproverArray) => {
          if (err) {
            logger.error(`searchApproverByDomainUser ERROR in GTW`, {
              err,
              callRequest: searchByDomainUserReq,
            });
            reject(err);
          }

          logger.info(`searchApproverByDomainUser OK in GTW`, {
            callRequest: searchByDomainUserReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getUserType(
    getUserTypeReq: GetUserTypeReq
  ): Promise<GetUserTypeRes> {
    logger.info(`Call to getUserTypeReq in GTW`, getUserTypeReq);

    return new Promise((resolve, reject) => {
      randomClient().GetUserType(
        getUserTypeReq,
        (err: any, response: GetUserTypeRes) => {
          if (err) {
            logger.error(`getUserTypeReq ERROR in GTW`, {
              err,
              callRequest: getUserTypeReq,
            });
            reject(err);
          }

          logger.info(`getUserTypeReq OK in GTW`, {
            callRequest: getUserTypeReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async addApprover(addApproverReq: AddApproverReq) {
    logger.info(`Call to AddApprover in GTW`, addApproverReq);

    return new Promise((resolve, reject) => {
      randomClient().AddApprover(
        addApproverReq,
        (err: any, response: Approver) => {
          if (err) {
            logger.error(`AddApprover ERROR in GTW`, {
              err,
              callRequest: addApproverReq,
            });
            reject(err);
          }

          logger.info(`AddApprover OK in GTW`, {
            response: response,
            callRequest: addApproverReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async updateApproverDecision(
    updateApproverDecisionReq: UpdateApproverDecisionReq
  ): Promise<Request> {
    logger.info(
      `Call to updateApproverDecision in GTW`,
      updateApproverDecisionReq
    );

    return new Promise((resolve, reject) => {
      randomClient().UpdateApproverDecision(
        updateApproverDecisionReq,
        (err: any, response: Request) => {
          if (err) {
            logger.error(`updateApproverDecision ERROR in GTW`, {
              err,
              callRequest: updateApproverDecisionReq,
            });
            reject(err);
          }

          logger.info(`updateApproverDecision OK in GTW`, {
            response: response,
            callRequest: updateApproverDecisionReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async deleteApprover(deleteApproverReq: DeleteApproverReq) {
    logger.info(`Call to deleteApprover in GTW`, deleteApproverReq);

    return new Promise((resolve, reject) => {
      randomClient().DeleteApprover(
        deleteApproverReq,
        (err: any, response: Approver) => {
          if (err) {
            logger.error(`deleteApprover ERROR in GTW`, {
              err,
              callRequest: deleteApproverReq,
            });
            reject(err);
          }

          logger.info(`deleteApprover OK in GTW`, {
            response: response,
            callRequest: deleteApproverReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async includesSpecialGroup(
    includesSpecialGroupReq: IncludesSpecialGroupReq
  ) {
    logger.info(`Call to includesSpecialGroup in GTW`, includesSpecialGroupReq);

    return new Promise((resolve, reject) => {
      randomClient().IncludesSpecialGroup(
        includesSpecialGroupReq,
        (err: any, response: IsApproverValidForOGRes) => {
          if (err) {
            logger.error(`includesSpecialGroup ERROR in GTW`, {
              err,
              callRequest: includesSpecialGroupReq,
            });
            reject(err);
          }

          logger.info(`includesSpecialGroup OK in GTW`, {
            callRequest: includesSpecialGroupReq,
          });
          resolve(response);
        }
      );
    });
  }
}
