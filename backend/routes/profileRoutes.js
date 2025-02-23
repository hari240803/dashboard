const express = require("express");
const { getProfile, addProfile } = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getProfile);
router.post("/", authMiddleware, addProfile);

module.exports = router;
