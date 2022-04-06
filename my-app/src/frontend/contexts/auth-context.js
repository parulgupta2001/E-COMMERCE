import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("token");
  const [authState, authDispatch] = useReducer(authReducer, {
    user: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
    },
    token: encodedToken,
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