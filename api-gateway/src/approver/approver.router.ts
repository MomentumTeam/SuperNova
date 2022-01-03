import { Router } from 'express';
import ApproverController from './approver.controller';
import { ApproverValidator } from './approver.validator';

const ApproverRouter: Router = Router();

// GET
ApproverRouter.get(
  '/',
  ApproverValidator.isGetAllApproversValid,
  ApproverController.getAllApprovers
);
ApproverRouter.get(
  '/displayname/:displayName',
  ApproverValidator.isGetSearchByDisplayNameValid,
  ApproverController.searchApproverByDisplayName
);
ApproverRouter.get(
  '/domainuser/:domainUser',
  ApproverValidator.isGetSearchByDomainUserValid,
  ApproverController.searchApproverByDomainUser
);
ApproverRouter.get(
  '/highcommanders/displayname/:displayName',
  ApproverValidator.isSearchHighCommandersByDisplayNameValid,
  ApproverController.searchHighCommandersByDisplayName
);
ApproverRouter.get(
  '/userType/:id',
  ApproverValidator.isGetUserTypeValid,
  ApproverController.getUserType
);

// POST
// ApproverRouter.post(
//   '/',
//   ApproverValidator.isAddApproverValid,
//   ApproverController.addApprover
// );

ApproverRouter.post(
  '/isValid',
  ApproverValidator.isApproverValidValid,
  ApproverController.isApproverValid
);

// PUT
ApproverRouter.put(
  '/decision/:requestId',
  ApproverValidator.isUpdateApproverDecisionValid,
  ApproverController.updateApproverDecision
);

// DELETE
ApproverRouter.delete(
  '/:id',
  ApproverValidator.isDeleteApproverValid,
  ApproverController.deleteApprover
);

export default ApproverRouter;
