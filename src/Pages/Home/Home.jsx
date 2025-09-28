import React, { Suspense } from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Marathons from '../Marathons/Marathons';
import Loading from '../Loading/Loading';

const Home = () => {
    const marathonPromises = fetch('http://localhost:3000/marathons').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<Loading></Loading>}>
                <Marathons marathonPromises={marathonPromises}></Marathons>
            </Suspense>
        </div>
    );
};

export default Home;