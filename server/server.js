const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Temporarily allow all origins (for debugging)
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Your existing routes
const adminRoutes = require('./routes/admin');
const registerRoutes = require('./routes/register');

app.use('/api/admin', adminRoutes);
app.use('/api', registerRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ksrit_conf', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
});
