import React from 'react'
import IndividualCart from './IndividualCart'

const CartProducts = ({ cartProducts, cartProductIncrease, cartProductDecrease }) => {
    return cartProducts.map((cart) => (
        <IndividualCart key={cart.ID} cart={cart} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} />
    ))
}

export default CartProducts
