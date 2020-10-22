// Packages
import { Schema, Types, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const fileSchema = new Schema(
  {
    type: { type: Number, required: true, default: 1 },
    cdnFile: { type: String, required: true, index: true },
    typeFile: { type: String, required: true, index: true },
    mimeType: { type: String, required: true },
    size: { type: String, required: true },
    path: { type: String, required: false },
    originalName: { type: String, required: false },
    encoding: { type: String, required: false },
    destination: { type: String, required: false },
    buffer: { type: Buffer, required: false },
    fieldname: { type: String, required: false },
    formats: {
      128: { type: String, required: false },
      512: { type: String, required: false },
      thumbnail: { type: String, required: false },
      blur: { type: String, required: false },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

fileSchema.plugin(paginate);
// fileSchema.plugin(timestamp);

const UserModel = model("file", fileSchema);
UserModel.createIndexes();

export default UserModel;
