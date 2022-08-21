import * as ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import "./styles/main.css";
import ViewDrivers from "./pages/Users/Drivers";
import ViewChargesPage from "./pages/Config/Charges";
import AccountProfilePage from "./pages/Account/ProfilePage";
import AccountAPIPage from "./pages/Account/APIPage";
import ViewIncomingOrders from "./pages/Orders/Incoming";
import ViewIncomingOrdersList from "./pages/Orders/Incoming";
import ViewProcessingOrders from "./pages/Orders/Processing";
import ViewDeliveringOrders from "./pages/Orders/Delivering";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserRoutes />}>
        <Route index element={<ViewIncomingOrders />} />
        <Route path="users" element={<ViewDrivers />} />
        <Route path="charges" element={<ViewChargesPage />} />

        <Route path="account" element={<AccountProfilePage />} />
        <Route path="account/profile" element={<AccountProfilePage />} />
        <Route path="account/api" element={<AccountAPIPage />} />

        <Route path="orders" element={<ViewIncomingOrdersList />} />
        <Route path="orders/incoming" element={<ViewIncomingOrdersList />} />
        <Route path="orders/processing" element={<ViewProcessingOrders />} />
        <Route path="orders/delivering" element={<ViewDeliveringOrders />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
