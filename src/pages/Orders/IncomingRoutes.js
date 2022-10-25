import React from "react";
import { Outlet } from "react-router-dom";

function ViewIncomingOrders() {
  return (
    <div>
      <div className="w-full flex items-center justify-center my-12">
        <Outlet />
      </div>
    </div>
  );
}

export default ViewIncomingOrders;
