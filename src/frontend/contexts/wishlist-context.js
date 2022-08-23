import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./index";

const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const { authState } = useAuth();
  const { token } = authState;
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: { authorization: token },
          });
          setWishlist(response.data.wishlist);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setWishlist([]);
    }
  }, [token]);

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
}

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
