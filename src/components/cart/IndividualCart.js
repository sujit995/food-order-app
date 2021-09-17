import React from 'react'
import { CardContainer, CardBody, CardImage, CardTitle, Price, SubHeading, QuantityBox, Input, CardWrapper, Button, CartDetails } from './CartElements';
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
            <CardContainer>
                <CardWrapper>
                    <CardBody>
                        <CardImage src={cart.url} alt="dish-image" />
                    </CardBody>
                    <div>
                        <CardTitle>{cart.title}</CardTitle>
                        <Price>${cart.price}</Price>
                        <QuantityBox>
                            <button><Icon icon={minus} size={30} onClick={handleProductIncrease} /></button>
                            <Input>{cart.qty}</Input>
                            <button><Icon icon={plus} size={30} onClick={handleProductDecrease} /></button>
                        </QuantityBox>
                        <Button onClick={handleCartProductDelete}>Delete</Button>
                    </div>
                </CardWrapper>
            </CardContainer>
        </>
    )
}

export default IndividualCart
