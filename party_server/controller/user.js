var express = require("express");
var router = express.Router();
var userModel = require("../model/user");
var JwtUtil = require("../public/utils/jwt");
var auth = require("./auth");
router.post("/add", auth, async (req, res) => {
  try {
    let { username, password, avatar, nickname, sex, desc } = req.body;
    const data = await userModel.create({
      username,
      password,
      avatar,
      nickname,
      sex,
      desc
    });
    res.json({
      code: 200,
      msg: "新建管理员成功",
      data
    });
  } catch (err) {
    res.json({
      code: 400,
      msg: err
    });
    next(err);
  }
});

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
    const { username, password } = req.body;
    const loginData = await userModel.findOne({ username });
    if (!loginData) {
      res.json({
        code: 400,
        msg: "用户不存在"
      });
    } else {
      if (password && password == loginData.password) {
        req.session.user = loginData;

        let _id = loginData._id.str;
        let jwt = new JwtUtil(_id);
        let token = jwt.generateToken();

        res.json({
          code: 200,
          msg: "登陆成功",
          token: token,
          userData: {
            nickname: loginData.nickname,
            avatar: loginData.avatar,
            desc: loginData.desc,
            sex: loginData.sex
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
