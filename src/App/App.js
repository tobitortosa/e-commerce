import { Route, Routes } from "react-router-dom";
import CardDetail from "../components/CardDetail/CardDetail";
import Login from "../components/LoginForm/LoginForm";
import Products from "../page/allProducts/AllProducts";
import Home from "../page/home/Home";
function App() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/login"} element={<Login />} />
      <Route path={"/products"} element={<Products />} />
      <Route path={"/detail/:id"} element={<CardDetail />} />
    </Routes>
  );
}

export default App;
