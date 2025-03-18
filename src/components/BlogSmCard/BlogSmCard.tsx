import React from 'react';
import './BlogSmCard.css';
import img from '../../assets/blog/blo-sm-card.png';
import Chip from '../Chip/Chip';
import ReadBlog from '../ReadBlog/ReadBlog';

const BlogSmCard: React.FC = () => {
  return (
    <div className='blog-sm-card'>
      <img src={img} alt='blog' className='blog-sm-card-img' />
      <span className='blog-sm-card-title'>
        The West needs more water. This Nobel winner may have the answer.
      </span>
      <div className='case-study-comp-date'>
        Nov 12, 2024 —
        <span className='case-study-comp-read-time'>7 min read </span>
      </div>
      <div className='blog-sm-card-footer'>
        <Chip />
        <ReadBlog />
      </div>
    </div>
  );
};

export default BlogSmCard;
