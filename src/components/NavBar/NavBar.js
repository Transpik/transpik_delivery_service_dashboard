import React from "react";
import Logo from "../../assets/NavLogo.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bg-orange h-48 w-full">
          <div className="md:px-20 px-4 py-8">
            <div className="flex items-center justify-between">
              <div>
                <img src={Logo} className="h-20"></img>
                <p className="text-white">Unverified</p>
              </div>
              <div className="hidden lg:flex items-center">
                <p
                  tabIndex={0}
                  role="button"
                  className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 cursor-pointer text-white"
                >
                  Orders
                </p>
                <p
                  tabIndex={0}
                  role="button"
                  className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white font-medium mr-10 leading-4 text-white underline decoration-white decoration-solid decoration-2 underline-offset-8 px-3 py-2"
                >
                  Account
                </p>
                <p
                  tabIndex={0}
                  role="button"
                  className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white"
                >
                  Users
                </p>
                <p
                  tabIndex={0}
                  role="button"
                  className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white"
                >
                  Config
                </p>
                <p
                  tabIndex={0}
                  role="button"
                  className="text-base focus:outline-none focus:ring-1 p-2 focus:ring-offset-1 focus:ring-white hover:text-gray-300 font-medium mr-10 leading-4 text-white"
                >
                  Contact
                </p>
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
}

export default NavBar;
