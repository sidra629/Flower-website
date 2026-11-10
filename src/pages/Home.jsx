import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  Truck,
  RefreshCw,
  Star,
  ChevronRight,
  ShoppingBag,
  Zap,
  ChevronDown,
  Award,
} from "lucide-react";

export default function Home({
  products = [],
  setActiveTab,
  addToCart,
  setSelectedProduct,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What materials are used in Outlaw Studio apparel?",
      a: "We engineer all gear using high-grade ultra-durable Ripstop fabric and breathable moisture-wicking mesh to ensure extreme durability on downhill trails.",
    },
    {
      q: "How long does global express delivery take?",
      a: "Orders are processed within 24 hours. Express global shipping usually delivers within 3 to 5 business days with full real-time tracking.",
    },
    {
      q: "What is the 30-day return policy?",
      a: "If your gear doesn't fit or meet expectations, return it within 30 days unused with original packaging for a 100% refund or instant exchange.",
    },
  ];

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* 1. HERO SECTION - 4 BOX GRID LAYOUT */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-950 p-6 rounded-3xl border border-zinc-900 shadow-2xl">
          {/* TOP LEFT BOX: Main Title & CTA */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between hover:border-[#f59e0b]/40 transition duration-300">
            <div>
              <span className="text-xs font-black uppercase text-zinc-400 tracking-widest block mb-4">
                OUTLAW STUDIO // EST. 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase leading-none mb-6">
                HIGH-PERFORMANCE <br />
                <span className="text-[#f59e0b]">GEAR & APPAREL</span>
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                Engineered for downhill shredding and urban freeride culture.
                Built to withstand extreme terrain with zero compromise.
              </p>
            </div>
            <div className="pt-8">
              <button
                onClick={() => setActiveTab("shop")}
                className="w-full sm:w-auto bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase px-8 py-4 text-sm flex items-center justify-center space-x-2 transform -skew-x-6 transition shadow-lg shadow-[#f59e0b]/20"
              >
                <span>EXPLORE THE GEAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TOP RIGHT BOX: Hero Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[400px] border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000"
              alt="MTB Extreme Rider"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
              <div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 p-4 rounded-xl w-full flex justify-between items-center">
                <div>
                  <span className="text-[#f59e0b] text-xs font-black uppercase">
                    NEW DROP
                  </span>
                  <h3 className="font-extrabold text-white text-base">
                    Downhill Pro Jersey
                  </h3>
                </div>
                <span className="font-black text-[#f59e0b] text-lg">
                  $129.00
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM LEFT BOX: Visual Feature Image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] border border-zinc-800 group">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=800"
              alt="Trail Action"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
              <span className="bg-[#f59e0b] text-black text-xs font-black uppercase px-4 py-2 transform -skew-x-12 shadow-lg">
                FREERIDE APPROVED
              </span>
            </div>
          </div>

          {/* BOTTOM RIGHT BOX: Brand Mission & Story */}
          <div className="bg-[#f59e0b] text-black rounded-2xl p-8 flex flex-col justify-between hover:bg-[#d97706] transition duration-300">
            <div>
              <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-3 py-1 rounded">
                OUR WORK & VISION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase mt-4 leading-tight">
                Crafted for riders by extreme athletes.
              </h3>
              <p className="text-black/90 text-xs sm:text-sm font-semibold mt-3 leading-relaxed">
                Since our inception, Outlaw Studio has set the standard for
                high-durability apparel, combining ripstop fabric tech with bold
                aesthetic urban freeride designs.
              </p>
            </div>
            <button
              onClick={() => setActiveTab("shop")}
              className="mt-6 font-black uppercase text-sm flex items-center space-x-2 underline hover:opacity-80 transition"
            >
              <span>Discover Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST BRANDING BAR */}
      <section className="bg-zinc-950 border-y border-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-6 h-6 text-[#f59e0b]" />
            <span className="font-bold text-sm tracking-wider uppercase text-zinc-300">
              Ripstop Protection
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Truck className="w-6 h-6 text-[#f59e0b]" />
            <span className="font-bold text-sm tracking-wider uppercase text-zinc-300">
              Express Delivery
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <RefreshCw className="w-6 h-6 text-[#f59e0b]" />
            <span className="font-bold text-sm tracking-wider uppercase text-zinc-300">
              30-Day Returns
            </span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Star className="w-6 h-6 text-[#f59e0b]" />
            <span className="font-bold text-sm tracking-wider uppercase text-zinc-300">
              Rider Approved 5-Star
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase text-white">
              FEATURED <span className="text-[#f59e0b]">COLLECTION</span>
            </h2>
            <p className="text-zinc-400 mt-2 text-sm sm:text-base">
              Tested in extreme terrain by factory riders.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("shop")}
            className="hidden sm:flex items-center space-x-2 text-[#f59e0b] font-bold uppercase hover:underline text-sm"
          >
            <span>View All Gear</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition"
            >
              <div
                className="relative aspect-square overflow-hidden cursor-pointer"
                onClick={() =>
                  setSelectedProduct && setSelectedProduct(product)
                }
              >
                <img
                  src={product.images ? product.images[0] : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#f59e0b] text-black text-xs font-black uppercase px-2 py-0.5 transform -skew-x-6">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-lg mt-1 group-hover:text-[#f59e0b] transition text-white">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xl font-black text-white">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-zinc-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => addToCart && addToCart(product)}
                  className="mt-4 w-full bg-zinc-900 border border-zinc-700 hover:bg-[#f59e0b] hover:text-black text-white font-bold py-2.5 uppercase text-sm transition flex items-center justify-center space-x-2 rounded-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className="py-16 max-w-4xl mx-auto px-4 border-t border-zinc-900">
        <div className="text-center mb-10">
          <span className="text-[#f59e0b] font-black text-xs uppercase tracking-widest">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl font-black italic uppercase mt-1">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left flex justify-between items-center font-bold text-base hover:text-[#f59e0b] transition"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#f59e0b] transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="p-5 pt-0 text-zinc-400 text-sm border-t border-zinc-900 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROMO BANNER */}
      <section className="pb-16 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-[#f59e0b]/40 p-8 sm:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[#f59e0b] font-black uppercase text-xs tracking-widest flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-4 h-4" /> Limited Time Offer
            </span>
            <h3 className="text-2xl sm:text-4xl font-black italic uppercase text-white">
              Get 20% Off Your First Rider Order
            </h3>
            <p className="text-zinc-400 text-sm">
              Use promo code{" "}
              <span className="text-[#f59e0b] font-bold">OUTLAW20</span> at
              checkout.
            </p>
          </div>
          <button
            onClick={() => setActiveTab("shop")}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-black uppercase px-8 py-4 text-base transform -skew-x-6 transition shadow-lg shadow-[#f59e0b]/20 whitespace-nowrap"
          >
            SHOP THE SALE
          </button>
        </div>
      </section>
    </div>
  );
}
