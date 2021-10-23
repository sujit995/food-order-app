import React from 'react'
import {Container, RowContainer, ImgSection, Content, IconContainer, Icons} from './StyleElements';


const AboutUs = () => {
    return (
        <Container>
            <h3>About Us</h3>
            <h1>Why choose us?</h1>
            <RowContainer>
                <ImgSection>
                    <img src="images/about-img.png" alt="" />
                </ImgSection>
                <Content>
                    <h3>Best food in the country</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur address_zip
                        Lorem ipsum dolor sit amet, consectetur adip</p>
                    <IconContainer>
                        <Icons>
                            <i className="fas fa-shipping-fast"></i>
                            <span>Free Delivery</span>
                        </Icons>
                        <Icons>
                            <i className="fas fa-dollar-sign"></i>
                            <span>Easy Payment</span>
                        </Icons>
                        <Icons>
                            <i className="fas fa-headset"></i>
                            <span>24/7 service</span>
                        </Icons>
                    </IconContainer>
                    <a href="" className="btn">Learn More</a>
                </Content>
            </RowContainer>
        </Container>
    )
}

export default AboutUs
