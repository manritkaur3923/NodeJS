const express = require("express");
const fs = require("fs");
const app = express();

// app.use("/", (req, res) => {
//   res.send("Hello Manrit");
// });

app.get("/", (req, res) => {
  const stream = fs.createReadStream("./sample.txt", {encoding : "utf-8", highWaterMark : 10});
  stream.on("data", (chunk) => {
    console.log(chunk)
    // res.write(chunk)
});
  stream.on("end", () => res.end());
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
