const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { registerUser, getAllRegistrations } = require('../controllers/registerController');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

// Optional: Only allow jpg/png/jpeg images
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only image files (jpg, jpeg, png) are allowed'));
  }
};

const upload = multer({ storage, fileFilter });

// POST /api/register - handle registration form with payment screenshot
router.post('/register', upload.single('paymentScreenshot'), registerUser);

// GET /api/registrations - get all registrations for admin dashboard
router.get('/registrations', getAllRegistrations);

module.exports = router;
