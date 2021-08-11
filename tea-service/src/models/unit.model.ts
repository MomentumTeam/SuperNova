import mongoose from 'mongoose';
import { connection } from '../mongoose';
const { Schema } = mongoose;

export const UnitSchema = new Schema(
  {
    kartoffelId: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '000',
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

export const UnitModel = connection.model('Unit', UnitSchema, 'units');
