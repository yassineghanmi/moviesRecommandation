const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Register controller
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    user = new User({ name, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      "yourSecretKeyMovies",
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        res.json({ user, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      "yourSecretKeyMovies",
      { expiresIn: "24h" },
      (err, token) => {
        if (err) throw err;
        delete user.password;
        res.json({ user, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const verifyToken = (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res
      .status(400)
      .send({ isAuthenticated: false, message: "No token provided" });
  }

  jwt.verify(token, "yourSecretKeyMovies", (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ isAuthenticated: false, message: "Invalid token" });
    }
    res.send({ isAuthenticated: true, user: decoded });
  });
};

module.exports = { register, login, verifyToken };
