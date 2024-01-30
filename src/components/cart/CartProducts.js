import React from 'react'
import IndividualCart from './IndividualCart'


const CartProducts = ({ cartProducts, cartProductIncrease, cartProductDecrease }) => {
    return(
        <div className='grid grid-cols-4 gap-3'>
            {
                cartProducts.map((cart) => (
                    <div className="w-full flex flex-row m-20 rounded-19 bg-white shadow-md overflow-hidden">
                        <IndividualCart key={cart.ID} cart={cart} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} />
                    </div>
                ))
            }
        </div>
    )
}

export default CartProducts
