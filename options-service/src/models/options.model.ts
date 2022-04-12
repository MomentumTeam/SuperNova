import mongoose from 'mongoose';
const { Schema } = mongoose;

export const OptionsSchema = new Schema(
  {
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: true,
      index: true,
      default: null
    },
    toggleProfilePicture: {
      type: Boolean,
      required: true,
      default: true
    },
    getMailNotifications: {
      type: Boolean,
      required: true,
      default: true
    },
    showPhoneNumber: {
      type: Boolean,
      required: true,
      default: true
    },

    favoriteCommanders: [{ type: String, default: '' }] 
  });

export const OptionsModel = mongoose.model('Option', OptionsSchema, 'options');
