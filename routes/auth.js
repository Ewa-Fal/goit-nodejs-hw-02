const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");

// Trasa rejestracji użytkownika
router.post("/register", registerUser);

module.exports = router;
