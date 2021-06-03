import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Clearance } from "../enums/clearance.enum";
import { RoleStatus } from "../enums/roleStatus.enum";
import { BaseRequestSchema } from "./baseRequest.model";
const extendSchema = require("mongoose-extend-schema");

const CreateRoleSchema: Schema = extendSchema(BaseRequestSchema, {
  jobTitle: String,
  clearance: {
    type: String,
    enum: Clearance,
    default: Clearance.YELLOW,
  },
  roleStatus: {
    type: String,
    enum: RoleStatus,
    default: RoleStatus.ENABLED,
  },
  parent: {
    id: mongoose.Schema.Types.ObjectId,
    fullHierarchy: String,
  },
});

CreateRoleSchema.pre<any>("save", function (this: any, next: any) {
  this.updatedAt = new Date().getTime();
  this.type = RequestType.CREATE_ROLE;
  return next();
});

export const CreateRoleRequest = connection.model(
  "CreateRoleRequest",
  CreateRoleSchema,
  "requests"
);
