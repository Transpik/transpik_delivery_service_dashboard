import React from 'react'

import { useEffect, useState } from 'react';

import axios from "axios";
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2OTc0NzEsImV4cCI6MTY2Njg3MDI3MSwiYXVkIjoiZGVsaXZlcnkiLCJpc3MiOiJodHRwczovL3RyYW5zcGlrYXBpLm9ucmVuZGVyLmNvbSIsInN1YiI6IjYzNTdjODAyZThkNzZhOWE3N2JiYmEyMCJ9.0S2y5CkzM2K3qMUYfgCPb8aEftKS7QQNnmH5ux5xieA';

function AddUser(props) {

    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [email, setEmail] = useState(null);
    const [initials, setInitials] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState(null);


    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    
    const onPostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    } 

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    } 

    const onInitialChange = (event) => {
        setInitials(event.target.value);
    } 

    const onLastNameChange = (event) => {
        setLastName(event.target.value);
    } 

    const onCityChange = (event) => {
        setCity(event.target.value);
    }

    const createDriver = () => {
        axios({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Token': accessToken
            },
            url: 'http://localhost:8080/users/delivery_services/drivers',
            mode: 'cors',
            withCredentials: true,
            data: {
              initials: initials,
              email: email,
              last_name: lastName,
              serving_city: city,
              postal_code: postalCode,
              password: password
            }
          }).then(response => {
            console.log(response.data.data);
          }).catch(error => {
            console.log(error);
          })
          props.setTrigger(false);
    }


    return (props.trigger) ? (
        <div className='fixed flex top-0 left-0 w-full h-[100vh] bg-[#000000]/[0.2] justify-center items-center'>
            <div className='relative p-[32px] w-full max-w-[640px] bg-[#ffffff] text-center'>
                
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="initials"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Initials
                                </label>
                                <input
                                    type="text"
                                    name="initials"
                                    id="initials"
                                    placeholder="Initials"
                                    onChange={onInitialChange}
                                    value={initials}
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="lName"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    onChange={onLastNameChange}
                                    value={lastName}
                                    placeholder="Last Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label
                            for="email"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={onEmailChange}
                            value={email}
                            placeholder="Email"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="district"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Serving City
                                </label>
                                <input placeholder="Serving City" onChange={onCityChange} value={city} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="city"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Postal Code
                                </label>
                                <input placeholder="Postal Code" value={postalCode} onChange={onPostalCodeChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="city"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Password
                                </label>
                                <input placeholder="Password" value={password} onChange={onPasswordChange} className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn-secondary' onClick={createDriver}>Add Driver</button>
                        <button className="bg-red-500 btn-secondary hover:bg-red-700" onClick={()=>props.setTrigger(false)}>Cancel</button>
                    </div>


            </div>
        </div>
    ) : "";
}

export default AddUser;

