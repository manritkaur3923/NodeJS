// const express = require("express");
// const cookieParser = require("cookie-parser");
// const app = express();

// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("name", "Manrit");
//   res.send("Cookie Stored");
// });
// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("Read Cookie data");
// });
// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log("Server is listening to PORT", PORT);
// });

const express = require("express");
const app = express();
require("dotenv").config()

const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./server/Config/db");
const userRouter = require("./server/routes/userRoute");
const loginRouter = require("./server/routes/login");

connectDB();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", loginRouter);
app.use("/api", userRouter);


app.listen(8000, () => {
  console.log("Server is Runnin'");
});
