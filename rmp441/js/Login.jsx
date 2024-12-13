import React from 'react';

const Login = () => {
  return (
    <div className="app-container">
      <h1 className="main-title">Login</h1>
      <form action="/login" method="POST" className="login-form">
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" className="input-field" required />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default Login;