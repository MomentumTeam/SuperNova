import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Domain } from "../enums/domain.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
const { Schema } = mongoose;

export const RequestSchema = new Schema({
  type: {
    type: String,
    enum: RequestType,
    default: RequestType.CREATE_HIERARCHY,
  },
  domain: {
    type: String,
    enum: Domain,
    default: Domain.DOMAIN_1,
  },
  submittedBy: mongoose.Schema.Types.ObjectId,
  commanderDecision: {
    approverId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    approverDecision: {
      type: String,
      enum: Decision,
      defualt: Decision.UNKNOWN,
    },
  },
  securityDecision: {
    approverId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    approverDecision: {
      type: String,
      enum: Decision,
      defualt: Decision.UNKNOWN,
    },
  },
  commanders: [mongoose.Schema.Types.ObjectId],
  createdAt: { type: Number, default: new Date().getTime() },
  updatedAt: { type: Number, default: new Date().getTime() },
  status: {
    type: String,
    enum: Status,
    default: Status.SUBMITTED,
  },
});

RequestSchema.pre<any>("save", function (next) {
  this.updatedAt = new Date().getTime();
  return next();
});

export const Request = connection.model("Request", RequestSchema, "requests");
