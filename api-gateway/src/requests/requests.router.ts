import { Router } from 'express';
import { PermissionHandler } from '../utils/auth/permissions';
import RequestsController from './requests.controller';
import { RequestValidator } from './requests.validator';

const RequestsRouter: Router = Router();

// GET
RequestsRouter.get(
  '/my/',
  RequestValidator.isGetRequestsValid,
  RequestsController.getMyRequests
);

RequestsRouter.get(
  '/approve/all',
  RequestValidator.isGetRequestsValid,
  RequestsController.getAllRequestsToApprove
);

RequestsRouter.get(
  '/approve/my',
  RequestValidator.isGetRequestsValid,
  RequestsController.getMyRequestsToApprove
);

RequestsRouter.get(
  '/:id',
  RequestValidator.isGetRequestByIdValid,
  RequestsController.getRequestById
);
RequestsRouter.get(
  '/person/:id',
  RequestValidator.isGetRequestsByPersonValid,
  RequestsController.getRequestsByPerson
);

// RequestsRouter.get('/status/:approvementStatus', PermissionHandler.securityUser, RequestValidator.isGetAllRequestsValid,RequestsController.getAllRequests);
RequestsRouter.get(
  '/serialNumber/:serialNumber',
  RequestValidator.isGetRequestBySerialNumberValid,
  RequestsController.getRequestBySerialNumber
);

// PUT
RequestsRouter.put(
  '/:id',
  RequestValidator.isUpdateRequestValid,
  RequestsController.updateRequest
);


RequestsRouter.put(
  '/adStatus',
  RequestValidator.isUpdateADStatusValid,
  RequestsController.updateADStatus
  );

RequestsRouter.put(
  '/approver/transfer/:id',
  RequestValidator.isTransferRequestToApproversValid,
  RequestsController.transferRequestToApprovers
);

RequestsRouter.put(
  '/approver/commanders/:id',
  RequestValidator.isUpdateApproversValid,
  RequestsController.updateCommanders
);
RequestsRouter.put(
  '/approver/security/:id',
  RequestValidator.isUpdateApproversValid,
  RequestsController.updateSecurityApprovers
);
RequestsRouter.put(
  '/approver/decision/:id',
  RequestValidator.isUpdateApproverDecision,
  RequestsController.updateApproverDecision
);

RequestsRouter.put(
  '/request/entity',
  RequestValidator.isEditEntityValid,
  RequestsController.editEntityRequest
);
RequestsRouter.put(
  '/request/og/rename',
  RequestValidator.isRenameOGValid,
  RequestsController.renameOGRequest
);
RequestsRouter.put(
  '/request/role/rename',
  RequestValidator.isRenameRoleValid,
  RequestsController.renameRoleRequest
);
RequestsRouter.put(
  '/request/role/og',
  RequestValidator.isChangeRoleHierarchyRequestValid,
  RequestsController.changeRoleHierarchyRequest
);
RequestsRouter.put(
  '/request/entity/role',
  RequestValidator.isAssignRoleToEntityValid,
  RequestsController.assignRoleToEntityRequest
);

// POST
RequestsRouter.post(
  '/request/role',
  RequestValidator.isCreateRoleValid,
  RequestsController.createRoleRequest
);
RequestsRouter.post(
  '/request/og',
  RequestValidator.isCreateOGValid,
  RequestsController.createOGRequest
);
RequestsRouter.post(
  '/request/approver',
  RequestValidator.isCreateNewApproverValid,
  RequestsController.createNewApproverRequest
);
RequestsRouter.post(
  '/request/entity',
  RequestValidator.isCreateEntityValid,
  RequestsController.createEntityRequest
);

// DELETE
RequestsRouter.delete(
  '/request/entity/role',
  RequestValidator.isDisconectRoleFromEntityValid,
  RequestsController.disconectRoleFromEntityRequest
);
RequestsRouter.delete(
  '/request/entity',
  RequestValidator.isDeleteEntityValid,
  RequestsController.deleteEntityRequest
);
RequestsRouter.delete(
  '/request/role',
  RequestValidator.isDeleteRoleValid,
  RequestsController.deleteRoleRequest
);
RequestsRouter.delete(
  '/request/og',
  RequestValidator.isDeleteOGValid,
  RequestsController.deleteOGRequest
);
RequestsRouter.delete(
  '/:id',
  RequestValidator.isDeleteRequestValid,
  RequestsController.deleteRequest
);

export default RequestsRouter;
