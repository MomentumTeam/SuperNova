import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Domain } from "../enums/domain.enum";
import { ApproverDecision } from "../enums/approverDecision.enum";
import { Status } from "../enums/status.enum";
const { Schema } = mongoose;

interface ICreateHierarchySchema extends mongoose.Document {
  type: {
    type: String;
    enum: RequestType;
    default: RequestType.CREATE_HIERARCHY;
  };
  domain: {
    type: String;
    enum: Domain;
    default: Domain.DOMAIN1;
  };
  newChild: String;
  parent: {
    id: mongoose.Types.ObjectId;
    hierarchy: String;
  };
  submittedBy: mongoose.Types.ObjectId;
  commanderDecision: {
    type: String;
    enum: ApproverDecision;
    default: ApproverDecision.UNKNOWN;
  };
  securityDecision: {
    type: String;
    enum: ApproverDecision;
    default: ApproverDecision.UNKNOWN;
  };
  commanders: [mongoose.Types.ObjectId];
  createdAt: Number;
  updatedAt: Number;
  status: {
    type: String;
    enum: Status;
    default: Status.SUBMITTED;
  };
}

const createHierarchySchema = new Schema({
  type: {
    type: String,
    enum: RequestType,
    default: RequestType.CREATE_HIERARCHY,
  },
  domain: {
    type: String,
    enum: Domain,
    default: Domain.DOMAIN1,
  },
  newChild: String,
  parent: {
    id: mongoose.Types.ObjectId,
    hierarchy: String,
  },
  submittedBy: mongoose.Types.ObjectId,
  commanderDecision: {
    type: String,
    enum: ApproverDecision,
    default: ApproverDecision.UNKNOWN,
  },
  securityDecision: {
    type: String,
    enum: ApproverDecision,
    default: ApproverDecision.UNKNOWN,
  },
  commanders: [mongoose.Types.ObjectId],
  createdAt: { type: Number, default: new Date().getTime() },
  updatedAt: { type: Number, default: new Date().getTime() },
  status: {
    type: String,
    enum: Status,
    default: Status.SUBMITTED,
  },
});

createHierarchySchema.pre<ICreateHierarchySchema>("save", function (next) {
  this.updatedAt = new Date().getTime();
  return next();
});

export const CreateHierarchyRequest = connection.model(
  "CreateHierarchyRequest",
  createHierarchySchema,
  "requests"
);
