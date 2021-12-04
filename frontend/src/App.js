import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import Purchases from "./screens/Purchases";
import Order from "./screens/Order";
import Frutas from "./screens/Frutas";
import Vegetales from "./screens/Vegetales";
import Lacar from "./screens/Lacar";

function App() {
  localStorage.setItem("carrito", JSON.stringify([]));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Frutas" element={<Frutas />} />
          <Route path="/Vegetales" element={<Vegetales />} />
          <Route path="/Lacar" element={<Lacar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
