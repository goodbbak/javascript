import express from "express";
import boardRouter from "./routes/board.js";
import boardRouter2 from "./routes/customer.js";
const app = express(); //http.createserver()
const port = 3000; //서버포트번호
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", function (req, res) {
  console.log(req.query.email);
  res.send("로그인완료");
});
app.use(express.static("public"));
app.use("/board", boardRouter);
app.use("/customer", boardRouter2);
app.use((err, req, res, next) => {
  res.status(500).json({ code: res.statusCode, msg: err.message });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get(
  "/example",
  (req, res, next) => {
    throw new Error("에러발생");
    console.log(a / 5);
    console.log("첫번째콜백");
    next();
  },
  (req, res) => {
    res.send("두번째콜백");
  }
);

//acd abcd 가능 ?앞의 b가 있거나 없거나
app.get("/ab?cd", (req, res) => {
  res.send("정규표현식");
});
app.listen(port, () => {
  console.log(`서버가실행됩니다.http://localhost:${port}`);
});
