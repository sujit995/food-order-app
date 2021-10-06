import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
width: 350px;
min-height: 450px;
display: inline-block;
flex-direction: column;
border-radius: 19px;
background-color: #fff;
box-shadow: 0 0 8px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
margin-top: 90px;
margin-left: 60px;
@media screen and (max-width: 1024px) {
    margin-left: 110px
}
@media screen and (max-width: 768px) {
    width: 320px;
    margin-left: 45px
}
@media screen and (max-width: 480px) {
    width: 320px;
    margin-left: 45px
}
@media screen and (max-width: 360px) {
    margin-left: 20px
}
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`
const CardImage = styled.img`
    height: 12rem;
    width: 100%;
    object-fit: cover;
`
const CardTitle = styled.h2`
    padding: 1rem;
`
const CardDescription = styled.p`
    padding: 0 1rem;
`
const Price = styled.h3`
    padding: 0 1rem;
`
const Button = styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    margin: 1rem;
    border: none;
    background: #ef5924;
    color: white;
    border-radius: 5px;
`

const IndividualProducts = ({ items, addToCart }) => {

    const handleAddToCart = () => {
        addToCart(items);
    }
    return (
        <CardContainer>
            <CardBody>
                <CardImage src={items.url} alt="dish-image" />
                <CardTitle>{items.title}</CardTitle>
                <CardDescription>{items.description}</CardDescription>
                <Price>₹{items.price}</Price>
            </CardBody>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
        </CardContainer>
    )
}

export default IndividualProducts;