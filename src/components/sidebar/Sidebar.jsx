import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { auth, fs } from '../../config/Config';


import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
  NavLogBtnLink,
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
  const history = useHistory();

  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          fs.collection('users').doc(user.uid).get().then(snapshot => {
            setUser(snapshot.data().FullName);
          });
        } else {
          setUser(null)
        }
      })
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  // state of TotalProducts
  const [totalProducts, setTotalProducts] = useState(0)
  // getting cart products
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        })
      }
    })
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {
        user ?
          <>
            <SidebarMenu>
              <SidebarLink to='/' activeStyle>
                Home
              </SidebarLink>
              <SidebarLink to='/about' activeStyle>
                AboutUs
              </SidebarLink>
              <SidebarLink to='/menu' activeStyle>
                Menu
              </SidebarLink>
              <SidebarLink to='/contact' activeStyle>
                Contact Us
              </SidebarLink>
            </SidebarMenu>
            <SidebarBtn>
              <NavLogBtnLink to='/signin' onClick={() => {
                firebase.auth().signOut()
                history.push('/signin');
              }}>LogOut</NavLogBtnLink>
            </SidebarBtn>
          </>
          :
          <>
            <SidebarMenu>
              <SidebarLink to='/' activeStyle>
                Home
              </SidebarLink>
              <SidebarLink to='/about' activeStyle>
                AboutUs
              </SidebarLink>
              <SidebarLink to='/menu' activeStyle>
                Menu
              </SidebarLink>
              <SidebarLink to='/contact' activeStyle>
                Contact Us
              </SidebarLink>
            </SidebarMenu>
            <SidebarBtn>
              <SidebarBtnLink to='/signin'>Sign In</SidebarBtnLink>
            </SidebarBtn>
          </>
      }
    </SidebarContainer>
  )
}

export default Sidebar;

export function signOut() {
  throw new Error('Function not implemented.');
}
