import "./App.css";
import { Home, Signup, Login, Cart, Wishlist } from "./frontend/pages/index";
import { Navbar } from "./frontend/components/navbar/Navbar";
import { Footer } from "./frontend/components/footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
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
