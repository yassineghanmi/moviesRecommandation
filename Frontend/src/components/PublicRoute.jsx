import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "./Spinner";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner/>;
  }

  if (isAuthenticated) {
    return <Navigate to="/protected" />;
  }

  return children;
};

export default PublicRoute;
