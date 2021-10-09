import mongoose from 'mongoose';
const { Schema } = mongoose;

export const UnitSchema = new Schema(
  {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '100',
    },
    oldDomainSuffix: {
      type: String,
      default: '',
    },
    newDomainSuffix: {
      type: String,
      default: '',
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
    hierarchy: {
      type: String,
      default: '',
    },
    createdAt: { type: Number, default: new Date().getTime() },
  },
  { strict: false }
);

UnitSchema.index({
  hierarchy: 'text',
  id: 'text',
  name: 'text',
});

export const UnitModel = mongoose.model('Unit', UnitSchema, 'units');
