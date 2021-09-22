import { Router } from 'express';
import ApproverController from './approver.controller';
import { ApproverValidator } from './approver.validator';

const ApproverRouter: Router = Router();

// GET
ApproverRouter.get('/', ApproverValidator.isGetAllApproversValid, ApproverController.getAllApprovers);
ApproverRouter.get('/displayname/:displayName', ApproverValidator.isGetSearchByDisplayNameValid, ApproverController.searchApproverByDisplayName);
ApproverRouter.get('/domainuser/:domainUser',ApproverValidator.isGetSearchByDomainUserValid, ApproverController.searchApproverByDomainUser);
ApproverRouter.get('/usertype', ApproverValidator.isGetUserTypeValid, ApproverController.getUserType);

// POST
ApproverRouter.post('/', ApproverValidator.isAddApproverValid, ApproverController.addApprover); 

// PUT
ApproverRouter.put('/decision/:requestId', ApproverValidator.isUpdateApproverDecisionValid, ApproverController.updateApproverDecision); // TODO: CHANGE add user type from user conncted? discuss about this with barak

// DELETE
ApproverRouter.delete('/:id',ApproverValidator.isDeleteApproverValid, ApproverController.deleteApprover);

export default ApproverRouter;
