import mongoose from 'mongoose';
import {
  ApproverType,
  approverTypeToJSON,
  Decision,
  decisionToJSON,
  ErrorType,
  errorTypeToJSON,
  RequestStatus,
  requestStatusToJSON,
  RequestType,
  requestTypeToJSON,
  StageStatus,
  stageStatusToJSON,
} from '../interfaces/protoc/proto/requestService';
const { Schema } = mongoose;
import autoIncrement from 'mongoose-auto-increment';
import * as C from '../config';

autoIncrement.initialize(mongoose.connection);

const RequestSchema = new Schema(
  {
    createdAt: { type: Number, default: () => new Date().getTime() },
    due: { type: Number, default: () => new Date().getTime() },
    updatedAt: { type: Number, default: () => new Date().getTime() },
    type: {
      type: String,
      enum: RequestType,
    },
    needSuperSecurityDecision: {
      type: Boolean,
      default: false,
    },
    needSecurityDecision: {
      type: Boolean,
      default: true,
    },
    needAdminDecision: {
      type: Boolean,
      default: false,
    },
    hasSecurityAdmin: {
      type: Boolean,
      default: false,
    },
    comments: { type: String, default: '' },
    approversComments: {
      type: {
        commanderComment: { type: String, default: '' },
        securityComment: { type: String, default: '' },
        superSecurityComment: { type: String, default: '' },
      },
      default: {
        commanderComment: '',
        securityComment: '',
        superSecurityComment: '',
      },
    },
    submittedBy: {
      type: {
        id: { type: mongoose.Schema.Types.ObjectId, default: null },
        displayName: { type: String, default: '' },
        identityCard: { type: String, default: '' },
        personalNumber: { type: String, default: '' },
        directGroup: { type: String, default: '' },
        ancestors: { type: [String], default: [C.rootId] },
      },
      default: {
        id: null,
        displayName: '',
        identityCard: '',
        personalNumber: '',
        directGroup: '',
        ancestors: [C.rootId],
      },
    },
    status: {
      type: String,
      enum: RequestStatus,
      default: requestStatusToJSON(RequestStatus.SUBMITTED),
    },
    commanderDecision: {
      type: {
        approver: {
          type: {
            id: { type: mongoose.Schema.Types.ObjectId, default: null },
            displayName: { type: String, default: '' },
            identityCard: { type: String, default: '' },
            personalNumber: { type: String, default: '' },
          },
          default: {
            id: null,
            displayName: '',
            identityCard: '',
            personalNumber: '',
          },
        },
        reason: {
          type: String,
          default: '',
        },
        date: {
          type: Number,
          default: () => new Date().getTime(),
        },
        decision: {
          type: String,
          enum: Decision,
          defualt: decisionToJSON(Decision.DECISION_UNKNOWN),
        },
      },
      default: {
        approver: {
          id: null,
          displayName: '',
          identityCard: '',
          personalNumber: '',
        },
        reason: '',
        date: () => new Date().getTime(),
        decision: decisionToJSON(Decision.DECISION_UNKNOWN),
      },
    },
    securityDecision: {
      type: {
        approver: {
          type: {
            id: { type: mongoose.Schema.Types.ObjectId, default: null },
            displayName: { type: String, default: '' },
            identityCard: { type: String, default: '' },
            personalNumber: { type: String, default: '' },
          },
          default: {
            id: null,
            displayName: '',
            identityCard: '',
            personalNumber: '',
          },
        },
        reason: {
          type: String,
          default: '',
        },
        date: {
          type: Number,
          default: () => new Date().getTime(),
        },
        decision: {
          type: String,
          enum: Decision,
          defualt: decisionToJSON(Decision.DECISION_UNKNOWN),
        },
      },
      default: {
        approver: {
          id: null,
          displayName: '',
          identityCard: '',
          personalNumber: '',
        },
        reason: '',
        date: () => new Date().getTime(),
        decision: decisionToJSON(Decision.DECISION_UNKNOWN),
      },
    },
    superSecurityDecision: {
      type: {
        approver: {
          type: {
            id: { type: mongoose.Schema.Types.ObjectId, default: null },
            displayName: { type: String, default: '' },
            identityCard: { type: String, default: '' },
            personalNumber: { type: String, default: '' },
          },
          default: {
            id: null,
            displayName: '',
            identityCard: '',
            personalNumber: '',
          },
        },
        reason: {
          type: String,
          default: '',
        },
        date: {
          type: Number,
          default: () => new Date().getTime(),
        },
        decision: {
          type: String,
          enum: Decision,
          defualt: decisionToJSON(Decision.DECISION_UNKNOWN),
        },
      },
      default: {
        approver: {
          id: null,
          displayName: '',
          identityCard: '',
          personalNumber: '',
        },
        reason: '',
        date: () => new Date().getTime(),
        decision: decisionToJSON(Decision.DECISION_UNKNOWN),
      },
    },
    commanders: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, default: null },
        displayName: { type: String, default: '' },
        identityCard: { type: String, default: '' },
        personalNumber: { type: String, default: '' },
        directGroup: { type: String, default: '' },
        // ancestors: { type: [String], default: [C.rootId] },
      },
    ],
    securityApprovers: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, default: null },
        displayName: { type: String, default: '' },
        identityCard: { type: String, default: '' },
        personalNumber: { type: String, default: '' },
        directGroup: { type: String, default: '' },
        // ancestors: { type: [String], default: [C.rootId] },
      },
    ],
    superSecurityApprovers: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, default: null },
        displayName: { type: String, default: '' },
        identityCard: { type: String, default: '' },
        personalNumber: { type: String, default: '' },
        directGroup: { type: String, default: '' },
        // ancestors: { type: [String], default: [C.rootId] },
      },
    ],
    kartoffelStatus: {
      type: {
        status: {
          type: String,
          enum: StageStatus,
          default: stageStatusToJSON(StageStatus.STAGE_UNKNOWN),
        },
        createdId: {
          type: String,
          default: '',
        },
        message: {
          type: String,
          default: '',
        },
        failedRetries: {
          type: Number,
          default: 0,
        },
      },
      default: {
        status: stageStatusToJSON(StageStatus.STAGE_UNKNOWN),
        createdId: '',
        message: '',
        failedRetries: 0,
      },
    },
    adStatus: {
      type: {
        status: {
          type: String,
          enum: StageStatus,
          default: StageStatus.STAGE_UNKNOWN,
        },
        message: {
          type: String,
          default: null,
        },
        failedRetries: {
          type: Number,
          default: 0,
        },
      },
      default: {
        status: stageStatusToJSON(StageStatus.STAGE_UNKNOWN),
        message: '',
        failedRetries: 0,
      },
    },
    kartoffelParams: {
      name: { type: String, default: null },
      parent: { type: String, default: null },
      source: { type: String, default: null },
      jobTitle: { type: String, default: null },
      directGroup: { type: String, default: null },
      roleId: { type: String, default: null },
      type: { type: String, default: null },
      uniqueId: { type: String, default: null },
      mail: { type: String, default: null },
      isRoleAttachable: { type: Boolean, default: null },
      id: { type: mongoose.Schema.Types.ObjectId, default: null },
      firstName: { type: String, default: null },
      lastName: { type: String, default: null },
      identityCard: { type: String, default: null },
      personalNumber: { type: String, default: null },
      serviceType: { type: String, default: null },
      phone: { type: [String], default: null },
      mobilePhone: { type: [String], default: null },
      address: { type: String, default: null },
      clearance: { type: String, default: null },
      sex: { type: String, default: null },
      rank: { type: String, default: null },
      birthdate: { type: Number, default: null },
      entityType: { type: String, default: null },
      unit: { type: String, default: null },
      needDisconnect: { type: Boolean, default: false },
      roleEntityType: { type: String, default: null },
      currentJobTitle: { type: String, default: null },
      newJobTitle: { type: String, default: null },
      oldJobTitle: { type: String, default: null },
      hierarchy: { type: String, default: null },
      oldHierarchy: { type: String, default: null },
      upn: { type: String, default: null },
      role: { type: Object, default: null },
      entityId: { type: String, default: null },
    },
    adParams: {
      ouDisplayName: { type: String, default: null },
      ouName: { type: String, default: null },
      name: { type: String, default: null },
      samAccountName: { type: String, default: null },
      jobTitle: { type: String, default: null },
      oldSAMAccountName: { type: String, default: null },
      newSAMAccountName: { type: String, default: null },
      upn: { type: String, default: null },
      firstName: { type: String, default: null },
      lastName: { type: String, default: null },
      fullName: { type: String, default: null },
      rank: { type: String, default: null },
      roleSerialCode: { type: String, default: null },
      oldName: { type: String, default: null },
      newName: { type: String, default: null },
      oldOuName: { type: String, default: null },
      newOuName: { type: String, default: null },
      newJobTitle: { type: String, default: null },
    },
    additionalParams: {
      entityId: { type: String, default: null },
      displayName: { type: String, default: null },
      domainUsers: { type: [String], default: [] },
      akaUnit: { type: String, default: null },
      type: {
        type: String,
        enum: ApproverType,
        default: approverTypeToJSON(ApproverType.COMMANDER),
      },
      personalNumber: { type: String, default: null },
      identityCard: { type: String, default: null },
      directGroup: { type: String, default: null },
      groupInChargeId: { type: String, default: C.rootId },
      specialGroupId: { type: String, default: '' },
    },
    isPartOfBulk: { type: Boolean, default: false },
    bulkRequestId: { type: mongoose.Schema.Types.ObjectId, default: null },
    requestIds: [mongoose.Schema.Types.ObjectId],
    rowNumber: { type: String, default: '' },
    rowErrors: [
      {
        rowNumber: { type: String, default: '' },
        error: { type: String, default: '' },
        errorType: {
          type: String,
          enum: ErrorType,
          default: errorTypeToJSON(ErrorType.UNKNOWN_STAGE),
        },
      },
    ],
    excelFilePath: { type: String, default: '' },
  },
  { strict: false }
);

