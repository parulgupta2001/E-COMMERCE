import { Filter } from "../../components/filter/Filter";
import { Products } from "../../components/products/Products";

export function Home() {
  return (
    <div>
      <Filter />
      <Products />
    </div>
  );
}
