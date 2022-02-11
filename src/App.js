import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
