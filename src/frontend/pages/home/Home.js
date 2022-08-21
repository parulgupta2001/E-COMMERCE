import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/index";
import { Footer } from "../../components/index";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useFilter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
    })();
  }, []);

  return (
    <div className="home-container">
      <div className="img-category-container">
        <img
          className="landing-page-img"
          src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/sporting-goods_qixhz6.png"
          alt="sports"
        />
        <Link to="/product" className="shop-now-banner">
          Shop Now
        </Link>
        <div className="shop-category-banner">
          You can easily find your products from here 👇
        </div>
        <div className="list-container">
          {categories.map(({ categoryName, url }) => (
            <div
              className="stacked-list-item"
              onClick={() => {
                dispatch({
                  type: "CATEGORY",
                  payload: categoryName,
                });
                navigate("/product");
              }}
            >
              <img className="category-img" src={url} />
              <div className="category-name">{categoryName}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
