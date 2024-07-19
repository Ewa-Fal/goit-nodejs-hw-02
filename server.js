// Importujemy wymagane moduły
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config(); // Wczytujemy zmienne środowiskowe z pliku .env

// Konfigurujemy port i URI bazy danych
const MAIN_PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_URL;

// Sprawdzamy, czy URI bazy danych jest poprawne
if (!uriDb) {
  console.error("DB_URL is not defined in the environment variables");
  process.exit(1);
}

// Łączymy się z bazą danych
mongoose.connect(uriDb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connection successful");
    // Uruchamiamy serwer
    app.listen(MAIN_PORT, () => {
      console.log(`Server is running on port ${MAIN_PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });
