import React, { useState } from 'react';
import img from '../../assets/blog/know-more.svg';
import './ReadBlog.css';

interface ReadBlogProps {
  link: string;
}

const ReadBlog: React.FC<ReadBlogProps> = ({ link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const openBlog = () => {
    window.open(link, '_blank');
  };

  return (
    <button 
      className={`read-blog-button ${isHovered ? 'hovered' : ''}`}
      onClick={openBlog}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Read Blog
      <img src={img} alt='read blog' className={isHovered ? 'hovered-img' : ''} />
    </button>
  );
};

export default ReadBlog;
