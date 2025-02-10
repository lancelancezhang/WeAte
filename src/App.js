import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Restaurants from "./Pages/Restaurants.js";
import Home from "./Pages/Home.js";

function App() {
  return (
    <Router>
      {" "}
      <div className="flex">
        <div className="flex-1">
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
