import React from 'react';

const Account = () => {
  const username = "User"; // Replace with actual username logic

  return (
    <div className="app-container">
      <h1 className="main-title">Welcome, {username}!</h1>
      <a className="main-title" href="/logout">Logout</a>
    </div>
  );
};

export default Account;