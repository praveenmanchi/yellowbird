import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react'; // ✅ Import PostHog
import './FeaturedProjectsSection.css';
import arrow from '../../assets/forward-arrow.svg';
import { featuresProjectCardsData } from '../../constants/featuredConstants';
import CaseStudyCardHome from '../../components/CaseStudyCardHome/CaseStudyCardHome';

const FeaturedProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const posthog = usePostHog(); // ✅ Initialize PostHog

  const handleViewMore = () => {
    posthog?.capture('View More Clicked', { section: 'Featured Projects' });
    navigate('/casestudies');
  };

  const handleCardClick = (title: string, pathName: string, client: string) => {
    posthog?.capture('Featured Project Clicked', {
      title,
      slug: pathName,
      client,
    });
    navigate(`/casestudies/${pathName}`);
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
        <CaseStudyCardHome
          key={idx}
          data={card}
          microTool={true}
          onClick={() => handleCardClick(card.title || '', card.pathName || '', card.client || '')}
        />
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
