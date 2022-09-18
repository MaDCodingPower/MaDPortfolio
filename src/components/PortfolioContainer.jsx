import React from 'react';
import NavTabs from './NavTabs';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
<<<<<<< HEAD:src/components/PortfolioContainer.jsx
import ErrorPage from './pages/404'
// import Footer from './Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> parent of 87c60f9 (added footer, wont render it for now for formatting reasons. app ready to go :)):Client/src/components/PortfolioContainer.js


export default function PortfolioContainer() {
  
    return (
      <Router>
        <NavTabs />
        <main>
          <Routes>
            {/* <Route path='/' element={<About />} />   */}
            <Route path='/About' element={<About />} />
            <Route path='/Project' element={<Projects />} />
            <Route path='/Contact' element={<Contact />} />
            {/* <Route path='*' element={<ErrorPage />} /> */}
          </Routes>
        </main>
      </Router>
    );
  }