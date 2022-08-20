import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import NavBar from "./components/NavBar/NavBar";
import ProfilePage from "./pages/Account/ProfilePage";
import ViewDrivers from "./pages/Users/Drivers";

ReactDOM.createRoot(document.getElementById("root")).render(
//   <div><h1>Init.js</h1></div>
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<ViewDrivers />}></Route>
    </Routes>
  </BrowserRouter>
);
