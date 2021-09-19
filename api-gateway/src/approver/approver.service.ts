import path from 'path';
import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { config } from '../config';
import {
  AddApproverReq,
  Approver,
  ApproverArray,
  DeleteApproverReq,
  GetAllApproversReq,
  GetUserTypeReq,
  GetUserTypeRes,
  SearchByDisplayNameReq,
  SearchByDomainUserReq,
} from '../interfaces/protoc/proto/approverService';
import { logger } from '../utils/logger/logger';
import { UpdateApproverDecisionReq } from '../interfaces/protoc/proto/requestService';

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

const approverClient: any = new protoDescriptor.ApproverService(
  config.endpoints.approver,
  grpc.credentials.createInsecure()
);

export class ApproverService {
  static async getAllApprovers(getAllApproversReq: GetAllApproversReq) {
    logger.info(`Call to GetAllApprovers in GTW`, getAllApproversReq);

    return new Promise((resolve, reject) => {
      approverClient.GetAllApprovers(
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
            response: response,
            callRequest: getAllApproversReq,
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
      approverClient.SearchApproverByDisplayName(
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
            response: response,
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
      approverClient.SearchApproverByDomainUser(
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
            response: response,
            callRequest: searchByDomainUserReq,
          });
          resolve(response);
        }
      );
    });
  }

  static async getUserType(getUserTypeReq: GetUserTypeReq) {
    logger.info(`Call to getUserTypeReq in GTW`, getUserTypeReq);

    return new Promise((resolve, reject) => {
      approverClient.GetUserType(
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
            response: response,
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
      approverClient.AddApprover(
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
  ) {
    logger.info(
      `Call to updateApproverDecision in GTW`,
      updateApproverDecisionReq
    );

    return new Promise((resolve, reject) => {
      approverClient.UpdateApproverDecision(
        updateApproverDecisionReq,
        (err: any, response: ApproverArray) => {
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
      approverClient.DeleteApprover(
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
}
