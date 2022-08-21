import { useState, createContext, useContext, useReducer } from "react";
import { userReducer } from "../reducers/user-reducer";

const userContext = createContext(null);

const useUser = () => useContext(userContext);

function UserProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, {
    currentUser: null,
    address: [],
  });
  const [deliveryAddress, setDeliveryAddress] = useState("");
  return (
    <userContext.Provider
      value={{ userState, userDispatch, deliveryAddress, setDeliveryAddress }}
    >
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, useUser };
