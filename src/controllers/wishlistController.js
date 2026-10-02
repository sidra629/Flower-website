export const getWishlist = () => {
  const savedWishlist = localStorage.getItem("flowerWishlist");

  return savedWishlist ? JSON.parse(savedWishlist) : [];
};

export const toggleWishlist = (id) => {
  let wishlist = getWishlist();

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((item) => item !== id);
  } else {
    wishlist = [...wishlist, id];
  }

  localStorage.setItem("flowerWishlist", JSON.stringify(wishlist));

  return wishlist;
};
