import "./wishlist.css";
import { useWishlist } from "../../contexts/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishlist, setWishlist } = useWishlist();
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: encodedToken },
      });
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist-msg">
          <h3>Your ♡ WISHLIST is empty</h3>
          <button onClick={() => navigate("/")}>Add items</button>
        </div>
      ) : (
        <div className="wishlist-container">
          <div>
            {wishlist.map(
              ({ img, name, price, rating, delivery, stock, _id }) => (
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
                    <button onClick={() => removeFromWishlist(_id)}>
                      REMOVE
                    </button>
                    |<button>ADD TO CART</button>
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
