import React, { useState, useEffect } from 'react';
// import pM from '../../assets/pr-mn-span.svg';
import './DesignerIntro.css';
import { tabs } from '../../constants/designerIntr0Constants';
import ar1 from '../../assets/designerIntro/ar-1.svg';
import text1 from '../../assets/designerIntro/text-1.svg';
import ar2 from '../../assets/designerIntro/ar-2.svg';
import text2 from '../../assets/designerIntro/text-2.svg';
import ar3 from '../../assets/designerIntro/ar-3.svg';
import text3 from '../../assets/designerIntro/text-3.svg';
import ar4 from '../../assets/designerIntro/ar-4.svg';
import text4 from '../../assets/designerIntro/text-4.svg';

const DesignerIntro: React.FC = () => {
  const [activeTab, setActiveTab] = useState('For anyone');
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  const asianNames = [
    'Praveen Manchi',
    'பிரவீன் மஞ்சி', // Tamil
    'ప్రవీణ్ మంచి', // Telugu
    'ಪ್ರವೀಣ್ ಮಂಚಿ', // Kannada
    'പ്രവീൺ മഞ്ചി', // Malayalam
    'प्रवीण मान्ची', // Hindi
    'プラヴィーン・マンチ', // Japanese
    '普拉文 曼奇', // Chinese (Simplified)
    '프라빈 만치', // Korean
    'ปราวีน มันชี', // Thai
  ];
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % asianNames.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='designer-main-container'>
      <div className='designer-intro'>
        <span className='designer-intro__greeting'>Hello there,</span>
        <span className='designer-intro__description'>
          {activeContent?.beforeHighlighter}
          <span className='highlighter'>
            {activeTab === 'For anyone'
              ? asianNames[highlightIndex]
              : activeContent?.highlighter}
          </span>
          {activeContent?.middler}
          <span className='highlighter'>{activeContent?.endHighlighter}</span>
          {activeTab !== 'Product Managers' && <br />}
          {activeContent?.description}
        </span>

        <div className='tabs'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
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
      <div className='ar-txt-2'>
        <img src={ar2} alt='' />
        <img src={text2} alt='' />
      </div>
      <div className='ar-txt-3'>
        <img src={ar3} alt='' />
        <img src={text3} alt='' />
      </div>
      <div className='ar-txt-4'>
        <img src={ar4} alt='' />
        <img src={text4} alt='' />
      </div>
    </div>
  );
};

export default DesignerIntro;
