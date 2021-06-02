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

const CreateHierarchySchema: Schema = extendSchema(RequestSchema, {
  newChild: String,
  parent: {
    id: mongoose.Schema.Types.ObjectId,
    hierarchy: String,
  },
});

CreateHierarchySchema.pre<any>("save", function (this: any, next: any) {
  this.updatedAt = new Date().getTime();
  this.type = RequestType.CREATE_HIERARCHY;
  return next();
});

export const CreateHierarchyRequest = connection.model(
  "CreateHierarchyRequest",
  CreateHierarchySchema,
  "requests"
);
