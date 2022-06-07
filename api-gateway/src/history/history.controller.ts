import { Response } from 'express';
import { logger } from '../utils/logger/logger';
// import ProducerController from '../producer/producer.controller';
// import {
//   ADStage,
//   SuccessMessage,
// } from '../interfaces/protoc/proto/producerService';
// import { ApproverService } from '../approver/approver.service';
import {
  GetDoneRequestsByEntityIdReq,
  GetDoneRequestsByGroupIdReq,
  GetDoneRequestsByRoleIdReq,
  Event,
  EventArray,
} from '../interfaces/protoc/proto/historyService';
import { RequestsService } from './requests.service';
import { AuthenticationError } from '../utils/errors/userErrors';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import {
  approveUserRequest,
  getApprovedDecision,
  getEntityFromConnectedUser,
} from './requests.utils';
import { GetUserTypeRes } from '../interfaces/protoc/proto/approverService';
import { config } from '../config';

export default class RequestsController {
  static async getSupportLink(req: any, res: Response) {
    try {
      res.send({ supportGroupLink: config.endpoints.supportLink });
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestById(req: any, res: Response) {
    const getRequestByIdReq: GetRequestByIdReq = { id: req.params.id };

    try {
      const request = await RequestsService.getRequestById(getRequestByIdReq);
      res.send(request);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getMyRequests(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.SUBMITTER,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.ANY,
      adminGroupsInCharge: [],
      securityAdminGroupsInCharge: [],
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getAllRequestsToApprove(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.GET_ALL,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.BY_USER_TYPE,
      adminGroupsInCharge: [],
      securityAdminGroupsInCharge: [],
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }

    if (req.user.types.includes(approverTypeToJSON(ApproverType.ADMIN))) {
      const admin = await ApproverService.getApproverByEntityId({
        entityId: req.user.id,
        type: ApproverType.ADMIN,
      });
      if (
        admin.groupsInCharge !== undefined &&
        admin.groupsInCharge.length > 0
      ) {
        getRequestsByPersonReq.adminGroupsInCharge = admin.groupsInCharge;
      }
    }

    if (
      req.user.types.includes(approverTypeToJSON(ApproverType.SECURITY_ADMIN))
    ) {
      const securityAdmin = await ApproverService.getApproverByEntityId({
        entityId: req.user.id,
        type: ApproverType.SECURITY_ADMIN,
      });
      if (
        securityAdmin.groupsInCharge !== undefined &&
        securityAdmin.groupsInCharge.length > 0
      ) {
        getRequestsByPersonReq.securityAdminGroupsInCharge =
          securityAdmin.groupsInCharge;
      }
    }

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getMyRequestsToApprove(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.user.id,
      personType: PersonTypeInRequest.APPROVER,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      approvementStatus: ApprovementStatus.BY_USER_TYPE,
      adminGroupsInCharge: [],
      securityAdminGroupsInCharge: [],
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }

    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestsByPerson(req: any, res: Response) {
    const getRequestsByPersonReq: GetRequestsByPersonReq = {
      id: req.params.id,
      personType: req.query.personType,
      from: req.query.from,
      to: req.query.to,
      userType: req.user.types,
      adminGroupsInCharge: [],
      securityAdminGroupsInCharge: [],
    };

    if (req.query.searchQuery) {
      getRequestsByPersonReq.searchQuery = req.query.searchQuery;
    }
    if (req.query.status) {
      getRequestsByPersonReq.status = req.query.status;
    }
    if (req.query.type) {
      getRequestsByPersonReq.type = req.query.type;
    }
    if (req.query.sortField) {
      getRequestsByPersonReq.sortField = req.query.sortField;
    }
    if (req.query.sortOrder) {
      getRequestsByPersonReq.sortOrder = req.query.sortOrder;
    }
    try {
      const requests = await RequestsService.getRequestsByPerson(
        getRequestsByPersonReq
      );
      res.send(requests);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getRequestBySerialNumber(req: any, res: Response) {
    const getRequestBySerialNumberReq: GetRequestBySerialNumberReq = {
      serialNumber: req.params.serialNumber,
    };

    try {
      const request: any = await RequestsService.getRequestBySerialNumber(
        getRequestBySerialNumberReq
      );
      if (request.submittedBy && request.submittedBy.id) {
        const submitterId = request.submittedBy.id;
        const userId = req.user.id;
        if (userId !== submitterId) {
          res.status(404).send('NOT FOUND');
        } else {
          res.send(request);
        }
      } else {
        res.status(403).send('Error');
      }
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}