import React from 'react'
import IndividualDishes from './IndividualDishes'

const Dishes = ({ dishes, addToCart }) => {

    return dishes.map((items) => (
        <IndividualDishes key={items.id} items={items} addToCart={addToCart}/>
    ))
}

export default Dishes
