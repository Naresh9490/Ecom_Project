import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Checkout from "./Checkout";

const Navigation = () => {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default Navigation;
