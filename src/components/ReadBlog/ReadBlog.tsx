import React from 'react';
import img from '../../assets/blog/know-more.svg';
import './ReadBlog.css';

const ReadBlog: React.FC = () => {
  return (
    <button className='read-blog-button'>
      Read Blog
      <img src={img} alt='read blog' />
    </button>
  );
};

export default ReadBlog;
