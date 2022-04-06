import { Filter } from "../../components/filter/Filter";
import { Products } from "../../components/products/Products";
import "./home.css";

export function Home() {
  return (
    <div className="home-container">
      <Filter />
      <Products />
    </div>
  );
}
