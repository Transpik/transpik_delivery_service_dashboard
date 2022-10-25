import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2OTc0NzEsImV4cCI6MTY2Njg3MDI3MSwiYXVkIjoiZGVsaXZlcnkiLCJpc3MiOiJodHRwczovL3RyYW5zcGlrYXBpLm9ucmVuZGVyLmNvbSIsInN1YiI6IjYzNTdjODAyZThkNzZhOWE3N2JiYmEyMCJ9.0S2y5CkzM2K3qMUYfgCPb8aEftKS7QQNnmH5ux5xieA';

function Raw(props) {
    const [assignDriver, setAssignDriver] = useState("None");
    

    const onChangeAssignDriver = (event) => {
        setAssignDriver(event.target.value);
    }

    const moveToDelivering = (event) => {
        axios({
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': accessToken
                },
                    url: 'http://localhost:8080/orders/stages/processing',
                    mode: 'cors',
                    withCredentials: true,
                    data: {
                    order_id: event.target.value,
                    driver_id: assignDriver
                }
                }).then(response => {
                //
            }).catch(error => {
            console.log(error);
            })
    }

    return (
        <tr>
            <td className="pl-2 pr-4 py-6">
            <div className="font-medium text-gray-800">{props.order._id}</div>
            </td>
            <td className="pl-2 pr-4 py-6">
            <div className="font-medium text-gray-800">
                {props.order.pickup_location.address}
            </div>
            </td>
            <td className="pl-2 pr-4 py-6">
            <div className="font-medium text-gray-800">
                {props.order.delivery_location.address}   
            </div>
            </td>
            <td className="pl-2 pr-4 py-6">
            <div className="flex justify-center items-center w-full">
                <div className="status-cold">{props.order.payment_status}</div>
            </div>
            </td>
            
            <td>
            <div className="flex justify-center items-center w-full">
                <select
                value={assignDriver}
                onChange={onChangeAssignDriver}
                className="text-base leading-none text-gray-900 p-1 focus:oultine-none focus:border-orange bg-gray-100 border rounded border-gray-200"
                >
                <option value="None">None</option>
                {
                    props.drivers.map(driver => {
                        return (
                            (driver.postal_code == props.order.delivery_location.postal_code) ?
                            <option key={driver._id} value={driver._id}>{driver.initials+driver.last_name}</option> : null
                        );
                    })
                }
                </select>
            </div>
            </td>
            <td className="pl-2 pr-4 py-6">
            <button onClick={moveToDelivering}>Move to delivering</button>
            </td>
        </tr>
    );
}

export default Raw;