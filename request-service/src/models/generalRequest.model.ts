import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Source } from "../enums/source.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
import { Clearance } from "../enums/clearance.enum";
import { RoleStatus } from "../enums/roleStatus.enum";
import { ServiceType } from "../enums/serviceType.enum";
import { Sex } from "../enums/sex.enum";
import { EntityType } from "../enums/entityType.enum";
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
      commanders: [mongoose.Schema.Types.ObjectId],
      createdAt: { type: Number, default: new Date().getTime() },
      updatedAt: { type: Number, default: new Date().getTime() },
      status: {
        type: String,
        enum: Status,
        default: Status.SUBMITTED,
      },
      generatedKartoffelId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
      },

      // createOGRequest
      newChild: String,
      parent: {
        id: mongoose.Schema.Types.ObjectId,
        fullHierarchy: String,
      },

      // createRoleRequest
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

    // assignRoleToEntity
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

    // createEntity
    firstName: String,
    lastName: String,
    entityCard: String,
    personalNumber: String,
    serviceType: {
      type: String,
      enum: ServiceType,
    },
    phone: [String],
    mobilePhone: [String],
    address: [String],
    sex: {
      type: String,
      enum: Sex,
    },
    birthdate: Number,
    entityType: {
      type: String,
      enum: EntityType,
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
