/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "RequestService";

export enum ApproverType {
  SECURITY = 0,
  COMMANDER = 1,
  UNRECOGNIZED = -1,
}

export function approverTypeFromJSON(object: any): ApproverType {
  switch (object) {
    case 0:
    case "SECURITY":
      return ApproverType.SECURITY;
    case 1:
    case "COMMANDER":
      return ApproverType.COMMANDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApproverType.UNRECOGNIZED;
  }
}

export function approverTypeToJSON(object: ApproverType): string {
  switch (object) {
    case ApproverType.SECURITY:
      return "SECURITY";
    case ApproverType.COMMANDER:
      return "COMMANDER";
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
  DISCONNECT_ROLE = 9,
  ADD_APPROVER = 10,
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
    case "DISCONNECT_ROLE":
      return RequestType.DISCONNECT_ROLE;
    case 10:
    case "ADD_APPROVER":
      return RequestType.ADD_APPROVER;
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
    case RequestType.DISCONNECT_ROLE:
      return "DISCONNECT_ROLE";
    case RequestType.ADD_APPROVER:
      return "ADD_APPROVER";
    default:
      return "UNKNOWN";
  }
}

export enum RequestStatus {
  SUBMITTED = 0,
  DECLINED = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  FAILED = 4,
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
    case "IN_PROGRESS":
      return RequestStatus.IN_PROGRESS;
    case 3:
    case "DONE":
      return RequestStatus.DONE;
    case 4:
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
  STAGE_IN_PROGRESS = 1,
  STAGE_DONE = 2,
  STAGE_FAILED = 3,
  UNRECOGNIZED = -1,
}

