import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useAuth } from "./index";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const response = await axios.get(`/api/user/cart`, {
            headers: { authorization: token },
          });
          if (response.status === 200) {
            setCartItems(response.data.cart);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setCartItems([]);
    }
  }, [token]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
