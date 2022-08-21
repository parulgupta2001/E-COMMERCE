import { AiTwotoneHeart } from "react-icons/ai";
import "./products.css";
import { useAuth, useCart, useWishlist, useFilter } from "../../contexts/index";
import { useNavigate, Link } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../api-calls/index";

export function Products() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { categoryData } = useFilter();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  return (
    <div className="main">
      {categoryData.map(
        ({ img, _id, name, price, rating, stock, delivery, categoryName }) => (
          <div className="img-card-container">
            {wishlist.find((item) => item._id === _id) ? (
              <AiTwotoneHeart
                className="red-color heart"
                onClick={() =>
                  token
                    ? removeFromWishlist(_id, setWishlist, token)
                    : navigate("/login")
                }
              />
            ) : (
              <AiTwotoneHeart
                className="grey-color heart"
                onClick={() =>
                  token
                    ? addToWishlist(
                        {
                          img,
                          name,
                          rating,
                          delivery,
                          price,
                          _id,
                        },
                        setWishlist,
                        token
                      )
                    : navigate("/login")
                }
              />
            )}
            <Link to={`/product/${_id}`} className="img-description">
              <img className="img-container" src={img} alt="product" />
              <h4>{name}</h4>
              <div className="img-description-rating">{rating}★</div>
              <h5>{delivery}</h5>
              <div className="card-price">₹{price}</div>
            </Link>
            {cartItems.find((item) => item._id === _id) ? (
              <div className="btn-container">
                <button
                  className="add-to-cart-btn btn"
                  onClick={() => navigate("/cart")}
                >
                  GO TO CART
                </button>
              </div>
            ) : (
              <div className="btn-container">
                <button
                  className="add-to-cart-btn btn"
                  onClick={() => {
                    token
                      ? addToCart(
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
                          token
                        )
                      : navigate("/login");
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}
