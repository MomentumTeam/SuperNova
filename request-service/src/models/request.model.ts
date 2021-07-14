import mongoose from 'mongoose';
import { connection } from '../mongoose';
import {
  Decision,
  RequestStatus,
  RequestType,
  StageStatus,
} from '../interfaces/protoc/proto/requestService';
const { Schema } = mongoose;

export const RequestSchema = new Schema(
  {
    createdAt: { type: Number, default: new Date().getTime() },
    updatedAt: { type: Number, default: new Date().getTime() },
    type: {
      type: Number,
      enum: RequestType,
    },

    submittedBy: mongoose.Schema.Types.ObjectId,
    status: {
      type: String,
      enum: RequestStatus,
      default: RequestStatus.SUBMITTED,
    },
    commanderDecision: {
      type: {
        approverId: {
          type: mongoose.Schema.Types.ObjectId,
          default: null,
        },
        approverDecision: {
          type: String,
          enum: Decision,
          defualt: Decision.DECISION_UNKNOWN,
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
          defualt: Decision.DECISION_UNKNOWN,
        },
      },
      default: null,
    },
    commanders: [mongoose.Schema.Types.ObjectId],
    kartoffelStatus: {
      status: {
        type: String,
        enum: StageStatus,
        default: StageStatus.STAGE_UNKNOWN,
      },
      createdId: {
        type: String,
        default: null,
      },
      message: {
        type: String,
        default: null,
      },
    },
    adStatus: {
      status: {
        type: String,
        enum: StageStatus,
        default: StageStatus.STAGE_UNKNOWN,
      },
      message: {
        type: String,
        default: null,
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
      birthdate: { type: Number, default: null },
      entityType: { type: String, default: null },
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
      newJobTitle: { type: String, default: null },
    },
  },
  { strict: false }
);

RequestSchema.pre<any>('save', function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
  };
  func(this);
  return next();
});

RequestSchema.pre<any>('findOneAndUpdate', function (next) {
  const func: any = (object: any) => {
    object.updatedAt = new Date().getTime();
  };
  func(this._update.$set);
  return next();
});

export const RequestModel = connection.model(
  'Request',
  RequestSchema,
  'requests'
);
