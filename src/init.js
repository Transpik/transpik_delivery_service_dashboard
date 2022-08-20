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
import ViewProcessingOrders from "./pages/Orders/Processing";
import ViewDeliveringOrders from "./pages/Orders/Delivering";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserRoutes />}>
        <Route index element={<ViewIncomingOrders />} />
        <Route path="users" element={<ViewDrivers />} />
        <Route path="charges" element={<ViewChargesPage />} />
        <Route path="account/" element={<AccountProfilePage />}>
          <Route path="profile" element={<AccountProfilePage />} />
          <Route path="api" element={<AccountAPIPage />} />
        </Route>
        <Route path="orders/" element={<ViewIncomingOrders />}>
          <Route path="incoming" element={<ViewIncomingOrders />} />
          <Route path="processing" element={<ViewProcessingOrders />} />
          <Route path="delivering" element={<ViewDeliveringOrders />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
