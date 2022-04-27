import mongoose from 'mongoose';
const { Schema } = mongoose;

export const OptionsSchema = new Schema(
  {
    entityId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      required: true,
      index: true
    },
    toggleProfilePicture: {
      type: Boolean,
      required: true
    },
    getMailNotifications: {
      type: Boolean,
      required: true
    },
    showPhoneNumber: {
      type: Boolean,
      required: true
    },

    favoriteCommanders: [{ type: String, default: '', uniqueItems: true }] 
  });

export const OptionsModel = mongoose.model('Option', OptionsSchema, 'options');
