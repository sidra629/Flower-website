import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../controllers/productController";
import "../styles/ProductDetails.css";

export default function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/shop">Back To Shop</Link>
      </div>
    );
  }

  return (
    <main className="details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span>{product.category}</span>

          <h1>{product.name}</h1>

          <div className="details-rating">{"★".repeat(product.rating)}</div>

          <div className="details-price">
            Rs. {product.price.toLocaleString()}
            <del>Rs. {product.oldPrice.toLocaleString()}</del>
          </div>

          <p className="details-description">{product.description}</p>

          <div className="delivery-info">
            <p>✓ Fresh flowers</p>
            <p>✓ Same day delivery available</p>
            <p>✓ Beautifully packaged</p>
            <p>✓ Secure checkout</p>
          </div>

          <button
            className="details-add-btn"
            onClick={() => onAddToCart(product)}
          >
            Add To Cart
          </button>

          <Link to="/shop" className="back-shop">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
