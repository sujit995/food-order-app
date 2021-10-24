import React from 'react'
import { CardBody, CardTitle, Price, QuantityBox, Input, CardWrapper, Button, CardDetails } from './CartElements';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/feather/plus';
import { minus } from 'react-icons-kit/feather/minus';
import { auth, fs } from '../../config/Config';

const IndividualCart = ({ cart, cartProductIncrease, cartProductDecrease }) => {

    const handleProductIncrease = () => {
        cartProductIncrease(cart)
    }

    const handleProductDecrease = () => {
        cartProductDecrease(cart)
    }

    const handleCartProductDelete = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).doc(cart.ID).delete().then(() => {
                    console.log('successfully Delete');
                })
            }
        })
    }


    return (
        <>
                <CardWrapper>
                    <CardBody>
                        <img src={cart.url} alt="dish-image" />
                    </CardBody>
                    <CardDetails>
<<<<<<< HEAD
                        <h3>{cart.title}</h3>
                        <span>₹{cart.price}</span>
=======
                        <CardTitle>{cart.title}</CardTitle>
                        <Price>₹{cart.price}</Price>
>>>>>>> 7fb1e58a6b8ad7f602038d272698c30dea9a738b
                        <QuantityBox>
                            <button><Icon icon={minus} size={20} onClick={handleProductDecrease} style={{cursor: 'pointer'}} /></button>
                            <Input>{cart.qty}</Input>
                            <button><Icon icon={plus} size={20} onClick={handleProductIncrease} style={{cursor: 'pointer'}} /></button>
                        </QuantityBox>
                        <i className="far fa-trash-alt" onClick={handleCartProductDelete}></i>
                    </CardDetails>
                </CardWrapper>
        </>
    )
}

export default IndividualCart
