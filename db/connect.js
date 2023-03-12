const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config/config.env" });

const DB = process.env.DATABASE.replace("<password>", process.env.DB_PASS);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
