import "./App.css";
import {
  Home,
  Signup,
  Login,
  Cart,
  Wishlist,
  ProductListing,
  ProductDetail,
  Profile,
  DeliveryAddress,
} from "./frontend/pages/index";
import { RequiresAuth } from "./frontend/RequiresAuth";
import {
  Navbar,
  UserInfo,
  Address,
  Checkout,
} from "./frontend/components/index";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer autoClose={1200} />
      <Routes>
        <Route path="/product" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deliveryAddress" element={<DeliveryAddress />} />

        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        >
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/profile/address" element={<Address />} />
        </Route>

        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        >
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
