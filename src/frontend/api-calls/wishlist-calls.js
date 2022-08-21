import axios from "axios";
import { toast } from "react-toastify";

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
    toast.success("Added To Wishlist");
  } catch (err) {
    toast.error("Error. Unable to add to wishlist");
  }
};

const removeFromWishlist = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: { authorization: token },
    });
    setWishlist(response.data.wishlist);
    toast.success("Removed From Wishlist");
  } catch (err) {
    toast.error("Error. Unable to remove from wishlist");
  }
};

export { addToWishlist, removeFromWishlist };
