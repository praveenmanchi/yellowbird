import React, { useState, useEffect, useRef } from 'react';
import './DesignerIntro.css';
import gsap from 'gsap';
import { tabs } from '../../constants/designerIntr0Constants';
import ar1 from '../../assets/designerIntro/ar-1.svg';
import text1 from '../../assets/designerIntro/text-1.svg';
import ar4 from '../../assets/designerIntro/ar-4.svg';
import text4 from '../../assets/designerIntro/text-4.svg';

const DesignerIntro: React.FC = () => {
  const [activeTab, setActiveTab] = useState('For anyone');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const asianNames = [
    'Praveen Manchi',
    'பிரவீன் மஞ்சி',
    'ప్రవీణ్ మంచి',
    'ಪ್ರವೀಣ್ ಮಂಚಿ',
    'പ്രവീൺ മഞ്ചി',
    'प्रवीण मान्ची',
    'プラヴィーン・マンチ',
    '普拉文 曼奇',
    '프라빈 만치',
    'ปราวีน มันชี',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % asianNames.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const displayedTab = hoveredTab || activeTab;
  const activeContent = tabs.find((tab) => tab.id === displayedTab);

  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, [displayedTab]);

  // 🟡 Glow + GSAP effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setGlowVisible = (visible: boolean) => {
      const overlay = container.querySelector('.grid-hover-overlay') as HTMLElement;
      if (overlay) {
        overlay.style.opacity = visible ? '1' : '0';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX.current = e.clientX - rect.left;
      mouseY.current = e.clientY - rect.top;

      gsap.to(container, {
        duration: 0.2,
        '--x': `${mouseX.current}px`,
        '--y': `${mouseY.current}px`,
        ease: 'power3.out'
      });

      setGlowVisible(true);

      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => {
        setGlowVisible(false);
      }, 1000);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='designer-main-container'>
      <div className='designer-intro' ref={containerRef}>
        <div className='grid-hover-overlay' />

        <span className='designer-intro__greeting'>Hello there,</span>

        <span className={`designer-intro__description fade-container ${fadeIn ? 'visible' : ''}`}>
          {activeContent?.beforeHighlighter}
          <span className='highlighter'>
            {displayedTab === 'For anyone'
              ? asianNames[highlightIndex]
              : activeContent?.highlighter}
          </span>
          {activeContent?.middler}
          <span className='highlighter'>{activeContent?.endHighlighter}</span>
          {displayedTab !== 'Product Managers' && <br />}
          {activeContent?.description}
        </span>

        <div className='tabs'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className='ar-txt-1'>
          <img src={ar1} alt='' />
          <img src={text1} alt='' />
        </div>
        <div className='ar-txt-4'>
          <img src={ar4} alt='' />
          <img src={text4} alt='' />
        </div>
      </div>
    </div>
  );
};

export default DesignerIntro;
