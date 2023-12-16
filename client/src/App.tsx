import "./App.css";
import Login from "./pages/login";
import PrivateRoute from "./components/private-routes";
import HomePage from "./pages/shop-homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart";
import CartInfo from "./pages/cart-info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/discount-list" element={<CartInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
