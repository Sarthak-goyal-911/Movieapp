// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupForm />} />
      
      {/* Protected Routes */}
      <Route path="/protected" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      {/* Add more protected routes as needed */}
    </Routes>
  );
};

// Placeholder for a protected component


export default App;
