import React, { useState } from "react";

export default function Gallery({ gallery = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Aapki website ki MTB Action Images
  const defaultGallery = [
    {
      id: "d1",
      title: "Whistler Blackcomb Gap Jump",
      category: "Downhill",
      imageUrl:
        "https://images.unsplash.com/photo-1642970047633-a8ef4f05edeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: "d2",
      title: "Urban Freeride Drop",
      category: "Freeride",
      imageUrl:
        "https://images.unsplash.com/photo-1745860794865-6ac4709fea6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: "d3",
      title: "Beautiful Heart Flowers",
      category: "Enduro",
      imageUrl:
        "https://images.unsplash.com/photo-1561690670-44ff9a440ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
      id: "d4",
      title: "Midnight Slope Jump",
      category: "SlopeStyle",
      imageUrl:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d5",
      title: "Forest Canopy Line",
      category: "Trail",
      imageUrl:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d6",
      title: "Extreme Rock Section",
      category: "Downhill",
      imageUrl:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d7",
      title: "Speed & Dust Drift",
      category: "Enduro",
      imageUrl:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d8",
      title: "Sunset Gap Jump",
      category: "Freeride",
      imageUrl:
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d9",
      title: "Mountain Ridge Descent",
      category: "Downhill",
      imageUrl:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d10",
      title: "Pro Jump Session",
      category: "SlopeStyle",
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d11",
      title: "Muddy Track Battle",
      category: "Trail",
      imageUrl:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "d12",
      title: "High Altitude Berm",
      category: "Enduro",
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const displayGallery = gallery.length > 0 ? gallery : defaultGallery;

  // Upar wale aur neechay wale sections ki images ko mukhtalif (different) rakhne ke liye logic
  const topFeaturedShots = displayGallery.slice(0, 4);
  const bottomExploreShots = displayGallery.slice(4);

  // Aapki website ki tags/categories
  const categories = [
    "All",
    "Downhill",
    "Freeride",
    "Enduro",
    "SlopeStyle",
    "Trail",
  ];

  const filteredGallery =
    activeCategory === "All"
      ? bottomExploreShots
      : bottomExploreShots.filter(
          (item) =>
            item.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* 1. HERO SECTION (MTB Background) */}
      <section
        className="relative bg-cover bg-center pt-24 pb-20 px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&q=80&w=1920')",
        }}
      >
        {/* Background Overlay Darkener */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Top Right Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
          <button className="bg-[#f59e0b] hover:bg-[#d97706] text-black text-xs font-bold py-1.5 px-4 rounded-full transition">
            Download for Mac
          </button>
          <button className="bg-[#f59e0b] hover:bg-[#d97706] text-black text-xs font-bold py-1.5 px-4 rounded-full transition">
            Download for Win
          </button>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 uppercase">
            MTB Action Gallery
          </h1>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            High-octane moments captured from our international riders around
            the globe. Explore the best mountain biking shots, fully responsive
            and categorized for your experience.
          </p>
        </div>
      </section>

      {/* 2. GALLERIES WITH CAPTIONS (Top Section) */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-black text-center text-gray-800 mb-10">
          Featured Action Shots...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {topFeaturedShots.map((photo, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer rounded shadow-md"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Asli Caption Overlay (tasweer ka title) */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2.5 font-semibold truncate">
                {photo.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. GALLERIES WITH TAGS (Bottom Section) */}
      <section className="py-10 max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-black text-center text-gray-800 mb-8">
          ...and explore by riding style
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-1.5 rounded-full text-sm font-semibold transition border ${
                activeCategory === cat
                  ? "bg-[#38b6ff] text-white border-[#38b6ff] shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:border-[#38b6ff] hover:text-[#38b6ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Grid (No Captions, filterable by tags) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {filteredGallery.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded shadow-sm cursor-pointer"
            >
              <img
                src={photo.imageUrl}
                alt={photo.category}
                className="w-full h-48 object-cover hover:opacity-80 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
