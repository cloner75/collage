// Packages
import { Schema, Types, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const conversationSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true },
    clientId: { type: Types.ObjectId, required: true },
    status: { type: String, required: true },
  },
  { versionKey: false }
);

conversationSchema.plugin(paginate);
conversationSchema.plugin(timestamp);

const UserModel = model("conversation", conversationSchema);
UserModel.createIndexes();

export default UserModel;
