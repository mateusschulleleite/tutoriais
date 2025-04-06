import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Recovery from "./pages/Recovery/Recovery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
