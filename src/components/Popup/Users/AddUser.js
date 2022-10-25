import React from 'react'

function AddUser(props) {
    return (props.trigger) ? (
        <div className='fixed flex top-0 left-0 w-full h-[100vh] bg-[#000000]/[0.2] justify-center items-center'>
            <div className='relative p-[32px] w-full max-w-[640px] bg-[#ffffff] text-center'>
                <form>
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
                                    District
                                </label>
                                <select

                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >
                                    <option value="None">None</option>
                                    <option value="Jaffna">Jaffna</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Gampaha">Gampaha</option>
                                </select>
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
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                >
                                    <option value="None">None</option>
                                    <option value="Matara">Matara</option>
                                    <option value="Ranna">Ranna</option>
                                    <option value="Ja-Ela">Ja-Ela</option>
                                    <option value="Kelaniya">Kelaniya</option>
                                </select>
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
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>

                    <div>
                        <button className='btn-secondary' onClick={()=>props.setTrigger(false)}>Add Driver</button>
                    </div>
                </form>


            </div>
        </div>
    ) : "";
}

export default AddUser;

