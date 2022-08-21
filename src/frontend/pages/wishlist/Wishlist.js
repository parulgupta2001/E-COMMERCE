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
        <div className="empty-container">
          <img
            src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/No_data-cuate_nqnpdu.svg"
            className="wishlist-empty-container-img"
          />
          <div className="empty-container-msg">
            <h2>Your Wishlist❤️ is empty</h2>
            <h3 onClick={() => navigate("/product")}>Add Products</h3>
          </div>
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
                <div className="main-content">
                  <div className="main-content-middle">
                    <div>
                      <img
                        className="main-content-img"
                        src={img}
                        alt="product"
                      />
                    </div>
                    <div className="img-description">
                      <h3>{name}</h3>
                      <div className="img-description-rating">★{rating}</div>
                      <h4>{delivery}</h4>
                      <div className="card-price">₹{price} </div>
                    </div>
                  </div>
                  <div className="main-content-bottom wishlist-card-bottom">
                    <button
                      onClick={() =>
                        removeFromWishlist(_id, setWishlist, encodedToken)
                      }
                    >
                      Remove
                    </button>
                    |
                    {cartItems.some((item) => item._id === _id) ? (
                      <button
                        onClick={() => {
                          removeFromWishlist(_id, setWishlist, encodedToken);
                        }}
                      >
                        Add to Cart
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
                        Add To Cart
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
