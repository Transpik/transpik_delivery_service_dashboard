import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import NavBar from "./components/NavBar/NavBar";
import ProfilePage from "./pages/Account/ProfilePage";
import ViewDrivers from "./pages/Users/Drivers";
import AccountAPIPage from "./pages/Account/APIPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/api" element={<AccountAPIPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/users" element={<ViewDrivers />}></Route>
    </Routes>
  </BrowserRouter>
);
