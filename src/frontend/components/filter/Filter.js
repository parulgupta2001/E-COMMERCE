import "./filter.css";
import "../../../App.css";
import { useFilter } from "../../contexts/index";

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
        <div className="filter_header">Sort By</div>
        <div>
          <input
            type="radio"
            name="sort"
            className="filter-input"
            onClick={() => dispatch({ type: "SORT", payload: "low_to_high" })}
            checked={sortBy === "low_to_high"}
          ></input>
          <label for="low_to_high">Price - Low to high</label>
        </div>

        <div>
          <input
            type="radio"
            name="sort"
            className="filter-input"
            onClick={() => dispatch({ type: "SORT", payload: "high_to_low" })}
            checked={sortBy === "high_to_low"}
          ></input>
          <label for="high_to_low">Price - High to Low</label>
        </div>

        <div>
          <input
            type="range"
            className="filter-input"
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
            className="filter-input"
            onClick={() => dispatch({ type: "INVENTORY" })}
            checked={inventoryAll}
          ></input>
          <label for="stock">Only on Stock</label>
        </div>

        <div>
          <input
            type="checkbox"
            className="filter-input"
            onClick={() => dispatch({ type: "DELIVERY" })}
            checked={deliveryAll}
          ></input>
          <label for="delivery">Only Fast Delivery</label>
        </div>
      </div>

      <div className="product_rating">
        <div className="filter_header">Rating</div>
        <div>
          <input
            type="radio"
            name="rating"
            className="filter-input"
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
            className="filter-input"
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
            className="filter-input"
            onClick={() => dispatch({ type: "RATING", payload: "two_&_above" })}
            checked={ratingFilter === "two_&_above"}
          ></input>
          <label for="two_and_above"> &#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            className="filter-input"
            onClick={() => dispatch({ type: "RATING", payload: "one_&_above" })}
            checked={ratingFilter === "one_&_above"}
          ></input>
          <label for="one_and_above"> &#11088;&up</label>
        </div>
      </div>

      <div>
        <div className="filter_header"> Category</div>

        <div>
          <input
            type="radio"
            name="active wear"
            className="filter-input"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "Active Wear" })
            }
            checked={categoryAll === "Active Wear"}
          ></input>
          <label for="active_wear">Active Wear</label>
        </div>

        <div>
          <input
            type="radio"
            name="cricket"
            className="filter-input"
            onClick={() => dispatch({ type: "CATEGORY", payload: "Cricket" })}
            checked={categoryAll === "Cricket"}
          ></input>
          <label for="cricket">Cricket</label>
        </div>

        <div>
          <input
            type="radio"
            name="football"
            className="filter-input"
            onClick={() => dispatch({ type: "CATEGORY", payload: "Football" })}
            checked={categoryAll === "Football"}
          ></input>
          <label for="football">Football</label>
        </div>

        <div>
          <input
            type="radio"
            name="fitness accessories"
            className="filter-input"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "Fitness Accessories" })
            }
            checked={categoryAll === "Fitness Accessories"}
          ></input>
          <label for="fitness_accessories">Fitness Accessories</label>
        </div>

        <div>
          <input
            type="radio"
            name="fitness equipments"
            className="filter-input"
            onClick={() =>
              dispatch({ type: "CATEGORY", payload: "Fitness Equipments" })
            }
            checked={categoryAll === "Fitness Equipments"}
          ></input>
          <label for="fitness_equipment">Fitness Equipment</label>
        </div>
      </div>
      <button
        className="clear-btn"
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
      >
        Reset All Filters
      </button>
    </aside>
  );
}
