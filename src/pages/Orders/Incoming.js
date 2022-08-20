import React from "react";
import { Link } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function ViewIncomingOrders() {
  return (
    <div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
          <div className="md:w-96 flex items-center">
            <Link
              to="#"
              className="text-base bg-orange bg-opacity-80 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange font-medium mr-10 leading-4 text-white"
            >
              Incoming
            </Link>
            <Link
              to="#"
              className="text-base bg-orange bg-opacity-20 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange hover:bg-opacity-40 font-medium mr-10 leading-4 cursor-pointer text-black"
            >
              Processing
            </Link>
            <Link
              to="#"
              className="text-base bg-orange bg-opacity-20 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange hover:bg-opacity-40 font-medium mr-10 leading-4 cursor-pointer text-black"
            >
              Statistics
            </Link>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Orders
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Incoming
            </p>
          </div>

          {/* Table start*/}
          <div class="flex flex-col justify-center h-full mt-8">
            <div class="w-full lg:max-w-4xl mx-auto bg-white">
              <div class="overflow-x-auto py-3">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th></th>
                      <th class="p-2">
                        <div class="font-semibold text-left">Order ID</div>
                      </th>
                      <th class="p-2 w-48">
                        <div class="font-semibold text-left">
                          Pick up location
                        </div>
                      </th>
                      <th class="p-2 w-48">
                        <div class="font-semibold text-left">
                          Delivery location
                        </div>
                      </th>
                      <th class="p-2">
                        <div class="font-semibold text-left">
                          Payment Status
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="text-sm divide-y divide-gray-100">
                    <tr>
                      <td class="p-2">
                        <input type="checkbox" class="w-5 h-5" value="id-1" />
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">21338</div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="w-24 text-center text-base font-semibold leading-none text-white py-2 px-4 bg-green bg-opacity-60 rounded">
                            Paid
                          </div>
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-500 hover:text-cyan-400" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-500 hover:text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="p-2">
                        <input type="checkbox" class="w-5 h-5" value="id-2" />
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">21341</div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="w-24 text-center text-base font-semibold leading-none text-white py-2 px-4 bg-green bg-opacity-60 rounded">
                            Paid
                          </div>
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-500 hover:text-cyan-400" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-500 hover:text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td class="p-2">
                        <input type="checkbox" class="w-5 h-5" value="id-3" />
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">21342</div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="w-24 text-center text-base font-semibold leading-none text-white py-2 px-4 bg-red-300 rounded">
                            Unpaid
                          </div>
                        </div>
                      </td>
                      <td class="pl-2 pr-4 py-6">
                        <div class="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-500 hover:text-cyan-400" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-500 hover:text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Buttons --> */}
              <div className="flex justify-start items-center w-full mt-4">
                <button className="mt-4 mr-2 text-base font-semibold leading-none text-white py-4 px-10 bg-red-500 rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  Move to Processing
                </button>
                <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  Print List
                </button>
              </div>

              <div class="flex justify-end">
                {/* <!-- send this data to backend (note: use class 'hidden' to hide this input) --> */}
                <input
                  type="hidden"
                  class="border border-black bg-gray-50"
                  x-model="selected"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewIncomingOrders;
