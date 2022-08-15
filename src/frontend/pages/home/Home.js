import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/index";
import { Footer } from "../../components/index";
import { Link } from "react-router-dom";
import "./home.css";
import "../../../App.css";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useFilter();

  const completeCategories = [
    {
      name: "active_wear",
      url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/download_gofghi.jpg",
    },
    {
      name: "cricket",
      url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/istockphoto-497200319-612x612_k32vj0.jpg",
    },
    {
      name: "football",
      url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/png-clipart-fifa-15-fifa-18-fifa-street-4-fc-barcelona-2014-fifa-world-cup-messi-tshirt-sport-thumbnail_xfcmnp.png",
    },
    {
      name: "fitness_accessories",
      url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/istockphoto-1176741157-612x612_fs3wiz.jpg",
    },
    {
      name: "fitness_equipments",
      url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/25-254513_running-on-treadmill-png_eknbdt.jpg",
    },
  ];

  return (
    <div className="home-container">
      <div className="img-category-container">
        <img
          className="landing-page-img"
          src="http://res.cloudinary.com/dwhran9qg/image/upload/Image/sporting-goods_qixhz6.png"
          alt="sports"
        />
        <Link to="/product" className="shop_now_banner">
          Shop Now
        </Link>
        <div className="shop_category_banner">
          You can easily find your products from here 👇
        </div>
        <div className="list-container">
          {completeCategories.map(({ name, url }) => (
            <div
              className="stacked-list-item"
              onClick={() => {
                dispatch({
                  type: "CATEGORY",
                  payload: name,
                });
                navigate("/product");
              }}
            >
              <div className="category_name">{name}</div>
              <img className="category_img" src={url} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
