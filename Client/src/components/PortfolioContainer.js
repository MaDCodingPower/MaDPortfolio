import React from 'react';
import NavTabs from './NavTabs';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
// import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function PortfolioContainer() {
  
    return (
      <Router>
        <NavTabs />
        <main>
          <Routes>
            <Route path='/MaDPortfolio' element={<About />} />  
            <Route path='/MaDPortfolio/About' element={<About />} />
            <Route path='/MaDPortfolio/Project' element={<Projects />} />
            <Route path='/MaDPortfolio/Contact' element={<Contact />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    );
  }