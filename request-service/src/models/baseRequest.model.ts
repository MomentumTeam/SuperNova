import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Source } from "../enums/source.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
const { Schema } = mongoose;

export const BaseRequestSchema = new Schema(
  {
    type: {
      type: String,
      enum: RequestType,
    },
    domain: {
      type: String,
      enum: Source,
      default: Source.SOURCE_1,
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
  },
  { strict: false }
);

export const Request = connection.model(
  "Request",
  BaseRequestSchema,
  "requests"
);
