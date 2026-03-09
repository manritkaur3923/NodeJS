// const http = require("http");
// const fs = require('fs')
// const port = process.env.PORT || 4000 ;

// const server = http.createServer((req, res) => {
// //   console.log(req);
// res.setHeader('Content-Type', 'text/html')

// if(req.url === "/"){
//     res.statusCode =200
//     const data = fs.readFileSync("index.html")
//     res.end(data)
// }
//   res.end("<h1>Hello mani</h1>")
// });
 
// server.listen(port, () => {
//   console.log(`Server is listening to ${port}`);
// });

// Built-in module
// const http = require("http");
// External module
const express = require("express");

const app = express();

//adding middleware
app.use((req, res, next) => {
  console.log("First middleware", req.method);
  res.send("<h3>Hello </h3>")
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware", req.method);
});

// const server = http.createServer(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});
