import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useMarathonsApi = () => {
    const axiosSecure = useAxiosSecure();

    const marathonsCreatedPromise = email => {
        return axiosSecure.get(`marathons/applications?email=${email}`)
        .then(res => res.data)
    }

    return {
        marathonsCreatedPromise
    }
};

export default useMarathonsApi;