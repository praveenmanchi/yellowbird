import React from 'react';
import baxter from '../../assets/aboutMe/baxter.svg.svg';
import ge from '../../assets/aboutMe/ge.svg.svg';
import tatamotors from '../../assets/aboutMe/tatamotors.svg.svg';
import deloitte from '../../assets/aboutMe/deloitte.svg.svg';
import honda from '../../assets/aboutMe/honda.svg.svg';
import cortexai from '../../assets/aboutMe/cortexai.svg';
import sonyliv from '../../assets/aboutMe/sonyliv.svg';

import './AboutMe.css';
import Companies from '../../components/Companies/Companies';
import Human from '../../sections/Human/Human';
import AboutMeStory from '../../sections/AboutMeStory/AboutMeStory';
import { cardData } from '../../constants/aboutMeConstants';

const AboutMe: React.FC = () => {
  return (
    <>
      <div className='about-me'>
        <div className='about-me-content'>
          <span className='about-me-title'>How and Where I work(ed)</span>
          <h1 className='about-me-quote'>
            "I Do Everything With Passion To Bring Life & Designing cool UI
            screens is my super Power. Don't tell to anyone it's a secret"
          </h1>
          <p className='about-me-description'>
            Started from the original problem(s) and make sure we try to tackle
            the correct one(s) is essential to make sure we provide efficient
            solutions to users and businesses.
          </p>
          <div className='about-me-stats'>
            <div className='about-me-experience'>
              <span className='experience-years'>6.6 +</span>
              <span
                className='experience-description'
                style={{ width: '208px' }}
              >
                Years of experience In industry
              </span>
            </div>
            <div className='about-me-projects'>
              <div className='projects-stats'>
                <span className='experience-years' style={{ width: '128px' }}>
                  99 +
                </span>
                <span className='experience-description'>
                  Delivered Projects
                </span>
              </div>
              <span className='projects-description'>
                Industries where I had the chance to help users and companies
                with Source:cinema, bank, finance, industries where I had the
                chance to help users and companies with{' '}
              </span>
            </div>
          </div>
          <div className="about-me-logos-container">
  <div className="about-me-logos">
    <img src={baxter} alt="baxter" />
    <img src={ge} alt="ge" />
    <img src={tatamotors} alt="tatamotors" />
    <img src={deloitte} alt="deloitte" />
    <img src={honda} alt="honda" />
    <img src={cortexai} alt="cortexai" />
    <img src={sonyliv} alt="sonyliv" />
    {/* Duplicate for seamless looping */}
    <img src={baxter} alt="baxter" />
    <img src={ge} alt="ge" />
    <img src={tatamotors} alt="tatamotors" />
    <img src={deloitte} alt="deloitte" />
    <img src={honda} alt="honda" />
    <img src={cortexai} alt="cortexai" />
    <img src={sonyliv} alt="sonyliv" />
  </div>
</div>
        </div>
        <div>
          <Companies />
        </div>
      </div>
      <Human />
      <div className='about-me-stories'>
        {cardData.map((data, index) => (
          <AboutMeStory
            key={index}
            title={data.title}
            description={data.description}
            inspiration={data.inspiration}
            image={data.image}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMe;
