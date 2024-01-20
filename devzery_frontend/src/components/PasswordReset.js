// src/components/PasswordReset.js
import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password reset request logic using API calls
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
