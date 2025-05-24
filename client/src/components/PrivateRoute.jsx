import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const adminToken = localStorage.getItem('adminToken');

  if (!adminToken) {
    // Not logged in, redirect to admin login
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in, render the child components
  return children;
};

export default PrivateRoute;
