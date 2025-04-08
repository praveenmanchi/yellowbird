import React, { useState, useEffect } from 'react';
import './DesignerIntro.css';
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

  // Trigger fade on tab change
  useEffect(() => {
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 50); // short delay to allow opacity reset
    return () => clearTimeout(timeout);
  }, [displayedTab]);

  return (
    <div className='designer-main-container'>
      <div className='designer-intro'>
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
  );
};

export default DesignerIntro;
