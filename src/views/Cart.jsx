import React from "react";
import { Link } from "react-router-dom";
import {
  getCartTotal,
  removeFromCart,
  updateQuantity,
} from "../controllers/cartController";
import "../styles/Cart.css";

export default function Cart({ cart, setCart }) {
  const increaseQuantity = (id, quantity) => {
    const updatedCart = updateQuantity(id, quantity + 1);

    setCart(updatedCart);
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) return;

    const updatedCart = updateQuantity(id, quantity - 1);

    setCart(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = removeFromCart(id);

    setCart(updatedCart);
  };

  const subtotal = getCartTotal(cart);

  const delivery = subtotal > 0 ? 200 : 0;

  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <div className="empty-cart-icon">🛒</div>

        <h1>Your Cart Is Empty</h1>

        <p>Looks like you haven't added any flowers yet.</p>

        <Link to="/shop" className="shop-now-btn">
          Start Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p>YOUR SHOPPING BAG</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <span>{item.category}</span>

                <h3>{item.name}</h3>

                <strong>Rs. {item.price.toLocaleString()}</strong>

                <div className="quantity">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.quantity)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id, item.quantity)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-item-right">
                <strong>
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>Rs. {subtotal.toLocaleString()}</strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>Rs. {delivery.toLocaleString()}</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed To Checkout
          </Link>

          <Link to="/shop" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
