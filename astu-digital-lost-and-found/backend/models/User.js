const mongoose = require("mongoose");
const User = require("../models/User");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);