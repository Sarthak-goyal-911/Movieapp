// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); 
  console.log(token)// Check for the presence of a token

  return token ? children : <Navigate to="/" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
