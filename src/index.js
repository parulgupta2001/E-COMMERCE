import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  AuthProvider,
  CartProvider,
  WishlistProvider,
  UserProvider,
} from "./frontend/contexts/index";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <FilterProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </FilterProvider>
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
