const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();  // load .env fir

const app = express();  
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Routes
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");


app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/claims", require("./routes/claimRoutes"));

app.get("/api/admin-only", require("./middleware/authMiddleware")("admin"), (req, res) => {
    res.send("Hello Admin!");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("ASTU Digital Lost & Found API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));