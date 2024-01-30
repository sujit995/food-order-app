import React from 'react'
import IndividualProducts from './IndividualProducts'


const Products = ({ products, addToCart }) => {

    return(
        <div className='grid grid-cols-4 gap-4'>
            {
                 products.map((items) => (
                    <IndividualProducts key={items.id} items={items} addToCart={addToCart} />
            ))
            }
        </div>
    )
    
}

export default Products
