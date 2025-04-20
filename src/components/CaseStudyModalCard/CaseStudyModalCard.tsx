import React from 'react';
import arrow from '../../assets/caseStudiesModal/cs-arrow.svg';
import icon from '../../assets/resource/resource-view-icon.svg';
import './CaseStudyModalCard.css';
import { Link } from 'react-router-dom';

interface Props {
  data: {
    img: string;
    chipContent: string;
    title: string;
    date: string;
    read: string;
    link?: string;
    pathName: string;
    lock?: boolean;
    client?: string;
  };
  resource?: boolean;
}

const CaseStudyModalCard: React.FC<Props> = ({ data, resource }) => {
  const isLocked = data.lock === true;
  const finalPath = data.pathName;

  const linkTo = isLocked && finalPath
  ? `/passcode?redirect=/casestudies/${finalPath}`
  : `/casestudies/${finalPath}`;


  console.log('🧭 Link generated for', data.title, ':', linkTo);

  return (
    <div className='case-study-comp' style={{ width: resource ? '25%' : '' }}>
      <div className='case-study-comp-header'>
        <img src={data.img} alt='cs' className='case-study-comp-image' />
        <div className='case-study-comp-title'>{data.chipContent}</div>
        <span className='case-study-comp-description'>{data.title}</span>
        <div className='case-study-comp-date date'>
          {data.date}
          <span className='case-study-comp-read-time time'>{data.read}</span>
        </div>
      </div>

      <div className='case-study-comp-footer'>
        <Link to={linkTo} className='case-study-comp-footer comp-footer-link'>
          {isLocked && <span style={{ marginRight: '6px' }}>🔒</span>}
          View
          <img
            src={resource ? icon : arrow}
            alt='arrow'
            className='case-study-comp-arrow'
          />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyModalCard;
