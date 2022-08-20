import React from "react";

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
                className="text-base bg-orange bg-opacity-80 px-4 py-2 rounded focus:outline-none focus:ring-1 pr-2 focus:ring-offset-1 focus:ring-orange font-medium mr-10 leading-4 text-black"
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
            </div>

            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  arial-label="Please input company name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="text-xs leading-3 text-gray-600 mt-4">
              By clicking submit you agree to our terms of service, privacy
              policy and how we use data as stated
            </p>
            <div className="flex items-center w-full">
              <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountProfilePage;
