import { Filter, Products, Footer } from "../../components/index";
import "./home.css";

export function Home() {
  return (
    <div className="home-container">
      <Filter />
      <Products />
      <Footer />
    </div>
  );
}
