import React from 'react';
import {Route, Routes } from 'react-router';
import Header from './components/Header/Header';
import Body from './components/Body/Body.tsx';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/AboutMe';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Resource from './pages/Resource/Resource';


const App: React.FC = () => {
  return (
    
      <div style={{ margin: '0' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;