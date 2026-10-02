import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../models/products";
import ProductCard from "../components/ProductCard";
import "../styles/Shop.css";

export default function Shop({ onAddToCart, onWishlist, wishlist }) {
  const [searchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "All";

  const [category, setCategory] = useState(categoryFromURL);

  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Roses",
    "Tulips",
    "Lilies",
    "Sunflowers",
    "Mixed",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="shop-page">
      <section className="shop-header">
        <p>OUR FLOWER COLLECTION</p>
        <h1>Shop Flowers</h1>
        <span>Find the perfect flowers for every occasion.</span>
      </section>

      <section className="shop-content">
        <div className="shop-toolbar">
          <div className="categories-filter">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search flowers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-products">
            <h2>No flowers found 🌸</h2>
            <p>Try another search or category.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onWishlist={onWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
