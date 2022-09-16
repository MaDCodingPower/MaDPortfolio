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
            <Route path='/' element={<About />} />  
            <Route path='/About' element={<About />} />
            <Route path='/Project' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </main>
      </Router>
    );
  }