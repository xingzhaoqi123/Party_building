var express = require("express");
var router = express.Router();
var userModel = require("../model/user");
var JwtUtil = require("../public/utils/jwt");
var auth = require("./auth");

router.get("/user/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    const data = await userModel
      .findById(id)
      .select("-username")
      .select("-password");
    res.json({
      code: 200,
      data,
      msg: "查询成功"
    });
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    const data = await userModel.deleteOne({ _id: id });
    res.json({
      code: 200,
      data,
      msg: "删除成功"
    });
  } catch (err) {
    next(err);
  }
});
router.put("/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    let { avatar, nickname, sex, phone, desc } = req.body;
    const data = await userModel.findById(id);
    const updateData = await data.update({
      avatar,
      nickname,
      sex,
      phone,
      desc
    });
    res.json({
      code: 200,
      // updateData,
      msg: "修改成功"
    });
  } catch (err) {
    res.json({
      code: 400,
      err,
      msg: "修改失败"
    });
    next(err);
  }
});
router.get("/list", auth, async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query;
    page = parseInt(page);
    page_size = parseInt(page_size);

    const dataList = await userModel
      .find()
      .select("-password")
      .skip((page - 1) * page_size)
      .limit(page_size)
      .sort({ _id: -1 });
    res.json({
      code: 200,
      dataList,
      msg: "success"
    });
  } catch (err) {
    res.json({
      code: 400,
      msg: "获取失败"
    });
    next(err);
  }
});

router.post("/add", auth, async (req, res, next) => {
  try {
    const { username, password, avatar, nickname, sex, desc, phone } = req.body;
    const data = await userModel.create({
      username,
      password,
      avatar,
      nickname,
      sex,
      phone,
      desc
    });
    res.json({
      code: 200,
      msg: "添加管理员成功",
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

router.get("/logout", (req, res, next) => {
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

router.post("/login", async (req, res, next) => {
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
            id: loginData._id,
            nickname: loginData.nickname,
            avatar: loginData.avatar,
            desc: loginData.desc,
            sex: loginData.sex,
            phone: loginData.phone
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
