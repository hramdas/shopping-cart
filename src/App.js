import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Cart } from "./components/Cart";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
