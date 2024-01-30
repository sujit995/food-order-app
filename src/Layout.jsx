import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { auth, fs } from './config/Config';
import { useAuth } from './components/contextapi/AuthContext';

export const Layout = ({children}) => {
    
    const { user } = useAuth();
    
      // state of TotalProducts
      const [totalProducts, setTotalProducts] = useState(0)
      // getting cart products
      useEffect(() => {
        auth.onAuthStateChanged(user => {
          if (user) {
            fs.collection('Cart ' + user.uid).onSnapshot(snapshot => {
              const qty = snapshot.docs.length;
              setTotalProducts(qty);
            })
          }
        })
      }, []);
  return (
    <>
        <Navbar user={user} totalProducts={totalProducts}/>
        <div>
            {children}
        </div>
        <Footer />
    </>
  )
}
