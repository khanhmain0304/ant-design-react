import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Customer from "../../Pages/Customer";
import Product from "../../Pages/Product";
import Category from "../../Pages/Category";
import Order from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/user" element={<Customer />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/bill" element={<Order />}></Route>
    </Routes>
  );
}

export default AppRoutes;
