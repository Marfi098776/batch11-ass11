import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddMarathon = () => {

    const { user } = use(AuthContext)
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        axios.post('https://marathon-server-ebon.vercel.app/marathons', data)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your marathon has been Published",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
            form.reset();

    }
    return (
        <div className='hero min-h-screen'>
            <form onSubmit={handleFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Marathon Data</legend>

                    {/* title */}
                    <label className="label">Title</label>
                    <input type="text" name='title' className="input" placeholder="" />
                    {/* location */}
                    <label className="label">Location</label>
                    <input type="text" name='location' className="input" placeholder="" />
                    {/* description */}
                    <label className="label">Description</label>
                    <textarea className="textarea" name='description' placeholder="Bio"></textarea>
                    {/* Running Distance */}
                    <label className="label">Running Distance</label>
                    <select defaultValue="Pick a distance" className="select" name='runningDistance'>
                        <option disabled={true}>Pick a distance</option>
                        <option>25k</option>
                        <option>10k</option>
                        <option>3k</option>
                    </select>
                    {/* marathonStart */}
                    <label className="label">Marathon Start</label>
                    <input type="date" name='marathonStart' className="input" />

                    {/* registrationStartDate */}
                    <label className="label">Registration Start</label>
                    <input type="date" name='registrationStart' className="input" />
                    <label className="label">Registration End</label>
                    <input type="date" name='registrationEnd' className="input" />
                    {/*  */}
                    <label className="label">marathon_image</label>
                    <input type="url" name='marathon_image' className="input" placeholder="" />
                    {/*  */}
                    <label className="label">HR_Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="" />
                    {/*  */}
                    <label className="label">HR_Email</label>
                    <input type="email" name='hr_email' defaultValue={user.email} readOnly className="input" placeholder="" />

                    <label className="label">Created at</label>
                    <input defaultValue={new Date()} type="time" name='createdAt' className="input" />

                    <button type='submit' className="btn btn-neutral mt-4">Add Marathon</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddMarathon;