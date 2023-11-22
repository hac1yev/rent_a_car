import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Home/Footer/Footer";
import Navbar from "./components/Home/Navbar/Navbar";
import SearchResult from "./pages/SearchResult/SearchResult";
import CarDetail from "./pages/CarDetail/CarDetail";
import RentCar from "./pages/RentCar/RentCar";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/LoginRegister/Login";
import Register from "./pages/LoginRegister/Register";
import RentIt from "./pages/RentIt/RentIt";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/detail" element={<CarDetail />} />
        <Route path="/rent-car" element={<RentCar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rent-it" element={<RentIt />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;