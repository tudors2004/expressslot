var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
const cors = require('cors');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get("/api/greet", (req, res) => {
    res.json({ message: "Welcome to the ExpressSlot Machine API🎰!" });
});

const gameRoutes = require("./routes/game");
const depositRoutes = require("./routes/deposit");

app.use("/api", gameRoutes);
app.use("/api", depositRoutes);

module.exports = app;

