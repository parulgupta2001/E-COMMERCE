function filterReducer(state, action) {
  switch (action.type) {
    case "SORT":
      return { ...state, sortBy: action.payload };

    case "RANGE_ALL":
      return { ...state, rangeAll: action.payload };

    case "INVENTORY":
      return { ...state, inventoryAll: !state.inventoryAll };

    case "DELIVERY":
      return { ...state, deliveryAll: !state.deliveryAll };

    case "RATING":
      return { ...state, ratingFilter: action.payload };

    case "CATEGORY":
      return { ...state, categoryAll: action.payload };

    case "CLEAR_ALL":
      return {
        ...state,
        sortBy: null,
        rangeAll: 10000,
        inventoryAll: false,
        deliveryAll: false,
        ratingFilter: null,
        categoryAll: false,
      };

    default:
      return state;
  }
}

const getSortedData = (products, sortBy) => {
  if (sortBy === "low_to_high") {
    return products.sort((a, b) => a["price"] - b["price"]);
  }

  if (sortBy === "high_to_low") {
    return products.sort((a, b) => b["price"] - a["price"]);
  }

  return products;
};

const getRangeData = (products, rangeAll) => {
  return products.filter((item) => item.price <= rangeAll);
};

const getStockData = (products, inventoryAll) => {
  if (inventoryAll === false) {
    return products;
  } else {
    return products.filter((item) => item.stock === "In Stock");
  }
};

const getDeliveryData = (products, deliveryAll) => {
  if (deliveryAll === false) {
    return products;
  } else {
    return products.filter((item) => item.delivery === "Fast Delivery");
  }
};

const getRatingData = (products, ratingFilter) => {
  if (ratingFilter === "four_&_above") {
    return products.filter((item) => item.rating >= 4);
  }
  if (ratingFilter === "three_&_above") {
    return products.filter((item) => item.rating >= 3);
  }
  if (ratingFilter === "two_&_above") {
    return products.filter((item) => item.rating >= 2);
  }
  if (ratingFilter === "one_&_above") {
    return products.filter((item) => item.rating >= 1);
  } else {
    return products;
  }
};

const getCategoryData = (products, categoryAll) => {
  if (categoryAll === false) {
    return products;
  }

  if (categoryAll === "active_wear") {
    return products.filter((item) => item.categoryName === "Active Wear");
  }
  if (categoryAll === "cricket") {
    return products.filter((item) => item.categoryName === "Cricket");
  }
  if (categoryAll === "football") {
    return products.filter((item) => item.categoryName === "Football");
  }
  if (categoryAll === "fitness_accessories") {
    return products.filter(
      (item) => item.categoryName === "Fitness Accessories"
    );
  }
  if (categoryAll === "fitness_equipments") {
    return products.filter((item) => item.categoryName === "Fitness Equipment");
  }
};

export {
  filterReducer,
  getSortedData,
  getRangeData,
  getStockData,
  getDeliveryData,
  getRatingData,
  getCategoryData,
};
