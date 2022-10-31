// NPM Packages
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Profile from "./components/profile";
import AddProduct from "./components/AddProduct";
import ProductDetailPage from "./components/ProductDetailPage";
import Footer from "./components/Footer";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


const App = () => {
  const [lsData] = useState({
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/profile"
          element={lsData.email && lsData.password ? <Profile /> : <Login />}
        />
        <Route
          path="/addproduct"
          element={lsData.email && lsData.password ? <AddProduct /> : <Login />}
        />
        <Route path="/detailpage/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
