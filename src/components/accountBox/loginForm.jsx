import React, { useState } from 'react';
import { auth } from '../../config/Config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Heading from '../Heading';

export function AccountBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            toast.success('Login successful');
            navigate('/');
        } catch (error) {
            toast.error('Login failed. Please check your credentials.');
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className="w-[350px] flex flex-col rounded-md bg-green-600 my-10">
            <div className="flex flex-col justify-end px-5 py-5">
                <Heading text="Welcome Back" subtext="Please sign in to continue" />
            </div>
            <div className="flex flex-col w-full px-5 py-5 rounded-t-full bg-white">
                <form className="flex flex-col items-center w-full" onSubmit={handleSignIn}>
                    <input
                        className="w-full h-[42px] outline-none py-5 border border-1 border-gray-600 rounded-md mt-10 px-5"
                        type="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className="w-full h-[42px] outline-none py-5 border border-1 border-gray-600 rounded-md mt-10 px-5"
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Link className="text-[12px] text-customBlue text-opacity-80 no-underline mt-[20px]" to="/forgetpassword">
                        Forget Your Password
                    </Link>
                    <button className="w-full py-2 text-white text-lg font-bold border-none rounded-full cursor-pointer transition-all duration-240 ease-in-out bg-gradient-to-r from-green-700 via-green-500 to-green-400 hover:brightness-103 mt-5" type="submit">
                        Sign In
                    </button>
                </form>
                <span className="mt-3 text-center">
                    Don't have an account?
                    <Link className="text-lg text-blue-400 font-bold no-underline" to="/signup">
                        Sign Up
                    </Link>
                </span>
            </div>
        </div>
    );
}
