import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { usePostHog } from 'posthog-js/react';

import ScrollToTop from './components/ScrollToTop';
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
import NotFound from './pages/NotFound/NotFound';
import LegacyRedirect from './pages/LegacyRedirect/LegacyRedirect';
import MobileWarning from './components/MobileWarning/MobileWarning'; // import MobileWarning

const App: React.FC = () => {
  const location = useLocation();
  const posthog = usePostHog();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    posthog?.capture('$pageview');
  }, [location, posthog]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileWarning />;
  }

  const hideHeaderFooter =
  location.pathname === '/ndacasestudies' || location.pathname.startsWith('/unlock');

  return (
    <div style={{ margin: '0' }}>
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}
      <PageTransition type='blur' duration={0.7}>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/casestudies' element={<CaseStudies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/designprocess' element={<MyDesignProcess />} />
          <Route path='/photography' element={<Photography />} />
          <Route path='/ndacasestudies' element={<NdaCaseStudy />} />
          <Route path='/unlock/:slug' element={<Passcode />} />
          <Route path='/design-systems' element={<CaseStudies />} />
          <Route path='/product-design' element={<CaseStudies />} />
          <Route path='/ux-research' element={<CaseStudies />} />
          <Route path='/casestudies/:id' element={<CaseStudyDetails />} />
          <Route path='/passcode' element={<LegacyRedirect />} /> {/* handles old links */}
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </PageTransition>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
