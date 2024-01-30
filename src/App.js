import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Menu from './pages/menuPage';
import AboutUs from './pages/aboutPage'
import ContactUs from './pages/contactPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import CartPage from './pages/cartPage';
import AddProducts from './components/dish/AddProducts';
import { Layout } from './Layout';
import { useAuth } from './components/contextapi/AuthContext';


const App = () => {
  const { user } = useAuth();
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AddProducts />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </Layout>
    </div>
  );
}

export default App;