import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({
  product,
  onAddToCart,
  onWishlist,
  isWishlisted,
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <button
          className={`wishlist ${isWishlisted ? "liked" : ""}`}
          onClick={() => onWishlist(product.id)}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <div className="rating">{"★".repeat(product.rating)}</div>

        <div className="price">
          <strong>Rs. {product.price.toLocaleString()}</strong>

          <del>Rs. {product.oldPrice.toLocaleString()}</del>
        </div>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="details-btn">
            Details
          </Link>

          <button className="add-btn" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
