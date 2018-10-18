const mongoose = require("mongoose");
var user = new mongoose.Schema(
  {
    avator: String,
    idcard: {
      type: String,
      unique: true,
      required: true
    },
    password: String
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("user", user);
