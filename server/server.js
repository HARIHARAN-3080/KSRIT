const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// ✅ Correct IP with no leading space
const localIP = '0.0.0.0';

// === CORS Configuration ===
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://hariharan-3080.github.io',
    `http://${localIP}:5173`,
    `http://${localIP}`
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));

// === Middleware ===
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// === Routes ===
const adminRoutes = require('./routes/admin');
const registerRoutes = require('./routes/register');

app.use('/api/admin', adminRoutes);
app.use('/api', registerRoutes);

// === MongoDB Connection ===
// mongoose.connect('mongodb://localhost:27017/ksrit_conf', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB connected'))
// .catch((err) => console.error('❌ MongoDB connection error:', err));

const mongoURI = 'mongodb+srv://admin:admin123@ksritcon.sjj4uvt.mongodb.net/?retryWrites=true&w=majority&appName=ksritcon';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// === Server Start ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://${localIP}:${PORT}`);
});
