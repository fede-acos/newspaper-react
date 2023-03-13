//TODO
//change the fonts for someting better
//make the login pages look better
//add the login y subscribe btn to the navbar in responsive mode !DONE
//add the account btn if logged in !DONE

import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";

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
