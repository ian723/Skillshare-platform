// backend/routes/matching.js
const express = require("express");
const { User } = require("../models");
const router = express.Router();

// Match Users by Skills
router.get("/match", async (req, res) => {
  try {
    const { skill } = req.query;
    const users = await User.findAll();
    const matchedUsers = users.filter(
      (user) => user.skills && user.skills.includes(skill)
    );
    res.status(200).json(matchedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
