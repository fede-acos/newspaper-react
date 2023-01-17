import React from "react";
import Login from "./componets/auth/Login";
import SignUp from "./componets/auth/SignUp";
import Home from "./componets/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./componets/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
