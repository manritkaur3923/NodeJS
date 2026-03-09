const path = require('path')
const express = require("express");
const app = express();

const hostRouter = require("./routes/hostRoutes")
const userRouter = require("./routes/userRoutes")
const rootdir = require('./utils/pathUtils')

app.use(express.urlencoded())
app.use(userRouter)
app.use('/host',hostRouter)

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootdir,'views', '404.html'))
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
