import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const accessToken = window.localStorage.getItem('accessToken');

function ViewChargesPage() {
  const [city, setCity] = useState("None");
  const [cost, setCost] = useState(0.00);
  const [availability, setAvailability] = useState(false);
  const [chargeConfig, setChargeConfig] = useState([]);

  const updateCost = () => {
    axios({
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'https://transpikapi.onrender.com/charges/delivery_services',
      mode: 'cors',
      withCredentials: true,
      data: {
        city_fees: {
          config_id: city,
          availability: availability,
          fee: cost
        }
      }
    }).then(response => {
      setChargeConfig(response.data.data.charge_configurations);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'https://transpikapi.onrender.com/charges/delivery_services',
      mode: 'cors',
      withCredentials: true
    }).then(response => {
      setChargeConfig(response.data.data.charge_configurations);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  const availabilityChange = (event) => {
    setAvailability(event.target.value);
  }

  const cityChange = (event) => {
    const configId = event.target.value;
    chargeConfig.forEach(config => {
      if(config._id == configId) {
        setAvailability(config.availability);
        setCost(config.fee["$numberDecimal"]);
        setCity(configId);
        return;
      }
    })
    setCity(event.target.value);
  };
  const costChange = (event) => {
    setCost(event.target.value);
  };

  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="flex items-center">
            <p tabIndex={0} role="button" className="sub-menu-active">
              Config
            </p>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Config
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Charges
            </p>
          </div>

          <div className="md:flex items-center mt-4">
            <div className="md:w-40 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                City
              </label>
              <select
                value={city}
                onChange={cityChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value={"None"}>None</option>
                {
                  chargeConfig.map(charge => <option value={charge._id} key={charge._id}>{charge.city}</option>)
                }
              </select>
            </div>

            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Availability
              </label>
              <select
                value={availability}
                onChange={availabilityChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value={false}>False</option>
                <option value={true}>True</option>
              </select>
            </div>

            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Charges
              </label>
              {/*<select
                value={cost}
                onChange={costChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="None">None</option>
                <option value="Free">Free</option>
                <option value="Cost">Cost</option>
              </select>*/}
              <input type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200" value={cost} onChange={costChange}></input>
            </div>
          </div>
          <div className="flex items-center w-full">
            <button onClick={updateCost} className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Set Cost
            </button>
          </div>

          {/* Charges table*/}
          <div className="flex flex-col justify-center h-full mt-8">
            <div className="w-full lg:max-w-4xl mx-auto bg-white">
              <div className="overflow-x-auto py-3">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2">
                        <div className="font-semibold text-left">City</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Availability</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Postal Code
                        </div>
                      </th>
                      <th className="py-2 w-24">
                        <div className="font-semibold text-left">
                          Delivery Cost
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    {
                      chargeConfig.map(config => {
                        return (<tr>
                          <td className="pl-2 pr-4 py-6">
                            <div className="font-medium text-gray-800">{config.city}</div>
                          </td>
                          <td className="pl-2 pr-4 py-6">
                            <div className="font-medium text-gray-800">{config.availability}</div>
                          </td>
                          <td className="pl-2 pr-4 py-6">
                            <div className="font-medium text-gray-800">{config.postal_code}</div>
                          </td>
                          <td className="pl-2 pr-4 py-6">
                            <div className="font-medium text-gray-800 text-right">
                              {config.fee["$numberDecimal"]}
                            </div>
                          </td>
                        </tr>);
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

export default ViewChargesPage;
