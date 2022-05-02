import mongoose from "mongoose";
import _ from "lodash";
const { Schema } = mongoose;

interface IOptions {
  entityId: mongoose.Schema.Types.ObjectId,
  toggleProfilePicture: Boolean,
  getMailNotifications: Boolean,
  showPhoneNumber: Boolean, 
  favoriteCommanders: String[]
}

export const OptionsSchema = new Schema<IOptions>({
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

OptionsSchema.pre('save', function (next) {
  this.favoriteCommanders = _.uniq(this.favoriteCommanders);
  next();
});

export const OptionsModel = mongoose.model("Option", OptionsSchema, "options");
