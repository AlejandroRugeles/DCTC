import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import Purchases from "./screens/Purchases";
import Order from "./screens/Order";
import SearchResults from "./screens/SearchResults";

function App() {
  localStorage.setItem("carrito", JSON.stringify([]));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/SearchResults" element={<SearchResults />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Purchases" element={<Purchases />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
