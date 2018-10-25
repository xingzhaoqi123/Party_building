const mongoose = require("mongoose");
var swiper = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    sort: Number,
    status: {
        type:Number,
        default:1
    },
    newsId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "news"
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("swiper", swiper);
