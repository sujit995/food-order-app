import { auth, fs } from '../config/Config';
import React, { useState, useEffect } from 'react'
import CartProducts from '../components/cart/CartProducts';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../components/Modal';

import { MainCart, TopHeading, ProductCart, CartSummary, TotalProduct, TotalPrice, CartHeading, Text, Button, EmptyCart } from './StyleElements'
toast.configure();



const CartPage = () => {

    // show modal state
    const [showModal, setShowModal] = useState(false);

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const newCart = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCart);
                })
            }
            else {
                console.log('user is not signed in to review cart')
            }
        })
    }, []);


    // global variable
    let Product;

    // cart product increase functionality
    const cartProductIncrease = (cartProduct) => {
        Product = cartProduct;
        Product.qty = Product.qty + 1;
        Product.TotalProductPrice = Product.qty * Product.price;
        // Updating database
        auth.onAuthStateChanged(user => {
            if (user) {
                fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                    console.log('increase added');
                })
            } else {
                console.log('user is not lodded in to increament')
            }
        })
        console.log(cartProduct);
    }

    // cart product decrease functionality
    const cartProductDecrease = (cartProduct) => {
        Product = cartProduct;
        if (Product.qty > 1) {
            Product.qty = Product.qty - 1;
            Product.TotalProductPrice = Product.qty * Product.price;
            // Updating database
            auth.onAuthStateChanged(user => {
                if (user) {
                    fs.collection('Cart ' + user.uid).doc(cartProduct.ID).update(Product).then(() => {
                        console.log('decrement');
                    })
                } else {
                    console.log('user is not lodded in to decreament')
                }
            })
        }
    }

    // getting the quantity from cartProducts in a separate array
    const qty = cartProducts.map(cartProduct => {
        return cartProduct.qty;
    });

    // reduce the qty in a single value
    const reduceOfQty = (acc, value) => acc + value;
    const totalQty = qty.reduce(reduceOfQty, 0);

    // getting the totalProductPrice from cartProducts in a separate array
    const price = cartProducts.map((cartProduct) => {
        return cartProduct.TotalProductPrice;
    });

    const reduceOfPrice = (acc, currValue) => acc + currValue;
    const totalPrice = price.reduce(reduceOfPrice, 0);
    // console.log(cartProducts);

    // Payment Charging
    const history = useHistory();
    const handleToken = async (token) => {
        const cart = { name: 'All Products', totalPrice }
        const response = await axios.post('https://foodcart-app.herokuapp.com/checkout', {
            token,
            cart
        });
        console.log(response);
        let { status } = response.data;
        if (status === "success") {
            history.push('/menu');
            toast.success('Your order has been placed successfully');

            const uid = auth.currentUser.uid;
            const carts = await fs.collection('Cart ' + uid).get();
            for (var snap of carts.docs) {
                fs.collection('Cart ' + uid).doc(snap.id).delete();
            }

        } else {
            alert("something went wrong in checkout");
        }
    }

    const triggerModal = () => {
        setShowModal(true);
    }

    const hideModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            {
                cartProducts.length > 0 && (
                    <MainCart>
                        <ProductCart>
                            <TopHeading>Your Cart Items</TopHeading>
                            <CartProducts cartProducts={cartProducts}
                                cartProductIncrease={cartProductIncrease}
                                cartProductDecrease={cartProductDecrease}
                            />
                        </ProductCart>
                        <CartSummary>
                            <CartHeading>Cart Summary</CartHeading>
                            <TotalProduct>Total no. of products: <span>{totalQty}</span></TotalProduct>
                            <TotalPrice>Total price to Pay: <span>₹ {totalPrice}</span></TotalPrice>
                            <StripeCheckout style={{ marginTop: '30px' }}
                                stripeKey="pk_test_51IDLm4CaTlxfMmIEiqlMxh4CuToLCLnBsTpsfRmfvzDIHxjfg8iujPMeuV0Lp5wc2ZPXyyD1Ywcd2RhCqAwqtPeG001vo3aoDL"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                name="All Products"
                                amount={totalPrice * 100}
                            ></StripeCheckout>
                            <Text>Or</Text>
                            <Button onClick={() => triggerModal()}>Cah on Delivery</Button>
                        </CartSummary>
                    </MainCart>
                )}
            {cartProducts.length < 1 && (
                <EmptyCart>Your cart is empty</EmptyCart>
            )}
            {showModal === true && (
                <Modal totalPrice={totalPrice} totalQty={totalQty} hideModal={hideModal} />
            )}
        </div>
    )
}

export default CartPage

