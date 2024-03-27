import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";

const LoginPage = ({ isAuthenticated, login }) => {
  const handleLogin = () => {
    login(true);
    // <Navigate to="/playground" />;
  };
  const handleLogout = () => {
    login(false);
  };
  useEffect(() => {
    console.log("Logged out", isAuthenticated);
    if (isAuthenticated) {
      <Navigate to="/playground" />;
    }
  }, [isAuthenticated]);

  return (
    <div className="main-container">
      <Header />
      <p>You are not Authenticated ,Please Login First</p>
      <h2>Login Page</h2>
      {isAuthenticated ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

const PrivateRoute = ({ isAuthenticatedt }) => {
  return isAuthenticatedt ? <Outlet /> : <Navigate to="/" />;
};

const HomePage = () => {
  return (
    <div className="main-container">
      <Header />
      <h2>Home Page</h2>
      <p>Welcome! You are authenticated.</p>
    </div>
  );
};
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };
  console.log(isAuthenticated, "isAuthenticated");
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LoginPage isAuthenticated={isAuthenticated} login={handleLogin} />
          }
        />

        <Route path="/" element={<PrivateRoute isAuthenticated={true} />}>
          <Route path="/playground" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
