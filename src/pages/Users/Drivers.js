import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import AddDriver from '../../components/Popup/Users/AddUser';
import DelPopup from '../../components/Popup/Users/DeleteUsers';
import { useState, useEffect } from 'react';

import axios from "axios";
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2OTc0NzEsImV4cCI6MTY2Njg3MDI3MSwiYXVkIjoiZGVsaXZlcnkiLCJpc3MiOiJodHRwczovL3RyYW5zcGlrYXBpLm9ucmVuZGVyLmNvbSIsInN1YiI6IjYzNTdjODAyZThkNzZhOWE3N2JiYmEyMCJ9.0S2y5CkzM2K3qMUYfgCPb8aEftKS7QQNnmH5ux5xieA';

function ViewDrivers() {
  const [userPopoup,setUserPopup] = useState(false);
  const [deletePopoup,setDeletePopup] = useState(false);
  const [drivers, setDriver] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users/delivery_services/drivers',
      mode: 'cors',
      withCredentials: true,
    }).then(response => {
      setDriver(response.data.data.drivers);
    }).catch(error => {
      console.log(error);
    })
  }, [])


  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="md:w-96 flex items-center">
            <p tabIndex={0} role="button" className="sub-menu-active">
              Drivers
            </p>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Users
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Drivers
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
                        <div className="font-semibold text-left">
                          Name with Initials
                        </div>
                      </th>
                      
                      <th className="p-2">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      
                      <th className="p-2">
                        <div className="font-semibold text-left">Serving City</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Postal Code</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Password</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    {
                      drivers.map(driver => {
                        return (
                          <tr>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {driver.initials+driver.last_name}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {driver.email}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {driver.serving_city}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {driver.postal_code}
                              </div>
                            </td>
                            <td className="pl-2 pr-4 py-6">
                              <div className="font-medium text-gray-800">
                                {driver.password}
                              </div>
                            </td>
                        </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>

              <DelPopup trigger={deletePopoup} setTrigger={setDeletePopup}/>
              <AddDriver trigger={userPopoup} setTrigger={setUserPopup}/>

              {/* <!-- Add driver --> */}
              <div className="flex justify-end items-center w-full mt-4">
                <button className="btn-secondary" onClick={()=>setUserPopup(true)}>Add Driver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDrivers;
