const Registration = require('../models/Registration');

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      college,
      department,
      category,
      otherCategory,
    } = req.body;

    const screenshotPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newEntry = new Registration({
      fullName,
      email,
      phone,
      college,
      department,
      category,
      otherCategory: category === 'other' ? otherCategory : '',
      screenshotPath,
    });

    await newEntry.save();
    res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
};

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.status(200).json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch registrations' });
  }
};

module.exports = {
  registerUser,
  getAllRegistrations,
};
