import { Filter, Products, Footer } from "../../components/index";
import "./product-listing.css";

export function ProductListing() {
  return (
    <div className="product-container">
      <Filter />
      <Products />
      <Footer />
    </div>
  );
}
