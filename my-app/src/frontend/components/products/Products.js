import "../../../App.css";
import { AiOutlineHeart } from "react-icons/ai";
import "./products.css";
import { useFilter } from "../../contexts/filter-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import axios from "axios";

export function Products() {
  const { categoryData } = useFilter();
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();

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

  return (
    <div className="main">
      {categoryData.map(
        ({ img, _id, name, price, rating, stock, delivery, categoryName }) => (
          <div className="img-card-container">
            <AiOutlineHeart />
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
