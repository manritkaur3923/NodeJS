const express = require("express");
const app = express();

const path = require('path')
const router = require('./routes/userRoutes')

const rootdir = require('./utils/pathUtils')

app.use(express.urlencoded())
app.use(router)
app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootdir, "pages", '404.html'))
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
