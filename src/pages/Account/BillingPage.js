import React from "react";
import { Link } from "react-router-dom";
import visa from "../../assets/visa.png"

function BillingPage() {

  return (
    <div>
      
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
          <div className="flex items-center">
          <Link to="/account/profile" className="sub-menu-inactive">
              Profile
            </Link>
            <Link to="/account/api" className="sub-menu-inactive">
              API
            </Link>
            <Link to="/account/billing" className="sub-menu-active">
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
              Billing
            </p>
          </div>

          <div className="md:flex items-center mt-8">
            <div className="md:w-full flex flex-col md:mt-0 mt-4">
              <label className="">
                <div className="flex items-end justify-between">
                  <p className="text-base font-semibold leading-none text-gray-800">
                    Card Details
                  </p>
                </div>
              </label>
              
            

              
              <div className="p-1 border-[#333333] border-2 mt-3 rounded-2xl">
              <img className="mr-2 scale-50" src={visa}/>
                <div class="block p-4 bg-white sm:p-4 mt-2">
                  <div>
                    <h5 class="text-xl font-bold text-gray-900">Visa ending in 1234</h5>
                    <p class="mt-2 text-sm text-gray-500">
                      Expiry on 04/2024.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center w-full mt-4">
            <button className="btn-secondary">Change Card</button>
          </div>


            </div>
          </div>       

        </div>
      </div>
    </div>
  );

}

export default BillingPage;