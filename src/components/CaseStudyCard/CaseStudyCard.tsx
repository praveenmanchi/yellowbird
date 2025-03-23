import React from 'react';
import arrow from '../../assets/forward-arrow.svg';
import figmaLogo from '../../assets/figma.svg';
import tool from '../../assets/micro-tool.svg';
import './casestudyCard.css';

interface Props {
  expertise?: boolean;
  microTool?: boolean;
  Casestudy?: boolean;
  img?: string;
}

const CasestudyCard: React.FC<Props> = ({
  expertise,
  microTool,
  Casestudy,
  img,
}: Props) => {
  return (
    <div
      className='case-study-card'
      style={{
        background: Casestudy ? '' : `linear-gradient(to bottom, gray, black)`,
      }}
    >
      <div
        className={!expertise ? 'case-study-content' : 'case-study-content-exp'}
      >
        <img src={img} alt='' style={{ width: '100%' }} />
        {!expertise && (
          <div className='case-study-header'>
            <span className='case-study-title'>INSIGHTS</span>
            <div className='case-study-meta'>
              <div className='case-study-date'>
                <h1 className='case-study-date-header'>5%</h1>
                <p className='case-study-date-desc'>
                  Increase in resume building
                </p>
              </div>
              <div className='case-study-date'>
                <h1 className='case-study-date-header'>5%</h1>
                <p className='case-study-date-desc'>
                  Increase in Click rates for Job Description and AI{' '}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className='case-study-details'
        style={{ backgroundColor: Casestudy ? '' : 'black' }}
      >
        <h5 className='case-study-company'>Abu Dhabi Executive Office</h5>
        <h2 className='case-study-description'>
          Help designers and developers create consistents
        </h2>
        <div className='case-study-info'>
          <div className='case-study-info-item'>
            <div className='case-study-info-header'>
              <span>Position</span>
              <span>Lead Designer</span>
            </div>
            {!expertise && (
              <div className='case-study-info-header'>
                <span>Expertise</span>
                <span>Design Systems</span>
              </div>
            )}
            <div className='case-study-info-header'>
              <span>Tools</span>
              <div>
                <img src={figmaLogo} alt='' className='case-study-logo' />
                {!microTool && (
                  <img src={tool} alt='' className='case-study-logo' />
                )}{' '}
              </div>
            </div>
          </div>
          <div className='case-study-button-container'>
            <button className='case-study-button'>
              READ CASE STUDY
              <img src={arrow} alt='' className='case-study-arrow' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasestudyCard;
