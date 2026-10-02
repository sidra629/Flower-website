import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import Shop from "./views/Shop";
import ProductDetails from "./views/ProductDetails";
import About from "./views/About";
import Contact from "./views/Contact";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";

import { getCart, addToCart } from "./controllers/cartController";
import { getWishlist, toggleWishlist } from "./controllers/wishlistController";

import "./styles/Global.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCart(getCart());
    setWishlist(getWishlist());
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = addToCart(product);
    setCart(updatedCart);
  };

  const handleWishlist = (id) => {
    const updatedWishlist = toggleWishlist(id);
    setWishlist(updatedWishlist);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              onAddToCart={handleAddToCart}
              onWishlist={handleWishlist}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails onAddToCart={handleAddToCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
