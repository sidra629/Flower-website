import products from "../models/products";

export const getAllProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

export const getProductsByCategory = (category) => {
  if (category === "All") {
    return products;
  }

  return products.filter((product) => product.category === category);
};

export const searchProducts = (search) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );
};
