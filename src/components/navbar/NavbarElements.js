import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #FC8019;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((80vw - 1000px) / 2);
  z-index: 10; 
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const SignInBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #000;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavLogBtnLink = styled(Link)`
  border-radius: 4px;
  background: #db3f2e;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ShowUserName = styled.h3`
  font-size: 16px;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.h2`
  color: #281e32;
  font-size: 36px
`

export const CartWrapper = styled.div`
  display:flex;
  span{
    font-size: 13px;
    padding-left: 2px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    transform: translate(-130%, 0%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`


