import nodemailer from 'nodemailer';
import * as C from '../config';
import {
  Request,
  requestTypeFromJSON,
  requestTypeToJSON,
} from '../interfaces/protoc/proto/requestService';
import {
  MailType,
  mailTypeFromJSON,
} from '../interfaces/protoc/proto/mailService';

export function sendMail(mailOptions: any) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: C.mailServerHost,
      port: C.mailServerPort,
      secure: C.mailServerSecure,
      auth: {
        user: C.mailUser,
        pass: C.mailPassword,
      },
    });
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

export function generateMail(mailType: any, request: Request) {
  let message = '';
  try {
    const requestType: any =
      typeof request.type == typeof ''
        ? requestTypeFromJSON(request.type)
        : request.type;
    const requestTypeStr = requestTypeToJSON(requestType);

    let commanderName = request.commanderDecision?.approver?.displayName;
    if (!commanderName) {
      commanderName = 'גורם מאשר ראשוני';
    }

    switch (mailType) {
      case MailType.REQUEST_APPROVED_1:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName}.`;
        if (request.needSecurityDecision) {
          message = message + 'הועברה לטיפול יחב"ם.';
        }
        break;
      case MailType.REQUEST_APPROVED_2:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName} ועל ידי יחב\"ם.`;
        if (request.needSuperSecurityDecision) {
          message = message + 'הועברה לטיפול בטח"ם.';
        }
        break;
      case MailType.REQUEST_APPROVED_3:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה על ידי ${commanderName} ועל ידי יחב\"ם ובטח\"ם.`;
        break;
      case MailType.REQUEST_DECLINED_1:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי ${commanderName}.`;
        break;
      case MailType.REQUEST_DECLINED_2:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי יחב\"ם.`;
        break;
      case MailType.REQUEST_DECLINED_3:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נדחתה על ידי בטח\"ם.`;
        break;
      case MailType.REQUEST_DONE:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} אושרה ע"י כלל הגורמים הרלוונטיים ובוצעה.`;
        break;
      case MailType.REQUEST_FAILED:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נכשלה.`;
        break;
      case MailType.REQUEST_NEW_USER:
        message = 'ברוך הבא!';
        break;
      case MailType.REQUEST_TOO_OLD:
        message = 'ישנן בקשות ישנות!';
        break;
      case MailType.REQUEST_SUBMITTED:
        message = `בקשתך ל${C.requestTypeToHebrew[requestTypeStr]} מספר ${request.serialNumber} נפתחה והועברה לטיפול הגורם המאשר שבחרת!.`;
        break;
    }
    return message;
  } catch (error) {
    throw error;
  }
}
