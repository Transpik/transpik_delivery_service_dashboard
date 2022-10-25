import React from "react";
import { Link } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { useEffect, useState } from "react";

import axios from "axios";
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2OTc0NzEsImV4cCI6MTY2Njg3MDI3MSwiYXVkIjoiZGVsaXZlcnkiLCJpc3MiOiJodHRwczovL3RyYW5zcGlrYXBpLm9ucmVuZGVyLmNvbSIsInN1YiI6IjYzNTdjODAyZThkNzZhOWE3N2JiYmEyMCJ9.0S2y5CkzM2K3qMUYfgCPb8aEftKS7QQNnmH5ux5xieA';

function ViewDeliveringOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/orders/delivering',
      mode: 'cors',
      withCredentials: true,
    }).then(response => {
      setOrders(response.data.data.orders);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="md:w-96 flex items-center">
            <Link to="/orders/incoming" className="sub-menu-inactive">
              Incoming
            </Link>
            <Link to="/orders/processing" className="sub-menu-inactive">
              Processing
            </Link>
            <Link to="/orders/delivering" className="sub-menu-active">
              Delivering
            </Link>
            <Link to="/orders/earning" className="sub-menu-inactive">
              Earning
            </Link>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Orders
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Delivering
            </p>
          </div>

          {/* Table start*/}
          <div className="flex flex-col justify-center h-full mt-8">
            <div className="w-full lg:max-w-6xl mx-auto bg-white">
              <div className="overflow-x-auto py-3">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2">
                        <div className="font-semibold text-left">Order ID</div>
                      </th>
                      <th className="p-2 w-48">
                        <div className="font-semibold text-left">
                          Pick up location
                        </div>
                      </th>
                      <th className="p-2 w-48">
                        <div className="font-semibold text-left">
                          Delivery location
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Payment Status
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Parcel Status
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Assigned Driver
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    {
                      orders.map(order => {
                        return (
                          <tr>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">{order._id}</div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {order.pickup_location.address}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {order.delivery_location.address}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="flex justify-center items-center w-full">
                                <div className="status-cold">{order.payment_status}</div>
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="flex justify-center items-center w-full">
                                <div className="status-cold">{order.order_status}</div>
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {order.assigned_driver_name}
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    }
                    

                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDeliveringOrders;
