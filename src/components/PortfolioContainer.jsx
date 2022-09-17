import React from 'react';
import NavTabs from './NavTabs';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
// import Footer from './Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


export default function PortfolioContainer() {
  
    return (
      <Router>
        <NavTabs />
        <main>
          <Routes>
            <Route path='/MaDPortfolio' element={<Contact />} />  
            {/* <Route path='/About' element={<About />} /> */}
            <Route path='/' element={<Projects />} />
            <Route path='/MaDPortfolio/Contact' element={<About />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    );
  }