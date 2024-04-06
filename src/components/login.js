import React from "react";

const LoginPage = ({ onLogin, isAuthenticated }) => {
  const handleLogin = () => {
    // Implement your login logic here
    onLogin();
  };

  return (
    <div>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginPage;
