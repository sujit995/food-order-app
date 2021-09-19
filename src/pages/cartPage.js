import { auth, fs } from '../config/Config';
import React, { useState, useEffect } from 'react'
import CartProducts from '../components/cart/CartProducts';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure(); 

const MainCart = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 4rem;
    margin-bottom: 4rem;
`
const MainHeading = styled.h1`
    text-align: center;
    text-decoration: underline 4px;
`

const ProductCart = styled.div`
    
`

const CartSummary = styled.div`
    width: 20%;
    height: 240px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.3);
`

const TotalProduct = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
`
const TotalPrice = styled.div`
    font-size: 1.5rem;
`
const Heading = styled.h3`
    font-size: 1.5rem;
    margin-top: 1rem;
    text-decoration: underline 4px;
`

const CartPage = () => {

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
        const response = await axios.post('http://localhost:8080/checkout', {
            token,
            cart
        });
        console.log(response);
        let { status } = response.data;
        if (status === "success") {
            history.push('/menu');
            toast.success('Your order has been placed successfully', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        } else {
            alert("something wnt wrong in checkout");
        }
    }

    return (
        <div>
            {
                cartProducts.length > 0 && (
                    <MainCart>
                        <ProductCart>
                            <MainHeading>Your Cart Items</MainHeading>
                            <CartProducts cartProducts={cartProducts}
                                cartProductIncrease={cartProductIncrease}
                                cartProductDecrease={cartProductDecrease}
                            />
                        </ProductCart>
                        <CartSummary>
                            <Heading>Cart Summary</Heading>
                            <TotalProduct>Total no. of products: <span>{totalQty}</span></TotalProduct>
                            <TotalPrice>Total price to Pay: <span>$ {totalPrice}</span></TotalPrice>
                            <StripeCheckout style={{ width: '180px', marginTop: '30px' }}
                                stripeKey="pk_test_51IDLm4CaTlxfMmIEiqlMxh4CuToLCLnBsTpsfRmfvzDIHxjfg8iujPMeuV0Lp5wc2ZPXyyD1Ywcd2RhCqAwqtPeG001vo3aoDL"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                name="All Products"
                                amount={totalPrice * 100}
                            ></StripeCheckout>
                        </CartSummary>
                    </MainCart>
                )
            }
            {
                cartProducts.length < 1 && (
                    <div>Your cart is empty</div>
                )
            }
        </div>
    )
}

export default CartPage

