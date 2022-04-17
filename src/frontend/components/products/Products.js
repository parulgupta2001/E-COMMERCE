import "../../../App.css";
import { AiTwotoneHeart } from "react-icons/ai";
import "./products.css";
import { useFilter, useAuth, useCart, useWishlist } from "../../contexts/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Products() {
  const { categoryData } = useFilter();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();
  const { wishlist, setWishlist } = useWishlist();

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

  const addToWishlist = async (product, setWishlist, token) => {
    try {
      const response = await axios.post(
        `/api/user/wishlist`,
        {
          product,
        },
        {
          headers: { authorization: token },
        }
      );
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async (id, setWishlist, token) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: token },
      });
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      {categoryData.map(
        ({ img, _id, name, price, rating, stock, delivery, categoryName }) => (
          <div className="img-card-container">
            {wishlist.find((item) => item._id === _id) ? (
              <AiTwotoneHeart
                className="redColor"
                onClick={() =>
                  token
                    ? removeFromWishlist(_id, setWishlist, token)
                    : navigate("/login")
                }
              />
            ) : (
              <AiTwotoneHeart
                className="greyColor"
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
            <img className="img-container" src={img} alt="product" />
            <div> {name} </div>
            <div>Rs. {price}</div>
            <div> ★{rating} </div>
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
