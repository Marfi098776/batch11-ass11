import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { marathon_id } = useParams();
    const applicationCount = useLoaderData();
    console.log(applicationCount);

    return (
        <div>
            {applicationCount.length} marathon {marathon_id}
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact Number</th>
                            <th>Applicant Email</th>
                            <th>Marathon start</th>
                            <th>Change Marathon Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applicationCount.map((singleapply, index) => <tr singleapply={singleapply} key={singleapply._id}>
                                <th>{index + 1}</th>
                                <td>{singleapply.fName}</td>
                                <td>{singleapply.contact}</td>
                                <td>{singleapply.applicant}</td>
                                <td>{singleapply.marathonStart}</td>
                                <td><input name='date' type="date" className="input" /></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;