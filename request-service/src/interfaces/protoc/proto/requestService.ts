/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "RequestService";

export enum ApproverType {
  COMMANDER = 0,
  SECURITY = 1,
  SUPER_SECURITY = 2,
  UNRECOGNIZED = -1,
}

export function approverTypeFromJSON(object: any): ApproverType {
  switch (object) {
    case 0:
    case "COMMANDER":
      return ApproverType.COMMANDER;
    case 1:
    case "SECURITY":
      return ApproverType.SECURITY;
    case 2:
    case "SUPER_SECURITY":
      return ApproverType.SUPER_SECURITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApproverType.UNRECOGNIZED;
  }
}

export function approverTypeToJSON(object: ApproverType): string {
  switch (object) {
    case ApproverType.COMMANDER:
      return "COMMANDER";
    case ApproverType.SECURITY:
      return "SECURITY";
    case ApproverType.SUPER_SECURITY:
      return "SUPER_SECURITY";
    default:
      return "UNKNOWN";
  }
}

export enum RequestType {
  CREATE_OG = 0,
  CREATE_ROLE = 1,
  ASSIGN_ROLE_TO_ENTITY = 2,
  CREATE_ENTITY = 3,
  RENAME_OG = 4,
  RENAME_ROLE = 5,
  EDIT_ENTITY = 6,
  DELETE_OG = 7,
  DELETE_ROLE = 8,
  DELETE_ENTITY = 9,
  DISCONNECT_ROLE = 10,
  ADD_APPROVER = 11,
  CHANGE_ROLE_HIERARCHY = 12,
  CREATE_ROLE_BULK = 13,
  CHANGE_ROLE_HIERARCHY_BULK = 14,
  UNRECOGNIZED = -1,
}

export function requestTypeFromJSON(object: any): RequestType {
  switch (object) {
    case 0:
    case "CREATE_OG":
      return RequestType.CREATE_OG;
    case 1:
    case "CREATE_ROLE":
      return RequestType.CREATE_ROLE;
    case 2:
    case "ASSIGN_ROLE_TO_ENTITY":
      return RequestType.ASSIGN_ROLE_TO_ENTITY;
    case 3:
    case "CREATE_ENTITY":
      return RequestType.CREATE_ENTITY;
    case 4:
    case "RENAME_OG":
      return RequestType.RENAME_OG;
    case 5:
    case "RENAME_ROLE":
      return RequestType.RENAME_ROLE;
    case 6:
    case "EDIT_ENTITY":
      return RequestType.EDIT_ENTITY;
    case 7:
    case "DELETE_OG":
      return RequestType.DELETE_OG;
    case 8:
    case "DELETE_ROLE":
      return RequestType.DELETE_ROLE;
    case 9:
    case "DELETE_ENTITY":
      return RequestType.DELETE_ENTITY;
    case 10:
    case "DISCONNECT_ROLE":
      return RequestType.DISCONNECT_ROLE;
    case 11:
    case "ADD_APPROVER":
      return RequestType.ADD_APPROVER;
    case 12:
    case "CHANGE_ROLE_HIERARCHY":
      return RequestType.CHANGE_ROLE_HIERARCHY;
    case 13:
    case "CREATE_ROLE_BULK":
      return RequestType.CREATE_ROLE_BULK;
    case 14:
    case "CHANGE_ROLE_HIERARCHY_BULK":
      return RequestType.CHANGE_ROLE_HIERARCHY_BULK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestType.UNRECOGNIZED;
  }
}

export function requestTypeToJSON(object: RequestType): string {
  switch (object) {
    case RequestType.CREATE_OG:
      return "CREATE_OG";
    case RequestType.CREATE_ROLE:
      return "CREATE_ROLE";
    case RequestType.ASSIGN_ROLE_TO_ENTITY:
      return "ASSIGN_ROLE_TO_ENTITY";
    case RequestType.CREATE_ENTITY:
      return "CREATE_ENTITY";
    case RequestType.RENAME_OG:
      return "RENAME_OG";
    case RequestType.RENAME_ROLE:
      return "RENAME_ROLE";
    case RequestType.EDIT_ENTITY:
      return "EDIT_ENTITY";
    case RequestType.DELETE_OG:
      return "DELETE_OG";
    case RequestType.DELETE_ROLE:
      return "DELETE_ROLE";
    case RequestType.DELETE_ENTITY:
      return "DELETE_ENTITY";
    case RequestType.DISCONNECT_ROLE:
      return "DISCONNECT_ROLE";
    case RequestType.ADD_APPROVER:
      return "ADD_APPROVER";
    case RequestType.CHANGE_ROLE_HIERARCHY:
      return "CHANGE_ROLE_HIERARCHY";
    case RequestType.CREATE_ROLE_BULK:
      return "CREATE_ROLE_BULK";
    case RequestType.CHANGE_ROLE_HIERARCHY_BULK:
      return "CHANGE_ROLE_HIERARCHY_BULK";
    default:
      return "UNKNOWN";
  }
}

export enum RequestStatus {
  SUBMITTED = 0,
  DECLINED = 1,
  APPROVED_BY_COMMANDER = 2,
  APPROVED_BY_SECURITY = 3,
  IN_PROGRESS = 4,
  DONE = 5,
  FAILED = 6,
  UNRECOGNIZED = -1,
}

export function requestStatusFromJSON(object: any): RequestStatus {
  switch (object) {
    case 0:
    case "SUBMITTED":
      return RequestStatus.SUBMITTED;
    case 1:
    case "DECLINED":
      return RequestStatus.DECLINED;
    case 2:
    case "APPROVED_BY_COMMANDER":
      return RequestStatus.APPROVED_BY_COMMANDER;
    case 3:
    case "APPROVED_BY_SECURITY":
      return RequestStatus.APPROVED_BY_SECURITY;
    case 4:
    case "IN_PROGRESS":
      return RequestStatus.IN_PROGRESS;
    case 5:
    case "DONE":
      return RequestStatus.DONE;
    case 6:
    case "FAILED":
      return RequestStatus.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RequestStatus.UNRECOGNIZED;
  }
}

export function requestStatusToJSON(object: RequestStatus): string {
  switch (object) {
    case RequestStatus.SUBMITTED:
      return "SUBMITTED";
    case RequestStatus.DECLINED:
      return "DECLINED";
    case RequestStatus.APPROVED_BY_COMMANDER:
      return "APPROVED_BY_COMMANDER";
    case RequestStatus.APPROVED_BY_SECURITY:
      return "APPROVED_BY_SECURITY";
    case RequestStatus.IN_PROGRESS:
      return "IN_PROGRESS";
    case RequestStatus.DONE:
      return "DONE";
    case RequestStatus.FAILED:
      return "FAILED";
    default:
      return "UNKNOWN";
  }
}

export enum StageStatus {
  STAGE_UNKNOWN = 0,
  STAGE_WAITING_FOR_PUSH = 1,
  STAGE_WAITING_FOR_AD = 2,
  STAGE_NEED_RETRY = 3,
  STAGE_IN_PROGRESS = 4,
  STAGE_DONE = 5,
  STAGE_FAILED = 6,
  UNRECOGNIZED = -1,
}

export function stageStatusFromJSON(object: any): StageStatus {
  switch (object) {
    case 0:
    case "STAGE_UNKNOWN":
      return StageStatus.STAGE_UNKNOWN;
    case 1:
    case "STAGE_WAITING_FOR_PUSH":
      return StageStatus.STAGE_WAITING_FOR_PUSH;
    case 2:
    case "STAGE_WAITING_FOR_AD":
      return StageStatus.STAGE_WAITING_FOR_AD;
    case 3:
    case "STAGE_NEED_RETRY":
      return StageStatus.STAGE_NEED_RETRY;
    case 4:
    case "STAGE_IN_PROGRESS":
      return StageStatus.STAGE_IN_PROGRESS;
    case 5:
    case "STAGE_DONE":
      return StageStatus.STAGE_DONE;
    case 6:
    case "STAGE_FAILED":
      return StageStatus.STAGE_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StageStatus.UNRECOGNIZED;
  }
}

export function stageStatusToJSON(object: StageStatus): string {
  switch (object) {
    case StageStatus.STAGE_UNKNOWN:
      return "STAGE_UNKNOWN";
    case StageStatus.STAGE_WAITING_FOR_PUSH:
      return "STAGE_WAITING_FOR_PUSH";
    case StageStatus.STAGE_WAITING_FOR_AD:
      return "STAGE_WAITING_FOR_AD";
    case StageStatus.STAGE_NEED_RETRY:
      return "STAGE_NEED_RETRY";
    case StageStatus.STAGE_IN_PROGRESS:
      return "STAGE_IN_PROGRESS";
    case StageStatus.STAGE_DONE:
      return "STAGE_DONE";
    case StageStatus.STAGE_FAILED:
      return "STAGE_FAILED";
    default:
      return "UNKNOWN";
  }
}

export enum Decision {
  DECISION_UNKNOWN = 0,
  APPROVED = 1,
  DENIED = 2,
  UNRECOGNIZED = -1,
}

export function decisionFromJSON(object: any): Decision {
  switch (object) {
    case 0:
    case "DECISION_UNKNOWN":
      return Decision.DECISION_UNKNOWN;
    case 1:
    case "APPROVED":
      return Decision.APPROVED;
    case 2:
    case "DENIED":
      return Decision.DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Decision.UNRECOGNIZED;
  }
}

export function decisionToJSON(object: Decision): string {
  switch (object) {
    case Decision.DECISION_UNKNOWN:
      return "DECISION_UNKNOWN";
    case Decision.APPROVED:
      return "APPROVED";
    case Decision.DENIED:
      return "DENIED";
    default:
      return "UNKNOWN";
  }
}

export enum PersonTypeInRequest {
  SUBMITTER = 0,
  COMMANDER_APPROVER = 1,
  SECURITY_APPROVER = 2,
  SUPER_SECURITY_APPROVER = 3,
  APPROVER = 4,
  UNRECOGNIZED = -1,
}

export function personTypeInRequestFromJSON(object: any): PersonTypeInRequest {
  switch (object) {
    case 0:
    case "SUBMITTER":
      return PersonTypeInRequest.SUBMITTER;
    case 1:
    case "COMMANDER_APPROVER":
      return PersonTypeInRequest.COMMANDER_APPROVER;
    case 2:
    case "SECURITY_APPROVER":
      return PersonTypeInRequest.SECURITY_APPROVER;
    case 3:
    case "SUPER_SECURITY_APPROVER":
      return PersonTypeInRequest.SUPER_SECURITY_APPROVER;
    case 4:
    case "APPROVER":
      return PersonTypeInRequest.APPROVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PersonTypeInRequest.UNRECOGNIZED;
  }
}

export function personTypeInRequestToJSON(object: PersonTypeInRequest): string {
  switch (object) {
    case PersonTypeInRequest.SUBMITTER:
      return "SUBMITTER";
    case PersonTypeInRequest.COMMANDER_APPROVER:
      return "COMMANDER_APPROVER";
    case PersonTypeInRequest.SECURITY_APPROVER:
      return "SECURITY_APPROVER";
    case PersonTypeInRequest.SUPER_SECURITY_APPROVER:
      return "SUPER_SECURITY_APPROVER";
    case PersonTypeInRequest.APPROVER:
      return "APPROVER";
    default:
      return "UNKNOWN";
  }
}

export enum PersonInfoType {
  ID = 0,
  IDENTIFIER = 1,
  UNRECOGNIZED = -1,
}

export function personInfoTypeFromJSON(object: any): PersonInfoType {
  switch (object) {
    case 0:
    case "ID":
      return PersonInfoType.ID;
    case 1:
    case "IDENTIFIER":
      return PersonInfoType.IDENTIFIER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PersonInfoType.UNRECOGNIZED;
  }
}

export function personInfoTypeToJSON(object: PersonInfoType): string {
  switch (object) {
    case PersonInfoType.ID:
      return "ID";
    case PersonInfoType.IDENTIFIER:
      return "IDENTIFIER";
    default:
      return "UNKNOWN";
  }
}

export enum ApprovementStatus {
  COMMANDER_APPROVE = 0,
  SECURITY_APPROVE = 1,
  SUPER_SECURITY_APPROVE = 2,
  ANY = 3,
  UNRECOGNIZED = -1,
}

export function approvementStatusFromJSON(object: any): ApprovementStatus {
  switch (object) {
    case 0:
    case "COMMANDER_APPROVE":
      return ApprovementStatus.COMMANDER_APPROVE;
    case 1:
    case "SECURITY_APPROVE":
      return ApprovementStatus.SECURITY_APPROVE;
    case 2:
    case "SUPER_SECURITY_APPROVE":
      return ApprovementStatus.SUPER_SECURITY_APPROVE;
    case 3:
    case "ANY":
      return ApprovementStatus.ANY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApprovementStatus.UNRECOGNIZED;
  }
}

export function approvementStatusToJSON(object: ApprovementStatus): string {
  switch (object) {
    case ApprovementStatus.COMMANDER_APPROVE:
      return "COMMANDER_APPROVE";
    case ApprovementStatus.SECURITY_APPROVE:
      return "SECURITY_APPROVE";
    case ApprovementStatus.SUPER_SECURITY_APPROVE:
      return "SUPER_SECURITY_APPROVE";
    case ApprovementStatus.ANY:
      return "ANY";
    default:
      return "UNKNOWN";
  }
}

export enum ErrorType {
  UNKNOWN_STAGE = 0,
  KARTOFFEL_ERROR = 1,
  AD_ERROR = 2,
  UNRECOGNIZED = -1,
}

export function errorTypeFromJSON(object: any): ErrorType {
  switch (object) {
    case 0:
    case "UNKNOWN_STAGE":
      return ErrorType.UNKNOWN_STAGE;
    case 1:
    case "KARTOFFEL_ERROR":
      return ErrorType.KARTOFFEL_ERROR;
    case 2:
    case "AD_ERROR":
      return ErrorType.AD_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorType.UNRECOGNIZED;
  }
}

export function errorTypeToJSON(object: ErrorType): string {
  switch (object) {
    case ErrorType.UNKNOWN_STAGE:
      return "UNKNOWN_STAGE";
    case ErrorType.KARTOFFEL_ERROR:
      return "KARTOFFEL_ERROR";
    case ErrorType.AD_ERROR:
      return "AD_ERROR";
    default:
      return "UNKNOWN";
  }
}

/** 1.CreateRole */
export interface CreateRoleReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: CreateRoleKartoffelParams | undefined;
  adParams: CreateRoleADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  isPartOfBulk?: boolean | undefined;
  bulkRequestId?: string | undefined;
  rowNumber?: string | undefined;
}

export interface CreateRoleRes {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: CreateRoleKartoffelParams | undefined;
  adParams: CreateRoleADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  isPartOfBulk: boolean;
  bulkRequestId: string;
  rowNumber?: string | undefined;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 2.CreateOG */
export interface CreateOGReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: CreateOGKartoffelParams | undefined;
  adParams: CreateOGADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface CreateOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateOGKartoffelParams | undefined;
  adParams: CreateOGADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 3.CreateEntity */
export interface CreateEntityReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: CreateEntityKartoffelParams | undefined;
  adParams: CreateEntityADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface CreateEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateEntityKartoffelParams | undefined;
  adParams: CreateEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 4.CreateNewApproverRequest */
export interface CreateNewApproverReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  additionalParams?: AdditionalParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface CreateNewApproverRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  additionalParams: AdditionalParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 5.RenameOGRequest */
export interface RenameOGReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: RenameOGKartoffelParams | undefined;
  adParams: RenameOGADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface RenameOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: RenameOGKartoffelParams | undefined;
  adParams: RenameOGADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 6.RenameRoleRequest */
export interface RenameRoleReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: RenameRoleKartoffelParams | undefined;
  adParams: RenameRoleADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface RenameRoleRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: RenameRoleKartoffelParams | undefined;
  adParams: RenameRoleADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 7.EditEntityRequest */
export interface EditEntityReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: EditEntityKartoffelParams | undefined;
  adParams: EditEntityADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface EditEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: EditEntityKartoffelParams | undefined;
  adParams: EditEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 8.DeleteOGRequest */
export interface DeleteOGReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: DeleteOGKartoffelParams | undefined;
  adParams: DeleteOGADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface DeleteOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DeleteOGKartoffelParams | undefined;
  adParams: DeleteOGADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 9.DeleteRoleRequest */
export interface DeleteRoleReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: DeleteRoleKartoffelParams | undefined;
  adParams: DeleteRoleADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface DeleteRoleRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DeleteRoleKartoffelParams | undefined;
  adParams: DeleteRoleADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 10.DeleteEntityRequest */
export interface DeleteEntityReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: DeleteEntityKartoffelParams | undefined;
  adParams: DeleteEntityADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface DeleteEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DeleteEntityKartoffelParams | undefined;
  adParams: DeleteEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 11.AssignRoleToEntityRequest */
export interface AssignRoleToEntityReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: AssignRoleToEntityKartoffelParams | undefined;
  adParams: AssignRoleToEntityADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface AssignRoleToEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: AssignRoleToEntityKartoffelParams | undefined;
  adParams: AssignRoleToEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 12.DisconectRoleFromEntityRequest */
export interface DisconectRoleFromEntityReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: DisconectRoleFromEntityKartoffelParams | undefined;
  adParams: DisconectRoleFromEntityADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
}

export interface DisconectRoleFromEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DisconectRoleFromEntityKartoffelParams | undefined;
  adParams: DisconectRoleFromEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 13.ChangeHierarchyToRoleRequest */
export interface ChangeRoleHierarchyReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams: ChangeRoleHierarchyKartoffelParams | undefined;
  adParams: ChangeRoleHierarchyADParams | undefined;
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  isPartOfBulk: boolean;
  bulkRequestId: string;
  rowNumber?: string | undefined;
}

export interface ChangeRoleHierarchyRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: ChangeRoleHierarchyKartoffelParams | undefined;
  adParams: ChangeRoleHierarchyADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  isPartOfBulk: boolean;
  bulkRequestId: string;
  rowNumber?: string | undefined;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

/** 14.CreateRoleBulkRequest */
export interface CreateRoleBulkReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  requestIds: string[];
  rowErrors: RowError[];
  excelFilePath: string;
  kartoffelParams: CreateRoleBulkKartoffelParams | undefined;
  adParams: CreateRoleBulkADParams | undefined;
}

