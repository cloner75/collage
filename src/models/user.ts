// Packages
import { Schema, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

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
    room: {
      number: { type: Number, required: true },
      floor: { type: Number, required: true },
    },
    rent: {
      price: { type: Number, required: true },
      paid: { type: Boolean, required: true, default: false },
    },
    isUser: { type: Boolean, required: true, default: true },
    score: {
      sum: { type: Number, required: true, default: 0 }, // sum all score
      distance: { type: Number, required: true, default: 0 }, // masafat
      gradePointAverage: { type: Number, required: true, default: 0 }, // moadel
      quota: { type: Number, required: true, default: 0 }, // sahmiye
      term: { type: Number, required: true, default: 0 }, // emtiyaz term
      usage: { type: Number, required: true, default: 0 }, // bar assass tedad term
    },
  },
  { versionKey: false }
);

userSchema.plugin(paginate);
userSchema.plugin(timestamp);

const UserModel = model("user", userSchema);
UserModel.createIndexes();

export default UserModel;
