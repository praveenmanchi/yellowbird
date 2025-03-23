import React from 'react';
import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';
import wArrow from '../../assets/caseStudiesModal/white-arrow.svg';
import './CaseStudiesHover.css';
import { Link } from 'react-router';
import CaseStudy from '../casestudy/casestudy';

interface Props {
  setIsModalVisible: (value: boolean) => void;
}

const CaseStudiesHover: React.FC<Props> = ({ setIsModalVisible }: Props) => {
  return (
    <div className='case-studies-hover-container'>
      <div className='case-studies-hover'>
        <span className='case-studies-title'>Case Studies</span>
        <div className='case-studies-item'>
          <span
            className='case-studies-item-title'
            style={{ marginTop: '14px' }}
          >
            DESIGN SYSTEMS
          </span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </div>
        <div className='case-studies-item'>
          <span className='case-studies-item-title'>PRODUCT DESIGN</span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </div>
        <div className='case-studies-item'>
          <span className='case-studies-item-title'>UX RESEARCH</span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </div>
        <button
          className='case-studies-button nda-case'
          style={{ marginTop: '40px' }}
        >
          <span className='case-studies-button-text nda-text'>
            View NDA Case Studies
          </span>
          <img className='case-studies-button-arrow' src={arrow} alt='arrow' />
        </button>
        <button className='case-studies-button'>
          <span className='case-studies-button-text'>My Design Process </span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </button>
        <button className='case-studies-button'>
          <span className='case-studies-button-text'>
            <Link
              to='/case-studies'
              className='case-studies-button-text'
              style={{ textDecoration: 'none' }}
              onClick={() => setIsModalVisible(false)}
            >
              View All Case Studies
            </Link>
          </span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </button>
      </div>
      <div className='recent-case-studies-container'>
        <span className='recent-case-studies-title'>Recent Case Studies</span>
        <div className='recent-case-studies'>
          <CaseStudy />
          <CaseStudy />
          <CaseStudy />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesHover;
