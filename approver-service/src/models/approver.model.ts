import * as mongoose from 'mongoose';
import { ApproverType } from '../interfaces/protoc/proto/requestService';
import * as C from '../config';
const { Schema } = mongoose;

export const ApproverSchema = new Schema(
  {
    entityId: { type: mongoose.Schema.Types.ObjectId, required: true },
    displayName: { type: String, required: true },
    domainUsers: { type: [String], default: [] },
    personalNumber: { type: String, default: '' },
    identityCard: { type: String, default: '' },
    type: { type: String, enum: ApproverType, default: ApproverType.SOLDIER },
    akaUnit: { type: String, default: '' },
    directGroup: { type: String, default: '' },
    groupsInCharge: { type: [String], default: [C.rootId] },
    specialGroupId: { type: String, default: null },
  },
  { strict: false }
);
ApproverSchema.index({ displayName: 'text' });
ApproverSchema.index(
  { specialGroupId: 1 },
  {
    unique: true,
    partialFilterExpression: { specialGroupId: { $type: 'string' } },
  }
);

//TODO: user-friendly error when the unique key already exists
ApproverSchema.index(
  { entityId: 1, type: 1, specialGroupId: 1 },
  { unique: true }
);

export const ApproverModel = mongoose.model(
  'Approver',
  ApproverSchema,
  'approvers'
);
