import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://marathon-server-ebon.vercel.app/'
})


const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    axiosInstance.interceptors.response.use(response =>{
        return response;
    } ) , error => {
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(()=> {
                console.log('logOut the user for 401');
            })
            .catch(err => {
                console.log(err);
            })
        }
        return Promise.reject(error)
    }

    return axiosInstance;
};

export default useAxiosSecure;