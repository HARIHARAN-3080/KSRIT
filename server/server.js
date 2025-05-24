const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Replace '192.168.x.x' with your actual local IP address
const localIP = '192.168.x.x'; 

// === CORS Configuration ===
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://hariharan-3080.github.io',
    `http://${localIP}:5173`, // frontend access from LAN
    `http://${localIP}`,       // any access from LAN without port
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
mongoose.connect('mongodb://localhost:27017/ksrit_conf', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// === Server Start ===
const PORT = process.env.PORT || 5000;
// Listen on all interfaces (0.0.0.0) to allow LAN access
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://${localIP}:${PORT}`);
});
