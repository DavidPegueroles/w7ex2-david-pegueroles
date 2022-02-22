const express = require("express");
const { usersRegister } = require("../controllers/usersControllers");

const router = express.Router();

router.post("/register", usersRegister);

module.exports = router;
