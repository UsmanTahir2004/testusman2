const express = require("express");
const userController = require("../api/userController");

const router = express.Router();

router.get("/get-data", userController.getUserRecord);
router.get("/report", userController.getReport);
router.get("/Rank", userController.getUserRank);

module.exports = router;
