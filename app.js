const express = require("express");
const morgan = require("morgan");

const ErrorHandler = require("./ErrorClass");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(morgan("dev"));

// parse json data
app.use(express.json())

// parse form data
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
    return next(new ErrorHandler(`No route found at ${req.originalUrl}`, 404))
});

module.exports = app;
