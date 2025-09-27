
import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);
     const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/'

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoUrl, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <div className='hero min-h-screen'>
            <div className="w-full max-w-md p-4 rounded-md  sm:p-8 border-1 border-violet-600 text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>

                <form onSubmit={handleRegister} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Name</label>
                            <input type="text" name="name" placeholder="name" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
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
                            <input type="password" name="password" placeholder="*****" minLength="6" pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must be minimum 6 characters, including lowercase letter, uppercase letter" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;