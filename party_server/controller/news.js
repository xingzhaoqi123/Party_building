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
router.get("/all", auth, async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query;
    page = parseInt(page);
    page_size = parseInt(page_size);
    const data = await newsModel
      .find()
      .skip((page - 1) * page_size)
      .limit(page_size)
      .populate({ path: "author", select: "-password" })
      .populate({ path: "type" })

      .sort({ _id: -1 });
    res.json({
      code: 200,
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
router.delete("/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    const data = await newsModel.deleteOne({ _id: id });
    res.json({
      code: 200,
      msg: "删除成功"
    });
  } catch (err) {
    res.json({
      code: 400,
      msg: "删除失败"
    });
    next(err);
  }
});
router.put("/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    let { title, content, contentText, img, author, type } = req.body;
    const data = await newsModel.findById(id);
    const updateData = await data.update({
      title,
      content,
      contentText,
      img,
      author,
      type
    });
    res.json({
      code: 200,
      data: updateData,
      msg: "修改成功"
    });
  } catch (err) {
    res.json({
      code: 400,
      data: updateData,
      msg: "修改失败"
    });
    next(err);
  }
});
router.get("/:id", auth, async (req, res, next) => {
  try {
    let { id } = req.params;
    const data = await newsModel
      .findById(id)
      .populate({ path: "author", select: "-password" })
      .populate({ path: "type" });
    res.json({
      code: 200,
      data,
      msg: "获取成功"
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
