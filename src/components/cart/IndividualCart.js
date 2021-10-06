import React from 'react'
import { CardBody, CardImage, CardTitle, Price, QuantityBox, Input, CardWrapper, Button, CardDetails } from './CartElements';
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
                        <CardImage src={cart.url} alt="dish-image" />
                    </CardBody>
                    <CardDetails>
                        <CardTitle>{cart.title}</CardTitle>
                        <Price>₹{cart.price}</Price>
                        <QuantityBox>
                            <button><Icon icon={minus} size={20} onClick={handleProductDecrease} style={{cursor: 'pointer'}} /></button>
                            <Input>{cart.qty}</Input>
                            <button><Icon icon={plus} size={20} onClick={handleProductIncrease} style={{cursor: 'pointer'}} /></button>
                        </QuantityBox>
                        <Button onClick={handleCartProductDelete}>Delete</Button>
                    </CardDetails>
                </CardWrapper>
        </>
    )
}

export default IndividualCart
