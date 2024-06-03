import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, token } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
