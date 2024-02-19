import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: "String",
      required: [true, "fullname is required"],
    },
    phoneNumber: {
      type: "Number",
      required: [true, "fullname is required"],
      min: 10,
      max: 10,
    },
    password: {
      type: "String",
      required: [true, " is required"],
    },
    email: {
      type: "String",
      required: [true, "email is required"],
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
