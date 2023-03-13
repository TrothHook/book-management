const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      enum: ["Mr", "Mrs", "Miss"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: [true, "Phone number should be unique"],
    },
    email: {
      type: String,
      required: [true, "Email ID is required"],
      validate: [validator.isEmail, "Email ID must be valid"],
      unique: [true, "Email ID must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      maxlength: 15,
    },
    address: [
      {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        pincode: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
