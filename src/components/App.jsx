import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
