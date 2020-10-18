// Packages
import * as mongoose from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, index: true, unique: true },
    username: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: true },
    name: { type: String, required: false },
    family: { type: String, required: false },
    mobile: { type: String, required: false },
    avatar: { type: String, required: false },
  },
  { versionKey: false }
);

userSchema.plugin(paginate);
userSchema.plugin(timestamp);

const UserModel = mongoose.model("user", userSchema);
UserModel.createIndexes();

export default UserModel;
