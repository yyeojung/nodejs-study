const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.post("/", userController.createUser); // 회원가입 endpoint
router.post("/login", userController.loginWithEmail); // 로그인 endpoint

module.exports = router;
