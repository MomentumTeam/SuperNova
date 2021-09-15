import mongoose from 'mongoose';
import { UserType } from '../interfaces/protoc/proto/approverService';
import { connection } from '../mongoose';
const { Schema } = mongoose;

export const ApproverSchema = new Schema(
  {
    entityId: { type: mongoose.Schema.Types.ObjectId, required: true },
    displayName: { type: String, required: true },
    domainUsers: { type: [String], default: [] },
    type: { type: String, enum: UserType, default: UserType.SOLDIER },
    akaUnit: { type: String, required: true },
  },
  { strict: false }
);
ApproverSchema.index({ displayName: 'text' });

//TODO: user-friendly error when the unique key already exists
ApproverSchema.index({ entityId: 1, type: 1 }, {unique: true});

export const ApproverModel = connection.model(
  'Approver',
  ApproverSchema,
  'approvers'
);
