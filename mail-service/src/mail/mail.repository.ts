import * as C from '../config';

import {
  SendCustomMailReq,
  SuccessMessage,
  SendMailReq,
} from '../interfaces/protoc/proto/mailService';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';
import { generateMail, sendMail } from '../utils/mailer';

export class MailRepository {
  async sendMail(sendMailReq: SendMailReq): Promise<SuccessMessage> {
    try {
      const message: string = generateMail(
        sendMailReq.type,
        sendMailReq.request!
      );
      const html = `<div style="justify-content: center; align-items: center; text-align: center; font-family: Arial, Helvetica, sans-serif; direction: rtl;">
            <p style="font-size: 18px; text-align: right;">שלום ${sendMailReq.request?.submittedBy?.displayName},</p>
            <p style="font-size: 18px; text-align: right;">${message}</p>
            <br />
            </div>`;

      const sendCustomMailReq: SendCustomMailReq = {
        entityId: sendMailReq.request!.submittedBy!.id,
        title: `${sendMailReq.request!.serialNumber} הודעה בקשר לבקשתך מספר`,
        message: message,
        html: html,
      };
      return await this.sendCustomMail(sendCustomMailReq);
    } catch (error) {
      throw error;
    }
  }

  async sendCustomMail(
    sendCustomMailReq: SendCustomMailReq
  ): Promise<SuccessMessage> {
    try {
      const entity: Entity = await KartoffelService.getEntityById({
        id: sendCustomMailReq.entityId,
      });

      let promises: any = [];
      if (C.isTest) {
        entity.digitalIdentities = C.emailsForTest.map((email) => {
          return { mail: email } as any;
        });
      }
      entity.digitalIdentities.forEach((digitalEntity) => {
        const options = {
          from: C.fromAddress,
          to: digitalEntity.mail, //digitalIdentitie.mail,
          subject: sendCustomMailReq.title,
          text: sendCustomMailReq.message,
          html: sendCustomMailReq.html,
        };
        promises.push(
          new Promise((resolve, reject) => {
            sendMail(options)
              .then((info) => {
                resolve(info);
              })
              .catch((sendMailError) => {
                reject(sendMailError);
              });
          })
        );
      });

      await Promise.all(promises);

      const emails = entity.digitalIdentities.map(
        (digitalIdentity) => digitalIdentity.mail
      );

      return { success: true, message: emails.toString() };
    } catch (error) {
      throw error;
    }
  }
}
