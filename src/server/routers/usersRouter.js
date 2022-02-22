const express = require("express");
const {
  usersRegister,
  usersLogin,
} = require("../controllers/usersControllers");

const router = express.Router();

router.post("/login", usersLogin);
router.post("/register", usersRegister);

module.exports = router;
