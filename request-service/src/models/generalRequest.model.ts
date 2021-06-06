import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Source } from "../enums/source.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
import { Clearance } from "../enums/clearance.enum";
import { RoleStatus } from "../enums/roleStatus.enum";
const { Schema } = mongoose;

export const GeneralRequestSchema = new Schema(
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
      newChild: String,
      parent: {
        id: mongoose.Schema.Types.ObjectId,
        fullHierarchy: String,
      },
      jobTitle: String,
      clearance: {
        type: String,
        enum: Clearance,
        default: Clearance.YELLOW,
      },
      roleStatus: {
        type: String,
        enum: RoleStatus,
        default: RoleStatus.ENABLED,
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
    entity: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
    role: {
      roleId: {
        type: String,
      },
      digitalIdentityUniqueId: {
        type: String,
      },
    },
  },
  { strict: false }
);

GeneralRequestSchema.pre<any>("save", function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
  };
  func(this);
  return next();
});

export const GeneralRequest = connection.model(
  "GeneralRequest",
  GeneralRequestSchema,
  "requests"
);
