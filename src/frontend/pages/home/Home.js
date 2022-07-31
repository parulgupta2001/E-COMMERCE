import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/index";
import { Footer } from "../../components/index";
import "./home.css";
import "../../../App.css";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useFilter();

  const completeCategories = [
    "active_wear",
    "cricket",
    "football",
    "fitness_accessories",
    "fitness_equipments",
  ];

  return (
    <div className="home-container">
      <div className="img-category-container">
        <img
          className="landing-page-img"
          src="http://res.cloudinary.com/dwhran9qg/image/upload/sports/win_uyiy3s.svg"
          alt="sports"
        />
        <ul className="list-container">
          {completeCategories.map((item) => (
            <li
              className="stacked-list-item"
              onClick={() => {
                dispatch({
                  type: "CATEGORY",
                  payload: item,
                });
                navigate("/product");
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
