import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { usePostHog } from 'posthog-js/react';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/AboutMe';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import PageTransition from './components/PageTransition/PageTransition';
import MyDesignProcess from './pages/MyDesignProcess/MyDesignProcess';
import CaseStudyDetails from './pages/caseStudyDetails/caseStudyDetails';
import Photography from './pages/Photography/Photography';
import NdaCaseStudy from './pages/NdaCaseStudy/NdaCaseStudy';
import Passcode from './pages/Passcode/Passcode';

const App: React.FC = () => {
  const location = useLocation();
  const posthog = usePostHog();

  // ✅ Track pageviews on route change
  useEffect(() => {
    posthog?.capture('$pageview');
  }, [location, posthog]);

  const hideHeaderFooter =
    location.pathname === '/ndacasestudies' || location.pathname === '/passcode';

  return (
    <div style={{ margin: '0' }}>
      {!hideHeaderFooter && <Header />}
      <PageTransition type='blur' duration={0.7}>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/casestudies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/designprocess' element={<MyDesignProcess />} />
          <Route path='/casestudies/:id' element={<CaseStudyDetails />} />
          <Route path='/photography' element={<Photography />} />
          <Route path='/ndacasestudies' element={<NdaCaseStudy />} />
          <Route path='/passcode' element={<Passcode />} />
        </Routes>
      </PageTransition>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
