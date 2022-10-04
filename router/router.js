const express = require("express");
const router = express.Router();

const userRouter = require("./routes/user.router");

router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send("API WORKING FINE");
});

module.exports = router;
