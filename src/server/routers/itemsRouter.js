const express = require("express");
const getItemsList = require("../controllers/itemsControllers");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/list", auth, getItemsList);

module.exports = router;
