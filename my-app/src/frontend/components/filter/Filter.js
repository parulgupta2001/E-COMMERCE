import "./filter.css";
import "../../../App.css";
import { useFilter } from "../../contexts/filter-context";

export function Filter() {
  const { state, dispatch } = useFilter();
  const {
    sortBy,
    ratingFilter,
    deliveryAll,
    inventoryAll,
    categoryAll,
    rangeAll,
  } = state;

  return (
    <aside className="sidebar">
      <div className="sorting">
        <div>SORT BY</div>
        <div>
          <input
            type="radio"
            name="sort"
            onClick={() => dispatch({ type: "SORT", payload: "low_to_high" })}
            checked={sortBy === "low_to_high"}
          ></input>
          <label for="low_to_high">Price - Low to high</label>
        </div>

        <div>
          <input
            type="radio"
            name="sort"
            onClick={() => dispatch({ type: "SORT", payload: "high_to_low" })}
            checked={sortBy === "high_to_low"}
          ></input>
          <label for="high_to_low">Price - High to Low</label>
        </div>

        <div>
          <input
            type="range"
            min="700"
            max="10000"
            name="range"
            value={rangeAll}
            onChange={(e) =>
              dispatch({ type: "RANGE_ALL", payload: e.target.value })
            }
          ></input>
          {rangeAll}
        </div>
      </div>

      <div className="stock_and_delivery">
        <div>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "INVENTORY" })}
            checked={inventoryAll}
          ></input>
          <label for="stock">Only on Stock</label>
        </div>

        <div>
          <input
            type="checkbox"
            onClick={() => dispatch({ type: "DELIVERY" })}
            checked={deliveryAll}
          ></input>
          <label for="delivery">Only Fast Delivery</label>
        </div>
      </div>

      <div className="product_rating">
        <div>RATING</div>
        <div>
          <input
            type="radio"
            name="rating"
            onClick={() =>
              dispatch({ type: "RATING", payload: "four_&_above" })
            }
            checked={ratingFilter === "four_&_above"}
          ></input>
          <label>&#11088;&#11088;&#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            onClick={() =>
              dispatch({ type: "RATING", payload: "three_&_above" })
            }
            checked={ratingFilter === "three_&_above"}
          ></input>
          <label for="three_and_above">&#11088;&#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            onClick={() => dispatch({ type: "RATING", payload: "two_&_above" })}
            checked={ratingFilter === "two_&_above"}
          ></input>
          <label for="two_and_above"> &#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            onClick={() => dispatch({ type: "RATING", payload: "one_&_above" })}
            checked={ratingFilter === "one_&_above"}
          ></input>
          <label for="one_and_above"> &#11088;&up</label>
        </div>
      </div>

      <div>
        <div> CATEGORY</div>

        <div>
          <input
            type="radio"
            name="active wear"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "active_wear" })
            }
            checked={categoryAll === "active_wear"}
          ></input>
          <label for="active_wear">Active Wear</label>
        </div>

        <div>
          <input
            type="radio"
            name="cricket"
            onClick={() => dispatch({ type: "CATEGORY", payload: "cricket" })}
            checked={categoryAll === "cricket"}
          ></input>
          <label for="cricket">Cricket</label>
        </div>

        <div>
          <input
            type="radio"
            name="football"
            onClick={() => dispatch({ type: "CATEGORY", payload: "football" })}
            checked={categoryAll === "football"}
          ></input>
          <label for="football">Football</label>
        </div>

        <div>
          <input
            type="radio"
            name="fitness accessories"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "fitness_accessories" })
            }
            checked={categoryAll === "fitness_accessories"}
          ></input>
          <label for="fitness_accessories">Fitness Accessories</label>
        </div>

        <div>
          <input
            type="radio"
            name="fitness equipments"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "fitness_equipments" })
            }
            checked={categoryAll === "fitness_equipments"}
          ></input>
          <label for="fitness_equipment">Fitness Equipment</label>
        </div>
      </div>
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
      >
        CLEAR ALL
      </button>
    </aside>
  );
}
