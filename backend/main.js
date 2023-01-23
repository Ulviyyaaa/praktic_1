const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB is connected");
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  }
});
