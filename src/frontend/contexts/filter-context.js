import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import {
  filterReducer,
  getSortedData,
  getRangeData,
  getStockData,
  getDeliveryData,
  getRatingData,
  getCategoryData,
} from "../reducers/filter-reducer";
import axios from "axios";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: null,
    rangeAll: 10000,
    inventoryAll: false,
    deliveryAll: false,
    ratingFilter: null,
    categoryAll: false,
  });

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProductList(response.data.products);
      console.log(response.data.products);
    });
  }, []);

  const sortedData = getSortedData(productList, state.sortBy);
  const rangeData = getRangeData(sortedData, state.rangeAll);
  const stockData = getStockData(rangeData, state.inventoryAll);
  const deliveryData = getDeliveryData(stockData, state.deliveryAll);
  const ratingData = getRatingData(deliveryData, state.ratingFilter);
  const categoryData = getCategoryData(ratingData, state.categoryAll);

  return (
    <FilterContext.Provider value={{ state, dispatch, categoryData }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
