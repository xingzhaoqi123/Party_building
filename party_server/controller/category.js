var express = require("express");
var router = express.Router();
var auth = require("./auth");
var categoryModel = require("../model/category");

router.post("/add", auth, async (req, res, next) => {
  try {
    let { title, icon } = req.body;
    const data = await categoryModel.create({ title, icon });
    res.json({
      code: 200,
      data,
      msg: "添加成功"
    });
  } catch (err) {
    next(err);
  }
});
router.get("/list", auth, async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query;
    page = parseInt(page);
    page_size = parseInt(page_size);

    const data = await categoryModel
      .find()
      .skip((page - 1) * page_size)
      .limit(page_size)
      .sort({ _id: -1 });
      res.json({
        code:200,
        data,
        msg:'获取成功'
      })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
