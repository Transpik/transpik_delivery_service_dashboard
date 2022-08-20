import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import "./styles/main.css";
import ViewDrivers from "./pages/Users/Drivers";
import ViewChargesPage from "./pages/Config/Charges";
import SamplePage from "./pages/SamplePage/SamplePage";
import AccountProfilePage from "./pages/Account/ProfilePage";
import AccountAPIPage from "./pages/Account/APIPage";
import ViewIncomingOrders from "./pages/Orders/Incoming";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserRoutes />}>
        <Route index element={<ViewIncomingOrders />} />
        <Route path="users" element={<ViewDrivers />}></Route>
        <Route path="charges" element={<ViewChargesPage />}></Route>
        {/* <Route path="account" element={<AccountProfilePage />}></Route> */}
        {/* <Route path="account/api" element={<AccountAPIPage />}></Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
