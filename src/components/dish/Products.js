import React from 'react'
import IndividualProducts from './IndividualProducts'

const Products = ({ products, addToCart }) => {

    return products.map((items) => (
        <IndividualProducts key={items.id} items={items} addToCart={addToCart}/>
    ))
}

export default Products
