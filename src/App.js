/*!
There is the way 
.
.
.
lrz
*/

import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "./views/Index.js";
import Landing from "./views/examples/Landing.js";
import Login from "./views/examples/Login.js";
import Profile from "./views/examples/Profile.js";
import Register from "./views/examples/Register.js";
import Pigeonhole from './pages/Pigeonhole';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/pigeonhole" exact element={<Pigeonhole />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
