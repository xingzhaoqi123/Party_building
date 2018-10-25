var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var mongooseConnection = require("./model/config");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var logger = require("morgan");
// var JwtUtil = require("./public/utils/jwt");

var indexRouter = require("./routes/index");
var app = express();
app.use(
  session({
    secret: "xingzq",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
    store: new MongoStore({ mongooseConnection: mongooseConnection })
  })
);

//对所有需要进行验证身份信息的接口进行拦截，并验证token的合法性
//  登录和添加用户验证token 去掉了
// app.use(function(req, res, next) {
//   if (req.url != "/admin/login" && req.url != '/admin/add') {
//     let token = req.headers.token;
//     let jwt = new JwtUtil(token);
//     let result = jwt.verifyToken();
//     if (result == "err") {
//       console.log(result);
//       res.json({
//         code: 403,
//         msg: "登录已过期，请重新登录"
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
