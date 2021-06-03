import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { BaseRequestSchema } from "./baseRequest.model";
const extendSchema = require("mongoose-extend-schema");

const CreateOGSchema: Schema = extendSchema(BaseRequestSchema, {
  newChild: String,
  parent: {
    id: mongoose.Schema.Types.ObjectId,
    fullHierarchy: String,
  },
});

CreateOGSchema.pre<any>("save", function (this: any, next: any) {
  this.updatedAt = new Date().getTime();
  this.type = RequestType.CREATE_OG;
  return next();
});

export const CreateOGRequest = connection.model(
  "CreateHierarchyRequest",
  CreateOGSchema,
  "requests"
);
