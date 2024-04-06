import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Link,
} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import LoginPage from "./login";
import HomePage from "./home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/login"
            element={
              <LoginPage
                onLogin={handleLogin}
                isAuthenticated={isAuthenticated}
              />
            }
          />

          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
            element={<HomePage />}
          />
        </Routes>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </Router>
  );
};

export default App;
