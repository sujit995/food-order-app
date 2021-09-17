import { auth, fs } from '../config/Config';
import React, { useState, useEffect } from 'react'
import CartProducts from '../components/cart/CartProducts';
import StripeCheckout from 'react-stripe-checkout';

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
        Product.TotalProdutPrice = Product.qty * Product.price;
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
    }

    // cart product decrease functionality
    const cartProductDecrease = (cartProduct) => {
        Product = cartProduct;
        if (Product.qty > 1) {
            Product.qty = Product.qty - 1;
            Product.TotalProdutPrice = Product.qty * Product.price;
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
        return cartProduct.TotalDishPrice;
    })
    const reduceOfPrice = (acc, currValue) => acc + currValue;
    const totalPrice = price.reduce(reduceOfPrice, 0);
    // console.log(cartProducts);

    return (
        <div>
            {
                cartProducts.length > 0 && (
                    <div>
                        <h1>Cart</h1>
                        <div>
                            <CartProducts cartProducts={cartProducts}
                                cartProductIncrease={cartProductIncrease}
                                cartProductDecrease={cartProductDecrease}
                            />
                        </div>
                        <div>
                            <h5>Cart Summary</h5>
                            <div>Total no. of products: <span>{totalQty}</span></div>
                            <div>Total price to Pay: <span>$ {totalPrice}</span></div>
                            <StripeCheckout></StripeCheckout>
                        </div>
                    </div>
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

