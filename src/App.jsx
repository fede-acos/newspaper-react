import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./componets/auth/Login";
import SignUp from "./componets/auth/SignUp";
import ErrorPage from "./componets/ErrorPage";
import Home from "./componets/Home";

function App() {
  const { user } = useSelector((state) => state.auth);

  console.log(user ? "not empty" : "empty");

  const RequiredAuth = ({ children }) => {
    //use this for the pages than need to be logged in
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
