// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Routes,
} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import LoginPage from "./login";
import HomePage from "./home";
import PrivatePage from "./privatePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            exact
            element={<HomePage isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />
            }
          />
          <Route
            path="private"
            element={<PrivateRoute Component={<PrivatePage />} />}
          />
          {/* <PrivateRoute
            path="/"
            element={<PrivatePage />}
            isLoggedIn={isLoggedIn}
          /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
