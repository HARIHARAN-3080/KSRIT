const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  department: { type: String, required: true },
  category: { type: String, required: true },
  otherCategory: { type: String },
  screenshotPath: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
