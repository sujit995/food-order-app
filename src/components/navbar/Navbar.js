import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa'
import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';


import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    SignInBtn,
    NavBtnLink,
    NavLogBtnLink,
    ShowUserName,
    Logo,
    CartWrapper,
} from './NavbarElements';


const Navbar = ({ user, totalProducts }) => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Nav>
                <NavLink to='/'>
                <i className="fas fa-utensils" style={{ color:'#009933', fontSize:'20px' }}></i><Logo>Resto</Logo>
                </NavLink>
                <Bars onClick={toggle} toggle={toggle} />
                <Sidebar isOpen={isOpen} toggle={toggle} />
                {
                    user ?
                        <>
                            <NavMenu>
                                <NavLink to='/' activeStyle>
                                    Home
                                </NavLink>
                                <NavLink to='/about' activeStyle>
                                    AboutUs
                                </NavLink>
                                <NavLink to='/menu' activeStyle>
                                    Menu
                                </NavLink>
                                <NavLink to='/contact' activeStyle>
                                    Contact Us
                                </NavLink>
                            </NavMenu>
                            <NavBtn>
                                <ShowUserName>{user}</ShowUserName>
                                <NavLink to="/cart">
                                    <CartWrapper>
                                        <FaOpencart style={{ color: '#009933', fontSize: '28px' }} />
                                        <span>{totalProducts}</span>
                                    </CartWrapper>
                                </NavLink>
                                <NavLogBtnLink to='/signin' onClick={() => {
                                    firebase.auth().signOut()
                                    history.push('/signin');
                                }}>LogOut</NavLogBtnLink>
                                {/* <NavLink to='/admin' activeStyle>
                                    Admin
                                </NavLink> */}
                            </NavBtn>
                        </>
                        :
                        <>
                            <NavMenu>
                               <NavLink to='/' activeStyle>
                                    Home
                                </NavLink>
                                <NavLink to='/about' activeStyle>
                                    AboutUs
                                </NavLink>
                                <NavLink to='/menu' activeStyle>
                                    Menu
                                </NavLink>
                                <NavLink to='/contact' activeStyle>
                                    Contact Us
                                </NavLink>
                            </NavMenu>
                            <SignInBtn>
                                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                            </SignInBtn>
                            {/* <NavLink to='/admin' activeStyle>
                                Admin
                            </NavLink> */}
                        </>
                }
            </Nav>
        </>
    );
};

export default Navbar;

export function signOut() {
    throw new Error('Function not implemented.');
}
