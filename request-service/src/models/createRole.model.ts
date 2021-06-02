import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { connection } from "../mongoose";
import { RequestType } from "../enums/requestType.enum";
import { Domain } from "../enums/domain.enum";
import { ApproverDecision } from "../enums/approverDecision.enum";
import { Status } from "../enums/status.enum";
import { SecurityLevel } from "../enums/securityLevel.enum";
import { RoleStatus } from "../enums/roleStatus.enum";
import { RequestSchema } from "./request.model";
const extendSchema = require("mongoose-extend-schema");

const CreateRoleSchema: Schema = extendSchema(RequestSchema, {
  roleName: String,
  securityLevel: {
    type: String,
    enum: SecurityLevel,
    default: SecurityLevel.YELLOW,
  },
  roleStatus: {
    type: String,
    enum: RoleStatus,
    default: RoleStatus.ENABLED,
  },
  parent: {
    id: mongoose.Schema.Types.ObjectId,
    hierarchy: String,
  },
});

CreateRoleSchema.pre<any>("save", function (this: any, next: any) {
  this.updatedAt = new Date().getTime();
  this.type = RequestType.CREATE_ROLE;
  return next();
});

export const createRoleRequest = connection.model(
  "CreateRoleRequest",
  CreateRoleSchema,
  "requests"
);
