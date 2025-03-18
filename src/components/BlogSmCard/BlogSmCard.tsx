import React from 'react';
import './BlogSmCard.css';
import Chip from '../Chip/Chip';
import ReadBlog from '../ReadBlog/ReadBlog';

interface BlogSmCardProps {
  blog: {
    title: string;
    date: string;
    readTime: string;
    imgSrc: string;
    link: string;
  };
}

const BlogSmCard: React.FC<BlogSmCardProps> = ({ blog }) => {
  return (
    <div className='blog-sm-card'>
      <img src={blog.imgSrc} alt='blog' className='blog-sm-card-img' />
      <h3 className='blog-sm-card-title'>{blog.title}</h3>
      <div className='case-study-comp-date'>
        {blog.date} —
        <span className='case-study-comp-read-time'>{blog.readTime}</span>
      </div>
      <div className='blog-sm-card-footer'>
        <Chip />
<ReadBlog link={blog.link} />
      </div>
    </div>
  );
};

export default BlogSmCard;