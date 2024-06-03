import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../api/backendAPI";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
    const verifyCredentials = async () => {
      try {
        const { data } = await axios.post(`${url}/auth/verify-token`, {
          token,
        });
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    };
    if (token) {
      verifyCredentials();
      setLoading(false);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    navigate("/protected");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
