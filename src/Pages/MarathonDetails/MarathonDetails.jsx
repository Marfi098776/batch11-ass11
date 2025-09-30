import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";


const MarathonDetails = () => {
    const marathonData = useLoaderData();
    const {_id, title, description, location, marathonStart, marathon_image, registrationStart, registrationEnd, runningDistance, createdAt } = marathonData;
    // console.log(marathonData)

    const regStartDate = marathonData.registrationStart;
    const regEndDate = marathonData.registrationEnd;
    // console.log(regStartDate, regEndDate);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const today = new Date();
        const start = new Date(regStartDate);
        const end = new Date(regEndDate);

        if (today >= start && today <= end) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }, [])

    return (
        <div className='hero-content  min-h-screen mx-auto'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-96'
                        src={marathon_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <span className='badge badge-outline'> Running Distance : {runningDistance}</span>
                    </h2>
                    <h3 className='text-sm flex items-center gap-1'><FaLocationDot /> {location}</h3>
                    <p className='font-semibold'>Description:</p>
                    <p>{description}</p>
                    <h4 className='font-semibold'>Registration Start Date : </h4><span>{registrationStart}</span>
                    <h4 className='font-semibold'>Registration End Date : </h4><span>{registrationEnd}</span>
                    <h4 className='font-semibold'>Marathon Start : </h4><span>{marathonStart}</span>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Total registrations : </div>
                        <div className="badge badge-outline">Created at {createdAt} </div>
                    </div>
                    <Link to={`/applyMarathon/${_id}`}><button
                        disabled={!isActive}
                        className={`mt-4 w-full py-2 rounded ${isActive
                                ? "bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700"
                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Apply For This Marathon
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;