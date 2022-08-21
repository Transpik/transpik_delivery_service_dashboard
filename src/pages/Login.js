import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mx-auto flex justify-center mt-16 font-poppins">
        <div className="rounded-2xl bg-white border border-solid p-9 border-secondary-light-gray w-[436px] flex flex-col items-center" style={{"box-shadow": "0px 10px 20px rgba(229, 229, 229, 0.3)"}}>
          <div className="flex flex-col items-center mb-9">
            <h1 className="text-dark-gray text-xl font-medium mb-4">Login</h1>
            <p className="text-light-gray text-sm text-center w-2/3">You can login as a delivery service or an ecommerece platform.</p>
          </div>
          <form method="POST" onSubmit={this.onSubmit}>
            <div>
              <label className="ml-4">Email Address</label>
              <input type={"email"} name={"email"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-5"></input>
            </div>
            <div>
              <label className="ml-4">Password</label>
              <input type={"password"} name={"password"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-4"></input>
            </div>
            <div className="flex justify-center">
              <button type={"submit"} className="bg-orange text-base font-medium text-white h-12 w-[142px] rounded-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;