import React from 'react';
import NavTabs from './NavTabs';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function PortfolioContainer() {
  
    return (
      <Router>
        <NavTabs />
        <main>
          <Routes>
            {/* <Route path='/' element={<About />} />   */}
            <Route path='MaDPortfolio/About' element={<About />} />
            <Route path='MaDPortfolio/Project' element={<Projects />} />
            <Route path='MaDPortfolio/Contact' element={<Contact />} />
            {/* <Route path='*' element={<ErrorPage />} /> */}
          </Routes>
        </main>
      </Router>
    );
  }