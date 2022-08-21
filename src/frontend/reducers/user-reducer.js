export function userReducer(state, action) {
  switch (action.type) {
    case "GET_USER":
    case "EDIT_USER":
      return { ...state, currentUser: action.payload };
    case "GET_ADDRESS":
    case "EDIT_ADDRESS":
    case "DELETE_ADDRESS":
    case "ADD_ADDRESS":
      console.log(action.payload);
      return { ...state, address: action.payload };
    default:
      return state;
  }
}
