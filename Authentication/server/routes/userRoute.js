const express = require("express");
const { createUser, getAllUsers } = require("../controllers/user");
const authenticateUser = require("../Middleware/AuthMiddleware");
const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/get", authenticateUser, getAllUsers);

module.exports = userRouter;
