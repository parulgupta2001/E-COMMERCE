import "./cart.css";
import { useCart } from "../../contexts/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useCart();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const totalCartItems = cartItems.reduce(
    (acc, current) => acc + current.qty,
    0
  );

  const decrement = async (id, qty) => {
    if (qty > 1) {
      try {
        const response = await axios.post(
          `/api/user/cart/${id}`,
          {
            action: { type: "decrement" },
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        setCartItems(response.data.cart);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const increment = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: encodedToken },
      });
      setCartItems(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart-msg">
          <h3>Your SportsTown Basket is empty</h3>
          <button onClick={() => navigate("/")}>Add items</button>
        </div>
      ) : (
        <div className="cart-container">
          <div>
            {cartItems.map(
              ({ img, name, price, rating, delivery, qty, _id }) => (
                <div className="cart-main-content">
                  <div className="cart-main-content-middle">
                    <div>
                      <img
                        className="cart-img-container"
                        src={img}
                        alt="product"
                      />
                      <div className="quantity-manager">
                        <div
                          className="counter-changer"
                          onClick={() => decrement(_id, qty)}
                        >
                          -
                        </div>
                        <input type="number" value={qty} className="counter" />
                        <div
                          className="counter-changer"
                          onClick={() => increment(_id)}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="img-description">
                      <div> {name} </div>
                      <div> Rs {price} </div>
                      <div>★{rating}</div>
                      <div>{delivery}</div>
                    </div>
                  </div>
                  <div className="cart-main-content-bottom">
                    <button onClick={() => removeFromCart(_id)}>REMOVE</button>{" "}
                    |<button>MOVE TO WISHLIST</button>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="cart-price-content">
            <div className="cart-price-content-upper">
              <div>PRICE DETAILS ({totalCartItems} items)</div>
            </div>
            <div className="cart-price-content-middle">
              <div className="item-label">
                <div>Price</div>
                <div>Coupons for you</div>
                <div>Delivery Charges</div>
              </div>
              <div className="item-label">
                <div> Rs{totalPrice}</div>
                <div>- Rs 50</div>
                <div> Rs 40</div>
              </div>
            </div>
            <div className="cart-price-content-bottom">
              <div>Total Amount</div>
              <div>Rs{totalPrice - 10}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Cart };
