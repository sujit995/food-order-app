import React, { useState } from 'react';
import { auth, fs } from '../../config/Config';
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
    Input,
    FormContainer,
    SubmitButton,
    MutedLink,
    BoldLink,
} from './StyleElement'

toast.configure();

export function AccountBox() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault();
        // try {
        //     await auth.createUserWithEmailAndPassword(email, password);

        //     toast.success('successfully register');
        //     history.push('/')
        // } catch (error) {
        //     toast.error('registration fail');
        //     console.log(error.message);
        // }
        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            console.log(user);
            fs.collection('users').doc(user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password
            }).then(() => {
                toast.success('Signup successfull');
                setFullName('');
                setEmail('');
                setPassword('');
                history.push('/')
            }).catch(error => console.log(error.message));
        }).catch((error) => {
            console.log(error.message);
        })
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
                        <Input type="text" placeholder="Fullname" required onChange={(e) => setFullName(e.target.value)} value={fullName} />
                        <Input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <Input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                        <SubmitButton type="submit">SignUp</SubmitButton>
                        <MutedLink>Aready have an account?<BoldLink to="signin"> SignIn</BoldLink></MutedLink>
                    </FormContainer>
                </WrapperContainer>
            </InnerContainer>
        </BoxContainer>
    )
}