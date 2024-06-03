var express = require("express");
const cors = require('cors');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./db");
connectDB();

var indexRouter = require("./routes/index");
const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/users");
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
