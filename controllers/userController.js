const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");
const User = require("../models/user");

const avatarsDir = path.join(__dirname, "../public/avatars");

const updateAvatar = async (req, res) => {
  const { path: tempPath, originalname } = req.file;
  const { _id } = req.user; // Zakładam, że masz middleware do uwierzytelniania, który dodaje user do req

  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);

  try {
    // Przetwarzanie obrazu za pomocą Jimp
    const image = await jimp.read(tempPath);
    await image.resize(250, 250).write(resultUpload);

    // Usunięcie pliku z katalogu tmp
    await fs.unlink(tempPath);

    const avatarURL = "/avatars/${fileName}";

    // Aktualizacja URL awatara użytkownika w bazie danych
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempPath);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { updateAvatar };
