var express = require("express");
var router = express.Router();
var userModel = require("../model/user");

router.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.user = null;
    res.json({
      code: 200,
      msg: "退出登录成功"
    });
  } else {
    res.json({
      code: 403,
      msg: "不能在未登录状态下退出登录"
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { idcard, password } = req.body;
    const loginData = await userModel.findOne({ idcard });
    // res.send(loginData);
    if (!loginData) {
      res.json({
        code: 400,
        msg: "用户不存在"
      });
    } else {
      if (password && password == loginData.password) {
        req.session.user = loginData;
        res.json({
          code: 200,
          msg: "登陆成功",
          userData: {
            username: loginData.username,
            avatar:loginData.avatar
          }
        });
      } else {
        res.json({
          code: 400,
          msg: "密码不正确"
        });
      }
    }
  } catch (err) {
    res.json({
      code: 400,
      msg: err
    });
    next(err);
  }
});

module.exports = router;
