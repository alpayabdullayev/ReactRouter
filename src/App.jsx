import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/Detail";
import Login from "./pages/Login";

function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<ProductDetail/>} />
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>

    </>
  );
}

export default App;
