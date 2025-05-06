import React from 'react';
import arrow from '../../assets/forward-arrow.svg';
import figmaLogo from '../../assets/figma.svg';
import excel from '../../assets/caseStudiesDetails/excel-4.svg';
import Miro from '../../assets/caseStudiesDetails/miro-2.svg';
import Perplexity from '../../assets/caseStudiesDetails/perplexity.svg';
import sketch from '../../assets/caseStudiesDetails/sketch-2.svg.svg';
import invision from '../../assets/caseStudiesDetails/invision.svg.svg';
import tool from '../../assets/micro-tool.svg';
import { Link } from 'react-router-dom';
import './CaseStudyCardHome.css';

const toolIcons: { [key: string]: string } = {
  figma: figmaLogo,
  excel,
  Miro,
  Perplexity,
  sketch,
  invision,
  default: tool,
};

interface Props {
  expertise?: boolean;
  microTool?: boolean;
  Casestudy?: boolean;
  img?: string;
  onClick?: () => void;
  data?: {
    insight?: boolean;
    insight1?: string;
    insight1Desc?: string;
    insight2?: string;
    insight2Desc?: string;
    title?: string;
    description?: string;
    position?: string;
    tools?: string[];
    imgSrc?: string;
    link?: string;
    pathName?: string;
    video?: string;
    client?: string;
    expertise?: string;
  };
}

const CaseStudyCardHome: React.FC<Props> = ({ expertise, microTool, data, onClick }) => {
  return (
    <Link
      to={`/casestudies/${data?.pathName}`}
      style={{ textDecoration: 'none' }}
      onClick={onClick}
    >
      <div className='case-study-card'>
        <div
          className={!expertise ? 'case-study-content' : 'case-study-content-exp'}
          style={{ position: 'relative' }}
        >
          {!data?.video ? (
            <img src={data?.imgSrc} alt='' style={{ width: '100%' }} />
          ) : (
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
              {data?.insight && <span className='case-study-title'>INSIGHTS</span>}
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
              <span className='case-study-company'>{data?.description}</span>
              <div className='case-study-info'>
                <div className='case-study-info-item'>
                  <div className='case-study-info-header'>
                    <span>Position</span>
                    <span>{data?.position}</span>
                  </div>
                  {data?.client && (
                    <div className='case-study-info-header'>
                      <span>Client</span>
                      <span>{data.client}</span>
                    </div>
                  )}
                  {data?.expertise && (
                    <div className='case-study-info-header'>
                      <span>Expertise</span>
                      <span>{data.expertise}</span>
                    </div>
                  )}
                  <div className='case-study-info-header'>
                    <span>Tools</span>
                    <div>
                      {(data?.tools || []).map((tool, idx) => (
                        <img
                          key={idx}
                          src={toolIcons[tool] || toolIcons.default}
                          alt={tool}
                          className='case-study-logo'
                        />
                      ))}
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
