import { NextFunction, Request, Response } from 'express';
import {
  transformRequest,
  validateObject,
} from '../utils/validations/validations';
import {
  addApproverSchema,
  deleteApproverSchema,
  getAllApproversSchema,
  getSearchByDisplayName,
  getSearchByDomainUser,
  searchHighCommandersByDisplayNameValidSchema,
  updateApproverDecisionSchema,
} from './approver.schema';

export class ApproverValidator {
  // GET
  static isGetAllApproversValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getAllApproversSchema, { allowUnknown: true })
    );
    next();
  }

  static isSearchHighCommandersByDisplayNameValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, searchHighCommandersByDisplayNameValidSchema, {
        allowUnknown: true,
      })
    );
    next();
  }

  static isGetSearchByDisplayNameValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getSearchByDisplayName, { allowUnknown: true })
    );
    next();
  }

  static isGetSearchByDomainUserValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, getSearchByDomainUser, { allowUnknown: true })
    );
    next();
  }

  // POST
  static isAddApproverValid(req: Request, res: Response, next: NextFunction) {
    transformRequest(
      req,
      validateObject(req, addApproverSchema, { allowUnknown: true })
    );
    next();
  }

  // PUT
  static isUpdateApproverDecisionValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, updateApproverDecisionSchema, { allowUnknown: true })
    );
    next();
  }

  // DELETE
  static isDeleteApproverValid(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    transformRequest(
      req,
      validateObject(req, deleteApproverSchema, { allowUnknown: true })
    );
    next();
  }
}
