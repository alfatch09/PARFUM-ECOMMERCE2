// src/routes/AdminRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  const role = localStorage.getItem('adminRole');

  // Cek kalau token ada dan role adalah 'owner'
  if (!token || role !== 'owner') {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
