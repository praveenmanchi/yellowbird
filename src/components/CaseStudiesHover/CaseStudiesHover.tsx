import React from 'react';
// import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';
import wArrow from '../../assets/caseStudiesModal/white-arrow.svg';
import './CaseStudiesHover.css';

const CaseStudiesHover: React.FC = () => {
  return (
    <div>
      <div className='case-studies-hover'>
        <span className='case-studies-title'>Case Studies</span>
        <div className='case-studies-item'>
          <span
            className='case-studies-item-title'
            style={{ marginTop: '14px' }}
          >
            DESIGN SYSTEMS
          </span>
          <img className='case-studies-item-arrow' src={wArrow} alt='wArrow' />
        </div>
        <div className='case-studies-item'>
          <span className='case-studies-item-title'>PRODUCT DESIGN</span>
          <img className='case-studies-item-arrow' src={wArrow} alt='wArrow' />
        </div>
        <div className='case-studies-item'>
          <span className='case-studies-item-title'>UX RESEARCH</span>
          <img className='case-studies-item-arrow' src={wArrow} alt='wArrow' />
        </div>
        <button className='case-studies-button' style={{ marginTop: '40px' }}>
          <span className='case-studies-button-text'>
            View NDA Case Studies
          </span>
          <img
            className='case-studies-button-arrow'
            src={wArrow}
            alt='wArrow'
          />
        </button>
        <button className='case-studies-button'>
          <span className='case-studies-button-text'>My Design Process </span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </button>
        <button className='case-studies-button'>
          <span className='case-studies-button-text'>
            View All Case Studies
          </span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </button>
      </div>
      <div>
        <span>RecenT Case Studies</span>
      </div>
    </div>
  );
};

export default CaseStudiesHover;
