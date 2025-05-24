import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register';
import Updates from './pages/Updates';
import Department from '../src/pages/Department';
import Contact from './pages/Contact';
import PrivateRourte from "./components/PrivateRoute";
import PrivateRoute from './components/PrivateRoute';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';

const App = () => {
  return (
    <Router basename="/KSRIT">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 p-4">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/department" element={<Department />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
           <Route
           path="/admin/dashboard"
           element=
           {
           <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
           }
          />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
