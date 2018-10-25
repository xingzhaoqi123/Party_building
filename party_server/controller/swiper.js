var express = require("express");
var router = express.Router();
var auth = require("./auth");
var swiperModel = require("../model/swiper");

router.get("/list", auth, async (req, res, next) => {
  try {
    let { page = 1, page_size = 10 } = req.query;
    page = parseInt(page);
    page_size = parseInt(page_size);
    const data =await swiperModel
      .find()
      .skip((page - 1) * page_size)
      .limit(page_size)
      .sort({ sort: -1 })
      .populate({ path: "news" });
    res.json({
      code: 200,
      data,
      msg: "获取成功"
    });
  } catch (err) {
    next(err);
  }
});
router.post("/add", auth, async (req, res, next) => {
  try {
    let { img, title, sort, status, newsId } = req.body;
    const data = await swiperModel.create({
      img,
      title,
      sort,
      status,
      newsId
    });
    res.json({
      code: 200,
      data,
      msg: "添加成功"
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
