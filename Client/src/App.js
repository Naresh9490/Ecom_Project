import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path ="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
  
    <Footer/>
    </>
  );
}

export default App;
