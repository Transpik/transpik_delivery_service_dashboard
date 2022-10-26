import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const accessToken = window.localStorage.getItem('accessToken');

function AccountProfilePage() {
  const [country, setCountry] = useState("LK");
  const [city, setCity] = useState("None");
  const [postalCode, setPostalCode] = useState("None");
  const [address, setAddress] = useState("None");
  const [businessName, setBusinessName] = useState("None");
  const [businessRegNo, setBusinessRegNo] = useState("None");

  const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')
        
});

const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, reset, formState:{errors} } = useForm(formOptions);

function onSubmit(data) {
  // display form data on success
  alert(JSON.stringify(data, null, 4));
  return false;
}

  const makeVerifyRequest = () => {
    axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'https://transpikapi.onrender.com/users/delivery_services/verify',
      mode: 'cors',
      withCredentials: true,
      data: {
        email: 'del_user_1@gmail.com',
        business_reg_no: businessRegNo,
        businessName: businessName,
        location: {
          address: address,
          city: city,
          postal_code: postalCode,
          country: 'Sri Lanka',
          country_code: country
        }
      }
    }).then(response => {
      console.log(response.data.message);
    }).catch(error => {
      console.log(error);
    })
  }


  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const onChangeBusinessName = (event) => {
    setBusinessName(event.target.value);
  }

  const onChangeBusinessRegNo = (event) => {
    setBusinessRegNo(event.target.value);
  }

  const onChangeCity = (event) => {
    setCity(event.target.city);
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  const onChangePostalCode = (event) => {
    setPostalCode(event.target.value);
  }

  return (
    <div>
      <div className="container-position">
        <div className="container-style">
          <div className="flex items-center">
            <Link to="/account/profile" className="sub-menu-active">
              Profile
            </Link>
            <Link to="/account/api" className="sub-menu-inactive">
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
              Profile
            </p>
          </div>
          <div className="mt-4 bg-orange bg-opacity-20 px-4 py-8 rounded flex justify-between align-top">
            <p className="text-red-400 w-4/5">
              Your profile is not a verified profile. Please fill and submit the
              below form to be a verified profile.
            </p>
            <InfoRoundedIcon className="text-sm text-red-400 cursor-pointer" />
          </div>

          <form key={1} onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                aria-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Password
              </label>
              <input
                tabIndex={0}
                aria-label="Please input password"
                type="password"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input password"
                {...register('password')}
              />
              <div className="text-red-600">{errors.password?.message}</div>
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Confirm Password
              </label>
              <input
                tabIndex={0}
                aria-label="Please input re-input password"
                type="password"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input re-input password"
                {...register('confirmPassword')}
              />
              <div className="text-red-600">{errors.confirmPassword?.message}</div>
            </div>
          </div>

          <div className="flex items-center w-full">
            <button className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Change Password
            </button>
          </div>
          </form>
          
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Business Name
              </label>
              <input
                tabIndex={0}
                aria-label="Please input business name"
                type="name"
                onChange={onChangeBusinessName}
                value={businessName}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input business name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Registration Number
              </label>
              <input
                tabIndex={0}
                aria-label="Please input registration number"
                type="name"
                onChange={onChangeBusinessRegNo}
                value={businessRegNo}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input registration number"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-72 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Address
              </label>
              <input
                tabIndex={0}
                aria-label="Please input address"
                type="name"
                onChange={onChangeAddress}
                value={address}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-4">
            <div className="md:w-40 flex flex-col md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Country
              </label>
              <select
                value={country}
                onChange={onChangeCountry}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
              >
                <option value="LK">Sri Lanka</option>
              </select>
            </div>
            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                City
              </label>
              <input tabIndex={0}
                aria-label="Please input city"
                type="name"
                value={city}
                onChange={onChangeCity}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Please input city"></input>
            </div>
            
            <div className="md:w-40 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Postal Code
              </label>
              <input
                tabIndex={0}
                aria-label="Please input postal code"
                type="name"
                onChange={onChangePostalCode}
                value={postalCode}
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange mt-4 bg-gray-100 border rounded border-gray-200"
                placeholder="Your postal code"
              />
            </div>
          </div>

          <p className="text-xs leading-3 text-gray-600 mt-4 md:w-[44rem]">
            By clicking update and verify, you have provided complete and
            accurate information on the Transpik online registration form, and
            that you will immediately update your account profile of any changes
            to that information.
          </p>
          <div className="flex items-center w-full">
            <button onClick={makeVerifyRequest} className="mt-4 text-base font-semibold leading-none text-white py-4 px-10 bg-green rounded hover:bg-dark_green focus:ring-2 focus:ring-offset-2 focus:ring-orange focus:outline-none">
              Update and Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfilePage;
