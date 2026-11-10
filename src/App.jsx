import React, { useState } from "react";
import {
  INITIAL_PRODUCTS,
  INITIAL_GALLERY,
  INITIAL_TEAM,
} from "./data/mockData";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import AdminModal from "./components/AdminModal";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Promos from "./pages/Promos";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [gallery, setGallery] = useState(INITIAL_GALLERY);
  const [team, setTeam] = useState(INITIAL_TEAM);

  // Interactive UI States
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountRate, setDiscountRate] = useState(0);

  // New Admin Entry States
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    rider: "",
    location: "",
    category: "Downhill",
    imageUrl: "",
  });

  // Cart Handlers
  const addToCart = (product, selectedSize = product.sizes?.[0] || "M") => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === selectedSize,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, size: selectedSize, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  // Cart Calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discountAmount = subtotal * discountRate;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "OUTLAW10") {
      setDiscountRate(0.1);
      alert("10% Promo Code Applied!");
    } else if (promoCode.toUpperCase() === "SHRED20") {
      setDiscountRate(0.2);
      alert("20% Shredder Discount Applied!");
    } else {
      alert("Invalid Promo Code. Try OUTLAW10");
    }
  };

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!newPhoto.imageUrl || !newPhoto.title) return;
    setGallery([{ ...newPhoto, id: Date.now(), likes: 0 }, ...gallery]);
    setNewPhoto({
      title: "",
      rider: "",
      location: "",
      category: "Downhill",
      imageUrl: "",
    });
    alert("New photograph added to live gallery!");
    setIsAdminOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#FF007F] selection:text-white flex flex-col justify-between">
      {/* GLOBAL NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        setIsAdminOpen={setIsAdminOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* DYNAMIC PAGE ROUTING */}
      <main className="flex-grow">
        {activeTab === "home" && (
          <Home
            products={products}
            setActiveTab={setActiveTab}
            addToCart={addToCart}
            setSelectedProduct={setSelectedProduct}
          />
        )}
        {activeTab === "shop" && (
          <Shop
            products={products}
            addToCart={addToCart}
            setSelectedProduct={setSelectedProduct}
          />
        )}
        {activeTab === "gallery" && (
          <Gallery
            gallery={gallery}
            setIsAdminOpen={setIsAdminOpen}
            setActiveImageModal={setActiveImageModal}
          />
        )}
        {activeTab === "team" && <Team team={team} />}
        {activeTab === "promos" && <Promos />}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />

      {/* SHOPPING CART DRAWER */}
      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        applyPromo={applyPromo}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        subtotal={subtotal}
        discountRate={discountRate}
        discountAmount={discountAmount}
        grandTotal={grandTotal}
      />

      {/* ADMIN CMS MODAL */}
      <AdminModal
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        handleAddPhoto={handleAddPhoto}
        newPhoto={newPhoto}
        setNewPhoto={setNewPhoto}
      />
    </div>
  );
}
