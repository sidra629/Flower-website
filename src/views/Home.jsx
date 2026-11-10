import React from "react";
import { Link, useNavigate } from "react-router-dom";
import categories from "../models/categories";
import products from "../models/products";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

export default function Home({ onAddToCart, onWishlist, wishlist }) {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">BEAUTIFUL FLOWERS FOR EVERY MOMENT</p>

          <h1>
            Let Your
            <br />
            Moments <span>Bloom</span>
          </h1>

          <p>
            Discover fresh, beautiful flowers carefully arranged for your
            special moments.
          </p>

          <Link to="/shop" className="hero-btn">
            Shop Flowers
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <div
              className="category-card"
              key={category.id}
              onClick={() => navigate(`/shop?category=${category.name}`)}
            >
              <img src={category.image} alt={category.name} />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Explore Collection →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <p>OUR BESTSELLERS</p>
          <h2>Featured Flowers</h2>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlist={onWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>

        <div className="center-btn">
          <Link to="/shop" className="outline-btn">
            View All Flowers
          </Link>
        </div>
      </section>

      <section className="banner">
        <div className="banner-content">
          <p>MAKE SOMEONE SMILE</p>

          <h2>
            Flowers Speak
            <br />
            What Words Cannot
          </h2>

          <Link to="/shop" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
