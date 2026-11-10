import React from "react";
import { ShoppingBag, Lock, Menu } from "lucide-react";

export default function Navbar({
  activeTab,
  setActiveTab,
  cartCount,
  setIsCartOpen,
  setIsAdminOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const tabs = ["home", "shop", "gallery", "team", "promos"];

  return (
    <nav className="sticky top-0 z-40 bg-[#080808]/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => setActiveTab("home")}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-[#f59e0b] flex items-center justify-center font-black text-black transform -skew-x-12 group-hover:scale-105 transition">
            OS
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase italic">
            OUTLAW<span className="text-[#f59e0b]">STUDIO</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-colors py-1 relative ${
                activeTab === tab
                  ? "text-[#f59e0b]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab === "promos" ? "Offers & Deals" : tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f59e0b]" />
              )}
            </button>
          ))}
        </div>

        {/* Actions & Cart */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsAdminOpen(true)}
            className="hidden lg:flex items-center space-x-1 text-xs text-zinc-400 hover:text-[#f59e0b] border border-zinc-800 px-3 py-1.5 rounded transition"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Admin Panel</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-white hover:text-[#f59e0b] transition"
          >
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#f59e0b] text-black text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left uppercase font-bold py-2 px-3 rounded ${
                activeTab === tab
                  ? "bg-[#f59e0b] text-black"
                  : "text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={() => {
              setIsAdminOpen(true);
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left uppercase text-xs font-bold py-2 px-3 text-[#f59e0b]"
          >
            + Admin CMS Portal
          </button>
        </div>
      )}
    </nav>
  );
}
