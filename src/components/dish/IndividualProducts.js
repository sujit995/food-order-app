import React from 'react'

const IndividualProducts = ({ items, addToCart }) => {

    const handleAddToCart = () => {
        addToCart(items);
    }
    return (
        <>
            <div className="bg-white border border-solid border-black border-opacity-40 rounded-md w-[300px]">
                <div className="h-60 w-full p-4 overflow-hidden relative">
                    <img className="h-full w-full object-cover rounded-md" src={items.url} alt="dish" />
                </div>
                <div className="px-8 pt-0 pb-8">
                    <div className="text-green-500 text-lg">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <h3 className='text-black text-xl'>{items.title}</h3>
                    <p className='text-gray-600 text-sm py-1'>{items.description}</p>
                    <button className="inline-block mt-4 text-sm text-white bg-black rounded-md cursor-pointer py-2 px-2.5 no-underline" onClick={handleAddToCart}>Add To Cart</button>
                    <span className='text-green-500 text-4xl ml-4'>₹{items.price}</span>
                </div>
            </div>
        </>
    )
}

export default IndividualProducts;