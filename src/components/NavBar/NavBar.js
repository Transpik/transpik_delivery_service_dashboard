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
              <Link to="orders" className="menu-inactive">
                Orders
              </Link>
              <Link to="account" className="menu-inactive">
                Account
              </Link>
              <Link to="users" className="menu-inactive">
                Users
              </Link>
              <Link to="charges" className="menu-inactive">
                Config
              </Link>
              <button className="btn">Log out</button>
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
