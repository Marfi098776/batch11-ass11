import React, { Suspense } from 'react';
import ApplyTable from '../ApplyMarathon/ApplyTable';
import Loading from '../Loading/Loading';
import { myApplyPromise } from '../../api/applicationsApi';
import useAuth from '../../Hooks/useAuth';

const MyApplyList = () => {
    const {user} = useAuth();
    console.log('token in the context', user.accessToken);
    return (
        <div>
            <h2 className='text-3xl lg:text-5xl font-semibold text-center m-3'>My Applications</h2>
            <Suspense fallback={<Loading></Loading>}>
                <ApplyTable myApplyPromise={myApplyPromise(user.email, user.accessToken)}></ApplyTable>
            </Suspense>
        </div>
    );
};

export default MyApplyList;