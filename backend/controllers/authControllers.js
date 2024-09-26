const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password, skills } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = await User.create({ username, password: hashedPassword, skills, role: 'learner' });
    res.json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) return res.status(404).json({ message: 'User not found' });
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
  const token = jwt.sign({ id: user.id, username: user.username }, 'yourSecretKey');
  res.json({ message: 'Logged in', token });
};
