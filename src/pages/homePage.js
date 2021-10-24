import React from 'react'
<<<<<<< HEAD

import { MainContainer, HeadContainer, Links, Head, SubHead, ImgContainer, SmallText } from './StyleElements';
=======
import HomeCard from './HomeCard';

import { MainContainer, HeadingContainer, MainHeading, Heading, Links, SubHeading, ImageContainer, Line, SmallText } from './StyleElements';


>>>>>>> 7fb1e58a6b8ad7f602038d272698c30dea9a738b

const Home = () => {
    return (
        <MainContainer>
<<<<<<< HEAD
                    <HeadContainer>
                        <Head>Our Special Dish</Head>
                        <SubHead>Fried Chicken</SubHead>
                        <SmallText>Your Favorite Food delivery partner</SmallText>
                        <Links to="/menu">Order Now</Links>
                    </HeadContainer>
                    <ImgContainer>
                        <img src="images/home-img-2.png" alt="" />
                    </ImgContainer>   
=======
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
>>>>>>> 7fb1e58a6b8ad7f602038d272698c30dea9a738b
        </MainContainer>
    )
}

export default Home
