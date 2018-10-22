const mongoose = require("mongoose");
var user = new mongoose.Schema(
  {
    avatar: String,
    idcard: {
      type: String,
      unique: true,
      required: true
    },
    password: String,
    username:String,
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("user", user);
