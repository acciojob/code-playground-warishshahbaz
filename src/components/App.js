import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
  Redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
// react router dom version 5 was used here

import Login from "./Login";
import Home from "./Home";
import NotFound from "./NotFound";

// Custom PrivateRoute component
const PrivateRoute = ({ isAuthenticated, element, path }) => {
  return isAuthenticated ? <Outlet /> : Navigate("./login");
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <Router>
        <div className="main-container">
          <div>
            {isLoggedIn
              ? "Logged in, Now you can enter Playground"
              : "You are not authenticated, Please login first"}
          </div>
          <div>
            <ul>
              <li>
                <Link to="/home">PlayGround</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} login={this.login} isLogged={isLoggedIn} />
              )}
            />
            <Route
              exact
              path="/"
              element={<PrivateRoute isAuthenticated={isLoggedIn} />}
            >
              <Route exact path="/" element={<Home />} />
            </Route>
            {/* <PrivateRoute
              exact
              path="/home"
              component={Home}
              isAuthenticated={isLoggedIn}
              redirect="/login"
            /> */}
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
