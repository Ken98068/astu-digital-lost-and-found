const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/claims", require("./routes/claimRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
// Test Route
app.get("/", (req, res) => {
    res.send("ASTU Digital Lost & Found API Running");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));