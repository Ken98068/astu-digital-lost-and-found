const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Item = require("../models/Item");
const Claim = require("../models/Claim");

// GET /admin/stats
router.get("/stats", auth("admin"), async (req, res) => {
    try {
        const totalItems = await Item.countDocuments();
        const lostItems = await Item.countDocuments({ status: "lost" });
        const foundItems = await Item.countDocuments({ status: "found" });
        const claimedItems = await Item.countDocuments({ status: "claimed" });
        const totalClaims = await Claim.countDocuments();

        res.json({
            totalItems,
            lostItems,
            foundItems,
            claimedItems,
            totalClaims
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;