const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, "manrit");
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = authenticateUser