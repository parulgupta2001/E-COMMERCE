import axios from "axios";

const addToCart = async (product, setCartItems, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: { authorization: token },
      }
    );
    setCartItems(response.data.cart);
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (id, token, setCartItems) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: { authorization: token },
    });
    setCartItems(response.data.cart);
  } catch (error) {
    console.log(error);
  }
};

const decrement = async (id, qty, token, setCartItems) => {
  if (qty > 1) {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: { authorization: token },
        }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  }
};

const increment = async (id, token, setCartItems) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: { type: "increment" },
      },
      {
        headers: { authorization: token },
      }
    );
    setCartItems(response.data.cart);
  } catch (error) {
    console.log(error);
  }
};

export { addToCart, removeFromCart, increment, decrement };
