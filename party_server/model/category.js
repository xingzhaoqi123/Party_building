const mongoose = require("mongoose");
var category = new mongoose.Schema(
  {
    title: {
      unique: true,
      type: String,
      required: true
    },
    icon: String
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdTime", updatedAt: "updateTime" }
  }
);
module.exports = mongoose.model("category", category);
