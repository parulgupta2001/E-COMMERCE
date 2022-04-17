import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const { token } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get("/api/user/wishlist").then((response) => {
      setWishlist(response.data.wishlist);
      console.log(response.data.wishlist);
    });
  });

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
}

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
