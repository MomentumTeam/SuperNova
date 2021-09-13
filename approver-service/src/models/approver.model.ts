import mongoose from 'mongoose';
import { UserType } from '../interfaces/protoc/proto/approverService';
import { connection } from '../mongoose';
const { Schema } = mongoose;

export const ApproverSchema = new Schema(
  {
    entityId: { type: mongoose.Schema.Types.ObjectId, default: null },
    displayName: { type: String, default: null },
    domainUsers: { type: [String], default: [] },
    type: { type: String, enum: UserType, default: UserType.SOLDIER },
    akaUnit: { type: String, default: null },
  },
  { strict: false }
);
ApproverSchema.index({ displayName: 'text' });

// TODO : unique combination of entityID and type
export const ApproverModel = connection.model(
  'Approver',
  ApproverSchema,
  'approvers'
);
