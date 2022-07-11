import { MailType, SendMailReq } from '../interfaces/protoc/proto/mailService';
import { Request } from '../interfaces/protoc/proto/requestService';
import { logger } from '../logger';
import MailService from './mailService';

export async function sendMail(type: MailType, request: Request) {
  try {
    let sendMailReq: SendMailReq = {
      type: type,
      request: request,
    };
    await MailService.sendMail(sendMailReq);
  } catch (error: any) {
    logger.error('Error while sending mails', {
      error: { message: error.message },
    });
  }
}
