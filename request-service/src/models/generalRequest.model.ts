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
    // createOGRequest
    ogProperties: {
      name: String,
      hierarchy: String,
      parent: mongoose.Schema.Types.ObjectId,
    },
    createdOG: {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      hierarchy: String,
      parent: mongoose.Schema.Types.ObjectId,
    },

    // createRoleRequest
    roleProperties: {
      jobTitle: String,
      source: {
        type: String,
        enum: Source,
        default: Source.SOURCE_1,
      },
    },
    organizationGroup: {
      //also for renameOG
      id: mongoose.Schema.Types.ObjectId,
      hierarchy: String,
      name: String,
    },
    createdRole: {
      jobTitle: String,
      roleId: String,
      source: {
        type: String,
        enum: Source,
        default: Source.SOURCE_1,
      },
    },
    createdDI: {
      uniqueId: String,
    },

    // assignRoleToEntity
    entity: {
      //also for editEntity
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
    role: {
      //also for renameRole
      jobTitle: String,
      roleId: {
        type: String,
      },
      digitalIdentityUniqueId: {
        type: String,
      },
    },
    needToDisconnectDI: {
      type: Boolean,
      default: false,
    },
    digitalIdentityToDisconnect: {
      uniqueId: {
        type: String,
      },
    },

    // createEntity
    entityProperties: {
      firstName: String,
      lastName: String,
      identityCard: String,
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
    createdEntity: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },

    // renameOGRequest
    newName: String,
    // and also organizationGroup

    // renameRoleRequest
    // role: Role
    newJobTitle: String,

    //editEntity
    // entity

    //deleteOG
    // organizationGroup : OrganizationGroup

    //deleteRole
    // role : Role
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
