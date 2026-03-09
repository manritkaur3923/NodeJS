// core module 
const path = require("path")
// local module
const rootdir = require('../utils/pathUtils')
// external module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-menu", (req, res, next) => {
  res.sendFile(path.join(rootdir, 'views', 'addItem.html'))
});

hostRouter.post("/add-menu", (req, res, next) => {
  console.log("Menu added:", req.body);
  res.sendFile(path.join(rootdir, 'views', 'itemAdded.html'))
});

module.exports = hostRouter;
