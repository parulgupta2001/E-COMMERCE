import { Filter, Products } from "../../components/index";
import { useFilter } from "../../contexts/index";
import "./product-listing.css";

export function ProductListing() {
  const { categoryData } = useFilter();

  return (
    <div className="product-container">
      <Filter />
      <Products />
    </div>
  );
}
