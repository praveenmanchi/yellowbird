import React from 'react';
import "./case-study.css";
import cs from '../../assets/caseStudiesModal/cs.png';
import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';


const casestudy: React.FC = () => {
  return (
    <div className='case-study-comp'>
      <div className='case-study-comp-header'>
        <img src={cs} alt='cs' className='case-study-comp-image' />
        <div className='case-study-comp-title'>UX/UI Design </div>
        <span className='case-study-comp-description'>
          Q3 Releases & Product Updates Q3 Releases & Product Updates
        </span>
        <div className='case-study-comp-date date'>
          Nov 12, 2024 —
          <span className='case-study-comp-read-time time'>7 min read </span>
        </div>
      </div>
      <div className='case-study-comp-footer'>
        View
        <img src={arrow} alt='cs' className='case-study-comp-arrow' />
      </div>
    </div>
  );
};

export default casestudy;
