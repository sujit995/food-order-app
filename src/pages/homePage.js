import React from 'react'

import { MainContainer, HeadContainer, Links, Head, SubHead, ImgContainer, SmallText } from './StyleElements';

const Home = () => {
    return (
        <MainContainer>
                    <HeadContainer>
                        <Head>Our Special Dish</Head>
                        <SubHead>Fried Chicken</SubHead>
                        <SmallText>Your Favorite Food delivery partner</SmallText>
                        <Links to="/menu">Order Now</Links>
                    </HeadContainer>
                    <ImgContainer>
                        <img src="images/home-img-2.png" alt="" />
                    </ImgContainer>   
        </MainContainer>
    )
}

export default Home
