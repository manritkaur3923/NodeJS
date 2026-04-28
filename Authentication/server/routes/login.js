const express = require("express");
const { Login } = require("../controllers/login");
const loginRouter = express.Router();

loginRouter.get("/login", Login);

module.exports = loginRouter;
