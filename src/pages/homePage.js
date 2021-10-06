import React from 'react'
import HomeCard from './HomeCard';

import { MainContainer, HeadingContainer, MainHeading, Heading, Links, SubHeading, ImageContainer, Line, SmallText } from './StyleElements';



const Home = () => {
    return (
        <MainContainer>
            <HeadingContainer>
                <MainHeading>
                    <Heading>What are you <br /> having for <br />Lunch?</Heading><br /><br />
                    <Links to="/menu">Order Now</Links>
                </MainHeading>
                <SubHeading>
                    <SmallText>One Click, one order and you get the food delivered.</SmallText>
                    <Line />
                </SubHeading>
            </HeadingContainer>
            <ImageContainer>
                <HomeCard />
            </ImageContainer>
        </MainContainer>
    )
}

export default Home
