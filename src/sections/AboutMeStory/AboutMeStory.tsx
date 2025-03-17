import React from 'react';
import './AboutMeStory.css';

interface Props {
  title: string;
  description: string;
  inspiration: string;
  image: string;
}

const AboutMeStory: React.FC<Props> = ({
  title,
  description,
  inspiration,
  image,
}: Props) => {
  return (
    <div className='about-me-story'>
      <img src={image} alt='story' className='about-me-story__image' />
      <span className='about-me-story__title'>{title}</span>
      <span className='about-me-story__description'>{description}</span>
      <span className='about-me-story__inspiration'>{inspiration}</span>
    </div>
  );
};

export default AboutMeStory;
