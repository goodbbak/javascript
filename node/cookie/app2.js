const express = require("express");
const app = express(); //이 자체가 서버구성
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.get("/", (req, res) => {
  console.log("Cookies:", req.cookies);
  res.cookie("test", "test");
  res.send("express");
});

app.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
