import React from 'react';
import './Blog.css';
import BlogMainCard from '../../components/BlogMainCard/BlogMainCard';
import BlogSmCard from '../../components/BlogSmCard/BlogSmCard';
import chipImg from '../../assets/blog/chip-img.png';
import ReadBlog from '../../components/ReadBlog/ReadBlog';

const Blog: React.FC = () => {
  return (
    <div className='blog-container'>
      <span className='blog-title'>Blogs</span>
      <span className='blog-description'>
        Looking for my portfolio? You’ll find here some shots of my most recent
        projects, an exhaustive list of all the projects I contributed to, as
        well as a few words about my role and my inspirations.
      </span>
      <BlogMainCard />
      <div className='blog-sm-card-container'>
        <BlogSmCard />
        <BlogSmCard />
        <BlogSmCard />
        <BlogSmCard />
      </div>
      <div className='chip-img-container'>
        <img src={chipImg} alt='chip' className='chip-img' />
        <div className='chip-img-overlay'>
          <div className='chip-img-content'>
            <span className='chip-img-title'>
              The war over microchips is coming, says Chris Miller
            </span>
            <span className='chip-img-subtitle'>
              “When we think about technology, we think of social media, search
              engines, apps on our phone; but undergirding all of this are
              chips.”
            </span>
          </div>
          <div className='chip-img-read-blog'>
            <ReadBlog />
          </div>
        </div>
      </div>
      <div className='blog-main-card-container'>
        <BlogMainCard />
        <BlogMainCard />
        <BlogMainCard />
      </div>
    </div>
  );
};

export default Blog;
