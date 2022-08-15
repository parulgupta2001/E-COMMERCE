import axios from "axios";

const addToWishlist = async (product, setWishlist, token) => {
  try {
    const response = await axios.post(
      `/api/user/wishlist`,
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
    setWishlist(response.data.wishlist);
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlist = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    setWishlist(response.data.wishlist);
  } catch (error) {
    console.log(error);
  }
};

export { addToWishlist, removeFromWishlist };
