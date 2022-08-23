import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "../../components/index";
import { AiTwotoneHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useCart, useWishlist, useAuth } from "../../contexts/index";
import { addToCart, addToWishlist, removeFromWishlist } from "../../api-calls";
import "./product-detail.css";
import axios from "axios";

export function ProductDetail() {
  const { productId } = useParams();
  const [detail, setDetail] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { token } = authState;
  const { setCartItems, cartItems } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  useEffect(() => {
    (async () => {
      const response1 = await axios.get(`/api/products/${productId}`);
      setDetail(response1.data.product);
      const response2 = await axios.get(`/api/products`);
      setAllProducts(response2.data.products);

      setRelatedProducts(
        allProducts
          .filter((item) => item.categoryName === detail.categoryName)
          .filter((itemData) => itemData._id !== detail._id)
      );
    })();
  }, [relatedProducts]);

  return (
    <div className="product-detail-page">
      <div className="product-detail-content">
        <img src={detail?.img} alt="product img" />
        <div className="product-detail">
          <h3>{detail?.name}</h3>
          <div className="img-description-rating">{detail?.rating}★</div>
          <div className="about-product-delivery">{detail?.delivery}</div>
          <div className="about-product">{detail?.productDetail}</div>
          <h3>₹{detail?.price}</h3>
          <div className="product-detail-btn">
            {cartItems.find((item) => item._id === detail._id) ? (
              <button
                className="product-detail-cart-btn"
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </button>
            ) : (
              <button
                className="product-detail-cart-btn"
                onClick={() =>
                  token
                    ? addToCart(detail, setCartItems, token)
                    : navigate("/login")
                }
              >
                Add to cart
              </button>
            )}

            {wishlist.find((item) => item._id === detail._id) ? (
              <button
                className="product-detail-wishlist-btn"
                onClick={() => navigate("/wishlist")}
              >
                Go to wishlist
              </button>
            ) : (
              <button
                className="product-detail-wishlist-btn"
                onClick={() =>
                  token
                    ? addToWishlist(detail, setWishlist, token)
                    : navigate("/login")
                }
              >
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      </div>

      <h2 className="similar-products-header">Similar Products</h2>

      <div className="related-products">
        {relatedProducts.map(
          ({
            img,
            _id,
            name,
            price,
            rating,
            stock,
            delivery,
            categoryName,
          }) => (
            <div className="img-card-container" key={_id}>
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
    </div>
  );
}
