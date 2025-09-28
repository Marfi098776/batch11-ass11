import React, { use } from 'react';
import MarathonCard from '../Shared/MarathonCard';

const Marathons = ({marathonPromises}) => {
    const marathons = use(marathonPromises)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4'>
            {
                marathons.map(marathon => <MarathonCard marathon={marathon} key={marathon._id}></MarathonCard>)
            }

        </div>
    );
};

export default Marathons;