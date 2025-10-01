import React, { use } from 'react';
import { Link } from 'react-router';

const MyMarathonsList = ({marathonsCreatedPromise}) => {
    const marathons = use(marathonsCreatedPromise);
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Location</th>
        <th>event Date</th>
        <th>Count</th>
        <th>View Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        marathons.map((marathon, index) => <tr marathon={marathon} key={marathon._id}>
        <th>{index + 1}</th>
        <td>{marathon.title}</td>
        <td>{marathon.location}</td>
        <td>{marathon.marathonStart}</td>
        <td>{marathon.application_count}</td>
        <td><Link to={`/applications/${marathon._id}`} className='btn'>View Applications</Link></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyMarathonsList;