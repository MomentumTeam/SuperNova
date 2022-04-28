import mongoose from "mongoose";
import _ from "lodash";
const { Schema } = mongoose;

export const OptionsSchema = new Schema({
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,
    index: true,
  },
  toggleProfilePicture: {
    type: Boolean,
    required: true,
  },
  getMailNotifications: {
    type: Boolean,
    required: true,
  },
  showPhoneNumber: {
    type: Boolean,
    required: true,
  },

  favoriteCommanders: [{ type: String, default: "" }],
});

OptionsSchema.pre("save", function (next) {
  this.tags = _.uniq(this.tags);
  next();
});

export const OptionsModel = mongoose.model("Option", OptionsSchema, "options");
