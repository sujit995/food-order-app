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
const MutedLink = styled(Link)`
    padding: 1rem 1rem 1rem 1rem;
    width: 30%;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #c31c3c;
    color: white;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    text-decoration: none;
`
const SubHeading = styled.div`
    border: 1px solid transparent;
    width: 20%;
`
const SmallText = styled.h4`
    font-size: 1.4rem;
`

const Heading = styled.h1`
    font-size: 6rem;
`
const ImageContainer = styled.div`
   margin: 90px; 
   align-items: center;
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   gap: 10px 10px;
 `

const Home = () => {
    return (
        <MainContainer>
            <HeadingContainer>
                <MainHeading>
                    <Heading>What are you <br /> having for Lunch?</Heading>
                    <MutedLink to="/menu">Order Now</MutedLink>
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
