import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Home/Footer/Footer";
import Navbar from "./components/Home/Navbar/Navbar";
import SearchResult from "./pages/SearchResult/SearchResult";
import CarDetail from "./pages/CarDetail/CarDetail";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/detail" element={<CarDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;