import React from 'react';
import arrow from '../../assets/forward-arrow.svg';
import figmaLogo from '../../assets/figma.svg';
import tool from '../../assets/micro-tool.svg';
import { Link } from 'react-router-dom'; // ✅ Corrected import
import './CaseStudyCardHome.css';

interface Props {
  expertise?: boolean;
  microTool?: boolean;
  Casestudy?: boolean;
  img?: string;
  onClick?: () => void; // ✅ Added click handler
  data?: {
    insight?: boolean;
    insight1?: string;
    insight1Desc?: string;
    insight2?: string;
    insight2Desc?: string;
    title?: string;
    description?: string;
    position?: string;
    tools?: string;
    imgSrc?: string;
    link?: string;
    pathName?: string;
    video?: string;
    client?: string;
  };
}

const CaseStudyCardHome: React.FC<Props> = ({
  expertise,
  microTool,
  data,
  onClick, // ✅ Handle it
}: Props) => {
  return (
    <Link
      to={`/casestudies/${data?.pathName}`}
      style={{ textDecoration: 'none' }}
      onClick={onClick} // ✅ Track the click
    >
      <div className='case-study-card'>
        <div
          className={
            !expertise ? 'case-study-content' : 'case-study-content-exp'
          }
          style={{ position: 'relative' }}
        >
          {!data?.video && (
            <img
              src={data?.imgSrc}
              alt=''
              style={{
                width: '100%',
              }}
            />
          )}
          {data?.video && (
            <video
              src={data?.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '596px',
                objectFit: 'cover',
              }}
            />
          )}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, 1) 100%)`,
            }}
          ></div>

          <div className='case-study-home-position-container'>
            <div className='case-study-header-home'>
              {data?.insight && (
                <span className='case-study-title'>INSIGHTS</span>
              )}
              <div className='case-study-meta'>
                <div className='case-study-date'>
                  <h1 className='case-study-date-header'>{data?.insight1}</h1>
                  <p className='case-study-date-desc'>{data?.insight1Desc}</p>
                </div>
                <div className='case-study-date'>
                  <h1 className='case-study-date-header'>{data?.insight2}</h1>
                  <p className='case-study-date-desc'>{data?.insight2Desc}</p>
                </div>
              </div>
            </div>
            <div className='case-study-details'>
              <span className='case-study-description'>{data?.title}</span>
              <span className='case-study-company '>{data?.description}</span>
              <div className='case-study-info'>
                <div className='case-study-info-item'>
                  <div className='case-study-info-header'>
                    <span>Position</span>
                    <span>{data?.position}</span>
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
                      )}
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
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCardHome;
