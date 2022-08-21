import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

function AccountProfilePage() {
  const [District, setDistrict] = useState("None");
  const [City, setCity] = useState("None");
  const [Province, setProvince] = useState("None");

  const distChange = (event) => {
    setDistrict(event.target.value);
  };
  const cityChange = (event) => {
    setCity(event.target.value);
  };
  const provChange = (event) => {
    setProvince(event.target.value);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
          <div className="flex items-center">
            <Link to="/account/profile" className="sub-menu-active">
              Profile
            </Link>
            <Link to="/account/api" className="sub-menu-inactive">
              API
            </Link>
            <Link to="/account/billing" className="sub-menu-inactive">
              Billing
            </Link>
            <Link to="/account/marketplace" className="sub-menu-inactive">
              Marketplace
            </Link>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Account
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Profile
            </p>
          </div>
          <div className="mt-4 bg-orange bg-opacity-20 px-4 py-8 rounded flex justify-between align-top">
            <p className="text-red-400 w-4/5">
              Your profile is not a verified profile. Please fill and submit the
              below form to be a verified profile.
            </p>
            <InfoRoundedIcon className="text-sm text-red-400 cursor-pointer" />
          </div>

          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                aria-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Password
              </label>
              <input
                tabIndex={0}
                aria-label="Please input password"
                type="password"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input password"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Confirm Password
              </label>
              <input
                tabIndex={0}
                aria-label="Please input re-input password"
                type="password"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input re-input password"
              />
            </div>
          </div>

          <div className="flex items-center w-full">
            <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Change Password
            </button>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Business Name
              </label>
              <input
                tabIndex={0}
                aria-label="Please input business name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input business name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Registration Number
              </label>
              <input
                tabIndex={0}
                aria-label="Please input registration number"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input registration number"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Address
              </label>
              <input
                tabIndex={0}
                aria-label="Please input address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input address"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Registration Certificate
              </label>
              <input
                type="file"
                className="block w-full text-base leading-none text-gray-900 mt-4
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-orange file:bg-opacity-10 file:text-orange
                hover:file:bg-opacity-20 file:cursor-pointer"
              />
            </div>
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
                Province
              </label>
              <select
                value={Province}
                onChange={provChange}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="None">None</option>
                <option value="Sourthern">Sourthern</option>
                <option value="Western">Western</option>
              </select>
            </div>
            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Postal Code
              </label>
              <input
                tabIndex={0}
                aria-label="Please input postal code"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input postal code"
              />
            </div>
          </div>

          <p className="text-xs leading-3 text-gray-600 mt-4 md:w-[44rem]">
            By clicking update and verify, you have provided complete and
            accurate information on the Transpik online registration form, and
            that you will immediately update your account profile of any changes
            to that information.
          </p>
          <div className="flex items-center w-full">
            <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Update and Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfilePage;
