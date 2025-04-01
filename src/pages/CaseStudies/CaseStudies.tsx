import React, { useState } from 'react';
import './CaseStudies.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';
import CsChip from '../../components/CsChip/CsChip';
import { csChipData } from '../../constants/csConstants';
import circle from '../../assets/circle.svg';
import CaseStudyCardNew from '../../components/CaseStudyCardNew/CaseStudyCardNew';
import { Link } from 'react-router';
import { caseStudyCardDataDummy } from '../../constants/caseStudyDummyData';

interface CaseStudy {
  title: string;
  description: string;
  imgSrc: string;
  pathName: string;
}

interface CaseStudyCategory {
  caseStudyLg?: CaseStudy[];
  caseStudySm?: CaseStudy[];
  caseStudyXs?: CaseStudy[];
}

interface CaseStudyData {
  [key: string]: CaseStudyCategory;
}

const CaseStudies: React.FC = () => {
  const [selectedChips, setSelectedChips] = useState(['All']);
  const [activeChips, setActiveChips] = useState<string[]>(['All']);

  const handleChipSelect = (chipLabel: string) => {
    if (chipLabel === 'All') {
      if (activeChips.includes('All')) {
        setActiveChips([]);
        setSelectedChips([]);
      } else {
        const allLabels = csChipData.map((chip) => chip.label);
        setActiveChips(allLabels);
        setSelectedChips(allLabels);
      }
    } else {
      setActiveChips((prevActive) => {
        const newActive = prevActive.includes(chipLabel)
          ? prevActive.filter((label) => label !== chipLabel)
          : [...prevActive, chipLabel];

        return newActive.includes('All')
          ? newActive.filter((c) => c !== 'All')
          : newActive;
      });

      setSelectedChips((prevSelected) => {
        const newSelected = prevSelected.includes(chipLabel)
          ? prevSelected.filter((label) => label !== chipLabel)
          : [...prevSelected, chipLabel];

        return newSelected.includes('All')
          ? newSelected.filter((c) => c !== 'All')
          : newSelected;
      });
    }
  };

  const filteredData = caseStudyCardDataDummy.filter((item) => {
    const key = Object.keys(item)[0];
    return selectedChips.some(
      (chip) => chip.toLowerCase() === key.toLowerCase()
    );
  });

  const extractCaseStudies = (
    data: CaseStudyData[],
    type: keyof CaseStudyCategory
  ): CaseStudy[] => {
    const allStudies = data.flatMap((appCategory) =>
      Object.values(appCategory).flatMap((app) => app[type] ?? [])
    );
    return Array.from(new Set(allStudies.map((cs) => JSON.stringify(cs)))).map(
      (cs) => JSON.parse(cs)
    );
  };

  const caseStudyLg = extractCaseStudies(filteredData, 'caseStudyLg');
  const caseStudySm = extractCaseStudies(filteredData, 'caseStudySm');
  const caseStudyXs = extractCaseStudies(filteredData, 'caseStudyXs');

  return (
    <div className='case-studies-container'>
      <div className='case-studies-header'>
        <span className='case-studies-header-creativity'>creativity</span>
        <div className='case-studies-header-divider'>
          <span className='with'>WITH</span>
          <img
            src={circle}
            alt='circle'
            style={{
              marginTop: '-75px',
              marginLeft: '-18px',
              marginRight: '-135px',
              width: '454px',
            }}
          />
        </div>
        <div className='case-studies-header-purpose'>
          <span>purpose</span>
        </div>
      </div>
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
            product.
          </span>
        </div>
        <Link to='/designprocess' style={{ textDecoration: 'none' }}>
          <button className='case-studies-open-document-button'>
            Open Document
            <img src={arrow} alt='arrow' />
          </button>
        </Link>
      </div>
      <div className='case-studies-footer'>
        <span className='case-studies-footer-text'>// Casestudies</span>
        <div className='cs-chip-container-holder'>
          {csChipData.map((eachChip, idx) => (
            <CsChip
              label={eachChip?.label}
              count={eachChip?.number}
              key={idx}
              handleChipSelect={handleChipSelect}
              chipActive={activeChips.includes(eachChip?.label)}
            />
          ))}
        </div>
      </div>
      <div className='cs-card-container'>
        {caseStudyLg.map((card, idx) => (
          <CaseStudyCardNew key={idx} data={card} />
        ))}
        <div className='cs-horz-container'>
          {caseStudySm?.map((card, idx) => (
            <CaseStudyCardNew key={idx} data={card} />
          ))}
        </div>
        <div className='cs-horz-container'>
          {caseStudyXs?.map((card, idx) => (
            <CaseStudyCardNew key={idx} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
