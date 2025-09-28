import React from 'react';
import { Link } from 'react-router';

const MarathonCard = ({marathon}) => {
    const {_id, title, marathon_image, location, registrationStart, registrationEnd} = marathon;
    return (
        <div className="card bg-base-100 h-90 shadow-sm">
            <figure>
                <img className=''
                    src={marathon_image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>Location : {location}</p>
                <p>Registration start : {registrationStart}</p>
                <p>Registration end : {registrationEnd}</p>

                <div className="card-actions justify-start">
                    <Link to={`/marathon-details/${_id}`} className="btn btn-outline">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;