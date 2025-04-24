import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

import Navbar from "./Compunent/Navbar";
import Home from "./Compunent/Home";
import About from "./Compunent/About";
import Services from "./Compunent/Services";
import Blog from "./Compunent/Blog";
import GetApp from "./Compunent/GetApp";
import Footer from "./Compunent/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/get-app" element={<GetApp />} />
        <Route path="/Footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;
