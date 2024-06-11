import React, { useEffect } from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotFound from "./pages/NotFound";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Lightboxx from "./pages/Lightboxx";
import AOS from "aos";
import "aos/dist/aos.css";
import MovieDetails from "./pages/MovieDetails";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
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
        <Route path="home" element={<Home />} />
        <Route path="details" element={<MovieDetails />} />
        <Route path="video" element={<Lightboxx />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
