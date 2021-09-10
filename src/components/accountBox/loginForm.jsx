import React, { useState } from 'react';
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

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(email, password);
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
                        <Input type="email" placeholder="Email" required required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <Input type="password" placeholder="Password" required required onChange={(e) => setPassword(e.target.value)} value={password} />
                        <MutedLink to="/forgetpassword">Forget Your Password</MutedLink>
                        <SubmitButton type="submit" >SignIn</SubmitButton>
                        <MutedLink>Don't have an account?<BoldLink to="signup"> SignUp</BoldLink></MutedLink>
                    </FormContainer>
                </WrapperContainer>
            </InnerContainer>
        </BoxContainer>
    )
}