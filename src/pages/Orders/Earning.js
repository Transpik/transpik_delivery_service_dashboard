import React from "react";
import { Link } from "react-router-dom";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function ViewEarning() {
  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="md:w-96 flex items-center">
            <Link to="/orders/incoming" className="sub-menu-inactive">
              Incoming
            </Link>
            <Link to="/orders/processing" className="sub-menu-inactive">
              Processing
            </Link>
            <Link to="/orders/delivering" className="sub-menu-inactive">
              Delivering
            </Link>
            <Link to="/orders/earning" className="sub-menu-active">
              Earning
            </Link>
          </div>
          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Orders
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Earning
            </p>
          </div>

          <div className="flex flex-row w-full py-12 px-6 justify-center">
            <div className="flex justify-center">
              <div className="max-w-xs flex flex-col justify-between bg-white rounded-lg border border-gray-200 mb-6 px-8 py-5 mx-4 lg:w-[18rem] h-[8rem]">
                <div>
                  <h4 className="text-gray-800 font-bold mb-3">
                    Available Balances
                  </h4>
                  <p className="text-gray-800 text-sm">Rs. 34,500.56</p>
                </div>
              </div>
              <div className="max-w-xs flex flex-col justify-between bg-white rounded-lg border border-gray-200 mb-6 px-8 py-5 mx-4 lg:w-[18rem] h-[8rem]">
                <div>
                  <h4 className="text-gray-800 font-bold mb-3">Withdrawals</h4>
                  <p className="text-gray-800 text-sm">Rs.25,000.00</p>
                </div>
              </div>
              <div className="max-w-xs flex flex-col justify-between bg-white rounded-lg border border-gray-200 mb-6 px-8 py-5 mx-4 lg:w-[18rem] h-[8rem]">
                <div>
                  <h4 className="text-gray-800 font-bold mb-3">
                    Cancelled Orders
                  </h4>
                  <p className="text-gray-800 text-sm">Rs.5,000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEarning;
