import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();


    if(loading){
        return <div className="min-h-screen w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div>
    }

    if(!user) {
        return <Navigate to='/logIn' state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;