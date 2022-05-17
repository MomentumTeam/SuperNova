import { Router } from 'express';
import MailController from './mail.controller';
import { MailValidator } from './mail.validator';

const MailRouter: Router = Router();

MailRouter.post(
  '/export/roles/',
  MailValidator.sendHierarchyDataMailValid,
  MailController.sendHierarchyDataMail
);

export default MailRouter;
