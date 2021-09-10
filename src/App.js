import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/homePage';
import Menu from './pages/menuPage';
import AboutUs from './pages/aboutPage'
import ContactUs from './pages/contactPage';
import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;