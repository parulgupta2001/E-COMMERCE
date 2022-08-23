import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import "./navbar.css";
import "../../../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist, useFilter } from "../../contexts/index";

function Navbar() {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { categoryData } = useFilter();
  const [searchProduct, setSearchProduct] = useState("");

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    authDispatch({ type: "TOKEN", payload: null });

    localStorage.removeItem("user");
    authDispatch({ type: "USER", payload: null });
    toast.success("Logout Successful");
    navigate("/");
  }

  function loginHandler() {
    navigate("/login");
  }

  function search(input, categoryData) {
    if (input.trim().length === 0) {
      return null;
    } else {
      return categoryData.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
    }
  }

  return (
    <nav className="navigation-bar">
      <div className="upper-nav">
        <FaUserAlt
          title="Profile"
          className="profile-icon"
          onClick={() => navigate("/profile")}
        />
        {token ? (
          <div className="log-out" onClick={logoutHandler}>
            <BiLogOut className="log-out-icon" />
            <div>Logout</div>
          </div>
        ) : (
          <div className="log-in" onClick={loginHandler}>
            <BiLogIn className="log-in-icon" />
            <div>Login</div>
          </div>
        )}
        <div className="new-account" onClick={() => navigate("/signup")}>
          Create Account
        </div>
      </div>
      <div className="main-nav">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img
            className="logo"
            src="http://res.cloudinary.com/dwhran9qg/image/upload/sports/sports_k7rwkw.jpg"
            alt="sports"
          />
          SportsTown
        </div>
        <div className="search-bar">
          <div>
            <input
              type="search"
              placeholder="Search..."
              onChange={(e) =>
                setSearchProduct(search(e.target.value, categoryData))
              }
            />
            <AiOutlineSearch className=" product-search-icon" />
          </div>
          {searchProduct &&
            searchProduct.map(({ name, _id }) => (
              <span
                key={_id}
                className="search-products"
                onClick={() => {
                  navigate(`/product/${_id}`);
                  setSearchProduct(search(""));
                }}
              >
                {name}
              </span>
            ))}
        </div>

        <div className="page-container">
          <div>
            <Link to={token ? "/wishlist" : "/login"}>
              <AiFillHeart
                className="wishlist"
                style={{ color: "var(--background-color-two)" }}
              />
              <div className="dot-wishlist dot">
                {token ? wishlist.length : 0}
              </div>
            </Link>
          </div>
          <div>
            <Link to={token ? "/cart" : "/login"}>
              <FaShoppingCart
                className="shopping-cart"
                style={{ color: "var(--background-color-two)" }}
              />
              <div className="dot-cart dot">{token ? cartItems.length : 0}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
