import React from "react";
import Login from "./componets/auth/Login";
import SignUp from "./componets/auth/SignUp";
import Home from "./componets/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./componets/ErrorPage";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);

  const RequiredAuth = ({ children }) => {
    //use this for the accuount page
    return user ? children : <Navigate to="/login" />;
  };
  const UserLoggedInRedirect = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <UserLoggedInRedirect>
              <Login />
            </UserLoggedInRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <UserLoggedInRedirect>
              <SignUp />
            </UserLoggedInRedirect>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
