const mongoose = require("mongoose");
var user = new mongoose.Schema(
  {
    avatar: String,
    phone:String,
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    nickname: String,
    desc: String,
    sex: Number
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("user", user);
