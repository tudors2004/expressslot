var express = require('express');
var router = express.Router();
let funds = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to the ExpressSlot Machine API !" });
});

router.get('/game', function(req, res, next) {
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

router.get('/deposit', function(req, res, next) {
    res.json({ funds });

});
router.post('/deposit', function(req, res, next) {
  const { amount } = req.body;
  if (typeof amount === 'number' && amount > 0) {
    funds += amount;
    res.json({ message: "Deposit successful!", funds });
  } else {
    res.status(400).json({ message: "Invalid deposit amount" });
  }
});

router.get('/funds', function(req, res, next) {
  res.json({ funds });
});

module.exports = router;