import React from "react";
import { Link } from "react-router-dom";
import BillingCard from "../../components/BillingCard/BillingCard";
import visa from "../../assets/visa.png"

function BillingPage() {

  return (
    <div>

      <div className="container-position">
        <div className="container-style">
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

          <div className="w-full">
            <div className="md:inline-block p-4 pl-0 pt-0 mt-4 md:border-r-2">
              <div className="md:flex items-left">
                <div className="md:w-full flex flex-col md:mt-0 mt-4">
                  <label className="md:flex items-center mt-4">
                    <div className="flex items-end justify-between">
                      <p className="text-base font-semibold leading-none text-gray-800">
                        Card Number
                      </p>
                    </div>
                  </label>
                  <input
                    tabIndex={0}
                    aria-label="Please input email address"
                    type="text"
                    className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 border rounded border-gray-200"
                    placeholder="Enter card number"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-4">
                <div className="md:w-full flex flex-col md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Name On Card
                  </label>
                  <input
                    tabIndex={0}
                    aria-label="Please input password"
                    type="text"
                    className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 border rounded border-gray-200"
                    placeholder="Enter name on the card"
                  />
                </div>
              </div>
              <div className="md:flex items-center mt-4">
                <div className="md:w-1/2 flex flex-col md:mt-0 md:mr-10 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Expiration
                  </label>
                  <input
                    tabIndex={0}
                    aria-label="Please input password"
                    type="text"
                    className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 border rounded border-gray-200"
                    placeholder="mm/yy"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    CVC
                  </label>
                  <input
                    tabIndex={0}
                    aria-label="Please input password"
                    type="text"
                    className="text-xs leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 border rounded border-gray-200"
                    placeholder="cvc number"
                  />
                </div>
              </div>


              <div className="flex justify-end items-center w-full mt-4">
                <button className="btn-secondary">Add Card</button>
              </div>
            </div>

            <div className="md:inline-block align-top">
              <div className="text-base font-semibold leading-none text-gray-800 mt-4 pt-4 pl-4">Available Cards</div>
              <BillingCard number="4263 9826 4026 9299" name="Anthoney Rodrigo" exp="03/2023" type="VISA"/>
              <BillingCard number="9263 9826 5026 8997" name="John Fernandoz" exp="12/2025" type="MASTER"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}

export default BillingPage;