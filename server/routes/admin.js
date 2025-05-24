const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
const Registration = require('../models/Registration');

// Dummy Admin Credentials (replace with DB later)
const adminUser = {
  username: 'admin',
  password: 'admin123'
};

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign({ username }, 'secretkey', { expiresIn: '1h' });
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// GET /api/admin/dashboard (Protected Route)
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome Admin! This is protected dashboard data.' });
});

// ✅ GET /api/admin/registrations (Protected Route)
router.get('/registrations', verifyToken, async (req, res) => {
  try {
    const entries = await Registration.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
});

module.exports = router;
