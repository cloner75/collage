// Packages
import { Schema, Types, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const chatSchema = new Schema(
  {
    conversationId: { type: Types.ObjectId, required: true },
    userId: { type: Types.ObjectId, required: true },
    message: {
      type: String,
      required: true,
    },
    status: { type: String, required: true },
    type: { type: Number, required: true, default: 1 },
  },
  { versionKey: false }
);

chatSchema.plugin(paginate);
chatSchema.plugin(timestamp);

const UserModel = model("chat", chatSchema);
UserModel.createIndexes();

export default UserModel;
