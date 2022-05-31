import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Jobs from "./Jobs";
import Navbar from "./Navbar";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
   