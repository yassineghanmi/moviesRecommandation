const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/verify-token", authController.verifyToken);

router.get("/protected", (req, res) => {
  res.json({ msg: "This is a protected route", user: req.user });
});

module.exports = router;
