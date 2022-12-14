import React from "react";
import { Link } from "react-router-dom";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

function AccountAPIPage() {
  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="flex items-center">
            <Link to="/account/profile" className="sub-menu-inactive">
              Profile
            </Link>
            <Link to="/account/api" className="sub-menu-active">
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
                {/* <input
                  tabIndex={0}
                  aria-label="Please input email address"
                  type="text"
                  className="w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200 place-content-end placeholder:justify-items-end"
                  value = "juhewr623iuqw6eh87w4tj8qr"
                />
                <ContentCopyRoundedIcon className="text-gray-900 cursor-pointer ml-2" /> */}
                <div className="w-full bg-light-green border border-solid border-green rounded-md h-[42px] p-3 mt-4 flex items-center justify-between">
                  <div className="w-full cursor-text"></div>
                  <div className="material-icons-round text-green cursor-pointer">
                    content_copy
                  </div>
                </div>
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
                aria-label="Please input password"
                type="password"
                className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Paste current API key here"
              />
            </div>
          </div>

          <div className="flex justify-end items-center w-full mt-4">
            <button className="btn-secondary">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountAPIPage;
