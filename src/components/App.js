import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";

import Login from "./login";
import Home from "./home";
import NotFound from "./NotFound";

// Custom PrivateRoute component
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirect,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirect} />
      )
    }
  />
);

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
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} login={this.login} isLogged={isLoggedIn} />
            )}
          />
          <PrivateRoute
            exact
            path="/home"
            component={Home}
            isAuthenticated={isLoggedIn}
            redirect="/login"
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
