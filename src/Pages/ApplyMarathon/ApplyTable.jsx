import React, { use } from 'react';
import Marathons from '../Marathons/Marathons';

const ApplyTable = ({myApplyPromise}) => {
    const applications = use(myApplyPromise);

    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Distance</th>
        <th>Marathon start</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applications.map((application, index) => <tr application={application} key={application._id}>
        <th>{index + 1}</th>
        <td>{application.title}</td>
        <td>{application.runningDistance}</td>
        <td>{application.marathonStart}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ApplyTable;