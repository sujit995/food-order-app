import React from 'react'
import IndividualCart from './IndividualCart'
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(15, 15, 15, 0.28);
    overflow: hidden;
    @media screen and (max-width: 768px){
        width: 300px;
    }
    @media screen and (max-width: 480px){
        width: 320px;
    }
`;


const CartProducts = ({ cartProducts, cartProductIncrease, cartProductDecrease }) => {
    return cartProducts.map((cart) => (
        <CardContainer>
            <IndividualCart key={cart.ID} cart={cart} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} />
        </CardContainer>
    ))
}

export default CartProducts
