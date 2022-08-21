function authReducer(state, action) {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.payload };

    case "TOKEN":
      return { ...state, token: action.payload };

    case "ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export { authReducer };
