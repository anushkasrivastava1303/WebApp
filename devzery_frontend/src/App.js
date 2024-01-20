// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import Profile from './components/Profile';
import AllProfiles from './components/AllProfiles';

function App() {
  const users = [];  // Add logic to fetch users from API

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/all-profiles" element={<AllProfiles users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
