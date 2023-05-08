import React from 'react';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="flex-row">
      <Navbar />
      <h1 className="text-3xl flex justify-center font-bold underline">
        Hello Portfolio
      </h1>
      <Home />
    </div>
  );
}

export default App;
