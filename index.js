const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
require("dotenv").config();

app.use(express.json())
app.use(cors());
app.use("/api", router);

app.listen(
  process.env.PORT,
  console.log(`LISTENING TO PORT ${process.env.PORT}`)
);
