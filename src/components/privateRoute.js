// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
