import React, { useState } from 'react';
import { auth } from '../../config/Config';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    BoxContainer,
    TopContainer,
    BackDrop,
    HeadContainers,
    HeaderText,
    SmallText,
    InnerContainer,
    WrapperContainer,
    MutedLink,
    Input,
    FormContainer,
    SubmitButton,
    BoldLink
} from './StyleElement';



export function AccountBox() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            toast.success('login successfull');
            history.push('/')
        } catch (error) {
            toast.error('loging fail');
            console.log(error.message);
        }
    }

    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop />
                <HeadContainers>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderText>Back</HeaderText>
                    <SmallText>Please sign-in to continue</SmallText>
                </HeadContainers>
            </TopContainer>
            <InnerContainer>
                <WrapperContainer>
                    <FormContainer onSubmit={handleSignIn}>
                        <Input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <Input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                        <MutedLink to="/forgetpassword">Forget Your Password</MutedLink><br />
                        <SubmitButton type="submit">SignIn</SubmitButton>
                        <MutedLink>Don't have an account?<BoldLink to="signup"> SignUp</BoldLink></MutedLink>
                    </FormContainer>
                </WrapperContainer>
            </InnerContainer>
        </BoxContainer>
    )
}