export function stageStatusFromJSON(object: any): StageStatus {
  switch (object) {
    case 0:
    case "STAGE_UNKNOWN":
      return StageStatus.STAGE_UNKNOWN;
    case 1:
    case "STAGE_IN_PROGRESS":
      return StageStatus.STAGE_IN_PROGRESS;
    case 2:
    case "STAGE_DONE":
      return StageStatus.STAGE_DONE;
    case 3:
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

export interface GetRequestsInProgressByDueReq {
  due: number;
}

export interface RequestIdArray {
  requestIds: string[];
  count: number;
}

export interface UpdateDecisionReq {
  id: string;
  approverDecision: ApproverDecision | undefined;
}

export interface IncrementRetriesReq {
  id: string;
}

export interface CanPushToQueueReq {
  id: string;
}

export interface CanPushToQueueRes {
  canPushToQueue: boolean;
}

export interface GetRequestsByIdentifierReq {
  identifier: string;
  from: number;
  to: number;
}

export interface SearchRequestsByDisplayNameReq {
  displayName: string;
  from: number;
  to: number;
}

export interface UpdateKartoffelStatusReq {
  requestId: string;
  status: StageStatus;
  message?: string | undefined;
  createdId?: string | undefined;
}

export interface UpdateADStatusReq {
  requestId: string;
  status: StageStatus;
  message: string;
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

export interface GetRequestsByPersonIdReq {
  id: string;
  from: number;
  to: number;
}

export interface GetAllRequestsReq {
  from: number;
  to: number;
}

export interface GetRequestByIdReq {
  id: string;
}

export interface DeleteReq {
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
  /**
   * repeated EntityMin commanders = 11;
   * repeated EntityMin securityApprovers = 12;
   */
  due?: number | undefined;
}

/** NewApproverRequest */
export interface CreateNewApproverReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  additionalParams: AdditionalParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface CreateNewApproverRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
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

/** CreateOG */
export interface CreateOGReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateOGKartoffelParams | undefined;
  adParams: CreateOGADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface CreateOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
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

/** CreateRole */
export interface CreateRoleReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateRoleKartoffelParams | undefined;
  adParams: CreateRoleADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface CreateRoleRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateRoleKartoffelParams | undefined;
  adParams: CreateRoleADParams | undefined;
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

export interface CreateRoleKartoffelParams {
  /** for role */
  jobTitle: string;
  /** groupId of direct father */
  directGroup: string;
  /** T154514... generated automatically somehow */
  roleId: string;
  /** clearance of the role */
  clearance: string;
  /** forDigitalIdentity */
  type: string;
  /** always oneTree */
  source: string;
  /** T154514... generated automatically somehow */
  uniqueId: string;
  /** identical to uniqueId */
  mail: string;
  /** true, if the role is unoccupied */
  isRoleAttachable: boolean;
}

export interface CreateRoleADParams {
  /** T154514... generated automatically somehow */
  samAccountName: string;
  /** Role's full hierarchy */
  ouDisplayName: string;
  /** name of the role */
  jobTitle: string;
}

/** CreateEntity */
export interface CreateEntityReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: CreateEntityKartoffelParams | undefined;
  adParams: CreateEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface CreateEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

export interface CreateEntityADParams {}

/** AssignRoleToEntity */
export interface AssignRoleToEntityReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: AssignRoleToEntityKartoffelParams | undefined;
  adParams: AssignRoleToEntityADParams | undefined;
  comments: string;
  approversComments: string;
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

export interface AssignRoleToEntityKartoffelParams {
  id: string;
  uniqueId: string;
}

export interface AssignRoleToEntityADParams {
  oldSAMAccountName: string;
  newSAMAccountName: string;
  upn: string;
  firstName: string;
  lastName: string;
  fullName: string;
  rank: string;
  roleSerialCode: string;
}

/** RenameOG */
export interface RenameOGReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: RenameOGKartoffelParams | undefined;
  adParams: RenameOGADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface RenameOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

/** ? */
export interface RenameOGKartoffelParams {}

/** ? */
export interface RenameOGADParams {}

/** RenameRole */
export interface RenameRoleReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: RenameRoleKartoffelParams | undefined;
  adParams: RenameRoleADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface RenameRoleRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

/** ? */
export interface RenameRoleKartoffelParams {}

/** ? */
export interface RenameRoleADParams {}

/** EditEntity */
export interface EditEntityReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: EditEntityKartoffelParams | undefined;
  adParams: EditEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface EditEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

export interface EditEntityKartoffelParams {
  id: string;
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

export interface EditEntityADParams {
  samAccountName: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

/** DeleteOG */
export interface DeleteOGReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DeleteOGKartoffelParams | undefined;
  adParams: DeleteOGADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface DeleteOGRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

export interface DeleteOGKartoffelParams {
  id: string;
}

/** ? */
export interface DeleteOGADParams {}

export interface GetRequestBySerialNumberReq {
  serialNumber: string;
}

/** DeleteRole */
export interface DeleteRoleReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DeleteRoleKartoffelParams | undefined;
  adParams: DeleteRoleADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface DeleteRoleRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

export interface DeleteRoleKartoffelParams {
  roleId: string;
  uniqueId: string;
}

export interface DeleteRoleADParams {
  samAccountName: string;
}

/** DisconectRoleFromEntity */
export interface DisconectRoleFromEntityReq {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: DisconectRoleFromEntityKartoffelParams | undefined;
  adParams: DisconectRoleFromEntityADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface DisconectRoleFromEntityRes {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
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

export interface DisconectRoleFromEntityKartoffelParams {
  id: string;
  uniqueId: string;
}

export interface DisconectRoleFromEntityADParams {
  samAccountName: string;
}

export interface AdditionalParams {
  /** for approver request */
  entityId: string;
  displayName: string;
  domainUsers: string[];
  akaUnit: string;
  type: ApproverType;
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
  /** forDigitalIdentity */
  type?: string | undefined;
  /** string source = 2; */
  uniqueId?: string | undefined;
  mail?: string | undefined;
  isRoleAttachable?: boolean | undefined;
  /** AssignRoleToEntity, same as changing role to entity */
  id?: string | undefined;
  /**
   * string uniqueId = 8;
   * CreateEntity
   */
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
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: KartoffelParams | undefined;
  adParams: ADParams | undefined;
  comments: string;
  approversComments: string;
  due?: number | undefined;
}

export interface Request {
  submittedBy: EntityMin | undefined;
  status: RequestStatus;
  commanderDecision: ApproverDecision | undefined;
  securityDecision: ApproverDecision | undefined;
  superSecurityDecision: ApproverDecision | undefined;
  commanders: EntityMin[];
  securityApprovers: EntityMin[];
  kartoffelStatus: KartoffelStatus | undefined;
  adStatus: ADStatus | undefined;
  kartoffelParams: KartoffelParams | undefined;
  adParams: ADParams | undefined;
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

const baseUpdateDecisionReq: object = { id: "" };

export const UpdateDecisionReq = {
  encode(
    message: UpdateDecisionReq,
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateDecisionReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateDecisionReq } as UpdateDecisionReq;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateDecisionReq {
    const message = { ...baseUpdateDecisionReq } as UpdateDecisionReq;
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
    return message;
  },

  toJSON(message: UpdateDecisionReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.approverDecision !== undefined &&
      (obj.approverDecision = message.approverDecision
        ? ApproverDecision.toJSON(message.approverDecision)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateDecisionReq>): UpdateDecisionReq {
    const message = { ...baseUpdateDecisionReq } as UpdateDecisionReq;
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

const baseGetRequestsByIdentifierReq: object = {
  identifier: "",
  from: 0,
  to: 0,
};

export const GetRequestsByIdentifierReq = {
  encode(
    message: GetRequestsByIdentifierReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequestsByIdentifierReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRequestsByIdentifierReq,
    } as GetRequestsByIdentifierReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.from = reader.int32();
          break;
        case 3:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestsByIdentifierReq {
    const message = {
      ...baseGetRequestsByIdentifierReq,
    } as GetRequestsByIdentifierReq;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = String(object.identifier);
    } else {
      message.identifier = "";
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

  toJSON(message: GetRequestsByIdentifierReq): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRequestsByIdentifierReq>
  ): GetRequestsByIdentifierReq {
    const message = {
      ...baseGetRequestsByIdentifierReq,
    } as GetRequestsByIdentifierReq;
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    } else {
      message.identifier = "";
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

const baseSearchRequestsByDisplayNameReq: object = {
  displayName: "",
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
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
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
          message.from = reader.int32();
          break;
        case 3:
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
    return message;
  },

  toJSON(message: UpdateKartoffelStatusReq): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.createdId !== undefined && (obj.createdId = message.createdId);
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
    return message;
  },

  toJSON(message: UpdateADStatusReq): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.status !== undefined &&
      (obj.status = stageStatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
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

const baseGetRequestsByPersonIdReq: object = { id: "", from: 0, to: 0 };

export const GetRequestsByPersonIdReq = {
  encode(
    message: GetRequestsByPersonIdReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.from !== 0) {
      writer.uint32(16).int32(message.from);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRequestsByPersonIdReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetRequestsByPersonIdReq,
    } as GetRequestsByPersonIdReq;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.from = reader.int32();
          break;
        case 3:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRequestsByPersonIdReq {
    const message = {
      ...baseGetRequestsByPersonIdReq,
    } as GetRequestsByPersonIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
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

  toJSON(message: GetRequestsByPersonIdReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetRequestsByPersonIdReq>
  ): GetRequestsByPersonIdReq {
    const message = {
      ...baseGetRequestsByPersonIdReq,
    } as GetRequestsByPersonIdReq;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
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
    return message;
  },

  toJSON(message: GetAllRequestsReq): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
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

const baseUpdateReqProperties: object = {};

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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateReqProperties {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateReqProperties {
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
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
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateReqProperties>): UpdateReqProperties {
    const message = { ...baseUpdateReqProperties } as UpdateReqProperties;
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
    return message;
  },
};

const baseCreateNewApproverReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const CreateNewApproverReq = {
  encode(
    message: CreateNewApproverReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
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
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(88).int64(message.due);
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
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
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
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
    return message;
  },

  toJSON(message: CreateNewApproverReq): unknown {
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
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
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
    if (message.additionalParams !== undefined) {
      AdditionalParams.encode(
        message.additionalParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(74).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(82).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(88).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(98).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(104).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(112).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(120).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(130).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(136).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(144).bool(message.needSuperSecurityDecision);
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
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
          message.additionalParams = AdditionalParams.decode(
            reader,
            reader.uint32()
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
          message.id = reader.string();
          break;
        case 13:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.type = reader.int32() as any;
          break;
        case 16:
          message.serialNumber = reader.string();
          break;
        case 17:
          message.needSecurityDecision = reader.bool();
          break;
        case 18:
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
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
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
    }
    message.kartoffelStatus !== undefined &&
      (obj.kartoffelStatus = message.kartoffelStatus
        ? KartoffelStatus.toJSON(message.kartoffelStatus)
        : undefined);
    message.adStatus !== undefined &&
      (obj.adStatus = message.adStatus
        ? ADStatus.toJSON(message.adStatus)
        : undefined);
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
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

const baseCreateOGReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const CreateOGReq = {
  encode(
    message: CreateOGReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
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
      CreateOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateOGADParams.encode(
        message.adParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(82).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(90).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(96).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGReq } as CreateOGReq;
    message.commanders = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
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
          message.kartoffelParams = CreateOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adParams = CreateOGADParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateOGReq {
    const message = { ...baseCreateOGReq } as CreateOGReq;
    message.commanders = [];
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
        : undefined);
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
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
      CreateOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateOGADParams.encode(
        message.adParams,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateOGRes } as CreateOGRes;
    message.commanders = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
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
          message.kartoffelParams = CreateOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adParams = CreateOGADParams.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateOGRes {
    const message = { ...baseCreateOGRes } as CreateOGRes;
    message.commanders = [];
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromJSON(e));
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
    if (message.commanders) {
      obj.commanders = message.commanders.map((e) =>
        e ? EntityMin.toJSON(e) : undefined
      );
    } else {
      obj.commanders = [];
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
    if (object.commanders !== undefined && object.commanders !== null) {
      for (const e of object.commanders) {
        message.commanders.push(EntityMin.fromPartial(e));
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

const baseCreateRoleReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const CreateRoleReq = {
  encode(
    message: CreateRoleReq,
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleADParams.encode(
        message.adParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(112).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleReq } as CreateRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = CreateRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = CreateRoleADParams.decode(reader, reader.uint32());
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
          message.due = longToNumber(reader.int64() as Long);
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
    return message;
  },

  toJSON(message: CreateRoleReq): unknown {
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
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoleReq>): CreateRoleReq {
    const message = { ...baseCreateRoleReq } as CreateRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
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
    return message;
  },
};

const baseCreateRoleRes: object = {
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

export const CreateRoleRes = {
  encode(
    message: CreateRoleRes,
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateRoleADParams.encode(
        message.adParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(112).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(122).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(128).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(136).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(144).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(154).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(160).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(168).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoleRes } as CreateRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = CreateRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = CreateRoleADParams.decode(reader, reader.uint32());
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.id = reader.string();
          break;
        case 16:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.type = reader.int32() as any;
          break;
        case 19:
          message.serialNumber = reader.string();
          break;
        case 20:
          message.needSecurityDecision = reader.bool();
          break;
        case 21:
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

  toJSON(message: CreateRoleRes): unknown {
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

const baseCreateRoleKartoffelParams: object = {
  jobTitle: "",
  directGroup: "",
  roleId: "",
  clearance: "",
  type: "",
  source: "",
  uniqueId: "",
  mail: "",
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
    if (message.roleId !== "") {
      writer.uint32(26).string(message.roleId);
    }
    if (message.clearance !== "") {
      writer.uint32(34).string(message.clearance);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(50).string(message.source);
    }
    if (message.uniqueId !== "") {
      writer.uint32(58).string(message.uniqueId);
    }
    if (message.mail !== "") {
      writer.uint32(66).string(message.mail);
    }
    if (message.isRoleAttachable === true) {
      writer.uint32(72).bool(message.isRoleAttachable);
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
          message.type = reader.string();
          break;
        case 6:
          message.source = reader.string();
          break;
        case 7:
          message.uniqueId = reader.string();
          break;
        case 8:
          message.mail = reader.string();
          break;
        case 9:
          message.isRoleAttachable = reader.bool();
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
      message.roleId = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = String(object.clearance);
    } else {
      message.clearance = "";
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
      message.uniqueId = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = String(object.mail);
    } else {
      message.mail = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = Boolean(object.isRoleAttachable);
    } else {
      message.isRoleAttachable = false;
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
    message.type !== undefined && (obj.type = message.type);
    message.source !== undefined && (obj.source = message.source);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
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
      message.roleId = "";
    }
    if (object.clearance !== undefined && object.clearance !== null) {
      message.clearance = object.clearance;
    } else {
      message.clearance = "";
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
      message.uniqueId = "";
    }
    if (object.mail !== undefined && object.mail !== null) {
      message.mail = object.mail;
    } else {
      message.mail = "";
    }
    if (
      object.isRoleAttachable !== undefined &&
      object.isRoleAttachable !== null
    ) {
      message.isRoleAttachable = object.isRoleAttachable;
    } else {
      message.isRoleAttachable = false;
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

const baseCreateEntityReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const CreateEntityReq = {
  encode(
    message: CreateEntityReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityReq } as CreateEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = CreateEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = CreateEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      CreateEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      CreateEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateEntityRes } as CreateEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = CreateEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = CreateEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseAssignRoleToEntityReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const AssignRoleToEntityReq = {
  encode(
    message: AssignRoleToEntityReq,
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      AssignRoleToEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      AssignRoleToEntityADParams.encode(
        message.adParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(112).int64(message.due);
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = AssignRoleToEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = AssignRoleToEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      AssignRoleToEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      AssignRoleToEntityADParams.encode(
        message.adParams,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(112).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(122).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(128).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(136).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(144).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(154).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(160).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(168).bool(message.needSuperSecurityDecision);
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = AssignRoleToEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = AssignRoleToEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.id = reader.string();
          break;
        case 16:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.type = reader.int32() as any;
          break;
        case 19:
          message.serialNumber = reader.string();
          break;
        case 20:
          message.needSecurityDecision = reader.bool();
          break;
        case 21:
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

const baseAssignRoleToEntityKartoffelParams: object = { id: "", uniqueId: "" };

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
    return message;
  },

  toJSON(message: AssignRoleToEntityKartoffelParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
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
    return message;
  },
};

const baseAssignRoleToEntityADParams: object = {
  oldSAMAccountName: "",
  newSAMAccountName: "",
  upn: "",
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
    if (message.upn !== "") {
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
      message.upn = "";
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
      message.upn = "";
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

const baseRenameOGReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const RenameOGReq = {
  encode(
    message: RenameOGReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameOGADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGReq } as RenameOGReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = RenameOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = RenameOGADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameOGADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGRes } as RenameOGRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = RenameOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = RenameOGADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseRenameOGKartoffelParams: object = {};

export const RenameOGKartoffelParams = {
  encode(
    _: RenameOGKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RenameOGKartoffelParams {
    const message = {
      ...baseRenameOGKartoffelParams,
    } as RenameOGKartoffelParams;
    return message;
  },

  toJSON(_: RenameOGKartoffelParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<RenameOGKartoffelParams>
  ): RenameOGKartoffelParams {
    const message = {
      ...baseRenameOGKartoffelParams,
    } as RenameOGKartoffelParams;
    return message;
  },
};

const baseRenameOGADParams: object = {};

export const RenameOGADParams = {
  encode(
    _: RenameOGADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameOGADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
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

  fromJSON(_: any): RenameOGADParams {
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
    return message;
  },

  toJSON(_: RenameOGADParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RenameOGADParams>): RenameOGADParams {
    const message = { ...baseRenameOGADParams } as RenameOGADParams;
    return message;
  },
};

const baseRenameRoleReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const RenameRoleReq = {
  encode(
    message: RenameRoleReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameRoleADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleReq } as RenameRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = RenameRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = RenameRoleADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      RenameRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      RenameRoleADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleRes } as RenameRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = RenameRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = RenameRoleADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseRenameRoleKartoffelParams: object = {};

export const RenameRoleKartoffelParams = {
  encode(
    _: RenameRoleKartoffelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RenameRoleKartoffelParams {
    const message = {
      ...baseRenameRoleKartoffelParams,
    } as RenameRoleKartoffelParams;
    return message;
  },

  toJSON(_: RenameRoleKartoffelParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<RenameRoleKartoffelParams>
  ): RenameRoleKartoffelParams {
    const message = {
      ...baseRenameRoleKartoffelParams,
    } as RenameRoleKartoffelParams;
    return message;
  },
};

const baseRenameRoleADParams: object = {};

export const RenameRoleADParams = {
  encode(
    _: RenameRoleADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RenameRoleADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
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

  fromJSON(_: any): RenameRoleADParams {
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
    return message;
  },

  toJSON(_: RenameRoleADParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RenameRoleADParams>): RenameRoleADParams {
    const message = { ...baseRenameRoleADParams } as RenameRoleADParams;
    return message;
  },
};

const baseEditEntityReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const EditEntityReq = {
  encode(
    message: EditEntityReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      EditEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      EditEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditEntityReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditEntityReq } as EditEntityReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = EditEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = EditEntityADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      EditEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      EditEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditEntityRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEditEntityRes } as EditEntityRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = EditEntityKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = EditEntityADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseEditEntityKartoffelParams: object = {
  id: "",
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
    if (message.identityCard !== "") {
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

const baseDeleteOGReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const DeleteOGReq = {
  encode(
    message: DeleteOGReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteOGADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGReq } as DeleteOGReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = DeleteOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = DeleteOGADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteOGKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteOGADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGRes } as DeleteOGRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = DeleteOGKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = DeleteOGADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseDeleteOGADParams: object = {};

export const DeleteOGADParams = {
  encode(
    _: DeleteOGADParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOGADParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
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

  fromJSON(_: any): DeleteOGADParams {
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
    return message;
  },

  toJSON(_: DeleteOGADParams): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteOGADParams>): DeleteOGADParams {
    const message = { ...baseDeleteOGADParams } as DeleteOGADParams;
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

const baseDeleteRoleReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const DeleteRoleReq = {
  encode(
    message: DeleteRoleReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteRoleADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleReq } as DeleteRoleReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = DeleteRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = DeleteRoleADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DeleteRoleKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DeleteRoleADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoleRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoleRes } as DeleteRoleRes;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams = DeleteRoleKartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.adParams = DeleteRoleADParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseDisconectRoleFromEntityReq: object = {
  status: 0,
  comments: "",
  approversComments: "",
};

export const DisconectRoleFromEntityReq = {
  encode(
    message: DisconectRoleFromEntityReq,
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DisconectRoleFromEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DisconectRoleFromEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(104).int64(message.due);
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams =
            DisconectRoleFromEntityKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 10:
          message.adParams = DisconectRoleFromEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
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
      (obj.status = requestStatusToJSON(message.status));
    message.commanderDecision !== undefined &&
      (obj.commanderDecision = message.commanderDecision
        ? ApproverDecision.toJSON(message.commanderDecision)
        : undefined);
    message.securityDecision !== undefined &&
      (obj.securityDecision = message.securityDecision
        ? ApproverDecision.toJSON(message.securityDecision)
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
    for (const v of message.commanders) {
      EntityMin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.securityApprovers) {
      EntityMin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      DisconectRoleFromEntityKartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      DisconectRoleFromEntityADParams.encode(
        message.adParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(90).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(98).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(104).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(114).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(120).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(128).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(136).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(146).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(152).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(160).bool(message.needSuperSecurityDecision);
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
          message.commanders.push(EntityMin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.securityApprovers.push(
            EntityMin.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.kartoffelParams =
            DisconectRoleFromEntityKartoffelParams.decode(
              reader,
              reader.uint32()
            );
          break;
        case 10:
          message.adParams = DisconectRoleFromEntityADParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.comments = reader.string();
          break;
        case 12:
          message.approversComments = reader.string();
          break;
        case 13:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.id = reader.string();
          break;
        case 15:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.type = reader.int32() as any;
          break;
        case 18:
          message.serialNumber = reader.string();
          break;
        case 19:
          message.needSecurityDecision = reader.bool();
          break;
        case 20:
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

const baseKartoffelParams: object = { phone: "", mobilePhone: "" };

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
    if (message.type !== undefined) {
      writer.uint32(58).string(message.type);
    }
    if (message.uniqueId !== undefined) {
      writer.uint32(66).string(message.uniqueId);
    }
    if (message.mail !== undefined) {
      writer.uint32(74).string(message.mail);
    }
    if (message.isRoleAttachable !== undefined) {
      writer.uint32(80).bool(message.isRoleAttachable);
    }
    if (message.id !== undefined) {
      writer.uint32(90).string(message.id);
    }
    if (message.firstName !== undefined) {
      writer.uint32(98).string(message.firstName);
    }
    if (message.lastName !== undefined) {
      writer.uint32(106).string(message.lastName);
    }
    if (message.identityCard !== undefined) {
      writer.uint32(114).string(message.identityCard);
    }
    if (message.personalNumber !== undefined) {
      writer.uint32(122).string(message.personalNumber);
    }
    if (message.serviceType !== undefined) {
      writer.uint32(130).string(message.serviceType);
    }
    for (const v of message.phone) {
      writer.uint32(138).string(v!);
    }
    for (const v of message.mobilePhone) {
      writer.uint32(146).string(v!);
    }
    if (message.address !== undefined) {
      writer.uint32(154).string(message.address);
    }
    if (message.clearance !== undefined) {
      writer.uint32(162).string(message.clearance);
    }
    if (message.sex !== undefined) {
      writer.uint32(170).string(message.sex);
    }
    if (message.birthdate !== undefined) {
      writer.uint32(176).int64(message.birthdate);
    }
    if (message.entityType !== undefined) {
      writer.uint32(186).string(message.entityType);
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
          message.type = reader.string();
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
          message.id = reader.string();
          break;
        case 12:
          message.firstName = reader.string();
          break;
        case 13:
          message.lastName = reader.string();
          break;
        case 14:
          message.identityCard = reader.string();
          break;
        case 15:
          message.personalNumber = reader.string();
          break;
        case 16:
          message.serviceType = reader.string();
          break;
        case 17:
          message.phone.push(reader.string());
          break;
        case 18:
          message.mobilePhone.push(reader.string());
          break;
        case 19:
          message.address = reader.string();
          break;
        case 20:
          message.clearance = reader.string();
          break;
        case 21:
          message.sex = reader.string();
          break;
        case 22:
          message.birthdate = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.entityType = reader.string();
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
    message.type !== undefined && (obj.type = message.type);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    message.mail !== undefined && (obj.mail = message.mail);
    message.isRoleAttachable !== undefined &&
      (obj.isRoleAttachable = message.isRoleAttachable);
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      KartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ADParams.encode(message.adParams, writer.uint32(90).fork()).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== undefined) {
      writer.uint32(112).int64(message.due);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequestReq } as RequestReq;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = KartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = ADParams.decode(reader, reader.uint32());
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
          message.due = longToNumber(reader.int64() as Long);
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
    message.comments !== undefined && (obj.comments = message.comments);
    message.approversComments !== undefined &&
      (obj.approversComments = message.approversComments);
    message.due !== undefined && (obj.due = message.due);
    return obj;
  },

  fromPartial(object: DeepPartial<RequestReq>): RequestReq {
    const message = { ...baseRequestReq } as RequestReq;
    message.commanders = [];
    message.securityApprovers = [];
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
    return message;
  },
};

const baseRequest: object = {
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
    if (message.kartoffelStatus !== undefined) {
      KartoffelStatus.encode(
        message.kartoffelStatus,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.adStatus !== undefined) {
      ADStatus.encode(message.adStatus, writer.uint32(74).fork()).ldelim();
    }
    if (message.kartoffelParams !== undefined) {
      KartoffelParams.encode(
        message.kartoffelParams,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.adParams !== undefined) {
      ADParams.encode(message.adParams, writer.uint32(90).fork()).ldelim();
    }
    if (message.comments !== "") {
      writer.uint32(98).string(message.comments);
    }
    if (message.approversComments !== "") {
      writer.uint32(106).string(message.approversComments);
    }
    if (message.due !== 0) {
      writer.uint32(112).int64(message.due);
    }
    if (message.id !== "") {
      writer.uint32(122).string(message.id);
    }
    if (message.createdAt !== 0) {
      writer.uint32(128).int64(message.createdAt);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(136).int64(message.updatedAt);
    }
    if (message.type !== 0) {
      writer.uint32(144).int32(message.type);
    }
    if (message.serialNumber !== "") {
      writer.uint32(154).string(message.serialNumber);
    }
    if (message.needSecurityDecision === true) {
      writer.uint32(160).bool(message.needSecurityDecision);
    }
    if (message.needSuperSecurityDecision === true) {
      writer.uint32(168).bool(message.needSuperSecurityDecision);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    message.commanders = [];
    message.securityApprovers = [];
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
          message.kartoffelStatus = KartoffelStatus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.adStatus = ADStatus.decode(reader, reader.uint32());
          break;
        case 10:
          message.kartoffelParams = KartoffelParams.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.adParams = ADParams.decode(reader, reader.uint32());
          break;
        case 12:
          message.comments = reader.string();
          break;
        case 13:
          message.approversComments = reader.string();
          break;
        case 14:
          message.due = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.id = reader.string();
          break;
        case 16:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 17:
          message.updatedAt = longToNumber(reader.int64() as Long);
          break;
        case 18:
          message.type = reader.int32() as any;
          break;
        case 19:
          message.serialNumber = reader.string();
          break;
        case 20:
          message.needSecurityDecision = reader.bool();
          break;
        case 21:
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

  fromPartial(object: DeepPartial<Request>): Request {
    const message = { ...baseRequest } as Request;
    message.commanders = [];
    message.securityApprovers = [];
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

export interface RequestService {
  CreateRoleRequest(request: CreateRoleReq): Promise<CreateRoleRes>;
  AssignRoleToEntityRequest(
    request: AssignRoleToEntityReq
  ): Promise<AssignRoleToEntityRes>;
  CreateOGRequest(request: CreateOGReq): Promise<CreateOGRes>;
  CreateNewApproverRequest(
    request: CreateNewApproverReq
  ): Promise<CreateNewApproverRes>;
  CreateEntityRequest(request: CreateEntityReq): Promise<CreateEntityRes>;
  RenameOGRequest(request: RenameOGReq): Promise<RenameOGRes>;
  RenameRoleRequest(request: RenameRoleReq): Promise<EditEntityRes>;
  EditEntityRequest(request: EditEntityReq): Promise<EditEntityRes>;
  DeleteOGRequest(request: DeleteOGReq): Promise<DeleteOGRes>;
  DeleteRoleRequest(request: DeleteRoleReq): Promise<DeleteRoleRes>;
  DisconectRoleFromEntityRequest(
    request: DisconectRoleFromEntityReq
  ): Promise<DisconectRoleFromEntityRes>;
  UpdateRequest(request: UpdateReq): Promise<Request>;
  UpdateKartoffelStatus(request: UpdateKartoffelStatusReq): Promise<Request>;
  UpdateADStatus(request: UpdateADStatusReq): Promise<Request>;
  DeleteRequest(request: DeleteReq): Promise<SuccessMessage>;
  GetRequestsByCommander(
    request: GetRequestsByPersonIdReq
  ): Promise<RequestArray>;
  GetRequestsSubmittedBy(
    request: GetRequestsByPersonIdReq
  ): Promise<RequestArray>;
  GetRequestBySerialNumber(
    request: GetRequestBySerialNumberReq
  ): Promise<Request>;
  GetAllRequests(request: GetAllRequestsReq): Promise<RequestArray>;
  GetRequestById(request: GetRequestByIdReq): Promise<Request>;
  GetRequestsBySubmitterIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray>;
  GetRequestsByCommanderIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray>;
  GetRequestsBySecurityIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray>;
  GetRequestsByApproverIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray>;
  SearchRequestsBySubmitterDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray>;
  SearchRequestsByCommanderDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray>;
  SearchRequestsBySecurityDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray>;
  SearchRequestsByApproverDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray>;
  CanPushToKartoffelQueue(
    request: CanPushToQueueReq
  ): Promise<CanPushToQueueRes>;
  CanPushToADQueue(request: CanPushToQueueReq): Promise<CanPushToQueueRes>;
  IncrementKartoffelRetries(request: IncrementRetriesReq): Promise<Request>;
  IncrementADRetries(request: IncrementRetriesReq): Promise<Request>;
  UpdateCommanderDecision(request: UpdateDecisionReq): Promise<Request>;
  UpdateSecurityDecision(request: UpdateDecisionReq): Promise<Request>;
  UpdateSuperSecurityDecision(request: UpdateDecisionReq): Promise<Request>;
  GetRequestsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestArray>;
  GetRequestIdsInProgressByDue(
    request: GetRequestsInProgressByDueReq
  ): Promise<RequestIdArray>;
}

export class RequestServiceClientImpl implements RequestService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateRoleRequest = this.CreateRoleRequest.bind(this);
    this.AssignRoleToEntityRequest = this.AssignRoleToEntityRequest.bind(this);
    this.CreateOGRequest = this.CreateOGRequest.bind(this);
    this.CreateNewApproverRequest = this.CreateNewApproverRequest.bind(this);
    this.CreateEntityRequest = this.CreateEntityRequest.bind(this);
    this.RenameOGRequest = this.RenameOGRequest.bind(this);
    this.RenameRoleRequest = this.RenameRoleRequest.bind(this);
    this.EditEntityRequest = this.EditEntityRequest.bind(this);
    this.DeleteOGRequest = this.DeleteOGRequest.bind(this);
    this.DeleteRoleRequest = this.DeleteRoleRequest.bind(this);
    this.DisconectRoleFromEntityRequest =
      this.DisconectRoleFromEntityRequest.bind(this);
    this.UpdateRequest = this.UpdateRequest.bind(this);
    this.UpdateKartoffelStatus = this.UpdateKartoffelStatus.bind(this);
    this.UpdateADStatus = this.UpdateADStatus.bind(this);
    this.DeleteRequest = this.DeleteRequest.bind(this);
    this.GetRequestsByCommander = this.GetRequestsByCommander.bind(this);
    this.GetRequestsSubmittedBy = this.GetRequestsSubmittedBy.bind(this);
    this.GetRequestBySerialNumber = this.GetRequestBySerialNumber.bind(this);
    this.GetAllRequests = this.GetAllRequests.bind(this);
    this.GetRequestById = this.GetRequestById.bind(this);
    this.GetRequestsBySubmitterIdentifier =
      this.GetRequestsBySubmitterIdentifier.bind(this);
    this.GetRequestsByCommanderIdentifier =
      this.GetRequestsByCommanderIdentifier.bind(this);
    this.GetRequestsBySecurityIdentifier =
      this.GetRequestsBySecurityIdentifier.bind(this);
    this.GetRequestsByApproverIdentifier =
      this.GetRequestsByApproverIdentifier.bind(this);
    this.SearchRequestsBySubmitterDisplayName =
      this.SearchRequestsBySubmitterDisplayName.bind(this);
    this.SearchRequestsByCommanderDisplayName =
      this.SearchRequestsByCommanderDisplayName.bind(this);
    this.SearchRequestsBySecurityDisplayName =
      this.SearchRequestsBySecurityDisplayName.bind(this);
    this.SearchRequestsByApproverDisplayName =
      this.SearchRequestsByApproverDisplayName.bind(this);
    this.CanPushToKartoffelQueue = this.CanPushToKartoffelQueue.bind(this);
    this.CanPushToADQueue = this.CanPushToADQueue.bind(this);
    this.IncrementKartoffelRetries = this.IncrementKartoffelRetries.bind(this);
    this.IncrementADRetries = this.IncrementADRetries.bind(this);
    this.UpdateCommanderDecision = this.UpdateCommanderDecision.bind(this);
    this.UpdateSecurityDecision = this.UpdateSecurityDecision.bind(this);
    this.UpdateSuperSecurityDecision =
      this.UpdateSuperSecurityDecision.bind(this);
    this.GetRequestsInProgressByDue =
      this.GetRequestsInProgressByDue.bind(this);
    this.GetRequestIdsInProgressByDue =
      this.GetRequestIdsInProgressByDue.bind(this);
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

  CreateOGRequest(request: CreateOGReq): Promise<CreateOGRes> {
    const data = CreateOGReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateOGRequest",
      data
    );
    return promise.then((data) => CreateOGRes.decode(new _m0.Reader(data)));
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

  CreateEntityRequest(request: CreateEntityReq): Promise<CreateEntityRes> {
    const data = CreateEntityReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "CreateEntityRequest",
      data
    );
    return promise.then((data) => CreateEntityRes.decode(new _m0.Reader(data)));
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

  GetRequestsByCommander(
    request: GetRequestsByPersonIdReq
  ): Promise<RequestArray> {
    const data = GetRequestsByPersonIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsByCommander",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestsSubmittedBy(
    request: GetRequestsByPersonIdReq
  ): Promise<RequestArray> {
    const data = GetRequestsByPersonIdReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsSubmittedBy",
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

  GetRequestsBySubmitterIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray> {
    const data = GetRequestsByIdentifierReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsBySubmitterIdentifier",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestsByCommanderIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray> {
    const data = GetRequestsByIdentifierReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsByCommanderIdentifier",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestsBySecurityIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray> {
    const data = GetRequestsByIdentifierReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsBySecurityIdentifier",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  GetRequestsByApproverIdentifier(
    request: GetRequestsByIdentifierReq
  ): Promise<RequestArray> {
    const data = GetRequestsByIdentifierReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "GetRequestsByApproverIdentifier",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  SearchRequestsBySubmitterDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray> {
    const data = SearchRequestsByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SearchRequestsBySubmitterDisplayName",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  SearchRequestsByCommanderDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray> {
    const data = SearchRequestsByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SearchRequestsByCommanderDisplayName",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  SearchRequestsBySecurityDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray> {
    const data = SearchRequestsByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SearchRequestsBySecurityDisplayName",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
  }

  SearchRequestsByApproverDisplayName(
    request: SearchRequestsByDisplayNameReq
  ): Promise<RequestArray> {
    const data = SearchRequestsByDisplayNameReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "SearchRequestsByApproverDisplayName",
      data
    );
    return promise.then((data) => RequestArray.decode(new _m0.Reader(data)));
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

  UpdateCommanderDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateCommanderDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSecurityDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateSecurityDecision",
      data
    );
    return promise.then((data) => Request.decode(new _m0.Reader(data)));
  }

  UpdateSuperSecurityDecision(request: UpdateDecisionReq): Promise<Request> {
    const data = UpdateDecisionReq.encode(request).finish();
    const promise = this.rpc.request(
      "RequestService.RequestService",
      "UpdateSuperSecurityDecision",
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
