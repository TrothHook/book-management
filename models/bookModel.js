const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      unique: [true, "Book title must be unique"],
      trim: true
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt from the book is required"],
      trim: true
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: [true, "Reference to the user model is required"],
    },
    ISBN: {
      type: String,
      required: [true, "ISBN number of the book is required"],
      unique: [true, "ISBN number must be unique"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    subcategory: {
      type: String,
      required: [true, "Sub Category is required"],
    },
    reviews: {
      type: Number,
      default: 0,
    },
    deletedAt: {
      type: Date,
      default: new Date().toLocaleString(),
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    releasedAt: {
      type: Date,
      required: [true, "Time of release must be mentioned"],
      default: new Date().toISOString().split("T")[0],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Books", bookSchema);
