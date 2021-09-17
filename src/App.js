import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/homePage';
import Menu from './pages/menuPage';
import AboutUs from './pages/aboutPage'
import ContactUs from './pages/contactPage';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { auth, fs } from './config/Config';


import './App.css';
import AddDishes from './components/dish/AddDishes';
import CartPage from './pages/cartPage';


const App = () => {

  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          fs.collection('users').doc(user.uid).get().then(snapshot => {
            setUser(snapshot.data().FullName);
          });
        } else {
          setUser(null)
        }
      })
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/" component={Home} user={user} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin" component={AddDishes} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;