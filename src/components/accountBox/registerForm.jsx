import React, { useState } from 'react';
import { auth, fs } from '../../config/Config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from '../Heading';

export function AccountBox() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log(user)
            await fs.collection('users').doc(user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password
            });
            toast.success('Sign up successful');
            setFullName('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (error) {
            toast.error('Sign up failed. Please check your information.');
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <div className="w-[350px] flex flex-col rounded-md border-1 border-gray-600 my-10 bg-green-600">
            <div className="w-full flex flex-col justify-end px-5 py-5">
                <Heading text="Register Now" subtext="Please register first" />
            </div>
            <div className="flex flex-col w-full px-5 py-5 rounded-t-full bg-white">
                <form className="flex flex-col items-center w-full" onSubmit={handleSignUp}>
                    <input
                        className="w-full h-[42px] outline-none py-5 border border-1 border-gray-600 rounded-md mt-10 px-5"
                        type="text"
                        placeholder="Full Name"
                        required
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                    />
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
                    <button className="w-full py-2 text-white text-lg font-bold border-none rounded-full cursor-pointer transition-all duration-240 ease-in-out bg-gradient-to-r from-green-700 via-green-500 to-green-400 hover:brightness-103 mt-5" type="submit">
                        Sign Up
                    </button>
                    <span className="mt-3 text-center">
                        Already have an account?
                        <Link className="text-lg text-blue-400 font-bold no-underline" to="/signin">
                            Sign In
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
}
