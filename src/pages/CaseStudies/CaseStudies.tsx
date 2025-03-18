import React from 'react';
import './CaseStudies.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';
import CsChip from '../../components/CsChip/CsChip';
import { csChipData } from '../../constants/csConstants';
// import FeaturedProjectsSection from '../../sections/FeaturedProjectsSection/FeaturedProjectsSection';
import CaseStudyCard from '../../components/CaseStudyCard/CaseStudyCard';

const CaseStudies: React.FC = () => {
  return (
    <div className='case-studies-container'>
      <div className='case-studies-intro'>
        <span className='case-studies-intro-text'>
          Looking for my portfolio? You’ll find here some shots of my most
          recent projects, an exhaustive list of all the projects I contributed
          to, as well as a few words about my role and my inspirations.
        </span>
      </div>
      <div className='case-studies-design-process'>
        <div className='case-studies-process-details'>
          <span className='case-studies-process-title'>My Design Process</span>
          <span className='case-studies-process-description'>
            My design process varies slightly depending on the nature of the
            project at hand. Am I redesigning an existing product, creating a
            new product from scratch, adding new features to an already existing
            product
          </span>
        </div>
        <button className='case-studies-open-document-button'>
          Open Document
          <img src={arrow} alt='arrow' />
        </button>
      </div>
      <div className='case-studies-footer'>
        <span className='case-studies-footer-text'>// Casestudies</span>
        <div className='cs-chip-container-holder'>
          {csChipData.map((eachChip, idx) => (
            <CsChip
              label={eachChip?.label}
              count={eachChip?.number}
              key={idx}
            />
          ))}
        </div>
      </div>
      <div className='cs-card-container'>
        <CaseStudyCard />
        <div className='cs-horz-container'>
          <CaseStudyCard expertise={true} />
          <CaseStudyCard expertise={true} />
        </div>
        <CaseStudyCard />
      </div>
    </div>
  );
};

export default CaseStudies;
