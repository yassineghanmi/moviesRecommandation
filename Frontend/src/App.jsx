import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <div>nice its work</div>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="test" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
