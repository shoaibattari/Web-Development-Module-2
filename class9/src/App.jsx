import { Routes, Route, Navigate, Router } from "react-router-dom";
import "./App.css";
// import Home from "./Components/Home";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/Products/ProductDetail";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/products" replace />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
