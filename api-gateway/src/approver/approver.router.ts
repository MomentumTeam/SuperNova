import { Router } from 'express';
import ApproverController from './approver.controller';

const ApproverRouter: Router = Router();

ApproverRouter.post('/commanderApprover', ApproverController.addCommanderApprover);

ApproverRouter.post('/securityApprover', ApproverController.addSecurityApprover);

ApproverRouter.post('/superSecurityApprover', ApproverController.addSuperSecurityApprover);

ApproverRouter.get('/userType/:id', ApproverController.getUserType);

ApproverRouter.get('/searchByDisplayName', ApproverController.searchApproverByDisplayName);

ApproverRouter.get('/searchByDomainUser', ApproverController.searchApproverByDomainUser);

ApproverRouter.get('/securityApprovers', ApproverController.getAllSecurityApprovers);

ApproverRouter.get('/superSecurityApprovers', ApproverController.getAllSuperSecurityApprovers);

ApproverRouter.get('/commanderApprovers', ApproverController.getAllCommanderApprovers);

ApproverRouter.put('/commanderDecision/:requestId', ApproverController.updateCommanderDecision);

ApproverRouter.put('/securityDecision/:requestId', ApproverController.updateSecurityDecision);

ApproverRouter.put('/superSecurityDecision/:requestId', ApproverController.updateSuperSecurityDecision);

export default ApproverRouter;
