const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../database/models/User");

const usersLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error("Username does not exist");
      error.code = 401;
      next(error);
    } else {
      const rightPassword = bcrypt.compare(password, user.password);
      if (!rightPassword) {
        const error = new Error("Password incorrect");
        error.code = 401;
        next(error);
      }
      const userData = {
        username: user.username,
        id: user.id,
      };
      const token = jwt.sign(userData, process.env.JWT_TOKEN, {
        expiresIn: "7d",
      });
      res.json({ token });
    }
  } catch (error) {
    next(error);
  }
};

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

module.exports = { usersLogin, usersRegister };
