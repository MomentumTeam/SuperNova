import { Router } from 'express';
import ApproverController from './approver.controller';

const ApproverRouter: Router = Router();

ApproverRouter.post('/addCommanderApprover', ApproverController.AddCommanderApprover);

ApproverRouter.post('/addSecurityApprover', ApproverController.AddSecurityApprover);

ApproverRouter.post('/addSuperSecurityApprover', ApproverController.AddSuperSecurityApprover);

ApproverRouter.get('/getUserType/:id', ApproverController.GetUserType);

ApproverRouter.get('/searchApproverByDisplayName', ApproverController.SearchApproverByDisplayName);

ApproverRouter.get('/searchApproverByDomainUser', ApproverController.SearchApproverByDomainUser);

ApproverRouter.get('/getAllSecurityApprovers', ApproverController.GetAllSecurityApprovers);

ApproverRouter.get('/getAllSuperSecurityApprovers', ApproverController.GetAllSuperSecurityApprovers);

ApproverRouter.get('/getAllCommanderApprovers', ApproverController.GetAllCommanderApprovers);

ApproverRouter.put('/updateCommanderDecision/:requestId', ApproverController.UpdateCommanderDecision);

ApproverRouter.put('/updateSecurityDecision/:requestId', ApproverController.UpdateSecurityDecision);

export default ApproverRouter;
