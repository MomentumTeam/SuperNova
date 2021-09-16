import { Response } from 'express';
import { logger } from '../utils/logger/logger';
import {
    SearchByDisplayNameReq,
    GetAllApproversReq,
    SearchByDomainUserReq,
    GetUserTypeReq,
    AddApproverReq,
    DeleteApproverReq,
    UpdateApproverDecisionReq,
} from '../interfaces/protoc/proto/approverService';
import { ApproverService } from './approver.service';
import { KartoffelService } from '../kartoffel/kartoffel.service';
import { Entity, GetEntityByIdRequest } from '../interfaces/protoc/proto/kartoffelService';
export default class ApproverController {
    // GET
    static async getAllApprovers(req: any, res: Response) {
        const getAllApproversReq: GetAllApproversReq = {
            type: req.query?.type ? req.query.type : {},
        };

        try {
            const approvers = await ApproverService.getAllApprovers(getAllApproversReq);
            res.send(approvers);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async searchApproverByDisplayName(req: any, res: Response) {
        const searchByDisplayNameReq: SearchByDisplayNameReq = {
            displayName: req.params.displayName,
            type: req.query.type,
            from: req.query.from,
            to: req.query.to,
        };

        try {
            const approvers = await ApproverService.searchApproverByDisplayName(searchByDisplayNameReq);
            res.send(approvers);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async searchApproverByDomainUser(req: any, res: Response) {
        const searchByDomainUserReq: SearchByDomainUserReq = {
            domainUser: req.params.displayName,
            type: req.query.type,
        };

        try {
            const approvers = await ApproverService.searchApproverByDomainUser(searchByDomainUserReq);
            res.send(approvers);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getUserType(req: any, res: Response) {
        const getUserTypeReq: GetUserTypeReq = {
            entityId: req.params.entityId,
        };

        try {
            const userType = await ApproverService.getUserType(getUserTypeReq);
            res.send(userType);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    // POST
    static async addApprover(req: any, res: Response) {
        logger.info(`Call to AddApprover in GTW`, {
            entityId: req.body.entityId,
            type: req.body.type,
        });

        let entity: Entity;
        try {
            // Call kartoffel service and search
            // for domainUsers, akaunit and displayname
            const getUserReq: GetEntityByIdRequest = { id: req.user.id };
            entity = await KartoffelService.getEntityById(getUserReq);
        } catch (error: any) {
            res.status(500).send(error.message);
            return;
        }

        // add the findings to the body req
        const addApproverReq: AddApproverReq = {
            entityId: req.body.entityId,
            type: req.body.type,
            akaUnit: entity.akaUnit,
            displayName: entity.displayName,
            domainUsers: entity.digitalIdentities.map((digitalIdentity) => digitalIdentity.uniqueId),
        };

        try {
            const approver = await ApproverService.addApprover(addApproverReq);
            res.send(approver);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    // PUT
    static async updateApproverDecision(req: any, res: Response) {
        const updateApproverDecisionReq: UpdateApproverDecisionReq = {
            decision: { id: req.params.requestId, approverDecision: req.body.approverDecision },
            type: req.params.type,
        };

        try {
            const descision = await ApproverService.updateApproverDecision(updateApproverDecisionReq);
            res.send(descision);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    // DELETE
    static async deleteApprover(req: any, res: Response) {
        let deleteApproverReq: DeleteApproverReq = {
            approverId: req.params.id,
        };

        try {
            const approver = await ApproverService.deleteApprover(deleteApproverReq);
            res.send(approver);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}
