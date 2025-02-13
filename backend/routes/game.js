var express = require("express");
var router = express.Router();

router.get("/game", function (req, res, next) {
    try {
        const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];
        const result = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        res.json({ result, message: "Spin successful!" });
    } catch (error) {
        console.error("Error generating slot result:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
