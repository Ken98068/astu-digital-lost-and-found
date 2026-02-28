const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const auth = require("../middleware/authMiddleware");

// GET all items
router.get("/", auth(), async (req, res) => {
    try {
        const items = await Item.find().populate("createdBy", "name email");
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;