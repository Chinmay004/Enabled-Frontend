import Main from "./Components/Product/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./Components/Product/ProductPage";
import ProductDetails from "./Components/Product/ProductDetails";
import AddProduct from "./Components/Product/AddProduct";
import Signup from "./Components/Auth/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Auth/Login";
import CartPage from "./Components/CartPage";
import Billing from "./Components/Billing/Billing";
import OrderPage from "./Components/Orders/OrderPage";
import Logout from "./Components/Auth/Logout";
import Verify from "./Components/Verify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/productDetails" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<PrivateRoute><Logout/></PrivateRoute>} />


        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        {/* <Route path="/recipes2" element={<PrivateRoute><RecipeList2 /></PrivateRoute>} /> */}
        <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>} />
        <Route path="/billing" element={<PrivateRoute><Billing/></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><OrderPage/></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
export default App;
