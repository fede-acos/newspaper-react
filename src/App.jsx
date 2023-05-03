import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";

function App() {
  const { user } = useSelector((state) => state.auth);

  //const RequiredAuth = ({ children }) => {
  // for the pages than need to be logged in
  //return user ? children : <Navigate to="/login" />;
  //};

  const UserLoggedInRedirect = ({ children }) => {
    console.log(user);
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
