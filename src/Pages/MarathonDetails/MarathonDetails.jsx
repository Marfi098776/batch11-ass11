import React from 'react';
import { Link, useLoaderData } from 'react-router';

const MarathonDetails = () => {
    const marathonData = useLoaderData();
    const {title, description, Location, marathonStart, marathon_image, registrationStart, registrationEnd, runningDistance, createdAt} = marathonData;
    console.log(marathonData)

    return (
        <div className='hero-content min-h-screen'>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full' 
                        src={marathon_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <span className='badge badge-outline'> Running Distance : {runningDistance}</span>
                    </h2>
                    <h3 className='text-sm'>Location : {Location}</h3>
                    <p className='font-semibold'>Description:</p>
                    <p>{description}</p>
                    <h4 className='font-semibold'>Registration Start Date : </h4><span>{registrationStart}</span>
                    <h4 className='font-semibold'>Registration End Date : </h4><span>{registrationEnd}</span>
                    <h4 className='font-semibold'>Marathon Start : </h4><span>{marathonStart}</span>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Total registrations : </div>
                    </div>
                    <Link to={`/myApply`} className='btn'>Apply For This Marathon</Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonDetails;