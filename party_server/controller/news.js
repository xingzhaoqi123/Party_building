var express = require("express");
var router = express.Router();
var auth = require("./auth");
var newsModel = require("../model/news");

router.post("/add", auth, async (req, res, next) => {
  try {
    const {
      title,
      content,
      contentText,
      img,
      author,
      type,
      looknumber
    } = req.body;
    const dataList = await newsModel.create({
      title,
      content,
      contentText,
      img,
      author,
      type,
      looknumber
    });
    res.json({
      code: 200,
      data: dataList,
      msg: "添加成功"
    });
  } catch (err) {
    res.json({
      code: 400,
      msg: err
    });
    next(err);
  }
});
router.get("/news", auth, async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query;
    page = parseInt(page);
    page_size = parseInt(page_size);
    const data = await newsModel
      .find()
      .skip((page - 1) * page_size)
      .limit(page_size)
      .populate({ path: "user", select: "-password" })
      .populate({ path: "category" })
      .sort({ _id: -1 });
    res.json({
      code: 200,
      data
    });
  } catch (err) {
      res.json({
          code:400,
          msg:err
      })
    next(err);
  }
});

module.exports = router;
