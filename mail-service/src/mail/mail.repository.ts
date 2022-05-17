import * as C from '../config';

import {
  SendCustomMailReq,
  SuccessMessage,
  SendMailReq,
  SendHierarchyDataReq,
} from '../interfaces/protoc/proto/mailService';
import {
  Entity,
  ExportHierarchyDataRes,
} from '../interfaces/protoc/proto/kartoffelService';
import KartoffelService from '../services/kartoffelService';
import { generateMail, sendMail } from '../utils/mailer';
import {
  MailType,
  mailTypeFromJSON,
} from '../interfaces/protoc/proto/mailService';
import Excel from 'exceljs';

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

      const html = this.getHtmlTemplate(
        message,
        sendMailReq.request?.submittedBy?.displayName,
        relatedToSpecificReqeustsRelated
      );

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
          return { mail: email, source: C.diDefaultSource } as any;
        });
      }

      const mails = entity.digitalIdentities
        .filter(
          (digitalIdentity) => digitalIdentity.source === C.diDefaultSource
        )
        .map((digitalIdentity) => digitalIdentity.mail);

      if (mails === undefined || mails.length === 0) {
        return { success: true, message: '' };
      }

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

  async sendHierarchyDataMail(
    sendHierarchyDataReq: SendHierarchyDataReq
  ): Promise<SuccessMessage> {
    try {
      let promises: any = [];

      const entity: Entity = await KartoffelService.getEntityById({
        id: sendHierarchyDataReq.entityId,
      });

      if (C.isTest) {
        entity.digitalIdentities = C.emailsForTest.map((email) => {
          return { mail: email, source: C.diDefaultSource } as any;
        });
      }

      const mails = entity.digitalIdentities
        .filter(
          (digitalIdentity) => digitalIdentity.source === C.diDefaultSource
        )
        .map((digitalIdentity) => digitalIdentity.mail);

      if (mails === undefined || mails.length === 0) {
        return { success: true, message: '' };
      }

      const message = sendHierarchyDataReq.direct
        ? `מצורף למייל זה מסמך המכיל נתונים על כל התפקידים שנמצאים בהיררכיה ${sendHierarchyDataReq?.hierarchy}.`
        : `מצורף למייל זה מסמך המכיל נתונים על כל התפקידים שנמצאים בהיררכיה ${sendHierarchyDataReq?.hierarchy} ובהיררכיות תחתיה.`;

      const hierarchyData: ExportHierarchyDataRes =
        await KartoffelService.exportHierarchyData({
          hierarchy: sendHierarchyDataReq?.hierarchy,
          withRoles: sendHierarchyDataReq?.withRoles,
          direct: sendHierarchyDataReq?.direct,
        });

      let workbook = new Excel.Workbook();
      let worksheet = workbook.addWorksheet(hierarchyData?.fatherHierarchyName);

      worksheet.columns = [
        { header: 'היררכיה', key: 'hierarchyName' },
        { header: 'שם תפקיד', key: 'jobTitle' },
        { header: 'מזהה תפקיד T', key: 'roleId' },
        { header: 'מזהה כרטיס (UPN)', key: 'upn' },
        { header: 'משתמש בתפקיד', key: 'entity' },
      ];

      hierarchyData?.hierarchyData.forEach((og) => {
        worksheet.addRow(og);
      });

      const buffer = await workbook.xlsx.writeBuffer();

      const mailOptions: any = {
        from: C.fromAddress,
        subject: 'מערכת לגו - ייצוא תפקידים תחת היררכיה',
        text: message,
        html: this.getHtmlTemplate(message, entity.displayName, false),
        attachments: [
          {
            filename: `${
              sendHierarchyDataReq.direct
                ? `${hierarchyData.fatherHierarchyName}-ישיר`
                : hierarchyData.fatherHierarchyName
            }.xlsx`,
            content: buffer,
            contentType:
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
          },
        ],
      };

      const uniqueMails = [...new Set(mails)];
      uniqueMails.forEach((mail) => {
        mailOptions.to = mail;
        promises.push(
          new Promise((resolve, reject) => {
            sendMail(mailOptions)
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

  getHtmlTemplate(
    message: string,
    displayName: any,
    relatedToSpecificReqeustsRelated: boolean = false
  ) {
    return `<div style="padding: 20px;">
<div style="padding: 20px;">
<table style="border-collapse: collapse; width: 95.0226%; height: 562px;  border: 1px solid white;" border="1">
<tbody>
<tr>
<td style="width: 100%;">
<h1 style="text-align: center;"><strong>הודעה ממערכת לגו</strong></h1>
<hr class="rounded" />
<p style="direction: rtl; margin: 50px;font-size:120%";">שלום ${displayName}, <br /><br />${message}</p>
<p style="margin: 0; text-align: center; direction: rtl; margin-bottom: 50px; font-weight: bold; ">

${
  relatedToSpecificReqeustsRelated
    ? `
 לצפיה בפרטי הבקשה וסטטוס עדכני לחץ `
    : `
 לכניסה למערכת לגו לחץ`
}

<a href="${C.legoAddress}"> כאן. </a></p>
<hr class="rounded" />
<div style="line-height: 10px;" align="center">
<img src="cid:svg@cid"  width="90"/>
<img src="cid:lego2@cid" style="margin-right: 40px;margin-left: 40px;" width="70" />
<img src="cid:logo@cid"  width="128"/></div>
<hr class="rounded" /></td>
</tr>
</tbody>
</table>
</div>
</div>`;
  }
}