export interface CreateRoleBulkRes {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  requestIds: string[];
  rowErrors: RowError[];
  excelFilePath: string;
  kartoffelParams: CreateRoleBulkKartoffelParams | undefined;
  adParams: CreateRoleBulkADParams | undefined;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

export interface CreateRoleBulkKartoffelParams {
  /** The same for all the rows */
  directGroup: string;
  unit: string;
}

export interface CreateRoleBulkADParams {
  /** The same for all the rows */
  ouDisplayName: string;
}

/** 15.ChangeRoleHierarchyBulkRequest */
export interface ChangeRoleHierarchyBulkReq {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  requestIds: string[];
  excelFilePath: string;
  kartoffelParams: ChangeRoleHierarchyBulkKartoffelParams | undefined;
  adParams: ChangeRoleHierarchyBulkADParams | undefined;
}

export interface ChangeRoleHierarchyBulkRes {
  submittedBy: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  comments?: string | undefined;
  approversComments?: string | undefined;
  due?: number | undefined;
  requestIds: string[];
  excelFilePath: string;
  kartoffelParams: ChangeRoleHierarchyBulkKartoffelParams | undefined;
  adParams: ChangeRoleHierarchyBulkADParams | undefined;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

export interface ChangeRoleHierarchyBulkKartoffelParams {
  directGroup: string;
}

export interface ChangeRoleHierarchyBulkADParams {
  ouDisplayName?: string | undefined;
}

/** 1.CreateRoleRequest */
export interface CreateRoleKartoffelParams {
  /** for role */
  jobTitle: string;
  /** groupId of direct father */
  directGroup: string;
  /** T154514... generated automatically by tea-service if not given */
  roleId?: string | undefined;
  /** clearance of the role */
  clearance: string;
  unit?: string | undefined;
  /** forDigitalIdentity */
  type: string;
  /** always oneTree */
  source: string;
  /** T154514... generated automatically by tea-service if not given */
  uniqueId?: string | undefined;
  /** T154514... generated automatically by tea-service if not given */
  mail?: string | undefined;
  /** true, if the role is unoccupied */
  isRoleAttachable: boolean;
  roleEntityType?: string | undefined;
}

export interface CreateRoleADParams {
  /** T154514... generated automatically by tea-service if not given */
  samAccountName: string;
  /** Role's full hierarchy */
  ouDisplayName: string;
  /** name of the role */
  jobTitle: string;
}

/** 2.CreateOGRequest */
export interface CreateOGKartoffelParams {
  name: string;
  parent: string;
  source: string;
}

export interface CreateOGADParams {
  ouDisplayName: string;
  ouName: string;
  name: string;
}

/** 3.CreateEntityRequest */
export interface CreateEntityKartoffelParams {
  firstName: string;
  lastName: string;
  identityCard: string;
  personalNumber: string;
  serviceType: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  entityType: string;
}

/** NO PARAMETERS NEEDED */
export interface CreateEntityADParams {}

/** 4.CreateNewApproverRequest */
export interface AdditionalParams {
  entityId: string;
  displayName: string;
  domainUsers: string[];
  akaUnit: string;
  type: ApproverType;
}

/** 5.RenameOGRequest */
export interface RenameOGKartoffelParams {
  id: string;
  name: string;
}

export interface RenameOGADParams {
  ouDisplayName: string;
  oldOuName: string;
  newOuName: string;
}

/** 6.RenameRoleRequest */
export interface RenameRoleKartoffelParams {
  jobTitle: string;
  roleId: string;
}

export interface RenameRoleADParams {
  samAccountName: string;
  jobTitle: string;
}

/** 7.EditEntityRequest */
export interface EditEntityKartoffelParams {
  id: string;
  firstName: string;
  lastName: string;
  identityCard?: string | undefined;
  personalNumber: string;
  serviceType: string;
  phone: string[];
  mobilePhone: string[];
  address: string;
  clearance: string;
  sex: string;
  birthdate: number;
  entityType: string;
}

export interface EditEntityADParams {
  samAccountName: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

/** 8.DeleteOGRequest */
export interface DeleteOGKartoffelParams {
  id: string;
}

export interface DeleteOGADParams {
  ouDisplayName: string;
  ouName: string;
  name: string;
}

/** 9.DeleteRoleRequest */
export interface DeleteRoleKartoffelParams {
  roleId: string;
  uniqueId: string;
}

export interface DeleteRoleADParams {
  samAccountName: string;
}

/** 10.DeleteEntityRequest */
export interface DeleteEntityKartoffelParams {
  id: string;
}

/** NO PARAMETERS NEEDED */
export interface DeleteEntityADParams {}

/** 11.AssignRoleToEntityRequest */
export interface AssignRoleToEntityKartoffelParams {
  id: string;
  uniqueId: string;
  needDisconnect: boolean;
}

export interface AssignRoleToEntityADParams {
  oldSAMAccountName: string;
  newSAMAccountName: string;
  upn?: string | undefined;
  firstName: string;
  lastName: string;
  fullName: string;
  rank: string;
  roleSerialCode: string;
}

/** 12.DisconnectRoleFromEntityRequest */
export interface DisconectRoleFromEntityKartoffelParams {
  id: string;
  uniqueId: string;
}

export interface DisconectRoleFromEntityADParams {
  samAccountName: string;
}

/** 13.ChangeHierarchyToRoleRequest */
export interface ChangeRoleHierarchyKartoffelParams {
  roleId: string;
  directGroup: string;
  jobTitle?: string | undefined;
}

export interface ChangeRoleHierarchyADParams {
  samAccountName?: string | undefined;
  ouDisplayName?: string | undefined;
  jobTitle?: string | undefined;
}

export interface SyncBulkRequestReq {
  id: string;
}

export interface UpdateReq {
  id: string;
  requestProperties: UpdateReqProperties | undefined;
}

export interface UpdateReqProperties {
  submittedBy?: EntityMin | undefined;
  status?: RequestStatus | undefined;
  commanderDecision?: ApproverDecision | undefined;
  securityDecision?: ApproverDecision | undefined;
  superSecurityDecision?: ApproverDecision | undefined;
  kartoffelStatus?: KartoffelStatus | undefined;
  adStatus?: ADStatus | undefined;
  kartoffelParams?: KartoffelParams | undefined;
  adParams?: ADParams | undefined;
  due?: number | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  isPartOfBulk?: boolean | undefined;
  bulkRequestId?: string | undefined;
  requestIds: string[];
  rowNumber?: string | undefined;
  rowErrors: RowError[];
  excelFilePath?: string | undefined;
}

/** UpdateKartoffelStatus */
export interface UpdateKartoffelStatusReq {
  requestId: string;
  status: StageStatus;
  message?: string | undefined;
  createdId?: string | undefined;
  failedRetries?: number | undefined;
}

/** UpdateADStatus */
export interface UpdateADStatusReq {
  requestId: string;
  status: StageStatus;
  message: string;
  failedRetries?: number | undefined;
}

/** DeleteRequest */
export interface DeleteReq {
  id: string;
}

/** GetRequestsByPerson */
export interface GetRequestsByPersonReq {
  id: string;
  personType: PersonTypeInRequest;
  personInfoType: PersonInfoType;
  from: number;
  to: number;
  approvementStatus?: ApprovementStatus | undefined;
}

/** GetRequestBySerialNumber */
export interface GetRequestBySerialNumberReq {
  serialNumber: string;
}

/** GetAllRequests */
export interface GetAllRequestsReq {
  from: number;
  to: number;
  approvementStatus?: ApprovementStatus | undefined;
}

/** GetRequestById */
export interface GetRequestByIdReq {
  id: string;
}

/** SearchRequestsByDisplayNameReq */
export interface SearchRequestsByDisplayNameReq {
  displayName: string;
  personType: PersonTypeInRequest;
  searcherId?: string | undefined;
  searcherType?: PersonTypeInRequest | undefined;
  from: number;
  to: number;
}

/** CanPushToKartoffelQueue, CanPushToADQueue */
export interface CanPushToQueueReq {
  id: string;
}

export interface CanPushToQueueRes {
  canPushToQueue: boolean;
}

/** IncrementKartoffelRetries, IncrementADRetries */
export interface IncrementRetriesReq {
  id: string;
}

/** UpdateCommanderDecision, UpdateSecurityDecision, UpdateSuperSecurityDecision */
export interface UpdateApproverDecisionReq {
  id: string;
  approverDecision: ApproverDecision | undefined;
  approverType: PersonTypeInRequest;
}

/** GetRequestsInProgressByDue, GetRequestIdsInProgressByDue */
export interface GetRequestsInProgressByDueReq {
  due: number;
}

/** UpdateCommanders, UpdateSecurityApprovers */
export interface UpdateApproversReq {
  id: string;
  approvers: EntityMin[];
}

/** IsRequestApproved */
export interface IsRequestApprovedReq {
  id: string;
}

export interface IsRequestApprovedRes {
  isRequestApproved: boolean;
}

export interface PushErrorReq {
  id: string;
  rowNumber: string;
  error: string;
  errorType: ErrorType;
}

/** ---------------------------------------------Other Objects------------------------------------------------------------ */
export interface RequestIdArray {
  requestIds: string[];
  count: number;
}

export interface EntityMin {
  id: string;
  displayName: string;
  identityCard: string;
  personalNumber: string;
}

export interface SuccessMessage {
  success: boolean;
  message: string;
}

export interface ApproverDecision {
  approver: EntityMin | undefined;
  decision: Decision;
  reason?: string | undefined;
  date?: number | undefined;
}

export interface KartoffelStatus {
  status: StageStatus;
  message: string;
  createdId?: string | undefined;
  failedRetries: number;
}

export interface ADStatus {
  status: StageStatus;
  message: string;
  failedRetries: number;
}

export interface RequestArray {
  requests: Request[];
  totalCount: number;
}

export interface RowError {
  rowNumber: string;
  error: string;
  errorType: ErrorType;
}

export interface KartoffelParams {
  /** CreateOG */
  name?: string | undefined;
  parent?: string | undefined;
  /** for almost all requests */
  source?: string | undefined;
  /** for role */
  jobTitle?: string | undefined;
  directGroup?: string | undefined;
  roleId?: string | undefined;
  unit?: string | undefined;
  /** forDigitalIdentity */
  type?: string | undefined;
  /** string source = 2; */
  uniqueId?: string | undefined;
  mail?: string | undefined;
  isRoleAttachable?: boolean | undefined;
  /** AssignRoleToEntity, same as changing role to entity */
  id?: string | undefined;
  /** string uniqueId = 8; */
  needDisconnect: boolean;
  /** CreateEntity */
  firstName?: string | undefined;
  lastName?: string | undefined;
  identityCard?: string | undefined;
  personalNumber?: string | undefined;
  serviceType?: string | undefined;
  phone: string[];
  mobilePhone: string[];
  address?: string | undefined;
  /** for createRole too */
  clearance?: string | undefined;
  sex?: string | undefined;
  birthdate?: number | undefined;
  entityType?: string | undefined;
  roleEntityType?: string | undefined;
}

export interface ADParams {
  /** CreateOG */
  ouDisplayName?: string | undefined;
  ouName?: string | undefined;
  name?: string | undefined;
  /** CreateRole */
  samAccountName?: string | undefined;
  /** string ouDisplayName = ; */
  jobTitle?: string | undefined;
  /** AssignRoleToEntity */
  oldSAMAccountName?: string | undefined;
  newSAMAccountName?: string | undefined;
  upn?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  fullName?: string | undefined;
  rank?: string | undefined;
  /** CreateEntity - nothing */
  roleSerialCode?: string | undefined;
  /**
   * RenameOG
   * string ouDisplayName = ;
   */
  oldName?: string | undefined;
  newName?: string | undefined;
  /**
   * RenameRole
   * string samAccountName = ;
   */
  newJobTitle?: string | undefined;
}

export interface RequestReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams?: KartoffelParams | undefined;
  adParams?: ADParams | undefined;
  additionalParams?: AdditionalParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
  isPartOfBulk?: boolean | undefined;
  bulkRequestId?: string | undefined;
  requestIds: string[];
  rowNumber?: string | undefined;
  rowErrors: RowError[];
  excelFilePath?: string | undefined;
}

export interface Request {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  superSecurityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams?: KartoffelParams | undefined;
  additionalParams?: AdditionalParams | undefined;
  adParams?: ADParams | undefined;
  comments: string;
  approversComments: string;
  due: number;
  isPartOfBulk?: boolean | undefined;
  bulkRequestId?: string | undefined;
  requestIds: string[];
  rowNumber?: string | undefined;
  rowErrors: RowError[];
  excelFilePath?: string | undefined;
  id: string;
  createdAt: number;
  updatedAt: number;
  type: RequestType;
  serialNumber: string;
  needSecurityDecision: boolean;
  needSuperSecurityDecision: boolean;
}

const baseCreateRoleReq: object = {};

export const CreateRoleReq = {
  encode(
    message: CreateRoleReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    if (message.isPartOfBulk !== undefined) {
      writer.uint32(128).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== undefined) {
      writer.uint32(138).string(message.bulkRequestId);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(146).string(message.rowNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleReq } as CreateRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.isPartOfBulk = reader.bool();
          break;
        case 17:
          message.bulkRequestId = reader.string();
          break;
        case 18:
          message.rowNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleReq {
    const message = { ...baseCreateRoleReq } as CreateRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    return message;
  },

  toJSON(message: CreateRoleReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleReq>): CreateRoleReq {
    const message = { ...baseCreateRoleReq } as CreateRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    return message;
  },
};

const baseCreateRoleRes: object = {
  isPartOfBulk: false,
  bulkRequestId: "",
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const CreateRoleRes = {
  encode(
    message: CreateRoleRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    if (message.isPartOfBulk === true) {
      writer.uint32(128).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== "") {
      writer.uint32(138).string(message.bulkRequestId);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(146).string(message.rowNumber);
    }
    if (message.id !== "") {
      writer.uint32(154).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(160).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(168).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(176).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(186).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(192).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(200).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleRes } as CreateRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.isPartOfBulk = reader.bool();
          break;
        case 17:
          message.bulkRequestId = reader.string();
          break;
        case 18:
          message.rowNumber = reader.string();
          break;
        case 19:
          message.id = reader.string();
          break;
        case 20:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.type = reader.int32() as any;
          break;
        case 23:
          message.serialNumber = reader.string();
          break;
        case 24:
          message.needSecurityDecision = reader.bool();
          break;
        case 25:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleRes {
    const message = { ...baseCreateRoleRes } as CreateRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: CreateRoleRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleRes>): CreateRoleRes {
    const message = { ...baseCreateRoleRes } as CreateRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseCreateOGReq: object = {};

export const CreateOGReq = {
  encode(
    message: CreateOGReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGReq } as CreateOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOGReq {
    const message = { ...baseCreateOGReq } as CreateOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: CreateOGReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOGReq>): CreateOGReq {
    const message = { ...baseCreateOGReq } as CreateOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseCreateOGRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const CreateOGRes = {
  encode(
    message: CreateOGRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGRes } as CreateOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOGRes {
    const message = { ...baseCreateOGRes } as CreateOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: CreateOGRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOGRes>): CreateOGRes {
    const message = { ...baseCreateOGRes } as CreateOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseCreateEntityReq: object = {};

export const CreateEntityReq = {
  encode(
    message: CreateEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityReq } as CreateEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntityReq {
    const message = { ...baseCreateEntityReq } as CreateEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: CreateEntityReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntityReq>): CreateEntityReq {
    const message = { ...baseCreateEntityReq } as CreateEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseCreateEntityRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const CreateEntityRes = {
  encode(
    message: CreateEntityRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityRes } as CreateEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = CreateEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = CreateEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntityRes {
    const message = { ...baseCreateEntityRes } as CreateEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: CreateEntityRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateEntityRes>): CreateEntityRes {
    const message = { ...baseCreateEntityRes } as CreateEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseCreateNewApproverReq: object = {};

export const CreateNewApproverReq = {
  encode(
    message: CreateNewApproverReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(82).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(90).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(96).int64(message.due);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNewApproverReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNewApproverReq } as CreateNewApproverReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.comments = reader.string();
          break;
        case 11:
          message.approversComments = reader.string();
          break;
        case 12:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewApproverReq {
    const message = { ...baseCreateNewApproverReq } as CreateNewApproverReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromJSON(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: CreateNewApproverReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.additionalParams !== undefined &&
      (obj.additionalParams = message.additionalParams
        ? AdditionalParams.toJSON(message.additionalParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateNewApproverReq>): CreateNewApproverReq {
    const message = { ...baseCreateNewApproverReq } as CreateNewApproverReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromPartial(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseCreateNewApproverRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const CreateNewApproverRes = {
  encode(
    message: CreateNewApproverRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(82).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(90).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(96).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(106).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(112).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(120).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(128).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(138).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(144).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(152).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateNewApproverRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateNewApproverRes } as CreateNewApproverRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.comments = reader.string();
          break;
        case 11:
          message.approversComments = reader.string();
          break;
        case 12:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.id = reader.string();
          break;
        case 14:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.type = reader.int32() as any;
          break;
        case 17:
          message.serialNumber = reader.string();
          break;
        case 18:
          message.needSecurityDecision = reader.bool();
          break;
        case 19:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateNewApproverRes {
    const message = { ...baseCreateNewApproverRes } as CreateNewApproverRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromJSON(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: CreateNewApproverRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.additionalParams !== undefined &&
      (obj.additionalParams = message.additionalParams
        ? AdditionalParams.toJSON(message.additionalParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateNewApproverRes>): CreateNewApproverRes {
    const message = { ...baseCreateNewApproverRes } as CreateNewApproverRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromPartial(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseRenameOGReq: object = {};

export const RenameOGReq = {
  encode(
    message: RenameOGReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGReq } as RenameOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = RenameOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = RenameOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameOGReq {
    const message = { ...baseRenameOGReq } as RenameOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: RenameOGReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? RenameOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? RenameOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameOGReq>): RenameOGReq {
    const message = { ...baseRenameOGReq } as RenameOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseRenameOGRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const RenameOGRes = {
  encode(
    message: RenameOGRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGRes } as RenameOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = RenameOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = RenameOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameOGRes {
    const message = { ...baseRenameOGRes } as RenameOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: RenameOGRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? RenameOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? RenameOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameOGRes>): RenameOGRes {
    const message = { ...baseRenameOGRes } as RenameOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseRenameRoleReq: object = {};

export const RenameRoleReq = {
  encode(
    message: RenameRoleReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleReq } as RenameRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = RenameRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = RenameRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameRoleReq {
    const message = { ...baseRenameRoleReq } as RenameRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: RenameRoleReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? RenameRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? RenameRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameRoleReq>): RenameRoleReq {
    const message = { ...baseRenameRoleReq } as RenameRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseRenameRoleRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const RenameRoleRes = {
  encode(
    message: RenameRoleRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleRes } as RenameRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = RenameRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = RenameRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameRoleRes {
    const message = { ...baseRenameRoleRes } as RenameRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: RenameRoleRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? RenameRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? RenameRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameRoleRes>): RenameRoleRes {
    const message = { ...baseRenameRoleRes } as RenameRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = RenameRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = RenameRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseEditEntityReq: object = {};

export const EditEntityReq = {
  encode(
    message: EditEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      EditEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      EditEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditEntityReq } as EditEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = EditEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = EditEntityADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditEntityReq {
    const message = { ...baseEditEntityReq } as EditEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = EditEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = EditEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: EditEntityReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? EditEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? EditEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<EditEntityReq>): EditEntityReq {
    const message = { ...baseEditEntityReq } as EditEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = EditEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = EditEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseEditEntityRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const EditEntityRes = {
  encode(
    message: EditEntityRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      EditEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      EditEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditEntityRes } as EditEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = EditEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = EditEntityADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditEntityRes {
    const message = { ...baseEditEntityRes } as EditEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = EditEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = EditEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: EditEntityRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? EditEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? EditEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<EditEntityRes>): EditEntityRes {
    const message = { ...baseEditEntityRes } as EditEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = EditEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = EditEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseDeleteOGReq: object = {};

export const DeleteOGReq = {
  encode(
    message: DeleteOGReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGReq } as DeleteOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOGReq {
    const message = { ...baseDeleteOGReq } as DeleteOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: DeleteOGReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOGReq>): DeleteOGReq {
    const message = { ...baseDeleteOGReq } as DeleteOGReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseDeleteOGRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const DeleteOGRes = {
  encode(
    message: DeleteOGRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteOGADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGRes } as DeleteOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteOGADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOGRes {
    const message = { ...baseDeleteOGRes } as DeleteOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteOGKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteOGADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: DeleteOGRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteOGKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteOGADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOGRes>): DeleteOGRes {
    const message = { ...baseDeleteOGRes } as DeleteOGRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteOGKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteOGADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseDeleteRoleReq: object = {};

export const DeleteRoleReq = {
  encode(
    message: DeleteRoleReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleReq } as DeleteRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoleReq {
    const message = { ...baseDeleteRoleReq } as DeleteRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: DeleteRoleReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteRoleReq>): DeleteRoleReq {
    const message = { ...baseDeleteRoleReq } as DeleteRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseDeleteRoleRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const DeleteRoleRes = {
  encode(
    message: DeleteRoleRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteRoleADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleRes } as DeleteRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteRoleADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoleRes {
    const message = { ...baseDeleteRoleRes } as DeleteRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteRoleKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteRoleADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: DeleteRoleRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteRoleKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteRoleADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteRoleRes>): DeleteRoleRes {
    const message = { ...baseDeleteRoleRes } as DeleteRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteRoleKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteRoleADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseDeleteEntityReq: object = {};

export const DeleteEntityReq = {
  encode(
    message: DeleteEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteEntityReq } as DeleteEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEntityReq {
    const message = { ...baseDeleteEntityReq } as DeleteEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: DeleteEntityReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteEntityReq>): DeleteEntityReq {
    const message = { ...baseDeleteEntityReq } as DeleteEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseDeleteEntityRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const DeleteEntityRes = {
  encode(
    message: DeleteEntityRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteEntityRes } as DeleteEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = DeleteEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = DeleteEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEntityRes {
    const message = { ...baseDeleteEntityRes } as DeleteEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: DeleteEntityRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DeleteEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DeleteEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteEntityRes>): DeleteEntityRes {
    const message = { ...baseDeleteEntityRes } as DeleteEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DeleteEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DeleteEntityADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseAssignRoleToEntityReq: object = {};

export const AssignRoleToEntityReq = {
  encode(
    message: AssignRoleToEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      AssignRoleToEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      AssignRoleToEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssignRoleToEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssignRoleToEntityReq } as AssignRoleToEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = AssignRoleToEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = AssignRoleToEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignRoleToEntityReq {
    const message = { ...baseAssignRoleToEntityReq } as AssignRoleToEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = AssignRoleToEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = AssignRoleToEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: AssignRoleToEntityReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? AssignRoleToEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? AssignRoleToEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssignRoleToEntityReq>
  ): AssignRoleToEntityReq {
    const message = { ...baseAssignRoleToEntityReq } as AssignRoleToEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = AssignRoleToEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = AssignRoleToEntityADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseAssignRoleToEntityRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const AssignRoleToEntityRes = {
  encode(
    message: AssignRoleToEntityRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      AssignRoleToEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      AssignRoleToEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssignRoleToEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssignRoleToEntityRes } as AssignRoleToEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = AssignRoleToEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = AssignRoleToEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignRoleToEntityRes {
    const message = { ...baseAssignRoleToEntityRes } as AssignRoleToEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = AssignRoleToEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = AssignRoleToEntityADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: AssignRoleToEntityRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? AssignRoleToEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? AssignRoleToEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssignRoleToEntityRes>
  ): AssignRoleToEntityRes {
    const message = { ...baseAssignRoleToEntityRes } as AssignRoleToEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = AssignRoleToEntityKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = AssignRoleToEntityADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseDisconectRoleFromEntityReq: object = {};

export const DisconectRoleFromEntityReq = {
  encode(
    message: DisconectRoleFromEntityReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DisconectRoleFromEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DisconectRoleFromEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconectRoleFromEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconectRoleFromEntityReq,
    } as DisconectRoleFromEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams =
            DisconectRoleFromEntityKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 12:
          message.adParams = DisconectRoleFromEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconectRoleFromEntityReq {
    const message = {
      ...baseDisconectRoleFromEntityReq,
    } as DisconectRoleFromEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DisconectRoleFromEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DisconectRoleFromEntityADParams.fromJSON(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    return message;
  },

  toJSON(message: DisconectRoleFromEntityReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DisconectRoleFromEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DisconectRoleFromEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconectRoleFromEntityReq>
  ): DisconectRoleFromEntityReq {
    const message = {
      ...baseDisconectRoleFromEntityReq,
    } as DisconectRoleFromEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams =
        DisconectRoleFromEntityKartoffelParams.fromPartial(
          object.kartoffelParams
        );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DisconectRoleFromEntityADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    return message;
  },
};

const baseDisconectRoleFromEntityRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const DisconectRoleFromEntityRes = {
  encode(
    message: DisconectRoleFromEntityRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DisconectRoleFromEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DisconectRoleFromEntityADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconectRoleFromEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconectRoleFromEntityRes,
    } as DisconectRoleFromEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams =
            DisconectRoleFromEntityKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 12:
          message.adParams = DisconectRoleFromEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconectRoleFromEntityRes {
    const message = {
      ...baseDisconectRoleFromEntityRes,
    } as DisconectRoleFromEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = DisconectRoleFromEntityKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DisconectRoleFromEntityADParams.fromJSON(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: DisconectRoleFromEntityRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? DisconectRoleFromEntityKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? DisconectRoleFromEntityADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconectRoleFromEntityRes>
  ): DisconectRoleFromEntityRes {
    const message = {
      ...baseDisconectRoleFromEntityRes,
    } as DisconectRoleFromEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams =
        DisconectRoleFromEntityKartoffelParams.fromPartial(
          object.kartoffelParams
        );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = DisconectRoleFromEntityADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseChangeRoleHierarchyReq: object = {
  isPartOfBulk: false,
  bulkRequestId: "",
};

export const ChangeRoleHierarchyReq = {
  encode(
    message: ChangeRoleHierarchyReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      ChangeRoleHierarchyKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ChangeRoleHierarchyADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(120).int64(message.due);
    }
    if (message.isPartOfBulk === true) {
      writer.uint32(128).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== "") {
      writer.uint32(138).string(message.bulkRequestId);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(146).string(message.rowNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeRoleHierarchyReq } as ChangeRoleHierarchyReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = ChangeRoleHierarchyADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.isPartOfBulk = reader.bool();
          break;
        case 17:
          message.bulkRequestId = reader.string();
          break;
        case 18:
          message.rowNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyReq {
    const message = { ...baseChangeRoleHierarchyReq } as ChangeRoleHierarchyReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? ChangeRoleHierarchyKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ChangeRoleHierarchyADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyReq>
  ): ChangeRoleHierarchyReq {
    const message = { ...baseChangeRoleHierarchyReq } as ChangeRoleHierarchyReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    return message;
  },
};

const baseChangeRoleHierarchyRes: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  isPartOfBulk: false,
  bulkRequestId: "",
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const ChangeRoleHierarchyRes = {
  encode(
    message: ChangeRoleHierarchyRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      ChangeRoleHierarchyKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ChangeRoleHierarchyADParams.encode(
        message.adParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(106).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(114).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(120).int64(message.due);
    }
    if (message.isPartOfBulk === true) {
      writer.uint32(128).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== "") {
      writer.uint32(138).string(message.bulkRequestId);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(146).string(message.rowNumber);
    }
    if (message.id !== "") {
      writer.uint32(154).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(160).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(168).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(176).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(186).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(192).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(200).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChangeRoleHierarchyRes } as ChangeRoleHierarchyRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = ChangeRoleHierarchyADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.comments = reader.string();
          break;
        case 14:
          message.approversComments = reader.string();
          break;
        case 15:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.isPartOfBulk = reader.bool();
          break;
        case 17:
          message.bulkRequestId = reader.string();
          break;
        case 18:
          message.rowNumber = reader.string();
          break;
        case 19:
          message.id = reader.string();
          break;
        case 20:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 22:
          message.type = reader.int32() as any;
          break;
        case 23:
          message.serialNumber = reader.string();
          break;
        case 24:
          message.needSecurityDecision = reader.bool();
          break;
        case 25:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyRes {
    const message = { ...baseChangeRoleHierarchyRes } as ChangeRoleHierarchyRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? ChangeRoleHierarchyKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ChangeRoleHierarchyADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyRes>
  ): ChangeRoleHierarchyRes {
    const message = { ...baseChangeRoleHierarchyRes } as ChangeRoleHierarchyRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = false;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseCreateRoleBulkReq: object = { requestIds: "", excelFilePath: "" };

export const CreateRoleBulkReq = {
  encode(
    message: CreateRoleBulkReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(88).int64(message.due);
    }
    for (const v of message.requestIds) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.rowErrors) {
      RowError.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.excelFilePath !== "") {
      writer.uint32(114).string(message.excelFilePath);
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleBulkKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleBulkADParams.encode(
        message.adParams,
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleBulkReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleBulkReq } as CreateRoleBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.comments = reader.string();
          break;
        case 10:
          message.approversComments = reader.string();
          break;
        case 11:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.requestIds.push(reader.string());
          break;
        case 13:
          message.rowErrors.push(RowError.decode(reader, reader.uint32()));
          break;
        case 14:
          message.excelFilePath = reader.string();
          break;
        case 15:
          message.kartoffelParams = CreateRoleBulkKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.adParams = CreateRoleBulkADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleBulkReq {
    const message = { ...baseCreateRoleBulkReq } as CreateRoleBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromJSON(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleBulkKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleBulkADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    return message;
  },

  toJSON(message: CreateRoleBulkReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    if (message.rowErrors) {
      obj.rowErrors = message.rowErrors.map((e) =>
        e ? RowError.toJSON(e) : undefined
      );
    } else {
      obj.rowErrors = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateRoleBulkKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateRoleBulkADParams.toJSON(message.adParams)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleBulkReq>): CreateRoleBulkReq {
    const message = { ...baseCreateRoleBulkReq } as CreateRoleBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromPartial(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleBulkKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleBulkADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    return message;
  },
};

const baseCreateRoleBulkRes: object = {
  requestIds: "",
  excelFilePath: "",
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const CreateRoleBulkRes = {
  encode(
    message: CreateRoleBulkRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(88).int64(message.due);
    }
    for (const v of message.requestIds) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.rowErrors) {
      RowError.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.excelFilePath !== "") {
      writer.uint32(114).string(message.excelFilePath);
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleBulkKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleBulkADParams.encode(
        message.adParams,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(138).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(144).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(152).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(160).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(170).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(176).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(184).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleBulkRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleBulkRes } as CreateRoleBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.comments = reader.string();
          break;
        case 10:
          message.approversComments = reader.string();
          break;
        case 11:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.requestIds.push(reader.string());
          break;
        case 13:
          message.rowErrors.push(RowError.decode(reader, reader.uint32()));
          break;
        case 14:
          message.excelFilePath = reader.string();
          break;
        case 15:
          message.kartoffelParams = CreateRoleBulkKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.adParams = CreateRoleBulkADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.id = reader.string();
          break;
        case 18:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 20:
          message.type = reader.int32() as any;
          break;
        case 21:
          message.serialNumber = reader.string();
          break;
        case 22:
          message.needSecurityDecision = reader.bool();
          break;
        case 23:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleBulkRes {
    const message = { ...baseCreateRoleBulkRes } as CreateRoleBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromJSON(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleBulkKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleBulkADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: CreateRoleBulkRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    if (message.rowErrors) {
      obj.rowErrors = message.rowErrors.map((e) =>
        e ? RowError.toJSON(e) : undefined
      );
    } else {
      obj.rowErrors = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? CreateRoleBulkKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? CreateRoleBulkADParams.toJSON(message.adParams)
        : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleBulkRes>): CreateRoleBulkRes {
    const message = { ...baseCreateRoleBulkRes } as CreateRoleBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromPartial(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = CreateRoleBulkKartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = CreateRoleBulkADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseCreateRoleBulkKartoffelParams: object = { directGroup: "", unit: "" };

export const CreateRoleBulkKartoffelParams = {
  encode(
    message: CreateRoleBulkKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.directGroup !== "") {
      writer.uint32(10).string(message.directGroup);
    }
    if (message.unit !== "") {
      writer.uint32(18).string(message.unit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRoleBulkKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateRoleBulkKartoffelParams,
    } as CreateRoleBulkKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.directGroup = reader.string();
          break;
        case 2:
          message.unit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleBulkKartoffelParams {
    const message = {
      ...baseCreateRoleBulkKartoffelParams,
    } as CreateRoleBulkKartoffelParams;
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = String(object.unit);
    } else {
      message.unit = "";
    }
    return message;
  },

  toJSON(message: CreateRoleBulkKartoffelParams): unknown {
    const obj: any = {};
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.unit !== undefined && (obj.unit = message.unit);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateRoleBulkKartoffelParams>
  ): CreateRoleBulkKartoffelParams {
    const message = {
      ...baseCreateRoleBulkKartoffelParams,
    } as CreateRoleBulkKartoffelParams;
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    } else {
      message.unit = "";
    }
    return message;
  },
};

const baseCreateRoleBulkADParams: object = { ouDisplayName: "" };

export const CreateRoleBulkADParams = {
  encode(
    message: CreateRoleBulkADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== "") {
      writer.uint32(10).string(message.ouDisplayName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRoleBulkADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleBulkADParams } as CreateRoleBulkADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleBulkADParams {
    const message = { ...baseCreateRoleBulkADParams } as CreateRoleBulkADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = "";
    }
    return message;
  },

  toJSON(message: CreateRoleBulkADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateRoleBulkADParams>
  ): CreateRoleBulkADParams {
    const message = { ...baseCreateRoleBulkADParams } as CreateRoleBulkADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = "";
    }
    return message;
  },
};

const baseChangeRoleHierarchyBulkReq: object = {
  requestIds: "",
  excelFilePath: "",
};

export const ChangeRoleHierarchyBulkReq = {
  encode(
    message: ChangeRoleHierarchyBulkReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(88).int64(message.due);
    }
    for (const v of message.requestIds) {
      writer.uint32(98).string(v!);
    }
    if (message.excelFilePath !== "") {
      writer.uint32(106).string(message.excelFilePath);
    }
    if (message.kartoffelParams !== undefined) {
      ChangeRoleHierarchyBulkKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ChangeRoleHierarchyBulkADParams.encode(
        message.adParams,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyBulkReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyBulkReq,
    } as ChangeRoleHierarchyBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.comments = reader.string();
          break;
        case 10:
          message.approversComments = reader.string();
          break;
        case 11:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.requestIds.push(reader.string());
          break;
        case 13:
          message.excelFilePath = reader.string();
          break;
        case 14:
          message.kartoffelParams =
            ChangeRoleHierarchyBulkKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 15:
          message.adParams = ChangeRoleHierarchyBulkADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyBulkReq {
    const message = {
      ...baseChangeRoleHierarchyBulkReq,
    } as ChangeRoleHierarchyBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyBulkKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyBulkADParams.fromJSON(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyBulkReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? ChangeRoleHierarchyBulkKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ChangeRoleHierarchyBulkADParams.toJSON(message.adParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyBulkReq>
  ): ChangeRoleHierarchyBulkReq {
    const message = {
      ...baseChangeRoleHierarchyBulkReq,
    } as ChangeRoleHierarchyBulkReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams =
        ChangeRoleHierarchyBulkKartoffelParams.fromPartial(
          object.kartoffelParams
        );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyBulkADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    return message;
  },
};

const baseChangeRoleHierarchyBulkRes: object = {
  requestIds: "",
  excelFilePath: "",
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const ChangeRoleHierarchyBulkRes = {
  encode(
    message: ChangeRoleHierarchyBulkRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.comments !== undefined) {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== undefined) {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(88).int64(message.due);
    }
    for (const v of message.requestIds) {
      writer.uint32(98).string(v!);
    }
    if (message.excelFilePath !== "") {
      writer.uint32(106).string(message.excelFilePath);
    }
    if (message.kartoffelParams !== undefined) {
      ChangeRoleHierarchyBulkKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ChangeRoleHierarchyBulkADParams.encode(
        message.adParams,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(136).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(144).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(152).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(162).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(168).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(176).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyBulkRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyBulkRes,
    } as ChangeRoleHierarchyBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.comments = reader.string();
          break;
        case 10:
          message.approversComments = reader.string();
          break;
        case 11:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.requestIds.push(reader.string());
          break;
        case 13:
          message.excelFilePath = reader.string();
          break;
        case 14:
          message.kartoffelParams =
            ChangeRoleHierarchyBulkKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 15:
          message.adParams = ChangeRoleHierarchyBulkADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.type = reader.int32() as any;
          break;
        case 20:
          message.serialNumber = reader.string();
          break;
        case 21:
          message.needSecurityDecision = reader.bool();
          break;
        case 22:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyBulkRes {
    const message = {
      ...baseChangeRoleHierarchyBulkRes,
    } as ChangeRoleHierarchyBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = ChangeRoleHierarchyBulkKartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyBulkADParams.fromJSON(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyBulkRes): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? ChangeRoleHierarchyBulkKartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ChangeRoleHierarchyBulkADParams.toJSON(message.adParams)
        : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyBulkRes>
  ): ChangeRoleHierarchyBulkRes {
    const message = {
      ...baseChangeRoleHierarchyBulkRes,
    } as ChangeRoleHierarchyBulkRes;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = undefined;
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = "";
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams =
        ChangeRoleHierarchyBulkKartoffelParams.fromPartial(
          object.kartoffelParams
        );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ChangeRoleHierarchyBulkADParams.fromPartial(
        object.adParams
      );
    } else {
      message.adParams = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

const baseChangeRoleHierarchyBulkKartoffelParams: object = { directGroup: "" };

export const ChangeRoleHierarchyBulkKartoffelParams = {
  encode(
    message: ChangeRoleHierarchyBulkKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.directGroup !== "") {
      writer.uint32(10).string(message.directGroup);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyBulkKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyBulkKartoffelParams,
    } as ChangeRoleHierarchyBulkKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.directGroup = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyBulkKartoffelParams {
    const message = {
      ...baseChangeRoleHierarchyBulkKartoffelParams,
    } as ChangeRoleHierarchyBulkKartoffelParams;
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyBulkKartoffelParams): unknown {
    const obj: any = {};
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyBulkKartoffelParams>
  ): ChangeRoleHierarchyBulkKartoffelParams {
    const message = {
      ...baseChangeRoleHierarchyBulkKartoffelParams,
    } as ChangeRoleHierarchyBulkKartoffelParams;
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    return message;
  },
};

const baseChangeRoleHierarchyBulkADParams: object = {};

export const ChangeRoleHierarchyBulkADParams = {
  encode(
    message: ChangeRoleHierarchyBulkADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== undefined) {
      writer.uint32(10).string(message.ouDisplayName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyBulkADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyBulkADParams,
    } as ChangeRoleHierarchyBulkADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyBulkADParams {
    const message = {
      ...baseChangeRoleHierarchyBulkADParams,
    } as ChangeRoleHierarchyBulkADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyBulkADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyBulkADParams>
  ): ChangeRoleHierarchyBulkADParams {
    const message = {
      ...baseChangeRoleHierarchyBulkADParams,
    } as ChangeRoleHierarchyBulkADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = undefined;
    }
    return message;
  },
};

const baseCreateRoleKartoffelParams: object = {
  jobTitle: "",
  directGroup: "",
  clearance: "",
  type: "",
  source: "",
  isRoleAttachable: false,
};

export const CreateRoleKartoffelParams = {
  encode(
    message: CreateRoleKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobTitle !== "") {
      writer.uint32(10).string(message.jobTitle);
    }
    if (message.directGroup !== "") {
      writer.uint32(18).string(message.directGroup);
    }
    if (message.roleId !== undefined) {
      writer.uint32(26).string(message.roleId);
    }
    if (message.clearance !== "") {
      writer.uint32(34).string(message.clearance);
    }
    if (message.unit !== undefined) {
      writer.uint32(42).string(message.unit);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(58).string(message.source);
    }
    if (message.uniqueId !== undefined) {
      writer.uint32(66).string(message.uniqueId);
    }
    if (message.mail !== undefined) {
      writer.uint32(74).string(message.mail);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(80).bool(message.isRoleAttachable);
    }
    if (message.roleEntityType !== undefined) {
      writer.uint32(90).string(message.roleEntityType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateRoleKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateRoleKartoffelParams,
    } as CreateRoleKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobTitle = reader.string();
          break;
        case 2:
          message.directGroup = reader.string();
          break;
        case 3:
          message.roleId = reader.string();
          break;
        case 4:
          message.clearance = reader.string();
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.type = reader.string();
          break;
        case 7:
          message.source = reader.string();
          break;
        case 8:
          message.uniqueId = reader.string();
          break;
        case 9:
          message.mail = reader.string();
          break;
        case 10:
          message.isRoleAttachable = reader.bool();
          break;
        case 11:
          message.roleEntityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleKartoffelParams {
    const message = {
      ...baseCreateRoleKartoffelParams,
    } as CreateRoleKartoffelParams;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = String(object.unit);
    } else {
      message.unit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = undefined;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = String(object.roleEntityType);
    } else {
      message.roleEntityType = undefined;
    }
    return message;
  },

  toJSON(message: CreateRoleKartoffelParams): unknown {
    const obj: any = {};
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.unit !== undefined && (obj.unit = message.unit);
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    message.roleEntityType !== undefined &&
      (obj.roleEntityType = message.roleEntityType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateRoleKartoffelParams>
  ): CreateRoleKartoffelParams {
    const message = {
      ...baseCreateRoleKartoffelParams,
    } as CreateRoleKartoffelParams;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    } else {
      message.unit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = undefined;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = object.roleEntityType;
    } else {
      message.roleEntityType = undefined;
    }
    return message;
  },
};

const baseCreateRoleADParams: object = {
  samAccountName: "",
  ouDisplayName: "",
  jobTitle: "",
};

export const CreateRoleADParams = {
  encode(
    message: CreateRoleADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== "") {
      writer.uint32(10).string(message.samAccountName);
    }
    if (message.ouDisplayName !== "") {
      writer.uint32(18).string(message.ouDisplayName);
    }
    if (message.jobTitle !== "") {
      writer.uint32(26).string(message.jobTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleADParams } as CreateRoleADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        case 2:
          message.ouDisplayName = reader.string();
          break;
        case 3:
          message.jobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoleADParams {
    const message = { ...baseCreateRoleADParams } as CreateRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = "";
    }
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    return message;
  },

  toJSON(message: CreateRoleADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleADParams>): CreateRoleADParams {
    const message = { ...baseCreateRoleADParams } as CreateRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = "";
    }
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    return message;
  },
};

const baseCreateOGKartoffelParams: object = {
  name: "",
  parent: "",
  source: "",
};

export const CreateOGKartoffelParams = {
  encode(
    message: CreateOGKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(18).string(message.parent);
    }
    if (message.source !== "") {
      writer.uint32(26).string(message.source);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateOGKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateOGKartoffelParams,
    } as CreateOGKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parent = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOGKartoffelParams {
    const message = {
      ...baseCreateOGKartoffelParams,
    } as CreateOGKartoffelParams;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = String(object.parent);
    } else {
      message.parent = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    return message;
  },

  toJSON(message: CreateOGKartoffelParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.source !== undefined && (obj.source = message.source);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateOGKartoffelParams>
  ): CreateOGKartoffelParams {
    const message = {
      ...baseCreateOGKartoffelParams,
    } as CreateOGKartoffelParams;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    } else {
      message.parent = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    return message;
  },
};

const baseCreateOGADParams: object = {
  ouDisplayName: "",
  ouName: "",
  name: "",
};

export const CreateOGADParams = {
  encode(
    message: CreateOGADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== "") {
      writer.uint32(10).string(message.ouDisplayName);
    }
    if (message.ouName !== "") {
      writer.uint32(18).string(message.ouName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGADParams } as CreateOGADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        case 2:
          message.ouName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateOGADParams {
    const message = { ...baseCreateOGADParams } as CreateOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = "";
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = String(object.ouName);
    } else {
      message.ouName = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: CreateOGADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.ouName !== undefined && (obj.ouName = message.ouName);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateOGADParams>): CreateOGADParams {
    const message = { ...baseCreateOGADParams } as CreateOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = "";
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = object.ouName;
    } else {
      message.ouName = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseCreateEntityKartoffelParams: object = {
  firstName: "",
  lastName: "",
  identityCard: "",
  personalNumber: "",
  serviceType: "",
  phone: "",
  mobilePhone: "",
  address: "",
  clearance: "",
  sex: "",
  birthdate: 0,
  entityType: "",
};

export const CreateEntityKartoffelParams = {
  encode(
    message: CreateEntityKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.firstName !== "") {
      writer.uint32(10).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(18).string(message.lastName);
    }
    if (message.identityCard !== "") {
      writer.uint32(26).string(message.identityCard);
    }
    if (message.personalNumber !== "") {
      writer.uint32(34).string(message.personalNumber);
    }
    if (message.serviceType !== "") {
      writer.uint32(42).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(58).string(v!);
    }
    if (message.address !== "") {
      writer.uint32(66).string(message.address);
    }
    if (message.clearance !== "") {
      writer.uint32(74).string(message.clearance);
    }
    if (message.sex !== "") {
      writer.uint32(82).string(message.sex);
    }
    if (message.birthdate !== 0) {
      writer.uint32(88).int64(message.birthdate);
    }
    if (message.entityType !== "") {
      writer.uint32(98).string(message.entityType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateEntityKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseCreateEntityKartoffelParams,
    } as CreateEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstName = reader.string();
          break;
        case 2:
          message.lastName = reader.string();
          break;
        case 3:
          message.identityCard = reader.string();
          break;
        case 4:
          message.personalNumber = reader.string();
          break;
        case 5:
          message.serviceType = reader.string();
          break;
        case 6:
          message.phone.push(reader.string());
          break;
        case 7:
          message.mobilePhone.push(reader.string());
          break;
        case 8:
          message.address = reader.string();
          break;
        case 9:
          message.clearance = reader.string();
          break;
        case 10:
          message.sex = reader.string();
          break;
        case 11:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.entityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateEntityKartoffelParams {
    const message = {
      ...baseCreateEntityKartoffelParams,
    } as CreateEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(String(e));
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = Number(object.birthdate);
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    return message;
  },

  toJSON(message: CreateEntityKartoffelParams): unknown {
    const obj: any = {};
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    if (message.phone) {
      obj.phone = message.phone.map((e) => e);
    } else {
      obj.phone = [];
    }
    if (message.mobilePhone) {
      obj.mobilePhone = message.mobilePhone.map((e) => e);
    } else {
      obj.mobilePhone = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.sex !== undefined && (obj.sex = message.sex);
    message.birthdate !== undefined && (obj.birthdate = message.birthdate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CreateEntityKartoffelParams>
  ): CreateEntityKartoffelParams {
    const message = {
      ...baseCreateEntityKartoffelParams,
    } as CreateEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = object.birthdate;
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    return message;
  },
};

const baseCreateEntityADParams: object = {};

export const CreateEntityADParams = {
  encode(
    _: CreateEntityADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateEntityADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityADParams } as CreateEntityADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateEntityADParams {
    const message = { ...baseCreateEntityADParams } as CreateEntityADParams;
    return message;
  },

  toJSON(_: CreateEntityADParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<CreateEntityADParams>): CreateEntityADParams {
    const message = { ...baseCreateEntityADParams } as CreateEntityADParams;
    return message;
  },
};

const baseAdditionalParams: object = {
  entityId: "",
  displayName: "",
  domainUsers: "",
  akaUnit: "",
  type: 0,
};

export const AdditionalParams = {
  encode(
    message: AdditionalParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.domainUsers) {
      writer.uint32(26).string(v!);
    }
    if (message.akaUnit !== "") {
      writer.uint32(34).string(message.akaUnit);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdditionalParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAdditionalParams } as AdditionalParams;
    message.domainUsers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.domainUsers.push(reader.string());
          break;
        case 4:
          message.akaUnit = reader.string();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdditionalParams {
    const message = { ...baseAdditionalParams } as AdditionalParams;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(String(e));
      }
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = String(object.akaUnit);
    } else {
      message.akaUnit = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = approverTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: AdditionalParams): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    if (message.domainUsers) {
      obj.domainUsers = message.domainUsers.map((e) => e);
    } else {
      obj.domainUsers = [];
    }
    message.akaUnit !== undefined && (obj.akaUnit = message.akaUnit);
    message.type !== undefined && (obj.type = approverTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<AdditionalParams>): AdditionalParams {
    const message = { ...baseAdditionalParams } as AdditionalParams;
    message.domainUsers = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    } else {
      message.entityId = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.domainUsers !== undefined && object.domainUsers !== null) {
      for (const e of object.domainUsers) {
        message.domainUsers.push(e);
      }
    }
    if (object.akaUnit !== undefined && object.akaUnit !== null) {
      message.akaUnit = object.akaUnit;
    } else {
      message.akaUnit = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

const baseRenameOGKartoffelParams: object = { id: "", name: "" };

export const RenameOGKartoffelParams = {
  encode(
    message: RenameOGKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RenameOGKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRenameOGKartoffelParams,
    } as RenameOGKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameOGKartoffelParams {
    const message = {
      ...baseRenameOGKartoffelParams,
    } as RenameOGKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: RenameOGKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RenameOGKartoffelParams>
  ): RenameOGKartoffelParams {
    const message = {
      ...baseRenameOGKartoffelParams,
    } as RenameOGKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseRenameOGADParams: object = {
  ouDisplayName: "",
  oldOuName: "",
  newOuName: "",
};

export const RenameOGADParams = {
  encode(
    message: RenameOGADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== "") {
      writer.uint32(10).string(message.ouDisplayName);
    }
    if (message.oldOuName !== "") {
      writer.uint32(18).string(message.oldOuName);
    }
    if (message.newOuName !== "") {
      writer.uint32(26).string(message.newOuName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        case 2:
          message.oldOuName = reader.string();
          break;
        case 3:
          message.newOuName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameOGADParams {
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = "";
    }
    if (object.oldOuName !== undefined && object.oldOuName !== null) {
      message.oldOuName = String(object.oldOuName);
    } else {
      message.oldOuName = "";
    }
    if (object.newOuName !== undefined && object.newOuName !== null) {
      message.newOuName = String(object.newOuName);
    } else {
      message.newOuName = "";
    }
    return message;
  },

  toJSON(message: RenameOGADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.oldOuName !== undefined && (obj.oldOuName = message.oldOuName);
    message.newOuName !== undefined && (obj.newOuName = message.newOuName);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameOGADParams>): RenameOGADParams {
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = "";
    }
    if (object.oldOuName !== undefined && object.oldOuName !== null) {
      message.oldOuName = object.oldOuName;
    } else {
      message.oldOuName = "";
    }
    if (object.newOuName !== undefined && object.newOuName !== null) {
      message.newOuName = object.newOuName;
    } else {
      message.newOuName = "";
    }
    return message;
  },
};

const baseRenameRoleKartoffelParams: object = { jobTitle: "", roleId: "" };

export const RenameRoleKartoffelParams = {
  encode(
    message: RenameRoleKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.jobTitle !== "") {
      writer.uint32(10).string(message.jobTitle);
    }
    if (message.roleId !== "") {
      writer.uint32(18).string(message.roleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RenameRoleKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRenameRoleKartoffelParams,
    } as RenameRoleKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.jobTitle = reader.string();
          break;
        case 2:
          message.roleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameRoleKartoffelParams {
    const message = {
      ...baseRenameRoleKartoffelParams,
    } as RenameRoleKartoffelParams;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    return message;
  },

  toJSON(message: RenameRoleKartoffelParams): unknown {
    const obj: any = {};
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RenameRoleKartoffelParams>
  ): RenameRoleKartoffelParams {
    const message = {
      ...baseRenameRoleKartoffelParams,
    } as RenameRoleKartoffelParams;
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    return message;
  },
};

const baseRenameRoleADParams: object = { samAccountName: "", jobTitle: "" };

export const RenameRoleADParams = {
  encode(
    message: RenameRoleADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== "") {
      writer.uint32(10).string(message.samAccountName);
    }
    if (message.jobTitle !== "") {
      writer.uint32(18).string(message.jobTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        case 2:
          message.jobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RenameRoleADParams {
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = "";
    }
    return message;
  },

  toJSON(message: RenameRoleADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    return obj;
  },

  fromPartial(object: DeepPartial<RenameRoleADParams>): RenameRoleADParams {
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = "";
    }
    return message;
  },
};

const baseEditEntityKartoffelParams: object = {
  id: "",
  firstName: "",
  lastName: "",
  personalNumber: "",
  serviceType: "",
  phone: "",
  mobilePhone: "",
  address: "",
  clearance: "",
  sex: "",
  birthdate: 0,
  entityType: "",
};

export const EditEntityKartoffelParams = {
  encode(
    message: EditEntityKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(34).string(message.identityCard);
    }
    if (message.personalNumber !== "") {
      writer.uint32(42).string(message.personalNumber);
    }
    if (message.serviceType !== "") {
      writer.uint32(50).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(66).string(v!);
    }
    if (message.address !== "") {
      writer.uint32(74).string(message.address);
    }
    if (message.clearance !== "") {
      writer.uint32(82).string(message.clearance);
    }
    if (message.sex !== "") {
      writer.uint32(90).string(message.sex);
    }
    if (message.birthdate !== 0) {
      writer.uint32(96).int64(message.birthdate);
    }
    if (message.entityType !== "") {
      writer.uint32(106).string(message.entityType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditEntityKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEditEntityKartoffelParams,
    } as EditEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.identityCard = reader.string();
          break;
        case 5:
          message.personalNumber = reader.string();
          break;
        case 6:
          message.serviceType = reader.string();
          break;
        case 7:
          message.phone.push(reader.string());
          break;
        case 8:
          message.mobilePhone.push(reader.string());
          break;
        case 9:
          message.address = reader.string();
          break;
        case 10:
          message.clearance = reader.string();
          break;
        case 11:
          message.sex = reader.string();
          break;
        case 12:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.entityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditEntityKartoffelParams {
    const message = {
      ...baseEditEntityKartoffelParams,
    } as EditEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(String(e));
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = Number(object.birthdate);
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = "";
    }
    return message;
  },

  toJSON(message: EditEntityKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    if (message.phone) {
      obj.phone = message.phone.map((e) => e);
    } else {
      obj.phone = [];
    }
    if (message.mobilePhone) {
      obj.mobilePhone = message.mobilePhone.map((e) => e);
    } else {
      obj.mobilePhone = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.sex !== undefined && (obj.sex = message.sex);
    message.birthdate !== undefined && (obj.birthdate = message.birthdate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditEntityKartoffelParams>
  ): EditEntityKartoffelParams {
    const message = {
      ...baseEditEntityKartoffelParams,
    } as EditEntityKartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = "";
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = object.birthdate;
    } else {
      message.birthdate = 0;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = "";
    }
    return message;
  },
};

const baseEditEntityADParams: object = {
  samAccountName: "",
  firstName: "",
  lastName: "",
  fullName: "",
};

export const EditEntityADParams = {
  encode(
    message: EditEntityADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== "") {
      writer.uint32(10).string(message.samAccountName);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.fullName !== "") {
      writer.uint32(34).string(message.fullName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditEntityADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditEntityADParams } as EditEntityADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.fullName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditEntityADParams {
    const message = { ...baseEditEntityADParams } as EditEntityADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    return message;
  },

  toJSON(message: EditEntityADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    return obj;
  },

  fromPartial(object: DeepPartial<EditEntityADParams>): EditEntityADParams {
    const message = { ...baseEditEntityADParams } as EditEntityADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = "";
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    return message;
  },
};

const baseDeleteOGKartoffelParams: object = { id: "" };

export const DeleteOGKartoffelParams = {
  encode(
    message: DeleteOGKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteOGKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteOGKartoffelParams,
    } as DeleteOGKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOGKartoffelParams {
    const message = {
      ...baseDeleteOGKartoffelParams,
    } as DeleteOGKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: DeleteOGKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteOGKartoffelParams>
  ): DeleteOGKartoffelParams {
    const message = {
      ...baseDeleteOGKartoffelParams,
    } as DeleteOGKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDeleteOGADParams: object = {
  ouDisplayName: "",
  ouName: "",
  name: "",
};

export const DeleteOGADParams = {
  encode(
    message: DeleteOGADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== "") {
      writer.uint32(10).string(message.ouDisplayName);
    }
    if (message.ouName !== "") {
      writer.uint32(18).string(message.ouName);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        case 2:
          message.ouName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteOGADParams {
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = "";
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = String(object.ouName);
    } else {
      message.ouName = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: DeleteOGADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.ouName !== undefined && (obj.ouName = message.ouName);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteOGADParams>): DeleteOGADParams {
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = "";
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = object.ouName;
    } else {
      message.ouName = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseDeleteRoleKartoffelParams: object = { roleId: "", uniqueId: "" };

export const DeleteRoleKartoffelParams = {
  encode(
    message: DeleteRoleKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteRoleKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteRoleKartoffelParams,
    } as DeleteRoleKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoleKartoffelParams {
    const message = {
      ...baseDeleteRoleKartoffelParams,
    } as DeleteRoleKartoffelParams;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: DeleteRoleKartoffelParams): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteRoleKartoffelParams>
  ): DeleteRoleKartoffelParams {
    const message = {
      ...baseDeleteRoleKartoffelParams,
    } as DeleteRoleKartoffelParams;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseDeleteRoleADParams: object = { samAccountName: "" };

export const DeleteRoleADParams = {
  encode(
    message: DeleteRoleADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== "") {
      writer.uint32(10).string(message.samAccountName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleADParams } as DeleteRoleADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoleADParams {
    const message = { ...baseDeleteRoleADParams } as DeleteRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = "";
    }
    return message;
  },

  toJSON(message: DeleteRoleADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteRoleADParams>): DeleteRoleADParams {
    const message = { ...baseDeleteRoleADParams } as DeleteRoleADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = "";
    }
    return message;
  },
};

const baseDeleteEntityKartoffelParams: object = { id: "" };

export const DeleteEntityKartoffelParams = {
  encode(
    message: DeleteEntityKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteEntityKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDeleteEntityKartoffelParams,
    } as DeleteEntityKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteEntityKartoffelParams {
    const message = {
      ...baseDeleteEntityKartoffelParams,
    } as DeleteEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: DeleteEntityKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DeleteEntityKartoffelParams>
  ): DeleteEntityKartoffelParams {
    const message = {
      ...baseDeleteEntityKartoffelParams,
    } as DeleteEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseDeleteEntityADParams: object = {};

export const DeleteEntityADParams = {
  encode(
    _: DeleteEntityADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteEntityADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteEntityADParams } as DeleteEntityADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteEntityADParams {
    const message = { ...baseDeleteEntityADParams } as DeleteEntityADParams;
    return message;
  },

  toJSON(_: DeleteEntityADParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteEntityADParams>): DeleteEntityADParams {
    const message = { ...baseDeleteEntityADParams } as DeleteEntityADParams;
    return message;
  },
};

const baseAssignRoleToEntityKartoffelParams: object = {
  id: "",
  uniqueId: "",
  needDisconnect: false,
};

export const AssignRoleToEntityKartoffelParams = {
  encode(
    message: AssignRoleToEntityKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    if (message.needDisconnect === true) {
      writer.uint32(24).bool(message.needDisconnect);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssignRoleToEntityKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAssignRoleToEntityKartoffelParams,
    } as AssignRoleToEntityKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        case 3:
          message.needDisconnect = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignRoleToEntityKartoffelParams {
    const message = {
      ...baseAssignRoleToEntityKartoffelParams,
    } as AssignRoleToEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    if (object.needDisconnect !== undefined && object.needDisconnect !== null) {
      message.needDisconnect = Boolean(object.needDisconnect);
    } else {
      message.needDisconnect = false;
    }
    return message;
  },

  toJSON(message: AssignRoleToEntityKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.needDisconnect !== undefined &&
      (obj.needDisconnect = message.needDisconnect);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssignRoleToEntityKartoffelParams>
  ): AssignRoleToEntityKartoffelParams {
    const message = {
      ...baseAssignRoleToEntityKartoffelParams,
    } as AssignRoleToEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    if (object.needDisconnect !== undefined && object.needDisconnect !== null) {
      message.needDisconnect = object.needDisconnect;
    } else {
      message.needDisconnect = false;
    }
    return message;
  },
};

const baseAssignRoleToEntityADParams: object = {
  oldSAMAccountName: "",
  newSAMAccountName: "",
  firstName: "",
  lastName: "",
  fullName: "",
  rank: "",
  roleSerialCode: "",
};

export const AssignRoleToEntityADParams = {
  encode(
    message: AssignRoleToEntityADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oldSAMAccountName !== "") {
      writer.uint32(10).string(message.oldSAMAccountName);
    }
    if (message.newSAMAccountName !== "") {
      writer.uint32(18).string(message.newSAMAccountName);
    }
    if (message.upn !== undefined) {
      writer.uint32(26).string(message.upn);
    }
    if (message.firstName !== "") {
      writer.uint32(34).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(42).string(message.lastName);
    }
    if (message.fullName !== "") {
      writer.uint32(50).string(message.fullName);
    }
    if (message.rank !== "") {
      writer.uint32(58).string(message.rank);
    }
    if (message.roleSerialCode !== "") {
      writer.uint32(66).string(message.roleSerialCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssignRoleToEntityADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAssignRoleToEntityADParams,
    } as AssignRoleToEntityADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oldSAMAccountName = reader.string();
          break;
        case 2:
          message.newSAMAccountName = reader.string();
          break;
        case 3:
          message.upn = reader.string();
          break;
        case 4:
          message.firstName = reader.string();
          break;
        case 5:
          message.lastName = reader.string();
          break;
        case 6:
          message.fullName = reader.string();
          break;
        case 7:
          message.rank = reader.string();
          break;
        case 8:
          message.roleSerialCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssignRoleToEntityADParams {
    const message = {
      ...baseAssignRoleToEntityADParams,
    } as AssignRoleToEntityADParams;
    if (
      object.oldSAMAccountName !== undefined &&
      object.oldSAMAccountName !== null
    ) {
      message.oldSAMAccountName = String(object.oldSAMAccountName);
    } else {
      message.oldSAMAccountName = "";
    }
    if (
      object.newSAMAccountName !== undefined &&
      object.newSAMAccountName !== null
    ) {
      message.newSAMAccountName = String(object.newSAMAccountName);
    } else {
      message.newSAMAccountName = "";
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = String(object.upn);
    } else {
      message.upn = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = "";
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = "";
    }
    if (object.roleSerialCode !== undefined && object.roleSerialCode !== null) {
      message.roleSerialCode = String(object.roleSerialCode);
    } else {
      message.roleSerialCode = "";
    }
    return message;
  },

  toJSON(message: AssignRoleToEntityADParams): unknown {
    const obj: any = {};
    message.oldSAMAccountName !== undefined &&
      (obj.oldSAMAccountName = message.oldSAMAccountName);
    message.newSAMAccountName !== undefined &&
      (obj.newSAMAccountName = message.newSAMAccountName);
    message.upn !== undefined && (obj.upn = message.upn);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.rank !== undefined && (obj.rank = message.rank);
    message.roleSerialCode !== undefined &&
      (obj.roleSerialCode = message.roleSerialCode);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssignRoleToEntityADParams>
  ): AssignRoleToEntityADParams {
    const message = {
      ...baseAssignRoleToEntityADParams,
    } as AssignRoleToEntityADParams;
    if (
      object.oldSAMAccountName !== undefined &&
      object.oldSAMAccountName !== null
    ) {
      message.oldSAMAccountName = object.oldSAMAccountName;
    } else {
      message.oldSAMAccountName = "";
    }
    if (
      object.newSAMAccountName !== undefined &&
      object.newSAMAccountName !== null
    ) {
      message.newSAMAccountName = object.newSAMAccountName;
    } else {
      message.newSAMAccountName = "";
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = object.upn;
    } else {
      message.upn = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = "";
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = "";
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = "";
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = "";
    }
    if (object.roleSerialCode !== undefined && object.roleSerialCode !== null) {
      message.roleSerialCode = object.roleSerialCode;
    } else {
      message.roleSerialCode = "";
    }
    return message;
  },
};

const baseDisconectRoleFromEntityKartoffelParams: object = {
  id: "",
  uniqueId: "",
};

export const DisconectRoleFromEntityKartoffelParams = {
  encode(
    message: DisconectRoleFromEntityKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconectRoleFromEntityKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconectRoleFromEntityKartoffelParams,
    } as DisconectRoleFromEntityKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconectRoleFromEntityKartoffelParams {
    const message = {
      ...baseDisconectRoleFromEntityKartoffelParams,
    } as DisconectRoleFromEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = "";
    }
    return message;
  },

  toJSON(message: DisconectRoleFromEntityKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconectRoleFromEntityKartoffelParams>
  ): DisconectRoleFromEntityKartoffelParams {
    const message = {
      ...baseDisconectRoleFromEntityKartoffelParams,
    } as DisconectRoleFromEntityKartoffelParams;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = "";
    }
    return message;
  },
};

const baseDisconectRoleFromEntityADParams: object = { samAccountName: "" };

export const DisconectRoleFromEntityADParams = {
  encode(
    message: DisconectRoleFromEntityADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== "") {
      writer.uint32(10).string(message.samAccountName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisconectRoleFromEntityADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseDisconectRoleFromEntityADParams,
    } as DisconectRoleFromEntityADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconectRoleFromEntityADParams {
    const message = {
      ...baseDisconectRoleFromEntityADParams,
    } as DisconectRoleFromEntityADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = "";
    }
    return message;
  },

  toJSON(message: DisconectRoleFromEntityADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    return obj;
  },

  fromPartial(
    object: DeepPartial<DisconectRoleFromEntityADParams>
  ): DisconectRoleFromEntityADParams {
    const message = {
      ...baseDisconectRoleFromEntityADParams,
    } as DisconectRoleFromEntityADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = "";
    }
    return message;
  },
};

const baseChangeRoleHierarchyKartoffelParams: object = {
  roleId: "",
  directGroup: "",
};

export const ChangeRoleHierarchyKartoffelParams = {
  encode(
    message: ChangeRoleHierarchyKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roleId !== "") {
      writer.uint32(10).string(message.roleId);
    }
    if (message.directGroup !== "") {
      writer.uint32(18).string(message.directGroup);
    }
    if (message.jobTitle !== undefined) {
      writer.uint32(26).string(message.jobTitle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyKartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyKartoffelParams,
    } as ChangeRoleHierarchyKartoffelParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleId = reader.string();
          break;
        case 2:
          message.directGroup = reader.string();
          break;
        case 3:
          message.jobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyKartoffelParams {
    const message = {
      ...baseChangeRoleHierarchyKartoffelParams,
    } as ChangeRoleHierarchyKartoffelParams;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyKartoffelParams): unknown {
    const obj: any = {};
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyKartoffelParams>
  ): ChangeRoleHierarchyKartoffelParams {
    const message = {
      ...baseChangeRoleHierarchyKartoffelParams,
    } as ChangeRoleHierarchyKartoffelParams;
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = "";
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = "";
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = undefined;
    }
    return message;
  },
};

const baseChangeRoleHierarchyADParams: object = {};

export const ChangeRoleHierarchyADParams = {
  encode(
    message: ChangeRoleHierarchyADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.samAccountName !== undefined) {
      writer.uint32(10).string(message.samAccountName);
    }
    if (message.ouDisplayName !== undefined) {
      writer.uint32(18).string(message.ouDisplayName);
    }
    if (message.jobTitle !== undefined) {
      writer.uint32(26).string(message.jobTitle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChangeRoleHierarchyADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseChangeRoleHierarchyADParams,
    } as ChangeRoleHierarchyADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.samAccountName = reader.string();
          break;
        case 2:
          message.ouDisplayName = reader.string();
          break;
        case 3:
          message.jobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChangeRoleHierarchyADParams {
    const message = {
      ...baseChangeRoleHierarchyADParams,
    } as ChangeRoleHierarchyADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = undefined;
    }
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = undefined;
    }
    return message;
  },

  toJSON(message: ChangeRoleHierarchyADParams): unknown {
    const obj: any = {};
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ChangeRoleHierarchyADParams>
  ): ChangeRoleHierarchyADParams {
    const message = {
      ...baseChangeRoleHierarchyADParams,
    } as ChangeRoleHierarchyADParams;
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = undefined;
    }
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = undefined;
    }
    return message;
  },
};

const baseSyncBulkRequestReq: object = { id: "" };

export const SyncBulkRequestReq = {
  encode(
    message: SyncBulkRequestReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncBulkRequestReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSyncBulkRequestReq } as SyncBulkRequestReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncBulkRequestReq {
    const message = { ...baseSyncBulkRequestReq } as SyncBulkRequestReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: SyncBulkRequestReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<SyncBulkRequestReq>): SyncBulkRequestReq {
    const message = { ...baseSyncBulkRequestReq } as SyncBulkRequestReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseUpdateReq: object = { id: "" };

export const UpdateReq = {
  encode(
    message: UpdateReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.requestProperties !== undefined) {
      UpdateReqProperties.encode(
        message.requestProperties,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateReq } as UpdateReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.requestProperties = UpdateReqProperties.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReq {
    const message = { ...baseUpdateReq } as UpdateReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.requestProperties !== undefined &&
      object.requestProperties !== null
    ) {
      message.requestProperties = UpdateReqProperties.fromJSON(
        object.requestProperties
      );
    } else {
      message.requestProperties = undefined;
    }
    return message;
  },

  toJSON(message: UpdateReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.requestProperties !== undefined &&
      (obj.requestProperties = message.requestProperties
        ? UpdateReqProperties.toJSON(message.requestProperties)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateReq>): UpdateReq {
    const message = { ...baseUpdateReq } as UpdateReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.requestProperties !== undefined &&
      object.requestProperties !== null
    ) {
      message.requestProperties = UpdateReqProperties.fromPartial(
        object.requestProperties
      );
    } else {
      message.requestProperties = undefined;
    }
    return message;
  },
};

const baseUpdateReqProperties: object = { requestIds: "" };

export const UpdateReqProperties = {
  encode(
    message: UpdateReqProperties,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(58).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      KartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ADParams.encode(message.adParams, writer.uint32(74).fork()).ldelim();
    }
    if (message.due !== undefined) {
      writer.uint32(80).int64(message.due);
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.isPartOfBulk !== undefined) {
      writer.uint32(112).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== undefined) {
      writer.uint32(122).string(message.bulkRequestId);
    }
    for (const v of message.requestIds) {
      writer.uint32(130).string(v!);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(138).string(message.rowNumber);
    }
    for (const v of message.rowErrors) {
      RowError.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.excelFilePath !== undefined) {
      writer.uint32(154).string(message.excelFilePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReqProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 8:
          message.kartoffelParams = KartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adParams = ADParams.decode(reader, reader.uint32());
          break;
        case 10:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 11:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 12:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.isPartOfBulk = reader.bool();
          break;
        case 15:
          message.bulkRequestId = reader.string();
          break;
        case 16:
          message.requestIds.push(reader.string());
          break;
        case 17:
          message.rowNumber = reader.string();
          break;
        case 18:
          message.rowErrors.push(RowError.decode(reader, reader.uint32()));
          break;
        case 19:
          message.excelFilePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReqProperties {
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromJSON(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = undefined;
    }
    return message;
  },

  toJSON(message: UpdateReqProperties): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? requestStatusToJSON(message.status)
          : undefined);
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? KartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ADParams.toJSON(message.adParams)
        : undefined);
    message.due !== undefined && (obj.due = message.due);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    if (message.rowErrors) {
      obj.rowErrors = message.rowErrors.map((e) =>
        e ? RowError.toJSON(e) : undefined
      );
    } else {
      obj.rowErrors = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateReqProperties>): UpdateReqProperties {
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = undefined;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromPartial(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = undefined;
    }
    return message;
  },
};

const baseUpdateKartoffelStatusReq: object = { requestId: "", status: 0 };

export const UpdateKartoffelStatusReq = {
  encode(
    message: UpdateKartoffelStatusReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.message !== undefined) {
      writer.uint32(26).string(message.message);
    }
    if (message.createdId !== undefined) {
      writer.uint32(34).string(message.createdId);
    }
    if (message.failedRetries !== undefined) {
      writer.uint32(40).int32(message.failedRetries);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateKartoffelStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateKartoffelStatusReq,
    } as UpdateKartoffelStatusReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.createdId = reader.string();
          break;
        case 5:
          message.failedRetries = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateKartoffelStatusReq {
    const message = {
      ...baseUpdateKartoffelStatusReq,
    } as UpdateKartoffelStatusReq;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = stageStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = undefined;
    }
    if (object.createdId !== undefined && object.createdId !== null) {
      message.createdId = String(object.createdId);
    } else {
      message.createdId = undefined;
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = Number(object.failedRetries);
    } else {
      message.failedRetries = undefined;
    }
    return message;
  },

  toJSON(message: UpdateKartoffelStatusReq): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.createdId !== undefined && (obj.createdId = message.createdId);
    message.failedRetries !== undefined &&
      (obj.failedRetries = message.failedRetries);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateKartoffelStatusReq>
  ): UpdateKartoffelStatusReq {
    const message = {
      ...baseUpdateKartoffelStatusReq,
    } as UpdateKartoffelStatusReq;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = undefined;
    }
    if (object.createdId !== undefined && object.createdId !== null) {
      message.createdId = object.createdId;
    } else {
      message.createdId = undefined;
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = object.failedRetries;
    } else {
      message.failedRetries = undefined;
    }
    return message;
  },
};

const baseUpdateADStatusReq: object = { requestId: "", status: 0, message: "" };

export const UpdateADStatusReq = {
  encode(
    message: UpdateADStatusReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.failedRetries !== undefined) {
      writer.uint32(32).int32(message.failedRetries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateADStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateADStatusReq } as UpdateADStatusReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.failedRetries = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateADStatusReq {
    const message = { ...baseUpdateADStatusReq } as UpdateADStatusReq;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = String(object.requestId);
    } else {
      message.requestId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = stageStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = Number(object.failedRetries);
    } else {
      message.failedRetries = undefined;
    }
    return message;
  },

  toJSON(message: UpdateADStatusReq): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.failedRetries !== undefined &&
      (obj.failedRetries = message.failedRetries);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateADStatusReq>): UpdateADStatusReq {
    const message = { ...baseUpdateADStatusReq } as UpdateADStatusReq;
    if (object.requestId !== undefined && object.requestId !== null) {
      message.requestId = object.requestId;
    } else {
      message.requestId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = object.failedRetries;
    } else {
      message.failedRetries = undefined;
    }
    return message;
  },
};

const baseDeleteReq: object = { id: "" };

export const DeleteReq = {
  encode(
    message: DeleteReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteReq } as DeleteReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteReq {
    const message = { ...baseDeleteReq } as DeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: DeleteReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteReq>): DeleteReq {
    const message = { ...baseDeleteReq } as DeleteReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseGetRequestsByPersonReq: object = {
  id: "",
  personType: 0,
  personInfoType: 0,
  from: 0,
  to: 0,
};

export const GetRequestsByPersonReq = {
  encode(
    message: GetRequestsByPersonReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.personType !== 0) {
      writer.uint32(16).int32(message.personType);
    }
    if (message.personInfoType !== 0) {
      writer.uint32(24).int32(message.personInfoType);
    }
    if (message.from !== 0) {
      writer.uint32(32).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(40).int32(message.to);
    }
    if (message.approvementStatus !== undefined) {
      writer.uint32(48).int32(message.approvementStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequestsByPersonReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRequestsByPersonReq } as GetRequestsByPersonReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.personType = reader.int32() as any;
          break;
        case 3:
          message.personInfoType = reader.int32() as any;
          break;
        case 4:
          message.from = reader.int32();
          break;
        case 5:
          message.to = reader.int32();
          break;
        case 6:
          message.approvementStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestsByPersonReq {
    const message = { ...baseGetRequestsByPersonReq } as GetRequestsByPersonReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.personType !== undefined && object.personType !== null) {
      message.personType = personTypeInRequestFromJSON(object.personType);
    } else {
      message.personType = 0;
    }
    if (object.personInfoType !== undefined && object.personInfoType !== null) {
      message.personInfoType = personInfoTypeFromJSON(object.personInfoType);
    } else {
      message.personInfoType = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Number(object.from);
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Number(object.to);
    } else {
      message.to = 0;
    }
    if (
      object.approvementStatus !== undefined &&
      object.approvementStatus !== null
    ) {
      message.approvementStatus = approvementStatusFromJSON(
        object.approvementStatus
      );
    } else {
      message.approvementStatus = undefined;
    }
    return message;
  },

  toJSON(message: GetRequestsByPersonReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.personType !== undefined &&
      (obj.personType = personTypeInRequestToJSON(message.personType));
    message.personInfoType !== undefined &&
      (obj.personInfoType = personInfoTypeToJSON(message.personInfoType));
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.approvementStatus !== undefined &&
      (obj.approvementStatus =
        message.approvementStatus !== undefined
          ? approvementStatusToJSON(message.approvementStatus)
          : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRequestsByPersonReq>
  ): GetRequestsByPersonReq {
    const message = { ...baseGetRequestsByPersonReq } as GetRequestsByPersonReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.personType !== undefined && object.personType !== null) {
      message.personType = object.personType;
    } else {
      message.personType = 0;
    }
    if (object.personInfoType !== undefined && object.personInfoType !== null) {
      message.personInfoType = object.personInfoType;
    } else {
      message.personInfoType = 0;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = 0;
    }
    if (
      object.approvementStatus !== undefined &&
      object.approvementStatus !== null
    ) {
      message.approvementStatus = object.approvementStatus;
    } else {
      message.approvementStatus = undefined;
    }
    return message;
  },
};

const baseGetRequestBySerialNumberReq: object = { serialNumber: "" };

export const GetRequestBySerialNumberReq = {
  encode(
    message: GetRequestBySerialNumberReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.serialNumber !== "") {
      writer.uint32(10).string(message.serialNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequestBySerialNumberReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRequestBySerialNumberReq,
    } as GetRequestBySerialNumberReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serialNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestBySerialNumberReq {
    const message = {
      ...baseGetRequestBySerialNumberReq,
    } as GetRequestBySerialNumberReq;
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    return message;
  },

  toJSON(message: GetRequestBySerialNumberReq): unknown {
    const obj: any = {};
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRequestBySerialNumberReq>
  ): GetRequestBySerialNumberReq {
    const message = {
      ...baseGetRequestBySerialNumberReq,
    } as GetRequestBySerialNumberReq;
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    return message;
  },
};

const baseGetAllRequestsReq: object = { from: 0, to: 0 };

export const GetAllRequestsReq = {
  encode(
    message: GetAllRequestsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== 0) {
      writer.uint32(8).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(16).int32(message.to);
    }
    if (message.approvementStatus !== undefined) {
      writer.uint32(48).int32(message.approvementStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllRequestsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetAllRequestsReq } as GetAllRequestsReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.int32();
          break;
        case 2:
          message.to = reader.int32();
          break;
        case 6:
          message.approvementStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllRequestsReq {
    const message = { ...baseGetAllRequestsReq } as GetAllRequestsReq;
    if (object.from !== undefined && object.from !== null) {
      message.from = Number(object.from);
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Number(object.to);
    } else {
      message.to = 0;
    }
    if (
      object.approvementStatus !== undefined &&
      object.approvementStatus !== null
    ) {
      message.approvementStatus = approvementStatusFromJSON(
        object.approvementStatus
      );
    } else {
      message.approvementStatus = undefined;
    }
    return message;
  },

  toJSON(message: GetAllRequestsReq): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.approvementStatus !== undefined &&
      (obj.approvementStatus =
        message.approvementStatus !== undefined
          ? approvementStatusToJSON(message.approvementStatus)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetAllRequestsReq>): GetAllRequestsReq {
    const message = { ...baseGetAllRequestsReq } as GetAllRequestsReq;
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = 0;
    }
    if (
      object.approvementStatus !== undefined &&
      object.approvementStatus !== null
    ) {
      message.approvementStatus = object.approvementStatus;
    } else {
      message.approvementStatus = undefined;
    }
    return message;
  },
};

const baseGetRequestByIdReq: object = { id: "" };

export const GetRequestByIdReq = {
  encode(
    message: GetRequestByIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRequestByIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetRequestByIdReq } as GetRequestByIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestByIdReq {
    const message = { ...baseGetRequestByIdReq } as GetRequestByIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: GetRequestByIdReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<GetRequestByIdReq>): GetRequestByIdReq {
    const message = { ...baseGetRequestByIdReq } as GetRequestByIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseSearchRequestsByDisplayNameReq: object = {
  displayName: "",
  personType: 0,
  from: 0,
  to: 0,
};

export const SearchRequestsByDisplayNameReq = {
  encode(
    message: SearchRequestsByDisplayNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.displayName !== "") {
      writer.uint32(10).string(message.displayName);
    }
    if (message.personType !== 0) {
      writer.uint32(16).int32(message.personType);
    }
    if (message.searcherId !== undefined) {
      writer.uint32(26).string(message.searcherId);
    }
    if (message.searcherType !== undefined) {
      writer.uint32(32).int32(message.searcherType);
    }
    if (message.from !== 0) {
      writer.uint32(40).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(48).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchRequestsByDisplayNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSearchRequestsByDisplayNameReq,
    } as SearchRequestsByDisplayNameReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayName = reader.string();
          break;
        case 2:
          message.personType = reader.int32() as any;
          break;
        case 3:
          message.searcherId = reader.string();
          break;
        case 4:
          message.searcherType = reader.int32() as any;
          break;
        case 5:
          message.from = reader.int32();
          break;
        case 6:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchRequestsByDisplayNameReq {
    const message = {
      ...baseSearchRequestsByDisplayNameReq,
    } as SearchRequestsByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.personType !== undefined && object.personType !== null) {
      message.personType = personTypeInRequestFromJSON(object.personType);
    } else {
      message.personType = 0;
    }
    if (object.searcherId !== undefined && object.searcherId !== null) {
      message.searcherId = String(object.searcherId);
    } else {
      message.searcherId = undefined;
    }
    if (object.searcherType !== undefined && object.searcherType !== null) {
      message.searcherType = personTypeInRequestFromJSON(object.searcherType);
    } else {
      message.searcherType = undefined;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = Number(object.from);
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Number(object.to);
    } else {
      message.to = 0;
    }
    return message;
  },

  toJSON(message: SearchRequestsByDisplayNameReq): unknown {
    const obj: any = {};
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.personType !== undefined &&
      (obj.personType = personTypeInRequestToJSON(message.personType));
    message.searcherId !== undefined && (obj.searcherId = message.searcherId);
    message.searcherType !== undefined &&
      (obj.searcherType =
        message.searcherType !== undefined
          ? personTypeInRequestToJSON(message.searcherType)
          : undefined);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SearchRequestsByDisplayNameReq>
  ): SearchRequestsByDisplayNameReq {
    const message = {
      ...baseSearchRequestsByDisplayNameReq,
    } as SearchRequestsByDisplayNameReq;
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.personType !== undefined && object.personType !== null) {
      message.personType = object.personType;
    } else {
      message.personType = 0;
    }
    if (object.searcherId !== undefined && object.searcherId !== null) {
      message.searcherId = object.searcherId;
    } else {
      message.searcherId = undefined;
    }
    if (object.searcherType !== undefined && object.searcherType !== null) {
      message.searcherType = object.searcherType;
    } else {
      message.searcherType = undefined;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = 0;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = 0;
    }
    return message;
  },
};

const baseCanPushToQueueReq: object = { id: "" };

export const CanPushToQueueReq = {
  encode(
    message: CanPushToQueueReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanPushToQueueReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanPushToQueueReq } as CanPushToQueueReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanPushToQueueReq {
    const message = { ...baseCanPushToQueueReq } as CanPushToQueueReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: CanPushToQueueReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<CanPushToQueueReq>): CanPushToQueueReq {
    const message = { ...baseCanPushToQueueReq } as CanPushToQueueReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseCanPushToQueueRes: object = { canPushToQueue: false };

export const CanPushToQueueRes = {
  encode(
    message: CanPushToQueueRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.canPushToQueue === true) {
      writer.uint32(8).bool(message.canPushToQueue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanPushToQueueRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCanPushToQueueRes } as CanPushToQueueRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canPushToQueue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanPushToQueueRes {
    const message = { ...baseCanPushToQueueRes } as CanPushToQueueRes;
    if (object.canPushToQueue !== undefined && object.canPushToQueue !== null) {
      message.canPushToQueue = Boolean(object.canPushToQueue);
    } else {
      message.canPushToQueue = false;
    }
    return message;
  },

  toJSON(message: CanPushToQueueRes): unknown {
    const obj: any = {};
    message.canPushToQueue !== undefined &&
      (obj.canPushToQueue = message.canPushToQueue);
    return obj;
  },

  fromPartial(object: DeepPartial<CanPushToQueueRes>): CanPushToQueueRes {
    const message = { ...baseCanPushToQueueRes } as CanPushToQueueRes;
    if (object.canPushToQueue !== undefined && object.canPushToQueue !== null) {
      message.canPushToQueue = object.canPushToQueue;
    } else {
      message.canPushToQueue = false;
    }
    return message;
  },
};

const baseIncrementRetriesReq: object = { id: "" };

export const IncrementRetriesReq = {
  encode(
    message: IncrementRetriesReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncrementRetriesReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIncrementRetriesReq } as IncrementRetriesReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IncrementRetriesReq {
    const message = { ...baseIncrementRetriesReq } as IncrementRetriesReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: IncrementRetriesReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<IncrementRetriesReq>): IncrementRetriesReq {
    const message = { ...baseIncrementRetriesReq } as IncrementRetriesReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseUpdateApproverDecisionReq: object = { id: "", approverType: 0 };

export const UpdateApproverDecisionReq = {
  encode(
    message: UpdateApproverDecisionReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.approverDecision !== undefined) {
      ApproverDecision.encode(
        message.approverDecision,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.approverType !== 0) {
      writer.uint32(24).int32(message.approverType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateApproverDecisionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.approverDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.approverType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApproverDecisionReq {
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (
      object.approverDecision !== undefined &&
      object.approverDecision !== null
    ) {
      message.approverDecision = ApproverDecision.fromJSON(
        object.approverDecision
      );
    } else {
      message.approverDecision = undefined;
    }
    if (object.approverType !== undefined && object.approverType !== null) {
      message.approverType = personTypeInRequestFromJSON(object.approverType);
    } else {
      message.approverType = 0;
    }
    return message;
  },

  toJSON(message: UpdateApproverDecisionReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.approverDecision !== undefined &&
      (obj.approverDecision = message.approverDecision
        ? ApproverDecision.toJSON(message.approverDecision)
        : undefined);
    message.approverType !== undefined &&
      (obj.approverType = personTypeInRequestToJSON(message.approverType));
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateApproverDecisionReq>
  ): UpdateApproverDecisionReq {
    const message = {
      ...baseUpdateApproverDecisionReq,
    } as UpdateApproverDecisionReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (
      object.approverDecision !== undefined &&
      object.approverDecision !== null
    ) {
      message.approverDecision = ApproverDecision.fromPartial(
        object.approverDecision
      );
    } else {
      message.approverDecision = undefined;
    }
    if (object.approverType !== undefined && object.approverType !== null) {
      message.approverType = object.approverType;
    } else {
      message.approverType = 0;
    }
    return message;
  },
};

const baseGetRequestsInProgressByDueReq: object = { due: 0 };

export const GetRequestsInProgressByDueReq = {
  encode(
    message: GetRequestsInProgressByDueReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.due !== 0) {
      writer.uint32(8).int64(message.due);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequestsInProgressByDueReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRequestsInProgressByDueReq,
    } as GetRequestsInProgressByDueReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.due = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestsInProgressByDueReq {
    const message = {
      ...baseGetRequestsInProgressByDueReq,
    } as GetRequestsInProgressByDueReq;
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    return message;
  },

  toJSON(message: GetRequestsInProgressByDueReq): unknown {
    const obj: any = {};
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRequestsInProgressByDueReq>
  ): GetRequestsInProgressByDueReq {
    const message = {
      ...baseGetRequestsInProgressByDueReq,
    } as GetRequestsInProgressByDueReq;
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    return message;
  },
};

const baseUpdateApproversReq: object = { id: "" };

export const UpdateApproversReq = {
  encode(
    message: UpdateApproversReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.approvers) {
      EntityMin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateApproversReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateApproversReq } as UpdateApproversReq;
    message.approvers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.approvers.push(EntityMin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateApproversReq {
    const message = { ...baseUpdateApproversReq } as UpdateApproversReq;
    message.approvers = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.approvers !== undefined && object.approvers !== null) {
      for (const e of object.approvers) {
        message.approvers.push(EntityMin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: UpdateApproversReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    if (message.approvers) {
      obj.approvers = message.approvers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.approvers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateApproversReq>): UpdateApproversReq {
    const message = { ...baseUpdateApproversReq } as UpdateApproversReq;
    message.approvers = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.approvers !== undefined && object.approvers !== null) {
      for (const e of object.approvers) {
        message.approvers.push(EntityMin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIsRequestApprovedReq: object = { id: "" };

export const IsRequestApprovedReq = {
  encode(
    message: IsRequestApprovedReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IsRequestApprovedReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsRequestApprovedReq } as IsRequestApprovedReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsRequestApprovedReq {
    const message = { ...baseIsRequestApprovedReq } as IsRequestApprovedReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: IsRequestApprovedReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<IsRequestApprovedReq>): IsRequestApprovedReq {
    const message = { ...baseIsRequestApprovedReq } as IsRequestApprovedReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseIsRequestApprovedRes: object = { isRequestApproved: false };

export const IsRequestApprovedRes = {
  encode(
    message: IsRequestApprovedRes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isRequestApproved === true) {
      writer.uint32(8).bool(message.isRequestApproved);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): IsRequestApprovedRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIsRequestApprovedRes } as IsRequestApprovedRes;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isRequestApproved = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsRequestApprovedRes {
    const message = { ...baseIsRequestApprovedRes } as IsRequestApprovedRes;
    if (
      object.isRequestApproved !== undefined &&
      object.isRequestApproved !== null
    ) {
      message.isRequestApproved = Boolean(object.isRequestApproved);
    } else {
      message.isRequestApproved = false;
    }
    return message;
  },

  toJSON(message: IsRequestApprovedRes): unknown {
    const obj: any = {};
    message.isRequestApproved !== undefined &&
      (obj.isRequestApproved = message.isRequestApproved);
    return obj;
  },

  fromPartial(object: DeepPartial<IsRequestApprovedRes>): IsRequestApprovedRes {
    const message = { ...baseIsRequestApprovedRes } as IsRequestApprovedRes;
    if (
      object.isRequestApproved !== undefined &&
      object.isRequestApproved !== null
    ) {
      message.isRequestApproved = object.isRequestApproved;
    } else {
      message.isRequestApproved = false;
    }
    return message;
  },
};

const basePushErrorReq: object = {
  id: "",
  rowNumber: "",
  error: "",
  errorType: 0,
};

export const PushErrorReq = {
  encode(
    message: PushErrorReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.rowNumber !== "") {
      writer.uint32(18).string(message.rowNumber);
    }
    if (message.error !== "") {
      writer.uint32(26).string(message.error);
    }
    if (message.errorType !== 0) {
      writer.uint32(32).int32(message.errorType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PushErrorReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePushErrorReq } as PushErrorReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.rowNumber = reader.string();
          break;
        case 3:
          message.error = reader.string();
          break;
        case 4:
          message.errorType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PushErrorReq {
    const message = { ...basePushErrorReq } as PushErrorReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.errorType !== undefined && object.errorType !== null) {
      message.errorType = errorTypeFromJSON(object.errorType);
    } else {
      message.errorType = 0;
    }
    return message;
  },

  toJSON(message: PushErrorReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.error !== undefined && (obj.error = message.error);
    message.errorType !== undefined &&
      (obj.errorType = errorTypeToJSON(message.errorType));
    return obj;
  },

  fromPartial(object: DeepPartial<PushErrorReq>): PushErrorReq {
    const message = { ...basePushErrorReq } as PushErrorReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.errorType !== undefined && object.errorType !== null) {
      message.errorType = object.errorType;
    } else {
      message.errorType = 0;
    }
    return message;
  },
};

const baseRequestIdArray: object = { requestIds: "", count: 0 };

export const RequestIdArray = {
  encode(
    message: RequestIdArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.requestIds) {
      writer.uint32(10).string(v!);
    }
    if (message.count !== 0) {
      writer.uint32(16).int32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestIdArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestIdArray } as RequestIdArray;
    message.requestIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestIds.push(reader.string());
          break;
        case 2:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestIdArray {
    const message = { ...baseRequestIdArray } as RequestIdArray;
    message.requestIds = [];
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: RequestIdArray): unknown {
    const obj: any = {};
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestIdArray>): RequestIdArray {
    const message = { ...baseRequestIdArray } as RequestIdArray;
    message.requestIds = [];
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseEntityMin: object = {
  id: "",
  displayName: "",
  identityCard: "",
  personalNumber: "",
};

export const EntityMin = {
  encode(
    message: EntityMin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.identityCard !== "") {
      writer.uint32(26).string(message.identityCard);
    }
    if (message.personalNumber !== "") {
      writer.uint32(34).string(message.personalNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityMin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEntityMin } as EntityMin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.identityCard = reader.string();
          break;
        case 4:
          message.personalNumber = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = "";
    }
    return message;
  },

  toJSON(message: EntityMin): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityMin>): EntityMin {
    const message = { ...baseEntityMin } as EntityMin;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = "";
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = "";
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = "";
    }
    return message;
  },
};

const baseSuccessMessage: object = { success: false, message: "" };

export const SuccessMessage = {
  encode(
    message: SuccessMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSuccessMessage } as SuccessMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = Boolean(object.success);
    } else {
      message.success = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: SuccessMessage): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<SuccessMessage>): SuccessMessage {
    const message = { ...baseSuccessMessage } as SuccessMessage;
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseApproverDecision: object = { decision: 0 };

export const ApproverDecision = {
  encode(
    message: ApproverDecision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.approver !== undefined) {
      EntityMin.encode(message.approver, writer.uint32(10).fork()).ldelim();
    }
    if (message.decision !== 0) {
      writer.uint32(16).int32(message.decision);
    }
    if (message.reason !== undefined) {
      writer.uint32(26).string(message.reason);
    }
    if (message.date !== undefined) {
      writer.uint32(32).int64(message.date);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApproverDecision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApproverDecision } as ApproverDecision;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approver = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.decision = reader.int32() as any;
          break;
        case 3:
          message.reason = reader.string();
          break;
        case 4:
          message.date = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApproverDecision {
    const message = { ...baseApproverDecision } as ApproverDecision;
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = EntityMin.fromJSON(object.approver);
    } else {
      message.approver = undefined;
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = decisionFromJSON(object.decision);
    } else {
      message.decision = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = Number(object.date);
    } else {
      message.date = undefined;
    }
    return message;
  },

  toJSON(message: ApproverDecision): unknown {
    const obj: any = {};
    message.approver !== undefined &&
      (obj.approver = message.approver
        ? EntityMin.toJSON(message.approver)
        : undefined);
    message.decision !== undefined &&
      (obj.decision = decisionToJSON(message.decision));
    message.reason !== undefined && (obj.reason = message.reason);
    message.date !== undefined && (obj.date = message.date);
    return obj;
  },

  fromPartial(object: DeepPartial<ApproverDecision>): ApproverDecision {
    const message = { ...baseApproverDecision } as ApproverDecision;
    if (object.approver !== undefined && object.approver !== null) {
      message.approver = EntityMin.fromPartial(object.approver);
    } else {
      message.approver = undefined;
    }
    if (object.decision !== undefined && object.decision !== null) {
      message.decision = object.decision;
    } else {
      message.decision = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = undefined;
    }
    if (object.date !== undefined && object.date !== null) {
      message.date = object.date;
    } else {
      message.date = undefined;
    }
    return message;
  },
};

const baseKartoffelStatus: object = {
  status: 0,
  message: "",
  failedRetries: 0,
};

export const KartoffelStatus = {
  encode(
    message: KartoffelStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.createdId !== undefined) {
      writer.uint32(26).string(message.createdId);
    }
    if (message.failedRetries !== 0) {
      writer.uint32(32).int32(message.failedRetries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KartoffelStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKartoffelStatus } as KartoffelStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.createdId = reader.string();
          break;
        case 4:
          message.failedRetries = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KartoffelStatus {
    const message = { ...baseKartoffelStatus } as KartoffelStatus;
    if (object.status !== undefined && object.status !== null) {
      message.status = stageStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.createdId !== undefined && object.createdId !== null) {
      message.createdId = String(object.createdId);
    } else {
      message.createdId = undefined;
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = Number(object.failedRetries);
    } else {
      message.failedRetries = 0;
    }
    return message;
  },

  toJSON(message: KartoffelStatus): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.createdId !== undefined && (obj.createdId = message.createdId);
    message.failedRetries !== undefined &&
      (obj.failedRetries = message.failedRetries);
    return obj;
  },

  fromPartial(object: DeepPartial<KartoffelStatus>): KartoffelStatus {
    const message = { ...baseKartoffelStatus } as KartoffelStatus;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.createdId !== undefined && object.createdId !== null) {
      message.createdId = object.createdId;
    } else {
      message.createdId = undefined;
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = object.failedRetries;
    } else {
      message.failedRetries = 0;
    }
    return message;
  },
};

const baseADStatus: object = { status: 0, message: "", failedRetries: 0 };

export const ADStatus = {
  encode(
    message: ADStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.failedRetries !== 0) {
      writer.uint32(24).int32(message.failedRetries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ADStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseADStatus } as ADStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.failedRetries = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ADStatus {
    const message = { ...baseADStatus } as ADStatus;
    if (object.status !== undefined && object.status !== null) {
      message.status = stageStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = Number(object.failedRetries);
    } else {
      message.failedRetries = 0;
    }
    return message;
  },

  toJSON(message: ADStatus): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.failedRetries !== undefined &&
      (obj.failedRetries = message.failedRetries);
    return obj;
  },

  fromPartial(object: DeepPartial<ADStatus>): ADStatus {
    const message = { ...baseADStatus } as ADStatus;
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.failedRetries !== undefined && object.failedRetries !== null) {
      message.failedRetries = object.failedRetries;
    } else {
      message.failedRetries = 0;
    }
    return message;
  },
};

const baseRequestArray: object = { totalCount: 0 };

export const RequestArray = {
  encode(
    message: RequestArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalCount !== 0) {
      writer.uint32(16).int32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestArray } as RequestArray;
    message.requests = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestArray {
    const message = { ...baseRequestArray } as RequestArray;
    message.requests = [];
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(Request.fromJSON(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = Number(object.totalCount);
    } else {
      message.totalCount = 0;
    }
    return message;
  },

  toJSON(message: RequestArray): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? Request.toJSON(e) : undefined
      );
    } else {
      obj.requests = [];
    }
    message.totalCount !== undefined && (obj.totalCount = message.totalCount);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestArray>): RequestArray {
    const message = { ...baseRequestArray } as RequestArray;
    message.requests = [];
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(Request.fromPartial(e));
      }
    }
    if (object.totalCount !== undefined && object.totalCount !== null) {
      message.totalCount = object.totalCount;
    } else {
      message.totalCount = 0;
    }
    return message;
  },
};

const baseRowError: object = { rowNumber: "", error: "", errorType: 0 };

export const RowError = {
  encode(
    message: RowError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rowNumber !== "") {
      writer.uint32(10).string(message.rowNumber);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.errorType !== 0) {
      writer.uint32(24).int32(message.errorType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RowError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRowError } as RowError;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rowNumber = reader.string();
          break;
        case 2:
          message.error = reader.string();
          break;
        case 3:
          message.errorType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RowError {
    const message = { ...baseRowError } as RowError;
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = String(object.error);
    } else {
      message.error = "";
    }
    if (object.errorType !== undefined && object.errorType !== null) {
      message.errorType = errorTypeFromJSON(object.errorType);
    } else {
      message.errorType = 0;
    }
    return message;
  },

  toJSON(message: RowError): unknown {
    const obj: any = {};
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    message.error !== undefined && (obj.error = message.error);
    message.errorType !== undefined &&
      (obj.errorType = errorTypeToJSON(message.errorType));
    return obj;
  },

  fromPartial(object: DeepPartial<RowError>): RowError {
    const message = { ...baseRowError } as RowError;
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = "";
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    } else {
      message.error = "";
    }
    if (object.errorType !== undefined && object.errorType !== null) {
      message.errorType = object.errorType;
    } else {
      message.errorType = 0;
    }
    return message;
  },
};

const baseKartoffelParams: object = {
  needDisconnect: false,
  phone: "",
  mobilePhone: "",
};

export const KartoffelParams = {
  encode(
    message: KartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== undefined) {
      writer.uint32(18).string(message.parent);
    }
    if (message.source !== undefined) {
      writer.uint32(26).string(message.source);
    }
    if (message.jobTitle !== undefined) {
      writer.uint32(34).string(message.jobTitle);
    }
    if (message.directGroup !== undefined) {
      writer.uint32(42).string(message.directGroup);
    }
    if (message.roleId !== undefined) {
      writer.uint32(50).string(message.roleId);
    }
    if (message.unit !== undefined) {
      writer.uint32(58).string(message.unit);
    }
    if (message.type !== undefined) {
      writer.uint32(66).string(message.type);
    }
    if (message.uniqueId !== undefined) {
      writer.uint32(74).string(message.uniqueId);
    }
    if (message.mail !== undefined) {
      writer.uint32(82).string(message.mail);
    }
    if (message.isRoleAttachable !== undefined) {
      writer.uint32(88).bool(message.isRoleAttachable);
    }
    if (message.id !== undefined) {
      writer.uint32(98).string(message.id);
    }
    if (message.needDisconnect === true) {
      writer.uint32(104).bool(message.needDisconnect);
    }
    if (message.firstName !== undefined) {
      writer.uint32(114).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(122).string(message.lastName);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(130).string(message.identityCard);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(138).string(message.personalNumber);
    }
    if (message.serviceType !== undefined) {
      writer.uint32(146).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(154).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(162).string(v!);
    }
    if (message.address !== undefined) {
      writer.uint32(170).string(message.address);
    }
    if (message.clearance !== undefined) {
      writer.uint32(178).string(message.clearance);
    }
    if (message.sex !== undefined) {
      writer.uint32(186).string(message.sex);
    }
    if (message.birthdate !== undefined) {
      writer.uint32(192).int64(message.birthdate);
    }
    if (message.entityType !== undefined) {
      writer.uint32(202).string(message.entityType);
    }
    if (message.roleEntityType !== undefined) {
      writer.uint32(210).string(message.roleEntityType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KartoffelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKartoffelParams } as KartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parent = reader.string();
          break;
        case 3:
          message.source = reader.string();
          break;
        case 4:
          message.jobTitle = reader.string();
          break;
        case 5:
          message.directGroup = reader.string();
          break;
        case 6:
          message.roleId = reader.string();
          break;
        case 7:
          message.unit = reader.string();
          break;
        case 8:
          message.type = reader.string();
          break;
        case 9:
          message.uniqueId = reader.string();
          break;
        case 10:
          message.mail = reader.string();
          break;
        case 11:
          message.isRoleAttachable = reader.bool();
          break;
        case 12:
          message.id = reader.string();
          break;
        case 13:
          message.needDisconnect = reader.bool();
          break;
        case 14:
          message.firstName = reader.string();
          break;
        case 15:
          message.lastName = reader.string();
          break;
        case 16:
          message.identityCard = reader.string();
          break;
        case 17:
          message.personalNumber = reader.string();
          break;
        case 18:
          message.serviceType = reader.string();
          break;
        case 19:
          message.phone.push(reader.string());
          break;
        case 20:
          message.mobilePhone.push(reader.string());
          break;
        case 21:
          message.address = reader.string();
          break;
        case 22:
          message.clearance = reader.string();
          break;
        case 23:
          message.sex = reader.string();
          break;
        case 24:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.entityType = reader.string();
          break;
        case 26:
          message.roleEntityType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KartoffelParams {
    const message = { ...baseKartoffelParams } as KartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = undefined;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = String(object.parent);
    } else {
      message.parent = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = undefined;
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = String(object.directGroup);
    } else {
      message.directGroup = undefined;
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = String(object.roleId);
    } else {
      message.roleId = undefined;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = String(object.unit);
    } else {
      message.unit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = undefined;
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = String(object.uniqueId);
    } else {
      message.uniqueId = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = undefined;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = undefined;
    }
    if (object.needDisconnect !== undefined && object.needDisconnect !== null) {
      message.needDisconnect = Boolean(object.needDisconnect);
    } else {
      message.needDisconnect = false;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = String(object.identityCard);
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = String(object.personalNumber);
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = String(object.serviceType);
    } else {
      message.serviceType = undefined;
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(String(e));
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(String(e));
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = undefined;
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = String(object.sex);
    } else {
      message.sex = undefined;
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = Number(object.birthdate);
    } else {
      message.birthdate = undefined;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType);
    } else {
      message.entityType = undefined;
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = String(object.roleEntityType);
    } else {
      message.roleEntityType = undefined;
    }
    return message;
  },

  toJSON(message: KartoffelParams): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.source !== undefined && (obj.source = message.source);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.directGroup !== undefined &&
      (obj.directGroup = message.directGroup);
    message.roleId !== undefined && (obj.roleId = message.roleId);
    message.unit !== undefined && (obj.unit = message.unit);
    message.type !== undefined && (obj.type = message.type);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
    message.id !== undefined && (obj.id = message.id);
    message.needDisconnect !== undefined &&
      (obj.needDisconnect = message.needDisconnect);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.identityCard !== undefined &&
      (obj.identityCard = message.identityCard);
    message.personalNumber !== undefined &&
      (obj.personalNumber = message.personalNumber);
    message.serviceType !== undefined &&
      (obj.serviceType = message.serviceType);
    if (message.phone) {
      obj.phone = message.phone.map((e) => e);
    } else {
      obj.phone = [];
    }
    if (message.mobilePhone) {
      obj.mobilePhone = message.mobilePhone.map((e) => e);
    } else {
      obj.mobilePhone = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.clearance !== undefined && (obj.clearance = message.clearance);
    message.sex !== undefined && (obj.sex = message.sex);
    message.birthdate !== undefined && (obj.birthdate = message.birthdate);
    message.entityType !== undefined && (obj.entityType = message.entityType);
    message.roleEntityType !== undefined &&
      (obj.roleEntityType = message.roleEntityType);
    return obj;
  },

  fromPartial(object: DeepPartial<KartoffelParams>): KartoffelParams {
    const message = { ...baseKartoffelParams } as KartoffelParams;
    message.phone = [];
    message.mobilePhone = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = undefined;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    } else {
      message.parent = undefined;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = undefined;
    }
    if (object.directGroup !== undefined && object.directGroup !== null) {
      message.directGroup = object.directGroup;
    } else {
      message.directGroup = undefined;
    }
    if (object.roleId !== undefined && object.roleId !== null) {
      message.roleId = object.roleId;
    } else {
      message.roleId = undefined;
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    } else {
      message.unit = undefined;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = undefined;
    }
    if (object.uniqueId !== undefined && object.uniqueId !== null) {
      message.uniqueId = object.uniqueId;
    } else {
      message.uniqueId = undefined;
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = undefined;
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = undefined;
    }
    if (object.needDisconnect !== undefined && object.needDisconnect !== null) {
      message.needDisconnect = object.needDisconnect;
    } else {
      message.needDisconnect = false;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    if (object.identityCard !== undefined && object.identityCard !== null) {
      message.identityCard = object.identityCard;
    } else {
      message.identityCard = undefined;
    }
    if (object.personalNumber !== undefined && object.personalNumber !== null) {
      message.personalNumber = object.personalNumber;
    } else {
      message.personalNumber = undefined;
    }
    if (object.serviceType !== undefined && object.serviceType !== null) {
      message.serviceType = object.serviceType;
    } else {
      message.serviceType = undefined;
    }
    if (object.phone !== undefined && object.phone !== null) {
      for (const e of object.phone) {
        message.phone.push(e);
      }
    }
    if (object.mobilePhone !== undefined && object.mobilePhone !== null) {
      for (const e of object.mobilePhone) {
        message.mobilePhone.push(e);
      }
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = undefined;
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = undefined;
    }
    if (object.sex !== undefined && object.sex !== null) {
      message.sex = object.sex;
    } else {
      message.sex = undefined;
    }
    if (object.birthdate !== undefined && object.birthdate !== null) {
      message.birthdate = object.birthdate;
    } else {
      message.birthdate = undefined;
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType;
    } else {
      message.entityType = undefined;
    }
    if (object.roleEntityType !== undefined && object.roleEntityType !== null) {
      message.roleEntityType = object.roleEntityType;
    } else {
      message.roleEntityType = undefined;
    }
    return message;
  },
};

const baseADParams: object = {};

export const ADParams = {
  encode(
    message: ADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ouDisplayName !== undefined) {
      writer.uint32(10).string(message.ouDisplayName);
    }
    if (message.ouName !== undefined) {
      writer.uint32(18).string(message.ouName);
    }
    if (message.name !== undefined) {
      writer.uint32(26).string(message.name);
    }
    if (message.samAccountName !== undefined) {
      writer.uint32(34).string(message.samAccountName);
    }
    if (message.jobTitle !== undefined) {
      writer.uint32(42).string(message.jobTitle);
    }
    if (message.oldSAMAccountName !== undefined) {
      writer.uint32(50).string(message.oldSAMAccountName);
    }
    if (message.newSAMAccountName !== undefined) {
      writer.uint32(58).string(message.newSAMAccountName);
    }
    if (message.upn !== undefined) {
      writer.uint32(66).string(message.upn);
    }
    if (message.firstName !== undefined) {
      writer.uint32(74).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(82).string(message.lastName);
    }
    if (message.fullName !== undefined) {
      writer.uint32(90).string(message.fullName);
    }
    if (message.rank !== undefined) {
      writer.uint32(98).string(message.rank);
    }
    if (message.roleSerialCode !== undefined) {
      writer.uint32(106).string(message.roleSerialCode);
    }
    if (message.oldName !== undefined) {
      writer.uint32(114).string(message.oldName);
    }
    if (message.newName !== undefined) {
      writer.uint32(122).string(message.newName);
    }
    if (message.newJobTitle !== undefined) {
      writer.uint32(130).string(message.newJobTitle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseADParams } as ADParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ouDisplayName = reader.string();
          break;
        case 2:
          message.ouName = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.samAccountName = reader.string();
          break;
        case 5:
          message.jobTitle = reader.string();
          break;
        case 6:
          message.oldSAMAccountName = reader.string();
          break;
        case 7:
          message.newSAMAccountName = reader.string();
          break;
        case 8:
          message.upn = reader.string();
          break;
        case 9:
          message.firstName = reader.string();
          break;
        case 10:
          message.lastName = reader.string();
          break;
        case 11:
          message.fullName = reader.string();
          break;
        case 12:
          message.rank = reader.string();
          break;
        case 13:
          message.roleSerialCode = reader.string();
          break;
        case 14:
          message.oldName = reader.string();
          break;
        case 15:
          message.newName = reader.string();
          break;
        case 16:
          message.newJobTitle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ADParams {
    const message = { ...baseADParams } as ADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = String(object.ouDisplayName);
    } else {
      message.ouDisplayName = undefined;
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = String(object.ouName);
    } else {
      message.ouName = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = undefined;
    }
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = String(object.samAccountName);
    } else {
      message.samAccountName = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = String(object.jobTitle);
    } else {
      message.jobTitle = undefined;
    }
    if (
      object.oldSAMAccountName !== undefined &&
      object.oldSAMAccountName !== null
    ) {
      message.oldSAMAccountName = String(object.oldSAMAccountName);
    } else {
      message.oldSAMAccountName = undefined;
    }
    if (
      object.newSAMAccountName !== undefined &&
      object.newSAMAccountName !== null
    ) {
      message.newSAMAccountName = String(object.newSAMAccountName);
    } else {
      message.newSAMAccountName = undefined;
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = String(object.upn);
    } else {
      message.upn = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = String(object.firstName);
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = String(object.lastName);
    } else {
      message.lastName = undefined;
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = String(object.fullName);
    } else {
      message.fullName = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = String(object.rank);
    } else {
      message.rank = undefined;
    }
    if (object.roleSerialCode !== undefined && object.roleSerialCode !== null) {
      message.roleSerialCode = String(object.roleSerialCode);
    } else {
      message.roleSerialCode = undefined;
    }
    if (object.oldName !== undefined && object.oldName !== null) {
      message.oldName = String(object.oldName);
    } else {
      message.oldName = undefined;
    }
    if (object.newName !== undefined && object.newName !== null) {
      message.newName = String(object.newName);
    } else {
      message.newName = undefined;
    }
    if (object.newJobTitle !== undefined && object.newJobTitle !== null) {
      message.newJobTitle = String(object.newJobTitle);
    } else {
      message.newJobTitle = undefined;
    }
    return message;
  },

  toJSON(message: ADParams): unknown {
    const obj: any = {};
    message.ouDisplayName !== undefined &&
      (obj.ouDisplayName = message.ouDisplayName);
    message.ouName !== undefined && (obj.ouName = message.ouName);
    message.name !== undefined && (obj.name = message.name);
    message.samAccountName !== undefined &&
      (obj.samAccountName = message.samAccountName);
    message.jobTitle !== undefined && (obj.jobTitle = message.jobTitle);
    message.oldSAMAccountName !== undefined &&
      (obj.oldSAMAccountName = message.oldSAMAccountName);
    message.newSAMAccountName !== undefined &&
      (obj.newSAMAccountName = message.newSAMAccountName);
    message.upn !== undefined && (obj.upn = message.upn);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.rank !== undefined && (obj.rank = message.rank);
    message.roleSerialCode !== undefined &&
      (obj.roleSerialCode = message.roleSerialCode);
    message.oldName !== undefined && (obj.oldName = message.oldName);
    message.newName !== undefined && (obj.newName = message.newName);
    message.newJobTitle !== undefined &&
      (obj.newJobTitle = message.newJobTitle);
    return obj;
  },

  fromPartial(object: DeepPartial<ADParams>): ADParams {
    const message = { ...baseADParams } as ADParams;
    if (object.ouDisplayName !== undefined && object.ouDisplayName !== null) {
      message.ouDisplayName = object.ouDisplayName;
    } else {
      message.ouDisplayName = undefined;
    }
    if (object.ouName !== undefined && object.ouName !== null) {
      message.ouName = object.ouName;
    } else {
      message.ouName = undefined;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = undefined;
    }
    if (object.samAccountName !== undefined && object.samAccountName !== null) {
      message.samAccountName = object.samAccountName;
    } else {
      message.samAccountName = undefined;
    }
    if (object.jobTitle !== undefined && object.jobTitle !== null) {
      message.jobTitle = object.jobTitle;
    } else {
      message.jobTitle = undefined;
    }
    if (
      object.oldSAMAccountName !== undefined &&
      object.oldSAMAccountName !== null
    ) {
      message.oldSAMAccountName = object.oldSAMAccountName;
    } else {
      message.oldSAMAccountName = undefined;
    }
    if (
      object.newSAMAccountName !== undefined &&
      object.newSAMAccountName !== null
    ) {
      message.newSAMAccountName = object.newSAMAccountName;
    } else {
      message.newSAMAccountName = undefined;
    }
    if (object.upn !== undefined && object.upn !== null) {
      message.upn = object.upn;
    } else {
      message.upn = undefined;
    }
    if (object.firstName !== undefined && object.firstName !== null) {
      message.firstName = object.firstName;
    } else {
      message.firstName = undefined;
    }
    if (object.lastName !== undefined && object.lastName !== null) {
      message.lastName = object.lastName;
    } else {
      message.lastName = undefined;
    }
    if (object.fullName !== undefined && object.fullName !== null) {
      message.fullName = object.fullName;
    } else {
      message.fullName = undefined;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = object.rank;
    } else {
      message.rank = undefined;
    }
    if (object.roleSerialCode !== undefined && object.roleSerialCode !== null) {
      message.roleSerialCode = object.roleSerialCode;
    } else {
      message.roleSerialCode = undefined;
    }
    if (object.oldName !== undefined && object.oldName !== null) {
      message.oldName = object.oldName;
    } else {
      message.oldName = undefined;
    }
    if (object.newName !== undefined && object.newName !== null) {
      message.newName = object.newName;
    } else {
      message.newName = undefined;
    }
    if (object.newJobTitle !== undefined && object.newJobTitle !== null) {
      message.newJobTitle = object.newJobTitle;
    } else {
      message.newJobTitle = undefined;
    }
    return message;
  },
};

const baseRequestReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
  requestIds: "",
};

export const RequestReq = {
  encode(
    message: RequestReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      KartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ADParams.encode(message.adParams, writer.uint32(98).fork()).ldelim();
    }
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(114).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(122).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(128).int64(message.due);
    }
    if (message.isPartOfBulk !== undefined) {
      writer.uint32(136).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== undefined) {
      writer.uint32(146).string(message.bulkRequestId);
    }
    for (const v of message.requestIds) {
      writer.uint32(154).string(v!);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(162).string(message.rowNumber);
    }
    for (const v of message.rowErrors) {
      RowError.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.excelFilePath !== undefined) {
      writer.uint32(178).string(message.excelFilePath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestReq } as RequestReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = KartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.adParams = ADParams.decode(reader, reader.uint32());
          break;
        case 13:
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.comments = reader.string();
          break;
        case 15:
          message.approversComments = reader.string();
          break;
        case 16:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.isPartOfBulk = reader.bool();
          break;
        case 18:
          message.bulkRequestId = reader.string();
          break;
        case 19:
          message.requestIds.push(reader.string());
          break;
        case 20:
          message.rowNumber = reader.string();
          break;
        case 21:
          message.rowErrors.push(RowError.decode(reader, reader.uint32()));
          break;
        case 22:
          message.excelFilePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestReq {
    const message = { ...baseRequestReq } as RequestReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromJSON(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromJSON(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = undefined;
    }
    return message;
  },

  toJSON(message: RequestReq): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? KartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ADParams.toJSON(message.adParams)
        : undefined);
    message.additionalParams !== undefined &&
      (obj.additionalParams = message.additionalParams
        ? AdditionalParams.toJSON(message.additionalParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    if (message.rowErrors) {
      obj.rowErrors = message.rowErrors.map((e) =>
        e ? RowError.toJSON(e) : undefined
      );
    } else {
      obj.rowErrors = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestReq>): RequestReq {
    const message = { ...baseRequestReq } as RequestReq;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromPartial(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = undefined;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromPartial(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = undefined;
    }
    return message;
  },
};

const baseRequest: object = {
  status: 0,
  comments: "",
  approversComments: "",
  due: 0,
  requestIds: "",
  id: "",
  createdAt: 0,
  updatedAt: 0,
  type: 0,
  serialNumber: "",
  needSecurityDecision: false,
  needSuperSecurityDecision: false,
};

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.submittedBy !== undefined) {
      EntityMin.encode(message.submittedBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.commanderDecision !== undefined) {
      ApproverDecision.encode(
        message.commanderDecision,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.securityDecision !== undefined) {
      ApproverDecision.encode(
        message.securityDecision,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.superSecurityDecision !== undefined) {
      ApproverDecision.encode(
        message.superSecurityDecision,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.superSecurityApprovers) {
      EntityMin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(82).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      KartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ADParams.encode(message.adParams, writer.uint32(106).fork()).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(114).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(122).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(128).int64(message.due);
    }
    if (message.isPartOfBulk !== undefined) {
      writer.uint32(136).bool(message.isPartOfBulk);
    }
    if (message.bulkRequestId !== undefined) {
      writer.uint32(146).string(message.bulkRequestId);
    }
    for (const v of message.requestIds) {
      writer.uint32(154).string(v!);
    }
    if (message.rowNumber !== undefined) {
      writer.uint32(162).string(message.rowNumber);
    }
    for (const v of message.rowErrors) {
      RowError.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.excelFilePath !== undefined) {
      writer.uint32(178).string(message.excelFilePath);
    }
    if (message.id !== "") {
      writer.uint32(186).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(192).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(200).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(208).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(218).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(224).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(232).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submittedBy = EntityMin.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.commanderDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.securityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.superSecurityDecision = ApproverDecision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.superSecurityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 11:
          message.kartoffelParams = KartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.adParams = ADParams.decode(reader, reader.uint32());
          break;
        case 14:
          message.comments = reader.string();
          break;
        case 15:
          message.approversComments = reader.string();
          break;
        case 16:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.isPartOfBulk = reader.bool();
          break;
        case 18:
          message.bulkRequestId = reader.string();
          break;
        case 19:
          message.requestIds.push(reader.string());
          break;
        case 20:
          message.rowNumber = reader.string();
          break;
        case 21:
          message.rowErrors.push(RowError.decode(reader, reader.uint32()));
          break;
        case 22:
          message.excelFilePath = reader.string();
          break;
        case 23:
          message.id = reader.string();
          break;
        case 24:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 25:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 26:
          message.type = reader.int32() as any;
          break;
        case 27:
          message.serialNumber = reader.string();
          break;
        case 28:
          message.needSecurityDecision = reader.bool();
          break;
        case 29:
          message.needSuperSecurityDecision = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = { ...baseRequest } as Request;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromJSON(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status);
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromJSON(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromJSON(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromJSON(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromJSON(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromJSON(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromJSON(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromJSON(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromJSON(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromJSON(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = String(object.comments);
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = String(object.approversComments);
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = Number(object.due);
    } else {
      message.due = 0;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = Boolean(object.isPartOfBulk);
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = String(object.bulkRequestId);
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(String(e));
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = String(object.rowNumber);
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromJSON(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = String(object.excelFilePath);
    } else {
      message.excelFilePath = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = Number(object.updatedAt);
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = requestTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = String(object.serialNumber);
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = Boolean(object.needSecurityDecision);
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = Boolean(
        object.needSuperSecurityDecision
      );
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.submittedBy !== undefined &&
      (obj.submittedBy = message.submittedBy
        ? EntityMin.toJSON(message.submittedBy)
        : undefined);
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    message.superSecurityDecision !== undefined &&
      (obj.superSecurityDecision = message.superSecurityDecision
        ? ApproverDecision.toJSON(message.superSecurityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    if (message.securityApprovers) {
      obj.securityApprovers = message.securityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.securityApprovers = [];
    }
    if (message.superSecurityApprovers) {
      obj.superSecurityApprovers = message.superSecurityApprovers.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.superSecurityApprovers = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
    message.kartoffelParams !== undefined &&
      (obj.kartoffelParams = message.kartoffelParams
        ? KartoffelParams.toJSON(message.kartoffelParams)
        : undefined);
    message.additionalParams !== undefined &&
      (obj.additionalParams = message.additionalParams
        ? AdditionalParams.toJSON(message.additionalParams)
        : undefined);
    message.adParams !== undefined &&
      (obj.adParams = message.adParams
        ? ADParams.toJSON(message.adParams)
        : undefined);
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    message.isPartOfBulk !== undefined &&
      (obj.isPartOfBulk = message.isPartOfBulk);
    message.bulkRequestId !== undefined &&
      (obj.bulkRequestId = message.bulkRequestId);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => e);
    } else {
      obj.requestIds = [];
    }
    message.rowNumber !== undefined && (obj.rowNumber = message.rowNumber);
    if (message.rowErrors) {
      obj.rowErrors = message.rowErrors.map((e) =>
        e ? RowError.toJSON(e) : undefined
      );
    } else {
      obj.rowErrors = [];
    }
    message.excelFilePath !== undefined &&
      (obj.excelFilePath = message.excelFilePath);
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.type !== undefined && (obj.type = requestTypeToJSON(message.type));
    message.serialNumber !== undefined &&
      (obj.serialNumber = message.serialNumber);
    message.needSecurityDecision !== undefined &&
      (obj.needSecurityDecision = message.needSecurityDecision);
    message.needSuperSecurityDecision !== undefined &&
      (obj.needSuperSecurityDecision = message.needSuperSecurityDecision);
    return obj;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    message.commanders = [];
    message.securityApprovers = [];
    message.superSecurityApprovers = [];
    message.requestIds = [];
    message.rowErrors = [];
    if (object.submittedBy !== undefined && object.submittedBy !== null) {
      message.submittedBy = EntityMin.fromPartial(object.submittedBy);
    } else {
      message.submittedBy = undefined;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = 0;
    }
    if (
      object.commanderDecision !== undefined &&
      object.commanderDecision !== null
    ) {
      message.commanderDecision = ApproverDecision.fromPartial(
        object.commanderDecision
      );
    } else {
      message.commanderDecision = undefined;
    }
    if (
      object.securityDecision !== undefined &&
      object.securityDecision !== null
    ) {
      message.securityDecision = ApproverDecision.fromPartial(
        object.securityDecision
      );
    } else {
      message.securityDecision = undefined;
    }
    if (
      object.superSecurityDecision !== undefined &&
      object.superSecurityDecision !== null
    ) {
      message.superSecurityDecision = ApproverDecision.fromPartial(
        object.superSecurityDecision
      );
    } else {
      message.superSecurityDecision = undefined;
    }
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.securityApprovers !== undefined &&
      object.securityApprovers !== null
    ) {
      for (const e of object.securityApprovers) {
        message.securityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.superSecurityApprovers !== undefined &&
      object.superSecurityApprovers !== null
    ) {
      for (const e of object.superSecurityApprovers) {
        message.superSecurityApprovers.push(EntityMin.fromPartial(e));
      }
    }
    if (
      object.kartoffelStatus !== undefined &&
      object.kartoffelStatus !== null
    ) {
      message.kartoffelStatus = KartoffelStatus.fromPartial(
        object.kartoffelStatus
      );
    } else {
      message.kartoffelStatus = undefined;
    }
    if (object.adStatus !== undefined && object.adStatus !== null) {
      message.adStatus = ADStatus.fromPartial(object.adStatus);
    } else {
      message.adStatus = undefined;
    }
    if (
      object.kartoffelParams !== undefined &&
      object.kartoffelParams !== null
    ) {
      message.kartoffelParams = KartoffelParams.fromPartial(
        object.kartoffelParams
      );
    } else {
      message.kartoffelParams = undefined;
    }
    if (
      object.additionalParams !== undefined &&
      object.additionalParams !== null
    ) {
      message.additionalParams = AdditionalParams.fromPartial(
        object.additionalParams
      );
    } else {
      message.additionalParams = undefined;
    }
    if (object.adParams !== undefined && object.adParams !== null) {
      message.adParams = ADParams.fromPartial(object.adParams);
    } else {
      message.adParams = undefined;
    }
    if (object.comments !== undefined && object.comments !== null) {
      message.comments = object.comments;
    } else {
      message.comments = "";
    }
    if (
      object.approversComments !== undefined &&
      object.approversComments !== null
    ) {
      message.approversComments = object.approversComments;
    } else {
      message.approversComments = "";
    }
    if (object.due !== undefined && object.due !== null) {
      message.due = object.due;
    } else {
      message.due = 0;
    }
    if (object.isPartOfBulk !== undefined && object.isPartOfBulk !== null) {
      message.isPartOfBulk = object.isPartOfBulk;
    } else {
      message.isPartOfBulk = undefined;
    }
    if (object.bulkRequestId !== undefined && object.bulkRequestId !== null) {
      message.bulkRequestId = object.bulkRequestId;
    } else {
      message.bulkRequestId = undefined;
    }
    if (object.requestIds !== undefined && object.requestIds !== null) {
      for (const e of object.requestIds) {
        message.requestIds.push(e);
      }
    }
    if (object.rowNumber !== undefined && object.rowNumber !== null) {
      message.rowNumber = object.rowNumber;
    } else {
      message.rowNumber = undefined;
    }
    if (object.rowErrors !== undefined && object.rowErrors !== null) {
      for (const e of object.rowErrors) {
        message.rowErrors.push(RowError.fromPartial(e));
      }
    }
    if (object.excelFilePath !== undefined && object.excelFilePath !== null) {
      message.excelFilePath = object.excelFilePath;
    } else {
      message.excelFilePath = undefined;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = object.updatedAt;
    } else {
      message.updatedAt = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.serialNumber !== undefined && object.serialNumber !== null) {
      message.serialNumber = object.serialNumber;
    } else {
      message.serialNumber = "";
    }
    if (
      object.needSecurityDecision !== undefined &&
      object.needSecurityDecision !== null
    ) {
      message.needSecurityDecision = object.needSecurityDecision;
    } else {
      message.needSecurityDecision = false;
    }
    if (
      object.needSuperSecurityDecision !== undefined &&
      object.needSuperSecurityDecision !== null
    ) {
      message.needSuperSecurityDecision = object.needSuperSecurityDecision;
    } else {
      message.needSuperSecurityDecision = false;
    }
    return message;
  },
};

export interface RequestService {
  CreateRoleRequest(request: CreateRoleReq): Promise<CreateRoleRes>;
  CreateOGRequest(request: CreateOGReq): Promise<CreateOGRes>;
  CreateEntityRequest(request: CreateEntityReq): Promise<CreateEntityRes>;
  CreateNewApproverRequest(
    request: CreateNewApproverReq
  ): Promise<CreateNewApproverRes>;
  RenameOGRequest(request: RenameOGReq): Promise<RenameOGRes>;
  RenameRoleRequest(request: RenameRoleReq): Promise<EditEntityRes>;
  EditEntityRequest(request: EditEntityReq): Promise<EditEntityRes>;
  DeleteOGRequest(request: DeleteOGReq): Promise<DeleteOGRes>;
  DeleteRoleRequest(request: DeleteRoleReq): Promise<DeleteRoleRes>;
  DeleteEntityRequest(request: DeleteEntityReq): Promise<DeleteEntityRes>;
  AssignRoleToEntityRequest(
    request: AssignRoleToEntityReq
  ): Promise<AssignRoleToEntityRes>;
  DisconectRoleFromEntityRequest(
    request: DisconectRoleFromEntityReq
  ): Promise<DisconectRoleFromEntityRes>;
  ChangeRoleHierarchyRequest(
    request: ChangeRoleHierarchyReq
  ): Promise<ChangeRoleHierarchyRes>;
  CreateRoleBulkRequest(request: CreateRoleBulkReq): Promise<CreateRoleBulkRes>;
  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes>;
  UpdateRequest(request: UpdateReq): Promise<Request>;
  UpdateKartoffelStatus(request: UpdateKartoffelStatusReq): Promise<Request>;
  UpdateADStatus(request: UpdateADStatusReq): Promise<Request>;
  DeleteRequest(request: DeleteReq): Promise<SuccessMessage>;
  GetRequestsByPerson(request: GetRequestsByPersonReq): Promise<RequestArray>;
  GetRequestBySerialNumber(
    request: GetRequestBySerialNumberReq
  ): Promise<Request>;
  GetAllRequests(request: GetAllRequestsReq): Promise<RequestArray>;
  GetRequestById(request: GetRequestByIdReq): Promise<Request>;
  UpdateApproverDecision(request: UpdateApproverDecisionReq): Promise<Request>;
  IsRequestApproved(
    request: IsRequestApprovedReq
  ): Promise<IsRequestApprovedRes>;
  CanPushToKartoffelQueue(
    request: CanPushToQueueReq
  ): Promise<CanPushToQueueRes>;
  CanPushToADQueue(request: CanPushToQueueReq): Promise<CanPushToQueueRes>;
  IncrementKartoffelRetries(request: IncrementRetriesReq): Promise<Request>;
  IncrementADRetries(request: IncrementRetriesReq): Promise<Request>;
  UpdateCommanders(request: UpdateApproversReq): Promise<Request>;
  UpdateSecurityApprovers(request: UpdateApproversReq): Promise<Request>;
  UpdateSuperSecurityApprovers(request: UpdateApproversReq): Promise<Request>;
  GetRequestsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestArray>;
  GetRequestIdsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestIdArray>;
  PushError(request: PushErrorReq): Promise<Request>;
  SyncBulkRequest(request: SyncBulkRequestReq): Promise<Request>;
  SearchRequestsByDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray>;
}

export class RequestServiceClientImpl implements RequestService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoleRequest = this.CreateRoleRequest.bind(this);
    this.CreateOGRequest = this.CreateOGRequest.bind(this);
    this.CreateEntityRequest = this.CreateEntityRequest.bind(this);
    this.CreateNewApproverRequest = this.CreateNewApproverRequest.bind(this);
    this.RenameOGRequest = this.RenameOGRequest.bind(this);
    this.RenameRoleRequest = this.RenameRoleRequest.bind(this);
    this.EditEntityRequest = this.EditEntityRequest.bind(this);
    this.DeleteOGRequest = this.DeleteOGRequest.bind(this);
    this.DeleteRoleRequest = this.DeleteRoleRequest.bind(this);
    this.DeleteEntityRequest = this.DeleteEntityRequest.bind(this);
    this.AssignRoleToEntityRequest = this.AssignRoleToEntityRequest.bind(this);
    this.DisconectRoleFromEntityRequest =
      this.DisconectRoleFromEntityRequest.bind(this);
    this.ChangeRoleHierarchyRequest =
      this.ChangeRoleHierarchyRequest.bind(this);
    this.CreateRoleBulkRequest = this.CreateRoleBulkRequest.bind(this);
    this.ChangeRoleHierarchyBulkRequest =
      this.ChangeRoleHierarchyBulkRequest.bind(this);
    this.UpdateRequest = this.UpdateRequest.bind(this);
    this.UpdateKartoffelStatus = this.UpdateKartoffelStatus.bind(this);
    this.UpdateADStatus = this.UpdateADStatus.bind(this);
    this.DeleteRequest = this.DeleteRequest.bind(this);
    this.GetRequestsByPerson = this.GetRequestsByPerson.bind(this);
    this.GetRequestBySerialNumber = this.GetRequestBySerialNumber.bind(this);
    this.GetAllRequests = this.GetAllRequests.bind(this);
    this.GetRequestById = this.GetRequestById.bind(this);
    this.UpdateApproverDecision = this.UpdateApproverDecision.bind(this);
    this.IsRequestApproved = this.IsRequestApproved.bind(this);
    this.CanPushToKartoffelQueue = this.CanPushToKartoffelQueue.bind(this);
    this.CanPushToADQueue = this.CanPushToADQueue.bind(this);
    this.IncrementKartoffelRetries = this.IncrementKartoffelRetries.bind(this);
    this.IncrementADRetries = this.IncrementADRetries.bind(this);
    this.UpdateCommanders = this.UpdateCommanders.bind(this);
    this.UpdateSecurityApprovers = this.UpdateSecurityApprovers.bind(this);
    this.UpdateSuperSecurityApprovers =
      this.UpdateSuperSecurityApprovers.bind(this);
    this.GetRequestsInProgressByDue =
      this.GetRequestsInProgressByDue.bind(this);
    this.GetRequestIdsInProgressByDue =
      this.GetRequestIdsInProgressByDue.bind(this);
    this.PushError = this.PushError.bind(this);
    this.SyncBulkRequest = this.SyncBulkRequest.bind(this);
    this.SearchRequestsByDisplayName =
      this.SearchRequestsByDisplayName.bind(this);
  }
  CreateRoleRequest(request: CreateRoleReq): Promise<CreateRoleRes> {
    const data = CreateRoleReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateRoleRequest",
      data
    );
    return promise.then((data) => CreateRoleRes.decode(new _m0.Reader(data)));
  }

  CreateOGRequest(request: CreateOGReq): Promise<CreateOGRes> {
    const data = CreateOGReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateOGRequest",
      data
    );
    return promise.then((data) => CreateOGRes.decode(new _m0.Reader(data)));
  }

  CreateEntityRequest(request: CreateEntityReq): Promise<CreateEntityRes> {
    const data = CreateEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateEntityRequest",
      data
    );
    return promise.then((data) => CreateEntityRes.decode(new _m0.Reader(data)));
  }

  CreateNewApproverRequest(
    request: CreateNewApproverReq
  ): Promise<CreateNewApproverRes> {
    const data = CreateNewApproverReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateNewApproverRequest",
      data
    );
    return promise.then((data) =>
      CreateNewApproverRes.decode(new _m0.Reader(data))
    );
  }

  RenameOGRequest(request: RenameOGReq): Promise<RenameOGRes> {
    const data = RenameOGReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "RenameOGRequest",
      data
    );
    return promise.then((data) => RenameOGRes.decode(new _m0.Reader(data)));
  }

  RenameRoleRequest(request: RenameRoleReq): Promise<EditEntityRes> {
    const data = RenameRoleReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "RenameRoleRequest",
      data
    );
    return promise.then((data) => EditEntityRes.decode(new _m0.Reader(data)));
  }

  EditEntityRequest(request: EditEntityReq): Promise<EditEntityRes> {
    const data = EditEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "EditEntityRequest",
      data
    );
    return promise.then((data) => EditEntityRes.decode(new _m0.Reader(data)));
  }

  DeleteOGRequest(request: DeleteOGReq): Promise<DeleteOGRes> {
    const data = DeleteOGReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "DeleteOGRequest",
      data
    );
    return promise.then((data) => DeleteOGRes.decode(new _m0.Reader(data)));
  }

  DeleteRoleRequest(request: DeleteRoleReq): Promise<DeleteRoleRes> {
    const data = DeleteRoleReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "DeleteRoleRequest",
      data
    );
    return promise.then((data) => DeleteRoleRes.decode(new _m0.Reader(data)));
  }

  DeleteEntityRequest(request: DeleteEntityReq): Promise<DeleteEntityRes> {
    const data = DeleteEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "DeleteEntityRequest",
      data
    );
    return promise.then((data) => DeleteEntityRes.decode(new _m0.Reader(data)));
  }

  AssignRoleToEntityRequest(
    request: AssignRoleToEntityReq
  ): Promise<AssignRoleToEntityRes> {
    const data = AssignRoleToEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "AssignRoleToEntityRequest",
      data
    );
    return promise.then((data) =>
      AssignRoleToEntityRes.decode(new _m0.Reader(data))
    );
  }

  DisconectRoleFromEntityRequest(
    request: DisconectRoleFromEntityReq
  ): Promise<DisconectRoleFromEntityRes> {
    const data = DisconectRoleFromEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "DisconectRoleFromEntityRequest",
      data
    );
    return promise.then((data) =>
      DisconectRoleFromEntityRes.decode(new _m0.Reader(data))
    );
  }

  ChangeRoleHierarchyRequest(
    request: ChangeRoleHierarchyReq
  ): Promise<ChangeRoleHierarchyRes> {
    const data = ChangeRoleHierarchyReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "ChangeRoleHierarchyRequest",
      data
    );
    return promise.then((data) =>
      ChangeRoleHierarchyRes.decode(new _m0.Reader(data))
    );
  }

  CreateRoleBulkRequest(
    request: CreateRoleBulkReq
  ): Promise<CreateRoleBulkRes> {
    const data = CreateRoleBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateRoleBulkRequest",
      data
    );
    return promise.then((data) =>
      CreateRoleBulkRes.decode(new _m0.Reader(data))
    );
  }

  ChangeRoleHierarchyBulkRequest(
    request: ChangeRoleHierarchyBulkReq
  ): Promise<ChangeRoleHierarchyBulkRes> {
    const data = ChangeRoleHierarchyBulkReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "ChangeRoleHierarchyBulkRequest",
      data
    );
    return promise.then((data) =>
      ChangeRoleHierarchyBulkRes.decode(new _m0.Reader(data))
    );
  }

  UpdateRequest(request: UpdateReq): Promise<Request> {
    const data = UpdateReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateRequest",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateKartoffelStatus(request: UpdateKartoffelStatusReq): Promise<Request> {
    const data = UpdateKartoffelStatusReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateKartoffelStatus",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateADStatus(request: UpdateADStatusReq): Promise<Request> {
    const data = UpdateADStatusReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateADStatus",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  DeleteRequest(request: DeleteReq): Promise<SuccessMessage> {
    const data = DeleteReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "DeleteRequest",
      data
    );
    return promise.then((data) => SuccessMessage.decode(new _m0.Reader(data)));
  }

  GetRequestsByPerson(request: GetRequestsByPersonReq): Promise<RequestArray> {
    const data = GetRequestsByPersonReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsByPerson",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestBySerialNumber(
    request: GetRequestBySerialNumberReq
  ): Promise<Request> {
    const data = GetRequestBySerialNumberReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestBySerialNumber",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  GetAllRequests(request: GetAllRequestsReq): Promise<RequestArray> {
    const data = GetAllRequestsReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetAllRequests",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestById(request: GetRequestByIdReq): Promise<Request> {
    const data = GetRequestByIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestById",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateApproverDecision(request: UpdateApproverDecisionReq): Promise<Request> {
    const data = UpdateApproverDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateApproverDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  IsRequestApproved(
    request: IsRequestApprovedReq
  ): Promise<IsRequestApprovedRes> {
    const data = IsRequestApprovedReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "IsRequestApproved",
      data
    );
    return promise.then((data) =>
      IsRequestApprovedRes.decode(new _m0.Reader(data))
    );
  }

  CanPushToKartoffelQueue(
    request: CanPushToQueueReq
  ): Promise<CanPushToQueueRes> {
    const data = CanPushToQueueReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CanPushToKartoffelQueue",
      data
    );
    return promise.then((data) =>
      CanPushToQueueRes.decode(new _m0.Reader(data))
    );
  }

  CanPushToADQueue(request: CanPushToQueueReq): Promise<CanPushToQueueRes> {
    const data = CanPushToQueueReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CanPushToADQueue",
      data
    );
    return promise.then((data) =>
      CanPushToQueueRes.decode(new _m0.Reader(data))
    );
  }

  IncrementKartoffelRetries(request: IncrementRetriesReq): Promise<Request> {
    const data = IncrementRetriesReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "IncrementKartoffelRetries",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  IncrementADRetries(request: IncrementRetriesReq): Promise<Request> {
    const data = IncrementRetriesReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "IncrementADRetries",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateCommanders(request: UpdateApproversReq): Promise<Request> {
    const data = UpdateApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateCommanders",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSecurityApprovers(request: UpdateApproversReq): Promise<Request> {
    const data = UpdateApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateSecurityApprovers",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSuperSecurityApprovers(request: UpdateApproversReq): Promise<Request> {
    const data = UpdateApproversReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateSuperSecurityApprovers",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  GetRequestsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestArray> {
    const data = GetRequestsInProgressByDueReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsInProgressByDue",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestIdsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestIdArray> {
    const data = GetRequestsInProgressByDueReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestIdsInProgressByDue",
      data
    );
    return promise.then((data) => RequestIdArray.decode(new _m0.Reader(data)));
  }

  PushError(request: PushErrorReq): Promise<Request> {
    const data = PushErrorReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "PushError",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  SyncBulkRequest(request: SyncBulkRequestReq): Promise<Request> {
    const data = SyncBulkRequestReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SyncBulkRequest",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  SearchRequestsByDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray> {
    const data = SearchRequestsByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SearchRequestsByDisplayName",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
