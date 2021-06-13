import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Source } from "../enums/source.enum";
import { Decision } from "../enums/Decision.enum";
import { Status } from "../enums/status.enum";
import { ServiceType } from "../enums/serviceType.enum";
import { Sex } from "../enums/sex.enum";
import { EntityType } from "../enums/entityType.enum";
import { Clearance } from "../enums/clearance.enum";
const { Schema } = mongoose;

export const GeneralRequestSchema = new Schema(
  {
    type: {
      type: String,
      enum: RequestType,
    },
    submittedBy: mongoose.Schema.Types.ObjectId,
    commanderDecision: {
      type: {
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
      default: null,
    },
    securityDecision: {
      type: {
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
      default: null,
    },
    commanders: [mongoose.Schema.Types.ObjectId],
    createdAt: { type: Number, default: new Date().getTime() },
    updatedAt: { type: Number, default: new Date().getTime() },
    status: {
      type: String,
      enum: Status,
      default: Status.SUBMITTED,
    },
    source: {
      type: String,
      enum: Source,
      default: Source.SOURCE_1,
    },
    // createOGRequest
    ogProperties: {
      type: {
        id: String,
        name: String,
        hierarchy: String,
        parent: {
          id: String,
          hierarchy: String,
        },
      },
      default: null,
    },
    createdOG: {
      type: {
        id: String,
        name: String,
        hierarchy: String,
        parent: {
          id: String,
          hierarchy: String,
        },
      },
      default: null,
    },

    // createRoleRequest
    roleProperties: {
      type: {
        roleId: String,
        jobTitle: String,
        digitalIdentityUniqueId: String,
        source: {
          type: String,
          enum: Source,
          default: Source.SOURCE_1,
        },
      },
      default: null,
    },
    // ogProperties,
    createdRole: {
      type: {
        roleId: String,
        jobTitle: String,
        digitalIdentityUniqueId: String,
        source: {
          type: String,
          enum: Source,
          default: Source.SOURCE_1,
        },
      },
      default: null,
    },
    createdDI: {
      type: {
        uniqueId: String,
      },
      default: null,
    },

    // assignRoleToEntity
    entity: {
      type: {
        //also for editEntity
        id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        firstName: String,
        lastName: String,
        identityCard: String,
        personalNumber: String,
        serviceType: {
          type: String,
          enum: ServiceType,
          default: ServiceType.CIVILIAN,
        },
        phone: [String],
        mobilePhone: [String],
        address: String,
        sex: {
          type: String,
          enum: Sex,
        },
        birthdate: Number,
        entityType: {
          type: String,
          enum: EntityType,
          default: EntityType.CIVILIAN,
        },
        clearance: {
          type: String,
          enum: Clearance,
        },
      },
      default: null,
    },
    role: {
      type: {
        roleId: String,
        jobTitle: String,
        digitalIdentityUniqueId: String,
        source: {
          type: String,
          enum: Source,
          default: Source.SOURCE_1,
        },
      },
      default: null,
    },
    needToDisconnectDI: {
      type: Boolean,
      default: false,
    },
    digitalIdentityToDisconnect: {
      type: {
        uniqueId: {
          type: String,
        },
      },
      default: null,
    },

    // createEntity
    entityProperties: {
      type: {
        //also for editEntity
        id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        firstName: String,
        lastName: String,
        identityCard: String,
        personalNumber: String,
        serviceType: {
          type: String,
          enum: ServiceType,
          default: ServiceType.CIVILIAN,
        },
        phone: [String],
        mobilePhone: [String],
        address: String,
        sex: {
          type: String,
          enum: Sex,
        },
        birthdate: Number,
        entityType: {
          type: String,
          enum: EntityType,
          default: EntityType.CIVILIAN,
        },
        clearance: {
          type: String,
          enum: Clearance,
        },
      },
      default: null,
    },
    createdEntity: {
      type: {
        //also for editEntity
        id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        firstName: String,
        lastName: String,
        identityCard: String,
        personalNumber: String,
        serviceType: {
          type: String,
          enum: ServiceType,
          default: ServiceType.CIVILIAN,
        },
        phone: [String],
        mobilePhone: [String],
        address: String,
        sex: {
          type: String,
          enum: Sex,
        },
        birthdate: Number,
        entityType: {
          type: String,
          enum: EntityType,
          default: EntityType.CIVILIAN,
        },
        clearance: {
          type: String,
          enum: Clearance,
        },
      },
      default: null,
    },

    organizationGroup: {
      type: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
        },
        name: String,
        hierarchy: String,
        parent: {
          id: String,
          hierarchy: String,
        },
      },
      default: null,
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

GeneralRequestSchema.pre<any>("findOneAndUpdate", function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
  };
  func(this._update.$set);
  return next();
});

export const GeneralRequest = connection.model(
  "GeneralRequest",
  GeneralRequestSchema,
  "requests"
);
