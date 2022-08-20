import React from "react";
import Logo from "../../assets/NavLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="bg-orange h-48 w-full">
        <div className="md:px-20 px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <img src={Logo} alt="company logo" className="h-20"></img>
              <p className="text-white">Unverified</p>
            </div>
            <div className="hidden lg:flex items-center">
              <Link
                to="/"
                className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white font-medium mr-10 leading-4 text-white underline decoration-white decoration-solid decoration-2 underline-offset-8 px-3 py-2"
              >
                Orders
              </Link>
              <Link
                to="account"
                className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white"
              >
                Account
              </Link>
              <Link
                to="users"
                className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white"
              >
                Users
              </Link>
              <Link
                to="charges"
                className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white"
              >
                Config
              </Link>
              <button className="text-base font-medium leading-none text-orange py-4 px-5 bg-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-gray-300">
                Log out
              </button>
            </div>
            <div
              className="lg:hidden text-white"
              onClick={() => setShow(!show)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
