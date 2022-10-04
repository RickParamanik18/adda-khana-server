const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/add", userController.addUser);
router.post("/auth", userController.authUser);
router.get("/get", userController.getUser);
router.get("/get-multi", userController.getUsers);

module.exports = router;
