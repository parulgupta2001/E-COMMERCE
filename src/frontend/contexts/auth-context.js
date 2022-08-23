import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = localStorage.getItem("token");
  const localStorageUser = JSON.stringify(localStorage.getItem("user"));
  const [authState, authDispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorageUser) ?? {},
    token: localStorageToken ?? null,
    error: null,
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
