const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Claim = require("../models/Claim");
const Item = require("../models/Item");

// --------- POST /claims ---------
router.post("/", auth("student"), async (req, res) => {
    const { itemId } = req.body;

    try {
        const item = await Item.findById(itemId);
        if (!item) return res.status(404).json({ message: "Item not found" });

        const existing = await Claim.findOne({ item: itemId, requestedBy: req.user.id });
        if (existing) return res.status(400).json({ message: "You already requested this item" });

        const claim = new Claim({
            item: itemId,
            requestedBy: req.user.id
        });

        await claim.save();
        res.status(201).json(claim);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// --------- GET /claims ---------
router.get("/", auth("admin"), async (req, res) => {
    try {
        const claims = await Claim.find()
            .populate("item", "title status")
            .populate("requestedBy", "name email");
        res.json(claims);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});


router.put("/:id", auth("admin"), async (req, res) => {
    const { status } = req.body;
    if (!["approved","rejected"].includes(status))
        return res.status(400).json({ message: "Invalid status" });

    try {
        const claim = await Claim.findById(req.params.id);
        if (!claim) return res.status(404).json({ message: "Claim not found" });

        claim.status = status;
        await claim.save();

        if (status === "approved") {
            const item = await Item.findById(claim.item);
            item.status = "claimed";
            await item.save();
        }

        res.json(claim);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;