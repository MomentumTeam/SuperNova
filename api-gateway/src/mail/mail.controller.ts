import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import { SendHierarchyDataReq } from '../interfaces/protoc/proto/mailService';
import { MailService } from './mail.service';
import {} from '../interfaces/protoc/proto/requestService';
import { statusCodeHandler } from '../utils/errors/errorHandlers';
import { config } from '../config';

export default class MailController {
  // DELETE
  static async sendHierarchyDataMail(req: any, res: Response) {
    let sendHierarchyDataReq: SendHierarchyDataReq = {
      entityId: req.user.id,
      hierarchy: req.body.hierarchy,
      withRoles: req.body.withRoles,
      direct: req.body.direct,
    };

    try {
      await MailService.sendHierarchyDataMail(sendHierarchyDataReq);
    } catch (error: any) {
      const statusCode = statusCodeHandler(error);
      res.status(statusCode).send(error.message);
    }
  }
}
