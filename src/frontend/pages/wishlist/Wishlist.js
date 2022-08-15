import "./wishlist.css";
import { useWishlist, useCart } from "../../contexts/index";
import {
  addToCart,
  removeFromWishlist,
  removeFromCart,
} from "../../api-calls/index";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishlist, setWishlist } = useWishlist();
  const { setCartItems, cartItems } = useCart();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist-msg">
          <h3>Your ♡ WISHLIST is empty</h3>
          <button onClick={() => navigate("/product")}>Add items</button>
        </div>
      ) : (
        <div className="wishlist-container">
          <div>
            {wishlist.map(
              ({
                img,
                name,
                price,
                rating,
                delivery,
                stock,
                _id,
                categoryName,
              }) => (
                <div className="wishlist-main-content">
                  <div className="wishlist-main-content-middle">
                    <div>
                      <img
                        className="wishlist-img-container"
                        src={img}
                        alt="product"
                      />
                    </div>
                    <div className="img-description">
                      <div> {name} </div>
                      <div> Rs {price} </div>
                      <div>★{rating}</div>
                      <div>{delivery}</div>
                      <div>{stock}</div>
                    </div>
                  </div>
                  <div className="wishlist-main-content-bottom">
                    <button
                      onClick={() =>
                        removeFromWishlist(_id, setWishlist, encodedToken)
                      }
                    >
                      REMOVE
                    </button>
                    |
                    {cartItems.some((item) => item._id === _id) ? (
                      <button
                        onClick={() => {
                          removeFromCart(_id, encodedToken, setCartItems);
                          addToCart(
                            {
                              img,
                              name,
                              rating,
                              _id,
                              price,
                              stock,
                              delivery,
                              categoryName,
                            },
                            setCartItems,
                            encodedToken
                          );
                          removeFromWishlist(_id);
                        }}
                      >
                        ADD TO CART
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          addToCart(
                            {
                              img,
                              name,
                              rating,
                              _id,
                              price,
                              stock,
                              delivery,
                              categoryName,
                            },
                            setCartItems,
                            encodedToken
                          );
                          removeFromWishlist(_id, setWishlist, encodedToken);
                        }}
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export { Wishlist };
