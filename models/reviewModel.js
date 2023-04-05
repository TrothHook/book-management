const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.ObjectId,
      ref: "Books",
    },
    reviewedBy: {
      type: String,
      required: [true, "Reviewer is required"],
      default: "Guest",
      // value:
    },
    reviewedAt: {
      type: Date,
      required: [true, "Review time is required"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Rating is required"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reviews", reviewSchema);