RequestSchema.plugin(autoIncrement.plugin, {
  model: 'Request',
  field: 'serialNumber',
  startAt: 1,
  incrementBy: 1,
});

RequestSchema.pre<any>('save', function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
    object.commanderDecision.date = new Date().getTime();
    object.securityDecision.date = new Date().getTime();
    object.superSecurityDecision.date = new Date().getTime();
    if (
      object.submittedBy &&
      (!object.submittedBy.ancestors ||
        object.submittedBy.ancestors.length === 0)
    ) {
      object.submittedBy.ancestors = [C.rootId];
    }
  };
  func(this);
  return next();
});

RequestSchema.pre<any>('findOneAndUpdate', function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
  };
  if (!this._update.$set) {
    this._update.$set = {};
  }
  func(this._update.$set);
  return next();
});

RequestSchema.index({
  'submittedBy.displayName': 'text',
  'submittedBy.personalNumber': 'text',
  'submittedBy.identityCard': 'text',
  'commanders.displayName': 'text',
  'commanders.personalNumber': 'text',
  'commanders.identityCard': 'text',
  'securityApprovers.displayName': 'text',
  'securityApprovers.personalNumber': 'text',
  'securityApprovers.identityCard': 'text',
  'superSecurityApprovers.displayName': 'text',
  'superSecurityApprovers.personalNumber': 'text',
  'superSecurityApprovers.identityCard': 'text',
  serialNumber: 'text',
});

export const RequestModel = mongoose.model(
  'Request',
  RequestSchema,
  'requests'
);
