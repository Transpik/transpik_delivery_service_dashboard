import React from "react";
import { useState } from "react";

function ViewChargesPage() {
  const [District, setDistrict] = useState("None");
  const [City, setCity] = useState("None");
  const [CostType, setCost] = useState("None");

  const distChange = (event) => {
    setDistrict(event.target.value);
  };
  const cityChange = (event) => {
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
              Profile
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
                District
              </label>
              <select
                value={District}
                onChange={distChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="None">None</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Matara">Matara</option>
                <option value="Gampaha">Gampaha</option>
              </select>
            </div>
            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                City
              </label>
              <select
                value={City}
                onChange={cityChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="None">None</option>
                <option value="Matara">Matara</option>
                <option value="Ranna">Ranna</option>
                <option value="Ja-Ela">Ja-Ela</option>
                <option value="Kelaniya">Kelaniya</option>
              </select>
            </div>
            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Charges
              </label>
              <select
                value={CostType}
                onChange={costChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="None">None</option>
                <option value="Free">Free</option>
                <option value="Cost">Cost</option>
              </select>
            </div>
          </div>
          <div className="flex items-center w-full">
            <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Add cost
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
                        <div className="font-semibold text-left">District</div>
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
                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">Matara</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">Matara</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">81000</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800 text-right">
                          Rs. 400.00
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          Akuressa
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">Matara</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">81001</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800 text-right">
                          Rs.650.00
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">Ja-Ela</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">Gampaha</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">65400</div>
                      </td>
                      <td className="pl-2 pr-4 py-6 text-right">
                        <div className="font-medium text-gray-800">
                          RS. 400.00
                        </div>
                      </td>
                    </tr>
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
