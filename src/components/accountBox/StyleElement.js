import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxContainer = styled.div`
width: 350px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 8px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

export const TopContainer = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`
export const BackDrop = styled.div`
width: 100%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%; 
transform: rotate(60deg);
top: -260px;
left: -10px;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`
export const HeadContainers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const HeaderText = styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 1.24;
color: #fff;
z-index: 10;
margin: 0;
`
export const SmallText = styled.h5`
color: #fff;
font-weight: 500;
font-size: 14px;
z-index: 10;
margin-top: 12px;
`

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const WrapperContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const FormContainer = styled.form`
width: 80%;
display: flex;
flex-direction: column;
`;

export const MutedLink = styled(Link)`
font-size: 12px;
color: rgba(200, 200, 200, 0.8);
font-weight: 500;
text-decoration: none;
margin-top: 20px;
`;

export const BoldLink = styled(Link)`
font-size: 14px;
color: rgba(0,212,255,1);;
font-weight: bold;
text-decoration: none;
margin-top: 20px;
`;

export const Input = styled.input`
width: 100%;
height: 42px;
outline: none;
padding: 0 10px;
border: 1px solid rgba(200, 200, 200, 0.4);
margin-top: 10px;

 &::placeholder{
     color: rgba(200, 200, 200, 1);
 }
 &:focus{
     outline: none;
     border-bottom: 2px solid rgba(0,212,255,1);
 }
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 10px 40%;
color: #fff;
font-size: 15px;
font-weight: bold;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
margin-top: 30px;

&:hover{
    filter: brightness(1.03);
}
`;
