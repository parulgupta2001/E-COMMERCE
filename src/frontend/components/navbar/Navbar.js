import { FcSearch } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "./navbar.css";
import "../../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../contexts/index";

function Navbar() {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();

  function logoutHandler(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    authDispatch({ type: "TOKEN", payload: null });
    navigate("/product");
  }

  function loginHandler() {
    navigate("/login");
  }

  return (
    <nav class="navigation-bar">
      <div className="upper-nav">
        <Link to="/signup">
          <button className="sign-up">Sign up</button>
        </Link>
        {token ? (
          <button className="log-out" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="log-in" onClick={loginHandler}>
            Login
          </button>
        )}
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
          <input type="search" placeholder="Search..."></input>
          <FcSearch />
        </div>
        <div className="page-container">
          <div>
            <Link to={token ? "/wishlist" : "/login"}>
              <AiFillHeart
                className="wishlist"
                style={{ color: "var(--background-color-two)" }}
              />
              <div class="dot-wishlist dot">{token ? wishlist.length : 0}</div>
            </Link>
          </div>
          <div>
            <Link to={token ? "/cart" : "/login"}>
              <FaShoppingCart
                className="shopping-cart"
                style={{ color: "var(--background-color-two)" }}
              />
              <div class="dot-cart dot">{token ? cartItems.length : 0}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
