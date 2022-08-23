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
        <div className="filter-header">Sort By</div>
        <div>
          <input
            type="radio"
            name="sort"
            className="filter-input"
            onChange={() => dispatch({ type: "SORT", payload: "low_to_high" })}
            checked={sortBy === "low_to_high"}
          ></input>
          <label htmlFor="low_to_high">Price - Low to high</label>
        </div>

        <div>
          <input
            type="radio"
            name="sort"
            className="filter-input"
            onChange={() => dispatch({ type: "SORT", payload: "high_to_low" })}
            checked={sortBy === "high_to_low"}
          ></input>
          <label htmlFor="high_to_low">Price - High to Low</label>
        </div>

        <div>
          <input
            type="range"
            className="filter-input"
            min="345"
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

      <div className="stock-and-delivery">
        <div>
          <input
            type="checkbox"
            className="filter-input"
            onChange={() => dispatch({ type: "INVENTORY" })}
            checked={inventoryAll}
          ></input>
          <label htmlFor="stock">Only on Stock</label>
        </div>

        <div>
          <input
            type="checkbox"
            className="filter-input"
            onChange={() => dispatch({ type: "DELIVERY" })}
            checked={deliveryAll}
          ></input>
          <label htmlFor="delivery">Only Fast Delivery</label>
        </div>
      </div>

      <div className="product-rating">
        <div className="filter-header">Rating</div>
        <div>
          <input
            type="radio"
            name="rating"
            className="filter-input"
            onChange={() =>
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
            onChange={() =>
              dispatch({ type: "RATING", payload: "three_&_above" })
            }
            checked={ratingFilter === "three_&_above"}
          ></input>
          <label htmlFor="three_and_above">&#11088;&#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            className="filter-input"
            onChange={() =>
              dispatch({ type: "RATING", payload: "two_&_above" })
            }
            checked={ratingFilter === "two_&_above"}
          ></input>
          <label htmlFor="two_and_above"> &#11088;&#11088;&up</label>
        </div>

        <div>
          <input
            type="radio"
            name="rating"
            className="filter-input"
            onChange={() =>
              dispatch({ type: "RATING", payload: "one_&_above" })
            }
            checked={ratingFilter === "one_&_above"}
          ></input>
          <label htmlFor="one_and_above"> &#11088;&up</label>
        </div>
      </div>

      <div>
        <div className="filter-header"> Category</div>

        <div>
          <input
            type="radio"
            name="active wear"
            className="filter-input"
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: "Active Wear" })
            }
            checked={categoryAll === "Active Wear"}
          ></input>
          <label htmlFor="active_wear">Active Wear</label>
        </div>

        <div>
          <input
            type="radio"
            name="cricket"
            className="filter-input"
            onChange={() => dispatch({ type: "CATEGORY", payload: "Cricket" })}
            checked={categoryAll === "Cricket"}
          ></input>
          <label htmlFor="cricket">Cricket</label>
        </div>

        <div>
          <input
            type="radio"
            name="football"
            className="filter-input"
            onChange={() => dispatch({ type: "CATEGORY", payload: "Football" })}
            checked={categoryAll === "Football"}
          ></input>
          <label htmlFor="football">Football</label>
        </div>

        <div>
          <input
            type="radio"
            name="fitness equipments"
            className="filter-input"
            onChange={() =>
              dispatch({ type: "CATEGORY", payload: "Fitness Equipments" })
            }
            checked={categoryAll === "Fitness Equipments"}
          ></input>
          <label htmlFor="fitness_equipment">Fitness Equipment</label>
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
