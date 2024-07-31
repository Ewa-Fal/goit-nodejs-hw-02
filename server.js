
const app = require("./app")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running. Use our API on port: ${PORT}")
})


const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config(); 

const MAIN_PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_URL;

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


const MAIN_PORT = process.env.PORT || 3001;
const uriDb = process.env.DB_URL;

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    app.listen(MAIN_PORT, function () {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error message: ${err.message}`);
    process.exit(1);
  });

