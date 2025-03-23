import React from 'react';
import './Blog.css';
import BlogMainCard from '../../components/BlogMainCard/BlogMainCard';
import BlogSmCard from '../../components/BlogSmCard/BlogSmCard';
import chipImg from '../../assets/blog/chip-img.png';

import ReadBlog from '../../components/ReadBlog/ReadBlog';

const blogsData = {
  mainBlogs: [
    {
      title: "The Psychology Behind Effective UX Design",
      description: "Explore the cognitive principles that make certain user interfaces intuitive and satisfying while others frustrate users. Learn how to apply psychological insights to create more engaging digital experiences.",
      date: "Nov 5, 2023",
      readTime: "8 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      title: "Design Systems: Building a Unified Digital Language",
      description: "How leading companies create cohesive user experiences through well-structured design systems. Discover the key components and implementation strategies for scalable design frameworks.",
      date: "Jan 18, 2024",
      readTime: "6 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
  ],
  smallBlogs: [
    {
      title: "Accessibility in UI Design: Creating Experiences for Everyone",
      date: "Feb 10, 2024",
      readTime: "5 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      title: "Micro-interactions: The Details That Define Great User Experiences",
      date: "Mar 15, 2024",
      readTime: "4 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      title: "Data Visualization in UX: Making Complex Information Accessible",
      date: "Jun 3, 2024",
      readTime: "6 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
    {
      title: "Emotional Design: Creating Interfaces That Connect",
      date: "Jul 22, 2024",
      readTime: "5 min",
      imgSrc: "https://media.nngroup.com/static/img/banners/home-consulting_2x.webp",
      link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
    },
  ],
  chipContent: {
    title: "The Convergence of UX Design and Machine Learning",
    subtitle: "As machine learning models become more sophisticated, they're increasingly influencing how designers approach user interfaces. This fusion is creating adaptive experiences that learn from user behavior while presenting new ethical considerations...",
    link: "https://open.substack.com/pub/praveenmanchi/p/amg-driving-academy-case-study?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
}


const Blog: React.FC = () => {
  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Blogs</h1>
      <p className='blog-description'>
        Looking for my portfolio? You’ll find here some shots of my most recent projects, an exhaustive list of all the projects I contributed to, as well as a few words about my role and my inspirations.
      </p>
      {blogsData.mainBlogs.map((blog, index) => (
        <BlogMainCard key={index} blog={blog} />
      ))}
      <div className='blog-sm-card-container'>
        {blogsData.smallBlogs.map((blog, index) => (
          <BlogSmCard key={index} blog={blog} />
        ))}
      </div>
      <div className='chip-img-container'>
        <img src={chipImg} alt='Chip' className='chip-img' />
        <div className='chip-img-overlay'>
          <div className='chip-img-content'>
            <h2 className='chip-img-title'>{blogsData.chipContent.title}</h2>
            <p className='chip-img-subtitle'>{blogsData.chipContent.subtitle}</p>
          </div>
          <div className='chip-img-read-blog'>
          <ReadBlog link={blogsData.chipContent.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;