import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Products from "./Products/Products";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Notfound from "./Notfound/Notfound";
import Men from './Products/Men'
import Productindex from './Products/Productindex'
import Women from './Products/Women'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<Products />}>

          <Route path='/' element={<Productindex />} />
          <Route path='/:id' element={<Men />} />
          <Route path='/Women' element={<Women />} />
          
          </Route> 
        <Route path="About" element={<About />} />
        <Route path="*" element={<Notfound />} /> 

        </Routes>
      </div>
  );
}

export default App;
