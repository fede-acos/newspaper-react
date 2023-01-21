import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./componets/auth/Login";
import SignUp from "./componets/auth/SignUp";
import ErrorPage from "./componets/ErrorPage";
import Home from "./componets/Home";

function App() {
  console.log("asd");
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
