import "./cart.css";
import { useCart, useWishlist } from "../../contexts/index";
import { toast } from "react-toastify";
import {
  removeFromCart,
  addToWishlist,
  increment,
  decrement,
  loadScript,
} from "../../api-calls/index";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const totalPrice = cartItems.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const totalCartItems = cartItems.reduce(
    (acc, current) => acc + current.qty,
    0
  );

  async function displayRazorpay(e) {
    e.preventDefault();
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_XZwY6inMCr4v8H",
      currency: "INR",
      amount: (totalPrice - 80) * 100,
      name: "SportsTown",
      description: "Thank you for trusting us",
      image: "",
      handler: async (response) => {
        const { razorpay_payment_id } = await response;
        const orderData = {
          orderAmount: totalPrice,
          razorpayId: razorpay_payment_id,
        };
        toast.success("Order Placed Successfully");
        navigate("/");
        setCartItems([]);
      },
      prefill: {
        name: "SportsTown",
        email: "payments@SportsTown.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {});
    paymentObject.open();
  }

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="empty-container">
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/undraw_empty_cart_co35_1_g7r5qy.svg"
            className="cart-empty-container-img"
          />
          <div className="empty-container-msg">
            <h2>Your SportsTown Basket is empty</h2>
            <h3 onClick={() => navigate("/product")}>Add Products</h3>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <div>
            {cartItems.map(
              ({ img, name, price, rating, delivery, qty, _id }) => (
                <div className="main-content" key={_id}>
                  <div className="main-content-middle">
                    <div>
                      <img
                        className="main-content-img"
                        src={img}
                        alt="product"
                      />
                      <div className="quantity-manager">
                        <div
                          className="counter-changer"
                          onClick={() =>
                            decrement(_id, qty, encodedToken, setCartItems)
                          }
                        >
                          -
                        </div>
                        <div>{qty}</div>
                        <div
                          className="counter-changer"
                          onClick={() =>
                            increment(_id, encodedToken, setCartItems)
                          }
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="img-description">
                      <h3>{name}</h3>
                      <div className="img-description-rating">★{rating}</div>
                      <h4>{delivery}</h4>
                      <div className="card-price">₹{price} </div>
                    </div>
                  </div>
                  <div className="main-content-bottom">
                    <button
                      onClick={() =>
                        removeFromCart(_id, encodedToken, setCartItems)
                      }
                    >
                      Remove
                    </button>
                    |
                    {wishlist.some((item) => item._id === _id) ? (
                      <button
                        onClick={() => {
                          removeFromCart(_id, encodedToken, setCartItems);
                        }}
                      >
                        Move To Wishlist
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          addToWishlist(
                            {
                              img,
                              name,
                              rating,
                              _id,
                              price,
                              delivery,
                            },
                            setWishlist,
                            encodedToken
                          );
                          removeFromCart(_id, encodedToken, setCartItems);
                        }}
                      >
                        Move To Wishlist
                      </button>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="cart-price-content">
            <div className="cart-price-content-upper">
              <h4>Price Details ({totalCartItems} items)</h4>
            </div>
            <div className="cart-price-content-middle">
              <div className="item-label">
                <div>Price</div>
                <div>Coupon for you</div>
                <div>Delivery Charges</div>
              </div>
              <div className="item-label">
                <div>₹{totalPrice}</div>
                <div>₹80</div>
                <div>FREE</div>
              </div>
            </div>
            <div className="cart-price-content-bottom">
              <div className="total-amount">
                <h3>Total Amount</h3>
                <h3>₹{totalPrice - 80}</h3>
              </div>
              {pathname === "/cart/checkout" && (
                <div>
                  <button className="place-order-btn" onClick={displayRazorpay}>
                    Place order
                  </button>
                  <Outlet />
                </div>
              )}

              {pathname === "/cart" && (
                <button
                  className="place-order-btn"
                  onClick={() => navigate("/deliveryAddress")}
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Cart };
