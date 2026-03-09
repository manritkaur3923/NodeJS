const path = require('path')
const express = require('express')
const router = express.Router()

const rootdir = require('../utils/pathUtils');

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootdir, 'pages', 'home.html'))
  
});
router.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootdir, 'pages', 'contact-us.html'))
});

router.post("/contact-us", (req, res, next) => {
    console.log("Data added : ",req.body);
    res.sendFile(path.join(rootdir, 'pages', 'loginSuccess.html'))
   
});

module.exports = router ;