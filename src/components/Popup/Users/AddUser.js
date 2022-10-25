import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function AddUser(props) {

    const [District, setDistrict] = useState("");
    const [City, setCity] = useState("");

    const distChange = (event) => {
        setDistrict(event.target.value);
    };
    const cityChange = (event) => {
        setCity(event.target.value);
    };

    const validationSchema = Yup.object().shape({
        initials: Yup.string()
            .required('Initials required')
            .matches(/^[aA-zZ\s]+$/, "Only letters are allowed"),
        lastName: Yup.string()
            .required('Last Name required')
            .matches(/^[aA-zZ\s]+$/, "Only letters are allowed"),
        email: Yup.string()
            .required('Email is required')
            .email(),
        District: Yup.string()
            .required('District is required'),
        City: Yup.string()
            .required('City is required'),
        PostalCode: Yup.string()
            .required('required')
            .matches(/^[0-9]+$/, 'Only digits')
            .min(5, 'Exactly 5 digits')
            .max(5, 'Exactly 5 digits'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions);
    function onSubmitDriver(data) {
        // display form data on success
        alert(JSON.stringify(data, null, 4));
        props.setTrigger(false);
        window.location.reload(false);
        return false;
    }

    function CaneclDriver() {
        props.setTrigger(false);
        window.location.reload(false);
    }

    return (props.trigger) ? (
        <div className='fixed flex top-0 left-0 w-full h-[100vh] bg-[#000000]/[0.2] justify-center items-center'>
            <div className='relative p-[32px] w-full max-w-[640px] bg-[#ffffff] text-center'>
                <form id="driverForm" onSubmit={handleSubmit(onSubmitDriver)}>
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
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                                    {...register('initials')}
                                />
                                <div className="text-red-600">{errors.initials?.message}</div>
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
                                    placeholder="Last Name"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                                    {...register('lastName')}
                                />
                                <div className="text-red-600">{errors.lastName?.message}</div>
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
                            placeholder="Email"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                            {...register('email')}
                        />
                        <div className="text-red-600">{errors.email?.message}</div>
                    </div>

                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="district"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    District
                                </label>
                                <select
                                    {...register('District')}
                                    value={District}
                                    onChange={distChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                                >
                                    <option value="">None</option>
                                    <option value="Jaffna">Jaffna</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Gampaha">Gampaha</option>
                                </select>
                                <div className="text-red-600">{errors.District?.message}</div>
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="city"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    City
                                </label>
                                <select
                                    {...register('City')}
                                    value={City}
                                    onChange={cityChange}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                                >
                                    <option value="">None</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Ranna">Ranna</option>
                                    <option value="Ja-Ela">Ja-Ela</option>
                                    <option value="Kelaniya">Kelaniya</option>
                                </select>
                                <div className="text-red-600">{errors.City?.message}</div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label
                            for="postal code"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Postal Code
                        </label>
                        <input
                            type="text"
                            name="postal code"
                            id="postal code"
                            placeholder="Postal Code"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#ea922d] focus:shadow-md"
                            {...register('PostalCode')}
                        />
                        <div className="text-red-600">{errors.PostalCode?.message}</div>
                    </div>

                    <div>
                        <button class='btn-primary' onClick={CaneclDriver}>Cancel</button>
                        <button type="submit" className='btn-secondary'>Add Driver</button>
                    </div>
                </form>


            </div>
        </div>
    ) : "";
}

export default AddUser;

