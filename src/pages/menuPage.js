import React, { useState, useEffect } from 'react'
import Products from '../components/dish/Products';
import { auth, fs } from '../config/Config';
// import styled from 'styled-components';

// const CardWrapper = styled.div`
//     border: 1px solid black;
//     margin-left: 50px ;
//     margin-right: 50px ;
//     display: grid;
//     grid-gap: 3rem;
//     grid-template-columns: repeat(3, 1fr);
//     @media (max-width: 1100px) {
//         grid-template-columns: repeat(2, 1fr);
//         margin-left: 50px ;
//         margin-right: 50px ;
// }
// `

const Menu = (props) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const products = await fs.collection('products').get();
        const productArray = [];
        for (let snap of products.docs) {
            let data = snap.data();
            data.ID = snap.id;
            productArray.push({
                ...data
            })
            if (productArray.length === products.docs.length) {
                setProducts(productArray)
            }
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    let Product;
    const addToCart = (product) => {
        if (uid !== null) {
            Product = product;
            product['qty'] = 1;
            product['TotalProductPrice'] = Product.qty * Product.price;
            fs.collection('Cart ' + uid).doc(product.ID).set(product).then(() => {
                console.log('successfully added to cart');
            })
        } else {
            props.history.push('/signin');
        }
    }

    return (
        <>
            {products.length > 0 && (
                    <>
                        <Products products={products} addToCart={addToCart} />
                    </>
            )}
            {
                products.length < 1 && (
                    <div>Please Wait...</div>
                )
            }
        </>
    )
}

export default Menu


