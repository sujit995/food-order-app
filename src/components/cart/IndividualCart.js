import React from 'react';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/feather/plus';
import { minus } from 'react-icons-kit/feather/minus';
import { auth, fs } from '../../config/Config';

const IndividualCart = ({ cart, cartProductIncrease, cartProductDecrease }) => {
    const handleProductIncrease = () => {
        cartProductIncrease(cart);
    };

    const handleProductDecrease = () => {
        cartProductDecrease(cart);
    };

    const handleCartProductDelete = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                fs.collection('Cart ' + user.uid)
                    .doc(cart.ID)
                    .delete()
                    .then(() => {
                        console.log('Successfully deleted');
                    })
                    .catch((error) => {
                        console.error('Error deleting cart product:', error);
                    });
            }
        });
    };

    return (
        <div className="flex flex-col">
            <div className="w-40 cursor-pointer p-2">
                <img className="h-40 w-full object-cover rounded-lg" src={cart.url} alt="dish" />
            </div>
            <div className="w-40 text-center cursor-pointer">
                <h3 className="py-2 text-lg">{cart.title}</h3>
                <span className="text-green-500 text-base px-4">₹{cart.price}</span>
                <div className="flex flex-row justify-center mt-4">
                    <button aria-label="Decrease quantity" onClick={handleProductDecrease}>
                        <Icon icon={minus} size={20} style={{ cursor: 'pointer' }} />
                    </button>
                    <div className="w-20 text-center bg-aliceblue">{cart.qty}</div>
                    <button aria-label="Increase quantity" onClick={handleProductIncrease}>
                        <Icon icon={plus} size={20} style={{ cursor: 'pointer' }} />
                    </button>
                </div>
                {auth.currentUser && (
                    <button className="text-red-500 mt-2" onClick={handleCartProductDelete}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                )}
            </div>
        </div>
    );
};

export default IndividualCart;
