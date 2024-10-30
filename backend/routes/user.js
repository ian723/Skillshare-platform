// backend/routes/user.js
const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  const { username, password, skills, learningGoals } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = await User.create({
      username,
      password: hashedPassword,
      skills,
      learningGoals,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update User Skills
router.put("/updateSkills/:id", async (req, res) => {
  const { skills } = req.body;

  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.skills = skills; // Assuming skills is an array of strings
    await user.save();

    res.status(200).json({ message: "Skills updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Users
router.get("/all", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "skills", "contactInfo"],
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
