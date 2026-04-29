const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const verifyPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!verifyPassword) {
      return res.status(400).json({
        message: "Password not matched",
      });
    }

    const payload = {
      _id: existingUser._id,
      email: existingUser.email,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "Lax",
    });

    res.status(200).json({
      message: "Login Successful",
      data: {
        token: token,
        data: existingUser,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  Login,
};
