import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/user/cart").then((response) => {
      setCartItems(response.data.cart);
      console.log(response.data.cart);
    });
  });

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
