import React, { useState, useEffect } from 'react';
import Products from '../components/dish/Products';
import { auth, fs } from '../config/Config';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

const Menu = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [uid, setUid] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            if (user) {
                setUid(user.uid);
            }
        });

        const unsubscribeProducts = onSnapshot(collection(fs, 'products'), snapshot => {
            const productArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                ID: doc.id
            }));
            setProducts(productArray);
        });

        return () => {
            unsubscribeAuth();
            unsubscribeProducts();
        };
    }, []);

    const addToCart = (product) => {
        if (uid !== null) {
            const productWithQty = {
                ...product,
                qty: 1,
                TotalProductPrice: product.qty * product.price
            };

            fs.collection(`Cart ${uid}`).doc(product.ID)
                .set(productWithQty)
                .then(() => {
                    console.log('Successfully added to cart');
                })
                .catch(error => {
                    console.error('Error adding to cart:', error);
                });
        } else {
            navigate('/signin');
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='justify-center items-center align-middle mx-auto text-center'>
            <h3 className='text-green-700 font-semibold text-[30px]'>Our Dishes</h3>
            <h1 className='text-customBlue font-semibold text-[50px]'>Popular Dishes</h1>
            </div>
            <div className='mx-10 my-10'>
            {products.length > 0 ? (
                <Products products={products} addToCart={addToCart} />
            ) : (
                <div>Please Wait...</div>
            )}
            </div>
        </div>
    );
};

export default Menu;
