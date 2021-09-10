import React, {useState} from 'react';

import {
    BoxContainer,
    TopContainer,
    BackDrop,
    HeadContainers,
    HeaderText,
    SmallText,
    InnerContainer,
    WrapperContainer,
    Input,
    FormContainer,
    SubmitButton,
    MutedLink,
    BoldLink
} from './StyleElement'

export function AccountBox() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(fullName, email, password);
    }
    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop />
                <HeadContainers>
                    <HeaderText>Register</HeaderText>
                    <HeaderText>Now</HeaderText>
                    <SmallText>Please register first</SmallText>
                </HeadContainers>
            </TopContainer>
            <InnerContainer>
                <WrapperContainer>
                    <FormContainer onSubmit={handleSignUp}>
                        <Input type="text" placeholder="Fullname" required onChange={(e)=>setFullName(e.target.value)} value={fullName}/>
                        <Input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <Input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        <SubmitButton type="submit">SignIn</SubmitButton>
                        <MutedLink>Aready have an account?<BoldLink to="signin"> SignIn</BoldLink></MutedLink>
                    </FormContainer>
                </WrapperContainer>
            </InnerContainer>
        </BoxContainer>
    )
}