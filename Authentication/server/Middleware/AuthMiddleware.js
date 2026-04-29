const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    // Verify Token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Attach the user data to req
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = authenticateUser;
