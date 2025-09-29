import React, { Suspense } from 'react';
import ApplyTable from '../ApplyMarathon/ApplyTable';
import Loading from '../Loading/Loading';
import { myApplyPromise } from '../../api/applicationsApi';
import useAuth from '../../Hooks/useAuth';

const MyApplyList = () => {
    const {user} = useAuth();
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <ApplyTable myApplyPromise={myApplyPromise(user.email)}></ApplyTable>
            </Suspense>
        </div>
    );
};

export default MyApplyList;