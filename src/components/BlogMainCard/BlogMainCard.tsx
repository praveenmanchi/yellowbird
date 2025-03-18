import React from 'react';
import './BlogMainCard.css';
import Chip from '../Chip/Chip';
import ReadBlog from '../ReadBlog/ReadBlog';

interface BlogMainCardProps {
  blog: {
    title: string;
    description: string;
    date: string;
    readTime: string;
    imgSrc: string;
    link: string;
  };
}

const BlogMainCard: React.FC<BlogMainCardProps> = ({ blog }) => {
  return (
    <div className='blog-main-card'>
      <img src={blog.imgSrc} alt='blog' className='blog-main-card-img' />
      <div className='blog-main-card-content'>
        <h2 className='blog-main-card-title'>{blog.title}</h2>
        <p className='blog-main-card-description'>{blog.description}</p>
        <div className='case-study-comp-date'>
          {blog.date} —
          <span className='case-study-comp-read-time'>{blog.readTime}</span>
        </div>
        <div className='blog-main-card-footer'>
          <div className='blog-main-card-chips'>
            <Chip />
            <Chip />
            <Chip />
          </div>
<ReadBlog link={blog.link} />
        </div>
      </div>
    </div>
  );
};

export default BlogMainCard;
