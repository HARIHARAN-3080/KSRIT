import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register';
import Updates from './pages/Updates';
import Department from '../src/pages/Department';
import Contact from './pages/Contact';
import PrivateRoute from './components/PrivateRoute';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';

const basename = process.env.NODE_ENV === 'production' ? '/KSRIT' : '';

const App = () => {
  return (
    <Router basename={basename}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/department" element={<Department />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            {/* You can remove the duplicate Route for /admin/dashboard */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
