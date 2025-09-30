import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Mlogo from '../../assets/marathon-1.svg'

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const links = <>
        <li><Link to="/">Home</Link></li>
        {
            user && <>
                <div className="dropdown dropdown-right">
                    <li tabIndex={0} role="button" className=""><Link>Dashboard</Link></li>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><Link to="/addMarathon">Add Marathon</Link></li>
                        <li><Link to="/myMarathon">My Marathon List</Link></li>
                        <li><Link to="/myApply">My Apply List</Link></li>
                        
                    </ul>
                </div>
            </>
        }

    </>
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign out');
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img src={Mlogo} className='w-20 ml-2'/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile

                                    </a>
                                </li>
                                <li><Link onClick={handleSignOut}>Logout</Link></li>
                            </ul>
                        </div>
                    </div> :
                        <>
                            <NavLink className="btn ml-4" to="/logIn">Log In</NavLink>
                            <NavLink className="btn ml-4" to="/register">Register</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;