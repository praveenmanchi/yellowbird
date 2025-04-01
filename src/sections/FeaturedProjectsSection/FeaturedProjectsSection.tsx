import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate
import './FeaturedProjectsSection.css';
import arrow from '../../assets/forward-arrow.svg';
import { featuresProjectCardsData } from '../../constants/featuredConstants';
import CaseStudyCardHome from '../../components/CaseStudyCardHome/CaseStudyCardHome';

const FeaturedProjectsSection: React.FC = () => {
  const navigate = useNavigate(); // 👈 Hook for programmatic navigation

  const handleViewMore = () => {
    navigate('/casestudies'); // 👈 Replace with your actual route path
  };

  return (
    <div className='featured-projects-section'>
      <h2 className='featured-projects-heading'>Featured Projects</h2>
      <p className='featured-projects-description'>
        This personal space aims to showcase how I think and work and solve a
        problems with my thoughts and my process to dlivery the top-noch
        quality.
      </p>
      {featuresProjectCardsData?.caseStudyLg?.map((card, idx) => (
        <CaseStudyCardHome key={idx} data={card} microTool={true} />
      ))}
      <div className='case-study-read-more-btn-container'>
        <div className='case-study-button-container'>
          <button className='case-study-button' onClick={handleViewMore}>
            VIEW MORE CASESTUDIES
            <img src={arrow} alt='' className='case-study-arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
