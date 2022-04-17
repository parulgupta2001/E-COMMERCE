import "./App.css";
import {
  Home,
  Signup,
  Login,
  Cart,
  Wishlist,
  ProductListing,
} from "./frontend/pages/index";
import { Navbar } from "./frontend/components/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/product" element={<ProductListing />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
