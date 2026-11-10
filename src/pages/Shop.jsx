import React, { useState } from "react";
import {
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headset,
  ArrowRight,
  Heart,
  SlidersHorizontal,
} from "lucide-react";

export default function Shop({ products = [], addToCart, setSelectedProduct }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Category list with rounded rectangle thumbnails
  const categories = [
    {
      name: "All",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Jerseys",
      img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Pants",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Helmets",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Gloves",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Goggles",
      img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Protection",
      img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Accessories",
      img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400",
    },
  ];

  // 5 Default Products Array
  const defaultProducts = [
    {
      id: 1,
      name: "Apex DH Technical Jersey",
      price: 89.99,
      originalPrice: 109.99,
      badge: "BESTSELLER",
      images: [
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
      ],
      category: "Jerseys",
    },
    {
      id: 2,
      name: "Outlaw Stealth Trail Pants",
      price: 139.99,
      originalPrice: 159.99,
      badge: "HOT",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
      ],
      category: "Pants",
    },
    {
      id: 3,
      name: "Neon Shred Oversized Hoodie",
      price: 95.0,
      badge: "LIMITED EDITION",
      images: [
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
      ],
      category: "Apparel",
    },
    {
      id: 4,
      name: "Pro-Line Carbon DH Helmet",
      price: 299.99,
      originalPrice: 349.99,
      badge: "PRO CHOICE",
      images: [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600",
      ],
      category: "Helmets",
    },
    {
      id: 5,
      name: "Outlaw Freeride Goggles",
      price: 59.99,
      originalPrice: 74.99,
      badge: "NEW DROP",
      images: [
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600",
      ],
      category: "Goggles",
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const filteredProducts =
    selectedCategory === "All"
      ? displayProducts
      : displayProducts.filter(
          (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* 1. TOP HERO PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 pt-6 pb-10">
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="space-y-4">
            <span className="inline-block bg-[#f59e0b] text-black font-black uppercase text-xs px-3 py-1 rounded tracking-widest transform -skew-x-6">
              New Collection 2026
            </span>
            <h1 className="text-4xl sm:text-6xl font-black italic uppercase leading-none tracking-tight">
              ELEVATE YOUR RIDE WITH <br />
              <span className="text-[#f59e0b]">PREMIUM PRODUCTS</span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base max-w-md">
              Discover carefully curated products designed for quality, style,
              and extreme riding comfort.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#product-grid"
                className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase px-6 py-3.5 text-xs sm:text-sm flex items-center space-x-2 transform -skew-x-6 transition shadow-lg shadow-[#f59e0b]/20"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-900 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#f59e0b]" />
                <span>Free Shipping over $150</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#f59e0b]" />
                <span>30-Day Easy Return</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                <span>100% Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Headset className="w-4 h-4 text-[#f59e0b]" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
                alt="Shop Hero Gear"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#f59e0b]/40 p-3 rounded-full text-center">
                <span className="block text-xs text-zinc-400 uppercase font-bold">
                  UP TO
                </span>
                <span className="text-xl font-black text-[#f59e0b]">
                  30% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-black italic uppercase tracking-wider">
            Shop By Category
          </h2>
          <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest">
            {categories.length} Categories
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col items-center cursor-pointer group p-3 rounded-2xl border transition duration-300 ${
                selectedCategory === cat.name
                  ? "bg-zinc-900 border-[#f59e0b]"
                  : "bg-zinc-950 border-zinc-900 hover:border-zinc-800"
              }`}
            >
              <div className="w-full h-24 rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <span
                className={`text-xs font-extrabold mt-3 text-center uppercase tracking-wider ${
                  selectedCategory === cat.name
                    ? "text-[#f59e0b]"
                    : "text-zinc-400 group-hover:text-white"
                }`}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROMO DUAL BANNERS (PROMO 1 FIXED) */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-black text-[#f59e0b] uppercase tracking-widest bg-[#f59e0b]/10 px-2.5 py-1 rounded">
                LIMITED TIME OFFER
              </span>
              <h3 className="text-2xl font-black italic uppercase mt-3 text-white">
                SEASON CLEARANCE SALE IS LIVE!
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                Get up to 40% off on selected riders apparel.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2 text-center">
                <div className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-xs">
                  <span className="font-bold text-[#f59e0b]">02</span>
                  <span className="block text-[9px] text-zinc-500 uppercase">
                    DAYS
                  </span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-xs">
                  <span className="font-bold text-[#f59e0b]">14</span>
                  <span className="block text-[9px] text-zinc-500 uppercase">
                    HRS
                  </span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-xs">
                  <span className="font-bold text-[#f59e0b]">35</span>
                  <span className="block text-[9px] text-zinc-500 uppercase">
                    MIN
                  </span>
                </div>
              </div>
              <button className="bg-[#f59e0b] text-black font-black uppercase text-xs px-4 py-2.5 rounded hover:bg-white transition">
                SHOP SALE
              </button>
            </div>
          </div>

          {/* Banner 2 (Promo 1 Fixed Image) */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-900 min-h-[220px] group">
            <img
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"
              alt="Promo 1"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <span className="text-xs font-bold text-[#f59e0b] uppercase">
                PRO RACE SUITS
              </span>
              <h4 className="text-lg font-black uppercase text-white">
                EXTREME DURABILITY
              </h4>
            </div>
          </div>

          {/* Banner 3 */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-900 min-h-[220px] group">
            <img
              src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800"
              alt="Promo 2"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 flex flex-col justify-end">
              <span className="text-xs font-bold text-[#f59e0b] uppercase">
                NEW ACCESSORIES
              </span>
              <h4 className="text-lg font-black uppercase text-white">
                FREERIDE OPTICS
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAIN PRODUCT GRID (5 ITEMS) */}
      <section
        id="product-grid"
        className="max-w-7xl mx-auto px-4 py-12 border-t border-zinc-900"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black italic uppercase tracking-tight">
              TRENDING <span className="text-[#f59e0b]">ARMORY PRODUCTS</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Showing {filteredProducts.length} items for rider performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-lg text-xs font-bold uppercase text-zinc-300 hover:border-[#f59e0b]">
              <SlidersHorizontal className="w-4 h-4 text-[#f59e0b]" /> FILTER
            </button>
          </div>
        </div>

        {/* 5-Column Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition duration-300 relative"
            >
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 bg-[#f59e0b] text-black text-[10px] font-black uppercase px-2 py-0.5 rounded transform -skew-x-6">
                  {product.badge}
                </span>
              )}

              <button className="absolute top-3 right-3 z-10 bg-zinc-900/80 hover:bg-[#f59e0b] hover:text-black text-zinc-400 p-1.5 rounded-full transition">
                <Heart className="w-3.5 h-3.5" />
              </button>

              <div
                className="relative aspect-square overflow-hidden cursor-pointer bg-zinc-900"
                onClick={() =>
                  setSelectedProduct && setSelectedProduct(product)
                }
              >
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : product.image ||
                        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() =>
                      setSelectedProduct && setSelectedProduct(product)
                    }
                    className="font-bold text-sm text-white group-hover:text-[#f59e0b] transition truncate cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 mt-1 text-amber-400">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-amber-400 stroke-none"
                        />
                      ))}
                    </div>
                    <span className="text-zinc-500 text-[10px] ml-1">(48)</span>
                  </div>

                  <div className="flex items-baseline space-x-2 mt-2">
                    <span className="text-base font-black text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-zinc-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => addToCart && addToCart(product)}
                  className="mt-4 w-full bg-zinc-900 border border-zinc-800 hover:bg-[#f59e0b] hover:text-black text-white text-xs font-extrabold uppercase py-2.5 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER SECTION */}
      <section className="bg-zinc-950 border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-zinc-500 font-extrabold uppercase tracking-widest mb-2">
            TRUSTED BY 10,000+ EXTREME RIDERS WORLDWIDE
          </p>

          <div className="max-w-xl mx-auto mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email for exclusive drops..."
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#f59e0b] flex-1"
            />
            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase px-6 py-3 text-xs rounded-lg transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
