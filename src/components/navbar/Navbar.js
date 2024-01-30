import { auth } from '../../config/Config';
import { useNavigate } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const navlink = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About Us',
        path: '/about'
    },
    {
        name: 'Menu',
        path: '/menu'
    },
    {
        name: 'Contact Us',
        path: '/contact'
    },
]

const Navbar = ({ user, totalProducts }) => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-white h-16 flex justify-between items-center px-2 md:px-32 z-10 shadow-md">
                <Link to='/'>
                <i className="fas fa-utensils" style={{ color:'#009933', fontSize:'20px' }}></i><h2 className='text-gray-900 text-3xl'>Resto</h2>
                </Link>
                <RxHamburgerMenu className="md:hidden absolute top-0 right-0 transform -translate-x-full translate-y-1/2 text-4xl cursor-pointer" onClick={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                {
                    user ?
                        <>
                            <div className="items-center mr-[-24px] hidden md:flex">
                            {
                                navlink.map((item) => {
                                    return (
                                        <Link className="text-blue-900 flex items-center no-underline px-4 h-full cursor-pointer text-lg font-bold" to={item.path} key={item.name}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                            </div>
                            <div className='flex items-center mr-[24px]'>
                                <span className="text-customBlue text-base hidden md:block">{user}</span>
                                <Link className="text-blue-900 flex items-center no-underline px-4 h-full cursor-pointer text-lg font-bold" to="/cart">
                                    <div className="hidden lg:flex relative transform text-4xl cursor-pointer">
                                        <FaOpencart/>
                                        <span className="text-sm pl-1">{totalProducts}</span>
                                    </div>
                                </Link>
                                <button className="rounded-md bg-red-600 py-2 px-5 text-white outline-none transition duration-200 ease-in-out hover:bg-white hover:text-black hidden md:inline-block" onClick={() => {
                                    auth.signOut()
                                    navigate('/signin');
                                }}>LogOut</button>
                                {/* <NavLink to='/admin' activeStyle>
                                    Admin
                                </NavLink> */}
                            </div>
                        </>
                        :
                        <>
                           <div className="items-center mr-[-24px] hidden md:flex">
                            {
                                navlink.map((item) => {
                                    return (
                                        <Link className="text-blue-900 flex items-center no-underline px-4 h-full cursor-pointer text-lg font-bold" to={item.path} key={item.name}>
                                            {item.name}
                                        </Link>
                                    )
                                })
                            }
                            </div>
                            <button className="hidden md:flex items-center mr-6">
                                <Link class="rounded-md bg-green-600 py-2 px-5 text-white outline-none transition duration-200 ease-in-out hover:bg-white hover:text-black hidden md:inline-block" to='/signin'>Sign In</Link>
                            </button>
                            {/* <NavLink to='/admin' activeStyle>
                                Admin
                            </NavLink> */}
                        </>
                }
            </div>
        </>
    );
};

export default Navbar;

export function signOut() {
    throw new Error('Function not implemented.');
}
