import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import NavBar from "./components/NavBar/NavBar";
import SamplePage from "./pages/SamplePage/SamplePage"

ReactDOM.createRoot(document.getElementById("root")).render(
//   <div><h1>Init.js</h1></div>
  <BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/" element={<SamplePage />}></Route>
    </Routes>
  </BrowserRouter>
);
