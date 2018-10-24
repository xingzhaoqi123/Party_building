const mongoose = require("mongoose");
var category = new mongoose.Schema(
  {
    type: String,
    icon: String
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("category", category);
