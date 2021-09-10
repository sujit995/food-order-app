import React from 'react'
import styled from 'styled-components';
import { AccountBox } from './accountBox/loginForm';

const SignInContainer = styled.div`
margin-top: 40px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const SignIn = () => {
    return (
        <SignInContainer>
            <AccountBox />
        </SignInContainer>
    )
}

export default SignIn
