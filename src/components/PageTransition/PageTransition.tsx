import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

type TransitionType = 'fade' | 'slide' | 'scale' | 'flip';

interface PageTransitionProps {
  children: React.ReactNode;
  type?: TransitionType;
  duration?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  type = 'fade',
  duration = 0.5
}) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(pageRef.current, { opacity: 0 });
      
      // Define different transition types
      switch(type) {
        case 'fade':
          gsap.to(pageRef.current, { 
            duration, 
            opacity: 1, 
            ease: "power2.out" 
          });
          break;
          
        case 'slide':
          gsap.fromTo(pageRef.current, 
            { opacity: 0, x: 20 }, 
            { duration, opacity: 1, x: 0, ease: "power2.out" }
          );
          break;
          
        case 'scale':
          gsap.fromTo(pageRef.current, 
            { opacity: 0, scale: 0.95 }, 
            { duration, opacity: 1, scale: 1, ease: "power2.out" }
          );
          break;
          
        case 'flip':
          gsap.fromTo(pageRef.current, 
            { opacity: 0, rotationY: 10 }, 
            { duration, opacity: 1, rotationY: 0, ease: "power2.out" }
          );
          break;
          
        default:
          gsap.fromTo(pageRef.current, 
            { opacity: 0, y: 20 }, 
            { duration, opacity: 1, y: 0, ease: "power2.out" }
          );
      }
    });
    
    return () => ctx.revert();
  }, [location.pathname, type, duration]);
  
  return (
    <div ref={pageRef} className="page-transition-container">
      {children}
    </div>
  );
};

export default PageTransition;