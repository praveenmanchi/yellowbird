import React, { useRef } from 'react';
import arrow from '../../assets/my-space-arrow.svg';
import './MySpaceCard.css';
import { Link } from 'react-router';
import { gsap } from 'gsap';

interface Card {
  title: string;
  backgroundColor: string;
  image: string;
  description: string;
  link: string;
}

interface Props {
  card: Card;
}

const MySpaceCard: React.FC<Props> = ({ card }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const arrowRef = useRef<HTMLImageElement>(null);

  const handleCardMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1.12, duration: 0.35, ease: 'power2.out' });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 10, duration: 0.25, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    }
  };

  const handleCardMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1, duration: 0.35, ease: 'power2.in' });
    }
    if (arrowRef.current) {
      gsap.to(arrowRef.current, { x: 0, duration: 0.25, ease: 'power1.in' });
    }
  };

  return (
    <Link
      to={card?.link}
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
      className='my-space-card-link'
    >
      <div
        className='my-space-card'
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        <h1 className='my-space-card__title'>{card.title}</h1>
        <div
          className='my-space-card__content'
          style={{ backgroundColor: card.backgroundColor }}
        >
          <img
            className='my-space-card__image'
            src={card.image}
            alt=''
            ref={imageRef}
            style={{ transition: 'transform 0.25s' }}
          />
          <div className='my-space-card__arrow-container'>
            <img
              className='my-space-card__arrow'
              src={arrow}
              alt=''
              ref={arrowRef}
              style={{ transition: 'transform 0.2s' }}
            />
          </div>
        </div>
        <p className='my-space-card__description'>{card.description}</p>
      </div>
    </Link>
  );
};

export default MySpaceCard;
