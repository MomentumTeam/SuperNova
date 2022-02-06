import { NextFunction, Request, Response } from 'express';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import {
  getAllRequestsSchema,
  getRequestByIdSchema,
  getRequestsByPersonSchema,
  getRequestBySerialNumberSchema,
  updateADStatusSchema,
  updateRequestSchema,
  UpdateApproversSchema,
  createRoleSchema,
  assignRoleToEntitySchema,
  createOGSchema,
  createNewApproverSchema,
  createEntitySchema,
  renameOGSchema,
  renameRoleSchema,
  editEntitySchema,
  deleteRoleSchema,
  deleteOGSchema,
  disconectRoleFromEntitySchema,
  deleteRequestSchema,
  changeRoleHierarchyReqSchema,
  deleteEntitySchema,
  getRequestsSchema,
  transferRequestToApproversSchema,
  updateApproversCommentsSchema,
  removeApproverFromApproversSchema,
} from './requests.schema';

export class RequestValidator {
  // GET
  static isGetAllRequestsValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getAllRequestsSchema, { allowUnknown: true })
    );
    next();
  }

  static isGetRequestByIdValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getRequestByIdSchema, { allowUnknown: true })
    );
    next();
  }

  static isGetRequestsByPersonValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getRequestsByPersonSchema, { allowUnknown: true })
    );
    next();
  }

  static isRemoveApproverFromApproversValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, removeApproverFromApproversSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  static isTransferRequestToApproversValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, transferRequestToApproversSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  static isGetRequestsValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, getRequestsSchema, { allowUnknown: true })
    );
    next();
  }

  static isGetRequestBySerialNumberValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getRequestBySerialNumberSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  // PUT

  static isUpdateApproversCommentsValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, updateApproversCommentsSchema, { allowUnknown: true })
    );
    next();
  }

  static isUpdateADStatusValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, updateADStatusSchema, { allowUnknown: true })
    );
    next();
  }

  static isUpdateRequestValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, updateRequestSchema, { allowUnknown: true })
    );
    next();
  }

  static isUpdateApproversValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, UpdateApproversSchema, { allowUnknown: true })
    );
    next();
  }

  static isChangeRoleHierarchyRequestValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, changeRoleHierarchyReqSchema, { allowUnknown: true })
    );
    next();
  }

  // POST
  static isCreateRoleValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, createRoleSchema, { allowUnknown: true })
    );
    next();
  }

  static isAssignRoleToEntityValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, assignRoleToEntitySchema, { allowUnknown: true })
    );
    next();
  }

  static isCreateOGValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, createOGSchema, { allowUnknown: true })
    );
    next();
  }

  static isCreateNewApproverValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, createNewApproverSchema, { allowUnknown: true })
    );
    next();
  }

  static isCreateEntityValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, createEntitySchema, { allowUnknown: true })
    );
    next();
  }

  static isRenameOGValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, renameOGSchema, { allowUnknown: true })
    );
    next();
  }

  static isRenameRoleValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, renameRoleSchema, { allowUnknown: true })
    );
    next();
  }

  static isEditEntityValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, editEntitySchema, { allowUnknown: true })
    );
    next();
  }

  static isDeleteRoleValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, deleteRoleSchema, { allowUnknown: true })
    );
    next();
  }

  static isDeleteOGValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, deleteOGSchema, { allowUnknown: true })
    );
    next();
  }

  static isDeleteEntityValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, deleteEntitySchema, { allowUnknown: true })
    );
    next();
  }

  static isDisconectRoleFromEntityValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, disconectRoleFromEntitySchema, { allowUnknown: true })
    );
    next();
  }

  // DELETE
  static isDeleteRequestValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, deleteRequestSchema, { allowUnknown: true })
    );
    next();
  }
}
