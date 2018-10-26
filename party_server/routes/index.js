var express = require("express");
var router = express.Router();
// const user = require("../controller/user");
var JwtUtil = require("../public/utils/jwt");

router.use("/admin", require("../controller/user"));
router.use("/admin/news", require("../controller/news"));
router.use("/admin/category", require("../controller/category"));
router.use("/admin/swiper", require("../controller/swiper"));

// app.use(function(req, res, next) {
router.use("/", (req, res, next) => {
  if (req.url != "/admin/login" && req.url != "/admin/add") {
    let token = req.headers.token;
    let jwt = new JwtUtil(token);
    let result = jwt.verifyToken();
    if (result == "err") {
      console.log(result);
      res.json({
        code: 403,
        msg: "登录已过期，请重新登录"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

module.exports = router;
