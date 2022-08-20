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
              to="incoming"
              className="sub-menu-active"
            >
              Incoming
            </Link>
            <Link
              to="processing"
              className="sub-menu-inactive"
            >
              Processing
            </Link>
            <Link
              to="delivering"
              className="sub-menu-inactive"
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
          <div className="flex flex-col justify-center h-full mt-8">
            <div className="w-full lg:max-w-4xl mx-auto bg-white">
              <div className="overflow-x-auto py-3">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th></th>
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
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2">
                        <input type="checkbox" className="w-5 h-5" value="id-1" />
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">21338</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="status-cold">
                            Paid
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
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
                      <td className="p-2">
                        <input type="checkbox" className="w-5 h-5" value="id-2" />
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">21341</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="status-cold">
                            Paid
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
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
                      <td className="p-2">
                        <input type="checkbox" className="w-5 h-5" value="id-3" />
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">21342</div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          798, Champlin View, Illinois, Lake Jennie, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          524 Murphy Knolls Apt. 006, Estabury, 38670
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="status-hot">
                            Unpaid
                          </div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
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
                <button className="btn-primary">
                  Move to Processing
                </button>
                <button className="btn-secondary">
                  Print List
                </button>
              </div>

              <div className="flex justify-end">
                {/* <!-- send this data to backend (note: use className 'hidden' to hide this input) --> */}
                <input
                  type="hidden"
                  className="border border-black bg-gray-50"
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
