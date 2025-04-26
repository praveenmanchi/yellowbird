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
    date?: string;
    read?: string;
    link: string;
  };
  resource?: boolean;
}

const CaseStudyModalCard: React.FC<Props> = ({ data, resource }) => {
  const isInternalLink = data.link.startsWith('/');

  if (!data?.link || data.link === 'undefined') return null;

  return (
    <div className='case-study-comp'>
      <div className='case-study-comp-header'>
        <img
          src={data?.img}
          alt={`${data?.chipContent} preview`}
          className='case-study-comp-image'
        />
        <div className='case-study-comp-title'>{data?.chipContent}</div>
        <span className='case-study-comp-description'>{data?.title}</span>

        {(data?.date || data?.read) && (
          <div className='case-study-comp-date date'>
            {data?.date}
            <span className='case-study-comp-read-time time'>{data?.read}</span>
          </div>
        )}
      </div>

      {data?.link && (
        <div className='case-study-comp-footer'>
          {isInternalLink ? (
            <Link to={data.link} className='comp-footer-link'>
              <span>View</span>
              <img
                src={resource ? icon : arrow}
                alt='arrow'
                className='case-study-comp-arrow'
              />
            </Link>
          ) : (
            <a
              href={data.link}
              target='_blank'
              rel='noopener noreferrer'
              className='comp-footer-link'
            >
              <span>View</span>
              <img
                src={resource ? icon : arrow}
                alt='arrow'
                className='case-study-comp-arrow'
              />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudyModalCard;
