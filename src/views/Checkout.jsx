import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCartTotal } from "../controllers/cartController";
import "../styles/Checkout.css";

export default function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = getCartTotal(cart);
  const delivery = 200;
  const total = subtotal + delivery;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    localStorage.removeItem("flowerCart");

    setCart([]);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="checkout-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/shop">Go To Shop</Link>
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="order-success">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with BloomHaven. Your flowers will be prepared
          with care.
        </p>

        <button onClick={() => navigate("/")}>Back To Home</button>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <p>SECURE CHECKOUT</p>
        <h1>Complete Your Order</h1>
      </div>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Complete Address"
            value={form.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <h2>Payment Method</h2>

          <div className="payment-option">
            <input type="radio" checked readOnly />

            <span>Cash on Delivery</span>
          </div>

          <button type="submit">Place Order</button>
        </form>

        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                Rs. {(item.price * item.quantity).toLocaleString()}
              </strong>
            </div>
          ))}

          <hr />

          <div className="checkout-row">
            <span>Subtotal</span>
            <strong>Rs. {subtotal.toLocaleString()}</strong>
          </div>

          <div className="checkout-row">
            <span>Delivery</span>
            <strong>Rs. {delivery}</strong>
          </div>

          <div className="checkout-total">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString()}</strong>
          </div>
        </div>
      </div>
    </main>
  );
}
