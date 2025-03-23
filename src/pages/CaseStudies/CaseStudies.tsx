import React from 'react';
import './CaseStudies.css';
import arrow from '../../assets/caseStudiesModal/white-arrow.svg';
import CsChip from '../../components/CsChip/CsChip';
import { csChipData } from '../../constants/csConstants';
import CasestudyCard from '../../components/casestudyCard/casestudyCard';
import circle from '../../assets/circle.svg';
import csLg from '../../assets/caseStudies/cs-bg-lg.png';
import csSm from '../../assets/caseStudies/cs-bg-sm.png';

const CaseStudies: React.FC = () => {
  // const [selectedChips, setSelectedChips] = useState(['web app']);

  // const handleChipSelect = (chipLabel: string) => {
  //   console.log(chipLabel);
  //   setSelectedChips((prevSelected: any) =>
  //     prevSelected.includes(chipLabel)
  //       ? prevSelected.filter((label) => label !== chipLabel)
  //       : [...prevSelected, chipLabel]
  //   );
  // };
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
              // onClick={() => handleChipSelect(eachChip.label)}
            />
          ))}
        </div>
      </div>
      <div className='cs-card-container'>
        <CasestudyCard img={csLg} />
        <div className='cs-horz-container'>
          <CasestudyCard expertise={true} img={csSm} />
          <CasestudyCard expertise={true} img={csSm} />
        </div>
        <CasestudyCard img={csLg} />
      </div>
    </div>
  );
};

export default CaseStudies;
