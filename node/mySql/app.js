//웹의 요청에 응답해주는게 웹프레임워크 웹프레임워크를 만들고 사용할수있게 해주는게 express모듈
//express가 미들웨어로 웹에서 요청온 url을 parsing도해주고 url잘라주기도하고 json구조의string을 다시 json객체로 만들어주고 등등 서버가 처리하기쉽게 도와줌
//이 페이지가 서버역할
var createError = require("http-errors");
var express = require("express");
var path = require("path");
//var cookieParser = require('cookie-parser');
var logger = require("morgan");
var indexRouter = require("./routes/index"); //export된 라우트를 여기서 받음
var usersRouter = require("./routes/users");
var booksRouter = require("./routes/books");
var customersRouter = require("./routes/customers");
const session = require("express-session");
const fileStore = require("session-file-store")(session); //세션사용위치지정

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true, //http's'일때 쿠키저장
      maxAge: 60000,
    },
    store: new fileStore(),
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);
app.use("/customers", customersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
