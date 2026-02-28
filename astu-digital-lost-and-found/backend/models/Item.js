const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ["ID card","Calculator","USB","Lab coat","Book","Other"], required: true },
  location: { type: String },
  date: { type: Date, default: Date.now },
  image: { type: String },
  status: { type: String, enum: ["lost","found","claimed"], default: "lost" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);