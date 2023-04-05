const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    const user = await User.findOne({ _id: newUser._id })
      .select("-createdAt")
      .select("-updatedAt")
      .select("-__v");

    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      msg: "bad request",
    });
  }
};
