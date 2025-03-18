import React from 'react';
import cs from '../../assets/caseStudiesModal/cs.png';
import './casestudy.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';

const CaseStudy: React.FC = () => {
  return (
    <div className='case-study-comp'>
      <div className='case-study-comp-header'>
        <img src={cs} alt='cs' className='case-study-comp-image' />
        <div className='case-study-comp-title'>UX/UI Design </div>
        <span className='case-study-comp-description'>
          Q3 Releases & Product Updates Q3 Releases & Product Updates
        </span>
        <div className='case-study-comp-date'>
          Nov 12, 2024 —
          <span className='case-study-comp-read-time'>7 min read </span>
        </div>
      </div>
      <div className='case-study-comp-footer'>
        View
        <img src={arrow} alt='cs' className='case-study-comp-arrow' />
      </div>
    </div>
  );
};

export default CaseStudy;
