// Packages
import { Schema, Types, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const conversationSchema = new Schema(
  {
    adminId: { type: Types.ObjectId, required: true },
    body: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: Number, required: true, default: 1 },
  },
  { versionKey: false }
);

conversationSchema.plugin(paginate);
conversationSchema.plugin(timestamp);

const UserModel = model("notification", conversationSchema);
UserModel.createIndexes();

export default UserModel;
