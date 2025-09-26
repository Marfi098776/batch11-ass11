
import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='hero min-h-screen'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800">
            <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>

            <form noValidate="" action="" className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Name</label>
                        <input type="text" name="name"  placeholder="name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Photo_URL</label>
                        <input type="url" name="photoURL" placeholder="URL" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    </div>
                </div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Register</button>
            </form>
        </div>
        </div>
    );
};

export default Register;