import mongoose from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
const { Schema } = mongoose;

interface ICreateHierarchySchema extends mongoose.Document {
  type: {
    type: String;
    enum: RequestType;
    default: RequestType.CREATE_HIERARCHY;
  };
  newChild: String;
  parent: {
    id: mongoose.Types.ObjectId;
    hierarchy: String;
  };
  submittedBy: mongoose.Types.ObjectId;
  commanderApproved: Boolean;
  securityApproved: Boolean;
  commanders: [mongoose.Types.ObjectId];
  createdAt: Number;
  updatedAt: Number;
}

const createHierarchySchema = new Schema({
  type: {
    type: String,
    enum: RequestType,
    default: RequestType.CREATE_HIERARCHY,
  },
  newChild: String,
  parent: {
    id: mongoose.Types.ObjectId,
    hierarchy: String,
  },
  submittedBy: mongoose.Types.ObjectId,
  commanderApproved: Boolean,
  securityApproved: Boolean,
  commanders: [mongoose.Types.ObjectId],
  createdAt: { type: Number, default: new Date().getTime() },
  updatedAt: { type: Number, default: new Date().getTime() },
});

createHierarchySchema.pre<ICreateHierarchySchema>("save", function (next) {
  this.updatedAt = new Date().getTime();
  return next();
});

export const CreateHierarchyRequest = connection.model(
  "CreateHierarchyRequest",
  createHierarchySchema,
  "requests"
);
