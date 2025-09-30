import React from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link, useLoaderData, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyMarathon = () => {
    const marathonData = useLoaderData();
    const {title, registrationStart, marathon_image} = marathonData;
    console.log(marathonData);
    const { user } = useAuth();
    const { id: marathonId } = useParams();
    console.log(user, marathonId);

    const handleApplyMarathon = e => {
        e.preventDefault();
        const form = e.target;
        const fName = form.firstName.value;
        const lName = form.lastName.value;
        const contact = form.contact.value;
        const city = form.city.value;

        console.log(fName, lName, contact, city);

        const application = {
            marathonId,
            applicant: user.email,
            fName,
            lName,
            contact,
            city
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <section className="p-6 text-gray-900">
            <form onSubmit={handleApplyMarathon} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Register For The Marathon</p>
                        <img src={marathon_image} alt="" />
                        <h3 className='text-lg font-semibold'>{title}</h3>
                        <p>Marathon Start : {registrationStart}</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">First name</label>
                            <input name='firstName' type="text" placeholder="First name" className="input w-full rounded-md text-gray-900  border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Last name</label>
                            <input name='lastName' type="text" placeholder="Last name" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Contact Number</label>
                            <input name='contact' type="text" placeholder="contact number" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Email</label>
                            <input name='email' defaultValue={user.email} readOnly type="text" placeholder="Email" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        {/* <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">Registration Start</label>
                            <input id="city" type="text" placeholder="" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div> */}
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">City</label>
                            <input name='city' type="text" placeholder="You come from" className="input w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">......</label>
                            <input type='submit' className="btn w-full rounded-md text-gray-900 focus:ring-blue-600 border-gray-300" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default ApplyMarathon;