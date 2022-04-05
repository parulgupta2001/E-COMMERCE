import "../../../App.css";
import { AiOutlineHeart } from "react-icons/ai";
import "./products.css";
import { useFilter } from "../../contexts/filter-context";

export function Products() {
  const { categoryData } = useFilter();

  return (
    <div className="main">
      {categoryData.map(({ img, _id, name, price, rating }) => (
        <div className="img-card-container">
          <AiOutlineHeart />
          <img className="img-container" src={img} />
          <div> {name} </div>
          <div>Rs. {price}</div>
          <div> ★{rating} </div>
          <div className="btn-container">
            <button className="add-to-cart-btn btn">ADD TO CART</button>
          </div>
        </div>
      ))}
    </div>
  );
}
