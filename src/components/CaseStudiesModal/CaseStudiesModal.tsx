import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';
import wArrow from '../../assets/caseStudiesModal/white-arrow.svg';
import './CaseStudiesModal.css';
import Benzxs from '../../assets/resource/benz_xs.png';
import Payuxs from '../../assets/resource/Paysafe_xs.jpg';
import carui from '../../assets/resource/Car_xs.png';
import CaseStudyModalCard from '../CaseStudyModalCard/CaseStudyModalCard';

interface Props {
  setIsModalVisible: (value: boolean) => void;
}

const caseStudiesModalData = [
  {
    img: Benzxs,
    chipContent: 'UX/UI Design',
    title: 'AMG Driving academy, car racing event organizer to build a new platform to host their car racing event.',
    date: 'March 2023',
    read: '12 min read',
    link: '/casestudies/bestornothing',
  },
  {
    img: Payuxs,
    chipContent: 'UX Design',
    title: 'NoBroker Heuristic Evaluation to identify the existing user pain points & to improve user engagement.',
    date: 'November 2024',
    read: '7 min read',
    link: '/casestudies/nobroker',
  },
  {
    img: carui,
    chipContent: 'HMI Design',
    title: 'Instrument cluster to show collection of dials behind steering wheel to give a range of info about vehicle.',
    date: 'December 2020',
    read: '2 min read',
    link: '/casestudies/instrumentcluster',
  },
];

const CaseStudiesModal: React.FC<Props> = ({ setIsModalVisible }) => {
  const handleItemClick = (route: string) => {
    setIsModalVisible(false);
  };

  return (
    <div className='case-studies-hover-container'>
      <div className='case-studies-hover'>
        <span className='case-studies-title'>Case Studies</span>

        <Link
          to='/design-systems'
          className='case-studies-item'
          onClick={() => handleItemClick('/design-systems')}
        >
          <span className='case-studies-item-title'>DESIGN SYSTEMS</span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </Link>

        <Link
          to='/product-design'
          className='case-studies-item'
          onClick={() => handleItemClick('/product-design')}
        >
          <span className='case-studies-item-title'>PRODUCT DESIGN</span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </Link>

        <Link
          to='/ux-research'
          className='case-studies-item'
          onClick={() => handleItemClick('/ux-research')}
        >
          <span className='case-studies-item-title'>UX RESEARCH</span>
          <img className='case-studies-item-arrow' src={arrow} alt='arrow' />
        </Link>

        <Link
          to='/ndacasestudies'
          className='case-studies-button nda-case'
          style={{ marginTop: '40px', textDecoration: 'none' }}
          onClick={() => handleItemClick('/nda-case-studies')}
        >
          <span className='case-studies-button-text nda-text'>
            View NDA Case Studies
          </span>
          <img className='case-studies-button-arrow' src={arrow} alt='arrow' />
        </Link>

        <Link
          to='/designprocess'
          className='case-studies-button'
          style={{ textDecoration: 'none' }}
          onClick={() => handleItemClick('/designprocess')}
        >
          <span className='case-studies-button-text'>My Design Process</span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </Link>

        <Link
          to='/casestudies'
          className='case-studies-button'
          style={{ textDecoration: 'none' }}
          onClick={() => handleItemClick('/casestudies')}
        >
          <span className='case-studies-button-text'>View All Case Studies</span>
          <img className='case-studies-button-arrow' src={wArrow} alt='arrow' />
        </Link>
      </div>

      <div className='recent-case-studies-container'>
        <span className='recent-case-studies-title'>Recent Case Studies</span>
        <div className='recent-case-studies'>
          {caseStudiesModalData.map((eachCard, idx) => (
            <CaseStudyModalCard data={eachCard} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesModal;
