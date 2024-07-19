const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passport = require("../passport");

// Definiowanie schematu użytkownika
const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Metoda do sprawdzenia hasła (przykład)
UserSchema.methods.validPassword = function(password) {
  // Tutaj możesz dodać logikę do weryfikacji hasła, np. z użyciem bcrypt
  return this.password === password; // Prosty przykład, w rzeczywistości użyj bcrypt
};

// Tworzenie modelu
const User = mongoose.model("User", UserSchema);

module.exports = User;
