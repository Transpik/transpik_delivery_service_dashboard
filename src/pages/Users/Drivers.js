import React from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";

function ViewDrivers() {
  return (
    <div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
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
                        <div className="font-semibold text-left">Telephone</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          License ID
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Status</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">States</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          L.A. N. Thushara
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          +94 765869321
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          nuwanthushara@gmail.com
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          18569325553
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="sub-menu-active">Active</div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="text-left font-medium text-green-500">
                          <button>
                            <ViewListRoundedIcon className="text-base text-gray-600" />
                          </button>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-600" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          L.A. N. Thushara
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          +94 765869321
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          nuwanthushara@gmail.com
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          18569325553
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="sub-menu-active">Active</div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="text-left font-medium text-green-500">
                          <button>
                            <ViewListRoundedIcon className="text-base text-gray-600" />
                          </button>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-600" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          L.A. N. Thushara
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          +94 765869321
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          nuwanthushara@gmail.com
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="font-medium text-gray-800">
                          18569325553
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center items-center w-full">
                          <div className="sub-menu-inactive">Inactive</div>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="text-left font-medium text-green-500">
                          <button>
                            <ViewListRoundedIcon className="text-base text-gray-600" />
                          </button>
                        </div>
                      </td>
                      <td className="pl-2 pr-4 py-6">
                        <div className="flex justify-center">
                          <button>
                            <BorderColorRoundedIcon className="text-base mx-1 text-gray-600" />
                          </button>
                          <button>
                            <DeleteOutlineRoundedIcon className="text-lg mx-1 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <!-- Add driver --> */}
              <div className="flex justify-end items-center w-full mt-4">
                <button className="btn-secondary">Add Driver</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDrivers;
