const bcrypt = require("bcrypt");
const User = require("../../database/models/User");

const usersRegister = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const createdUser = await User.create(req.body);
    res.status(200).json(createdUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { usersRegister };
