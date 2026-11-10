import React from "react";
import { X } from "lucide-react";

export default function CartDrawer({
  isCartOpen,
  setIsCartOpen,
  cart,
  removeFromCart,
  applyPromo,
  promoCode,
  setPromoCode,
  subtotal,
  discountRate,
  discountAmount,
  grandTotal,
}) {
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="relative w-full max-w-md bg-zinc-950 h-full p-6 flex flex-col justify-between z-10 border-l border-zinc-800">
        <div>
          <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
            <h2 className="text-2xl font-black uppercase">
              YOUR <span className="text-[#FF007F]">CART</span>
            </h2>
            <button onClick={() => setIsCartOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4 max-h-[50vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-zinc-500 text-center py-8">
                Your cart is completely empty.
              </p>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-zinc-900 p-3 rounded"
                >
                  <div>
                    <h4 className="font-bold text-sm uppercase">{item.name}</h4>
                    <p className="text-xs text-zinc-400">
                      Size: {item.size} | Qty: {item.quantity}
                    </p>
                    <span className="text-sm font-black text-[#FF007F]">
                      ${item.price * item.quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-zinc-500 hover:text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="border-t border-zinc-800 pt-4">
            <form onSubmit={applyPromo} className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="PROMO CODE"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-white uppercase rounded focus:outline-none focus:border-[#FF007F]"
              />
              <button
                type="submit"
                className="bg-zinc-800 text-xs font-bold px-3 py-2 uppercase hover:bg-[#FF007F] hover:text-black transition"
              >
                Apply
              </button>
            </form>

            <div className="space-y-1 text-xs text-zinc-400 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountRate > 0 && (
                <div className="flex justify-between text-[#FF007F]">
                  <span>Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-zinc-800">
                <span>Total:</span>
                <span className="text-[#FF007F]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => alert("Order Placed Successfully!")}
              className="w-full bg-[#FF007F] text-black font-black uppercase py-3 hover:bg-white transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
