import React from 'react';
import './FeaturedProjectsSection.css';
import arrow from '../../assets/forward-arrow.svg';
import csLg from '../../assets/caseStudies/cs-bg-lg.png';

import CasestudyCard from '../../components/casestudyCard/casestudyCard';

const FeaturedProjectsSection: React.FC = () => {
  return (
    <div className='featured-projects-section'>
      <h2 className='featured-projects-heading'>Featured Projects</h2>
      <p className='featured-projects-description'>
        This personal space aims to showcase how I think and work and become a
        place where I can share my thoughts and my journey as a product designer
        in this industry.
      </p>
      <CasestudyCard microTool={true} Casestudy={false} img={csLg} />
      <CasestudyCard microTool={true} Casestudy={false} img={csLg} />
      <div className='case-study-read-more-btn-container'>
        <div className='case-study-button-container'>
          <button className='case-study-button'>
            READ MORE ABOUT ME
            <img src={arrow} alt='' className='case-study-arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
