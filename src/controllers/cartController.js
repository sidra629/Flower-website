export const getCart = () => {
  const savedCart = localStorage.getItem("flowerCart");

  return savedCart ? JSON.parse(savedCart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem("flowerCart", JSON.stringify(cart));
};

export const addToCart = (product) => {
  const cart = getCart();

  const existingProduct = cart.find((item) => item.id === product.id);

  let updatedCart;

  if (existingProduct) {
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  } else {
    updatedCart = [
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ];
  }

  saveCart(updatedCart);

  return updatedCart;
};

export const removeFromCart = (id) => {
  const cart = getCart();

  const updatedCart = cart.filter((item) => item.id !== id);

  saveCart(updatedCart);

  return updatedCart;
};

export const updateQuantity = (id, quantity) => {
  const cart = getCart();

  const updatedCart = cart.map((item) =>
    item.id === id
      ? {
          ...item,
          quantity: Math.max(1, quantity),
        }
      : item,
  );

  saveCart(updatedCart);

  return updatedCart;
};

export const getCartTotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};
