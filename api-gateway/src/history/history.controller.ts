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
import { HistoryService } from './history.service';
import { AuthenticationError } from '../utils/errors/userErrors';
// import { KartoffelService } from '../kartoffel/kartoffel.service';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
// import {
//   approveUserRequest,
//   getApprovedDecision,
//   getEntityFromConnectedUser,
// } from './requests.utils';
// import { GetUserTypeRes } from '../interfaces/protoc/proto/approverService';
import { config } from '../config';

export default class RequestsController {
  // static async getSupportLink(req: any, res: Response) {
  //   try {
  //     res.send({ supportGroupLink: config.endpoints.supportLink });
  //   } catch (error: any) {
  //     const statusCode = statusCodeHandler(error);
  //     res.status(statusCode).send(error.message);
  //   }
  // }

  static async getDoneRequestsByRoleId(req: any, res: Response) {
    const getDoneRequestsByEntityIdReq: GetDoneRequestsByRoleIdReq = {
      roleId: req.params.roleId,
      from: req.query.from,
      to: req.query.to, };

    try {
      const eventArray = await HistoryService.getEventsByRoleId(getDoneRequestsByEntityIdReq);
      res.send(eventArray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getDoneRequestsByGroupId(req: any, res: Response) {
    const getDoneRequestsByGroupIdReq: GetDoneRequestsByGroupIdReq = {
      groupId: req.params.groupId,
      from: req.query.from,
      to: req.query.to,
      showRoles: req.query.showRoles, };

    try {
      const eventArray = await HistoryService.getEventsByGroupId(getDoneRequestsByGroupIdReq);
      res.send(eventArray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getDoneRequestsByEntityId(req: any, res: Response) {
    const getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq = {
      entityId: req.params.entityId,
      from: req.query.from,
      to: req.query.to, };

    try {
      const eventArray = await HistoryService.getEventsByEntityId(getDoneRequestsByEntityIdReq);
      res.send(eventArray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }

  static async getDoneRequestsBySubmittedEntityId(req: any, res: Response) {
    const getDoneRequestsByEntityIdReq: GetDoneRequestsByEntityIdReq = {
      entityId: req.params.entityId,
      from: req.query.from,
      to: req.query.to, };

    try {
      const eventArray = await HistoryService.getEventsSubmmitedByEntityId(getDoneRequestsByEntityIdReq);
      res.send(eventArray);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}