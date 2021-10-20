import mongoose from 'mongoose';
const { Schema } = mongoose;

export const PrefixSchema = new Schema(
  {
    prefix: {
      type: String,
      default: '000',
      unique: true,
    },
    currentCounter: {
      type: Number,
      default: 1,
    },
    teaInProgress: {
      type: [String],
      default: [],
    },
    failedTea: {
      type: [String],
      default: [],
    },
    createdAt: { type: Number, default: new Date().getTime() },
  },
  { strict: false }
);

export const PrefixModel = mongoose.model('Prefix', PrefixSchema, 'prefixes');
