import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa'
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLogBtnLink,
    ShowUserName,
    Logo
} from './NavbarElements';

const Navbar = ({ user, totalProducts }) => {
    const history = useHistory();
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <Logo>Restro</Logo>
                </NavLink>
                <Bars />
                {
                    user ?
                        <>
                            <NavMenu>
                                <NavLink to='/menu' activeStyle>
                                    Menu
                                </NavLink>
                                <NavLink to='/contact' activeStyle>
                                    Contact Us
                                </NavLink>
                            </NavMenu>
                            <NavBtn>
                                <NavLink to="/cart">
                                    <FaOpencart style={{ color: '#fff', fontSize: '24px' }} />
                                    <span>{totalProducts}</span>
                                </NavLink>
                                <ShowUserName>{user}</ShowUserName>
                                <NavLogBtnLink to='/signin' onClick={() => {
                                    firebase.auth().signOut()
                                    history.push('/signin');
                                }}>LogOut</NavLogBtnLink>
                                <NavLink to='/admin' activeStyle>
                                    Admin
                                </NavLink>
                            </NavBtn>
                        </>
                        :
                        <>
                            <NavMenu>
                                <NavLink to='/menu' activeStyle>
                                    Menu
                                </NavLink>
                                <NavLink to='/contact' activeStyle>
                                    Contact Us
                                </NavLink>
                            </NavMenu>
                            <NavBtn>
                                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                            </NavBtn>
                            <NavLink to='/admin' activeStyle>
                                Admin
                            </NavLink>
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
