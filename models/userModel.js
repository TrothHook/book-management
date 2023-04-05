const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
      select: false
    },
    address: {
      street: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      pincode: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

// hashing the password

userSchema.pre("save", async function (next) {
  if (!this.isModified) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("Users", userSchema);
