import React from "react";
import Raw from "./Raw";
import { Link } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { useEffect, useState } from "react";

import axios from "axios";
const accessToken = window.localStorage.getItem('accessToken');

function ViewProcessingOrders() {

  const [assignDriver, setAssignDriver] = useState(null);
  const [orders, setOrders] = useState([]);
  const [drivers, setDriver] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshOrders = () => {
    setIsLoading(true);
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'https://transpikapi.onrender.com/orders/processing',
      mode: 'cors',
      withCredentials: true,
    }).then(response => {
      setOrders(response.data.data.orders);
    }).catch(error => {
      console.log(error);
    })

    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'https://transpikapi.onrender.com/users/delivery_services/drivers',
      mode: 'cors',
      withCredentials: true,
    }).then(response => {
      setDriver(response.data.data.drivers);
    }).catch(error => {
      console.log(error);
    })

    setIsLoading(false);
  }

  useEffect(() => {
    refreshOrders();
  }, []);

  

  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="md:w-96 flex items-center">
            <Link to="/orders/incoming" className="sub-menu-inactive">
              Incoming
            </Link>
            <Link to="/orders/processing" className="sub-menu-active">
              Processing
            </Link>
            <Link to="/orders/delivering" className="sub-menu-inactive">
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
              Processing
            </p>
          </div>

          {/* Table start*/}
          <div className="flex flex-col justify-center h-full mt-8">
            <div className="w-full lg:max-w-4xl mx-auto bg-white">
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
                          Assign Driver
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Action
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    {
                      isLoading ? <div className="w-full flex justify-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div> : undefined
                    }

                    {
                      orders.map(order => {
                        return (<Raw
                          key = {order._id}
                          order = { order }
                          drivers = { drivers }
                        ></Raw>);
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

export default ViewProcessingOrders;
