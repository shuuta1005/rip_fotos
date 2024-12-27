const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Surf Photo Platform API");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost${port}:`);
});
