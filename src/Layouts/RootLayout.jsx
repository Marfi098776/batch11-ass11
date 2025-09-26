import React from 'react';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;