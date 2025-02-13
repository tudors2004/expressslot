const express = require("express");
const router = express.Router();

let funds = 0;

router.get("/funds", (req, res) => {
    res.json({ funds });
});

router.post("/deposit", (req, res) => {
    const { amount } = req.body;
    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: "Amount must be a valid number" });
    }
    funds += Number(amount);
    res.json({ funds });
});

module.exports = router;
