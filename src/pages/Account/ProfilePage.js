import React from "react";
// import {AiOutlineClose} from "@react-icons/all-files/AiOutlineClose";
// import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";

class AccountProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="w-full flex items-center justify-center my-12">
          <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
            <div className="flex items-center">
              <p
                tabIndex={0}
                role="button"
                className="text-base bg-orange bg-opacity-80 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange font-medium mr-10 leading-4 text-white"
              >
                Profile
              </p>
              <p
                tabIndex={0}
                role="button"
                className="text-base bg-orange bg-opacity-20 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange hover:bg-opacity-40 font-medium mr-10 leading-4 cursor-pointer text-black"
              >
                API
              </p>
              <p
                tabIndex={0}
                role="button"
                className="text-base bg-orange bg-opacity-20 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange hover:bg-opacity-40 font-medium mr-10 leading-4 cursor-pointer text-black"
              >
                Billing
              </p>
              <p
                tabIndex={0}
                role="button"
                className="text-base bg-orange bg-opacity-20 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange hover:bg-opacity-40 font-medium mr-10 leading-4 cursor-pointer text-black"
              >
                Marketplace
              </p>
            </div>
            <div className="flex items-end mt-8">
              <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Account
              </p>
              <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
                Profile
              </p>
            </div>
            <div className="mt-4 bg-orange bg-opacity-20 px-4 py-8 rounded">
              <p className="">
                Your profile is not a verified profile. Please fill and submit
                the below form to be a verified profile.
              </p>
              {/* <AiOutlineClose /> */}
              {/* <FaFacebookF className="text-black text-lg" /> */}
            </div>

            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
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
                  arial-label="Please input password"
                  type="password"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input password"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Confirm Password
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input re-input password"
                  type="password"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input re-input password"
                />
              </div>
            </div>

            <div className="flex items-center w-full">
              <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
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
                  arial-label="Please input business name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input business name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Registration Number
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input registration number"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
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
                  arial-label="Please input address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input address"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Registration Certificate
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input registration certificate"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input registration certificate"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-4">
              <div className="md:w-40 flex flex-col md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country"
                />
              </div>
              <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  City
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input city"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input city"
                />
              </div>
              <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  State
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please state"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please state"
                />
              </div>
              <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Postal Code
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input postal code"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input postal code"
                />
              </div>
            </div>

            <p className="text-xs leading-3 text-gray-600 mt-4 md:w-[44rem]">
              By clicking update and verify, you have provided complete and
              accurate information on the Transpik online registration form, and
              that you will immediately update your account profile of any
              changes to that information.
            </p>
            <div className="flex items-center w-full">
              <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                Update and Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountProfilePage;
