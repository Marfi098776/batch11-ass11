import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const ApplyMarathon = () => {


    const { user } = use(AuthContext)
    return (
        <section className="p-6 text-gray-900">
            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Apply For The Marathon</p>
                        <img src="https://i.ibb.co.com/99Lm7jS3/FB-TW-FM2021-screening-panel.png" alt="" />
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="input w-full rounded-md text-gray-900  border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input defaultValue={user.email} readOnly id="email" type="email" placeholder="Email" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Marathon Name</label>
                            <input id="address" type="text" placeholder="title" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Registration Start</label>
                            <input id="city" type="text" placeholder="" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">City</label>
                            <input id="state" type="text" placeholder="You come from" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Contact Number</label>
                            <input id="zip" type="text" placeholder="" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default ApplyMarathon;