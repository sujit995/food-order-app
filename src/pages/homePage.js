import React from 'react'
import styled from 'styled-components';
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const HeadingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 4rem;
`

const MainHeading = styled.div`
    border: 1px solid transparent;
    width: 50%;
`
const Links = styled(Link)`
    padding: 1rem 1rem 1rem 1rem;
    width: 30%;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #ef5924;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    text-decoration: none;
    @media screen and (max-width: 768px){
        
    }
`
const SubHeading = styled.div`
    border: 1px solid transparent;
    width: 20%;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const SmallText = styled.h4`
    font-size: 1rem;
`

const Heading = styled.h1`
    font-size: 6rem;
    @media screen and (max-width: 768px){
        font-size: 4rem;
        text-align: left;
    }
    @media screen and (max-width: 480px){
        font-size: 3rem;
        text-align: left;
    }
`
const ImageContainer = styled.div`
   margin: 90px; 
   align-items: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   gap: 10px 10px;

   @media screen and (max-width: 480px){
        justify-content: center;
    }
 `

const Home = () => {
    return (
        <MainContainer>
            <HeadingContainer>
                <MainHeading>
                    <Heading>What are you <br /> having for <br />Lunch?</Heading><br /><br />
                    <Links to="/menu">Order Now</Links>
                </MainHeading>
                <SubHeading>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et</SmallText>
                </SubHeading>
            </HeadingContainer>
            <ImageContainer>
                <HomeCard />
            </ImageContainer>
        </MainContainer>
    )
}

export default Home
