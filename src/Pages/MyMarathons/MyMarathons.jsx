import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';
import useAuth from '../../Hooks/useAuth';
import { marathonsCreatedPromise } from '../../api/marathonsApi';
import MyMarathonsList from './MyMarathonsList';

const MyMarathons = () => {
  const {user} = useAuth()
  return (
    <div>
      <h2 className='text-3xl lg:text-5xl font-semibold text-center m-3'>My Posted Marathons</h2>
      <Suspense fallback={<Loading></Loading>}>
        <MyMarathonsList marathonsCreatedPromise={marathonsCreatedPromise(user.email)}></MyMarathonsList>
      </Suspense>
    </div>
  );
};
export default MyMarathons;