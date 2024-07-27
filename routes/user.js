const express = require("express");
const router = express.Router();
const { updateAvatar } = require("../controllers/userController");
const upload = require("../middlewares/upload");
const auth = require("../middlewares/auth"); // Zakładam, że masz middleware do uwierzytelniania

// Trasa do aktualizacji awatara
router.patch("/avatars", auth, upload.single("avatar"), updateAvatar);

module.exports = router;
