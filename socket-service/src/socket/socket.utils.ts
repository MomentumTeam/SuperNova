import * as socketIO from "socket.io";
import { config } from '../config';
import {
  ApproverType,
  Decision,
  decisionFromJSON,
  Request,
  RequestStatus,
  requestStatusFromJSON,
} from "../interfaces/protoc/proto/requestService";
import { ApproverService } from "../services/approver.service";
import { unique } from "../utils/array.utils";
import { logger } from "../utils/logger/logger";

export const sendToUser = (io: socketIO.Server, user: any, eventName: string, item: any = null) => {
  try {
    const users = Array.isArray(user) ? [...user] : [user];
    const usersIds = users.map((user) => {
      if (user) return user?.id ? user.id.toString() : user;
    });
    const usersUnique = unique(usersIds);
    console.log(`send to users event: ${eventName}`, usersUnique, users, usersIds);
    if (usersUnique.length > 0) io.to(usersUnique).emit(eventName, item);
  } catch (error: any) {
    logger.error(`Error while send to user: ${error.message}`);
  }
};

export const getApproversAndSubmittedFromReq = async (request: Request) => {
  const submittedBy = request?.submittedBy;
  const submittedByGroups = submittedBy && [...submittedBy.ancestors, submittedBy.directGroup];

  const commanderDecision = decisionFromJSON(request?.commanderDecision?.decision);
  const adminDecision = decisionFromJSON(request?.adminDecision?.decision);
  const securityDecision = decisionFromJSON(request?.securityDecision?.decision);

  const reqStatus = request?.status && requestStatusFromJSON(request.status);
  const isApprovedByCommander =
    reqStatus === RequestStatus.APPROVED_BY_COMMANDER ||
    reqStatus === RequestStatus.APPROVED_BY_ADMIN ||
    (commanderDecision && commanderDecision === Decision.APPROVED) ||
    (adminDecision && adminDecision === Decision.APPROVED);

  const isApprovedBySecurity =
    (securityDecision && securityDecision === Decision.APPROVED) || reqStatus === RequestStatus.APPROVED_BY_SECURITY;

  // Get direct approvers
  const commanders = request?.commanders;
  const admins = request?.adminApprovers;
  const securityApprovers = request.needSecurityDecision && isApprovedByCommander? [...request?.securityApprovers]: [];
  const superSecurityApprovers =
    request.needSuperSecurityDecision && isApprovedBySecurity ? request.superSecurityApprovers : [];
  const directApprovers = [...commanders, ...securityApprovers, ...superSecurityApprovers, ...admins];

  // Get undirect approvers
  let undirectApprovers: any = [];
  try {
    const getAdminsRes = await ApproverService.getAdminsByGroupIds({ groupIds: submittedByGroups as string[] });
    if (getAdminsRes?.approvers) undirectApprovers = [...undirectApprovers, ...getAdminsRes.approvers];
  } catch (error: any) {
    logger.error(`Error while get admin approvers: ${error.message}`);
    throw error;
  }

  if (request.needSecurityDecision && isApprovedByCommander) {
    if (request.hasSecurityAdmin) {
      try {
        const getSecurityAdminsRes = await ApproverService.getAdminsByGroupIds({
          groupIds: submittedByGroups as string[],
          type: ApproverType.SECURITY_ADMIN,
        });
        if (getSecurityAdminsRes?.approvers)
          undirectApprovers = [...undirectApprovers, ...getSecurityAdminsRes.approvers];
      } catch (error: any) {
        logger.error(`Error while get security admin approvers: ${error.message}`);
        throw error;
      }
    }
  }
  // If security can see request now
  if (isApprovedByCommander && request?.needSecurityDecision && !request.hasSecurityAdmin) {
    undirectApprovers = [...undirectApprovers, config.socket.rooms.security];
  }

  // If super security can see request now
  if (
    request?.needSuperSecurityDecision &&
    commanderDecision === Decision.APPROVED &&
    ((!request.needSecurityDecision && isApprovedByCommander) || (request.needSecurityDecision && isApprovedBySecurity))
  ) {
    undirectApprovers = [...undirectApprovers, config.socket.rooms.superSecurity];
  }

  return [directApprovers, undirectApprovers, submittedBy];
};

export const getChangeApprovers = (oldApprovers: any, newApprovers:any) => {
    return newApprovers.filter(
      (newApprover: any) =>
        !oldApprovers.some(
          (oldApprover: any) =>
            (oldApprover.id && newApprover.id && oldApprover.id === newApprover.id) || oldApprover === newApprover
        )
    );
}