import * as C from '../config';

import {
  SendCustomMailReq,
  SuccessMessage,
  SendMailReq,
} from '../interfaces/protoc/proto/mailService';
import { Entity } from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';
import { generateMail, sendMail } from '../utils/mailer';
import {
  MailType,
  mailTypeFromJSON,
} from '../interfaces/protoc/proto/mailService';

export class MailRepository {
  async sendMail(sendMailReq: SendMailReq): Promise<SuccessMessage> {
    try {
      const mailType =
        typeof sendMailReq.type == typeof ''
          ? mailTypeFromJSON(sendMailReq.type)
          : sendMailReq.type;

      const relatedToSpecificReqeustsRelated =
        mailType !== MailType.REQUEST_NEW_USER &&
        mailType !== MailType.REQUEST_TOO_OLD;

      const message: string = generateMail(mailType, sendMailReq.request!);

      const html = `<div style="justify-content: center; align-items: center; text-align: center; font-family: Arial, Helvetica, sans-serif; direction: rtl;">
            <p style="font-size: 18px; text-align: right;">שלום ${
              sendMailReq.request?.submittedBy?.displayName
            },</p>
            <p style="font-size: 18px; text-align: right;">${message}</p>

            ${
              relatedToSpecificReqeustsRelated
                ? `<p style="font-size: 18px; text-align: right;"> לצפיה בפרטי הבקשה וסטטוס עדכני לחץ 
              <a href=${C.legoAddress}>
                כאן
              </a>`
                : `<p style="font-size: 18px; text-align: right;"> לכניסה למערכת לגו לחץ 
              <a href=${C.legoAddress}>
                כאן
              </a>`
            }
            
            <br />
            </div>`;

      const sendCustomMailReq: SendCustomMailReq = {
        entityId: sendMailReq.request!.submittedBy!.id,
        title: relatedToSpecificReqeustsRelated
          ? `${sendMailReq.request!.serialNumber} הודעה בקשר לבקשתך מספר`
          : `מערכת לגו:`,
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
      const mails = entity.digitalIdentities.map(
        (digitalIdentity) => digitalIdentity.mail
      );
      const uniqueMails = [...new Set(mails)];
      uniqueMails.forEach((mail) => {
        const options = {
          from: C.fromAddress,
          to: mail, //digitalIdentitie.mail,
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

      return { success: true, message: uniqueMails.toString() };
    } catch (error) {
      throw error;
    }
  }
}
