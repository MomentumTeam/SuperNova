import {
    SendCustomMailReq,
    SuccsessMessage,
    SendMailReq,
} from '../interfaces/protoc/proto/mailService';
import { MailRepository } from './mail.repository';

export class MailManager {
    private mailRepository: MailRepository;
    constructor() {
        this.mailRepository = new MailRepository();
    }

    async sendMail(
        sendMailReq: SendMailReq
    ): Promise<SuccsessMessage> {
        try {
            return await this.mailRepository.sendMail(sendMailReq);
        } catch (error) {
            throw error;
        }
    }

    async sendCustomMail(
        sendCustomMailReq: SendCustomMailReq
    ): Promise<SuccsessMessage> {
        try {
            return await this.mailRepository.sendCustomMail(sendCustomMailReq);
        } catch (error) {
            throw error;
        }
    }
}
