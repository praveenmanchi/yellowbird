import React from 'react';
import './BlogMainCard.css';
import blogImg from '../../assets/blog/blog-main-card.png';
import Chip from '../Chip/Chip';
import ReadBlog from '../ReadBlog/ReadBlog';

const BlogMainCard: React.FC = () => {
  return (
    <div className='blog-main-card'>
      <img src={blogImg} alt='blog' className='blog-main-card-img' />
      <div className='blog-main-card-content'>
        <span className='blog-main-card-title'>
          How the Internet Archive’s “Free Digital Library” fell to the “fair
          use” test
        </span>
        <span className='blog-main-card-description'>
          People need to anticipate the revolution that’s coming in how humans
          and AI willthat’s coming in how humans and AI willthat’s coming in how
          humans and AI willthat’s coming in how humans and AI willthat’s coming
          in how humans and AI willthat’s coming in how humans and AI willthat’s
          coming in how humans and AI will People need to anticipate the
          revolution that’s coming in how humans and AI willthat’s coming in how
          humans and AI willthat’s coming in how humans and AI willthat’s coming
          in
        </span>
        <div className='case-study-comp-date'>
          Nov 12, 2024 —
          <span className='case-study-comp-read-time'>7 min read </span>
        </div>
        <div className='blog-main-card-footer'>
          <div className='blog-main-card-chips'>
            <Chip />
            <Chip />
            <Chip />
          </div>
          <ReadBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogMainCard;
