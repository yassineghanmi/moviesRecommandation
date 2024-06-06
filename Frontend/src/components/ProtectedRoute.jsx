import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, token } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
