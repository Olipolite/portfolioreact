import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
import PageContainer from './PageContainer';

function App() {
  return (
    <div className="bg-svart">
      <PageContainer>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </PageContainer>
    </div>
  );
}

export default App;
