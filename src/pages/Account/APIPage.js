import React from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

function AccountAPIPage() {
  return (
    <div>
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
          <div className="flex items-center">
            <p
              tabIndex={0}
              role="button"
              className="sub-menu-inactive"
            >
              Profile
            </p>
            <p
              tabIndex={0}
              role="button"
              className="sub-menu-active"
            >
              API
            </p>
            <p
              tabIndex={0}
              role="button"
              className="sub-menu-inactive"
            >
              Billing
            </p>
            <p
              tabIndex={0}
              role="button"
              className="sub-menu-inactive"
            >
              Marketplace
            </p>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Account
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              API
            </p>
          </div>

          <div className="md:flex items-center mt-8">
            <div className="md:w-full flex flex-col md:mt-0 mt-4">
              <label className="">
                <div className="flex items-end justify-between">
                  <p className="text-base font-semibold leading-none text-gray-800">
                    Current API Key
                  </p>
                  <p className="text-xs font-light leading-none text-gray-600">
                    Valid until 21/10/2022
                  </p>
                </div>
              </label>
              <div className="flex items-center">
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="text"
                className="w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 place-content-end placeholder:justify-items-end"
              />
              <ContentCopyRoundedIcon className="text-gray-900 cursor-pointer ml-2" />
              </div>
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-full flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Generate a New API Key
              </label>
              <input
                tabIndex={0}
                arial-label="Please input password"
                type="password"
                className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Paste current API key here"
              />
            </div>
          </div>

          <div className="flex justify-end items-center w-full mt-4">
            <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountAPIPage;
