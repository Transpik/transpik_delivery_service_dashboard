import React from "react";
import Logo from "../../assets/NavLogo.png";
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  const logout = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.location.href = 'https://transpikland.onrender.com';
  }

  return (
    <div>
      <div className="bg-orange h-48 w-full">
        <div className="md:px-20 px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-end">
              <img src={Logo} alt="company logo" className="h-20"></img>
            </div>
            <div className="hidden lg:flex items-center">
              <NavLink to="orders" className="menu-selection">
                Orders
              </NavLink>
              <NavLink to="account" className="menu-selection">
                Account
              </NavLink>
              <NavLink to="users" className="menu-selection">
                Users
              </NavLink>
              <NavLink to="charges" className="menu-selection">
                Config
              </NavLink>
              <NavLink to="login" className="btn" onClick={logout}>
                Log out
              </NavLink>
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
