import React from 'react';
import './Blog.css';
import BlogMainCard from '../../components/BlogMainCard/BlogMainCard';
import BlogSmCard from '../../components/BlogSmCard/BlogSmCard';
import chipImg from '../../assets/blog/chip-img.png';
import ReadBlog from '../../components/ReadBlog/ReadBlog';
// import Chip from '../../components/Chip/Chip';

import { useArticleSEO } from '../../hooks/useSEO';

const blogsData = {
  mainBlogs: [
    {
      title: 'UX/UI Design Errors That Cost Millions and Risk Lives: Real Lessons from Major Failures',
      description:
        'When UX/UI design fails, sometimes repercussions go far beyond aesthetics and they impact revenue, compromise user safety, and can even result in fatal consequences. The following real-world examples reveal how crucial thoughtful design is across diverse sectors, from finance and e-commerce to aviation and military operations. In todays digital landscape, effective user experience (UX) and user interface (UI) design are indispensable. Poor design choices lead to severe financial and operational consequences, erode trust, and put lives at risk. Here’s a closer look at high-profile UX/UI failures and the essential lessons they offer for creating safer, more effective products.',
      date: 'November 3, 2024',
      readTime: '8 min',
      imgSrc:
        'https://media.licdn.com/dms/image/v2/D5612AQGdrygPINWMEA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730635394592?e=1749081600&v=beta&t=XkZoR4VeNX4v6dFlLJiMW2hJu6UGjEd8XGxw6B-DSC8',
      link: 'https://www.linkedin.com/pulse/uxui-design-errors-cost-millions-risk-lives-real-lessons-manchi-d6boc',
      chipLabel: 'UX Design',
    },
    {
      title: 'Streamlining UI Development: Building Robust Design Systems with Figma and Storybook',
      description:
        'In today fast-paced digital product landscape, design systems have become essential frameworks for creating cohesive and efficient user experiences. As product teams scale and digital footprints expand, maintaining consistency while accelerating development becomes increasingly challenging. Two powerful tools, Figma and Storybook, have emerged as the backbone of modern design system implementation.',
      date: 'Jan 18, 2024',
      readTime: '6 min',
      imgSrc:
        'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa3f27112-6155-4db5-82a4-744ffe799105_1024x512.webp',
      link: 'https://open.substack.com/pub/praveenmanchi/p/streamlining-ui-development-building?r=4yhy4f&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false',
      chipLabel: 'Design Systems',
    },
  ],
  smallBlogs: [
    {
      title: 'Accessibility in UI Design: Creating Experiences for Everyone',
      date: 'Feb 10, 2024',
      readTime: '5 min',
      imgSrc:
        'https://img.uxcel.com/tags/accessibility-1689755278465-2x.jpg',
      link: 'https://uxplanet.org/accessibility-in-ui-design-2024-guide',
      chipLabel: 'UI Design',
    },
    {
      title:
        'Micro-interactions: The Details That Define Great User Experiences',
      date: 'Mar 15, 2024',
      readTime: '4 min',
      imgSrc:
        'https://studio.uxpincdn.com/studio/wp-content/uploads/2021/09/Powerful-microinteractions-to-improve-your-prototypes.png.webp',
      link: 'https://uxdesign.cc/microinteractions-ui-ux-design-trends',
      chipLabel: 'UI Design',
    },
    {
      title: 'Data Visualization in UX: Making Complex Information Accessible',
      date: 'Jun 3, 2024',
      readTime: '6 min',
      imgSrc:
        'https://cdn.prod.website-files.com/61488f4f65be16b5ebbd450b/65ccf46815bed164ee78bf65_Header_(5).webp',
      link: 'https://www.smashingmagazine.com/2024/06/data-visualization-ux-design/',
      chipLabel: 'UI Design',
    },
    {
      title: 'Emotional Design: Creating Interfaces That Connect',
      date: 'Jul 22, 2024',
      readTime: '5 min',
      imgSrc:
        'https://www.uxdesigninstitute.com/blog/wp-content/uploads/2023/07/266_microinteractions_ui_design_illustration_blog-1.png',
      link: 'https://uxplanet.org/emotional-design-interfaces-2024',
      chipLabel: 'UI Design',
    },
  ],
  chipContent: {
    title: 'The Convergence of UX Design and Machine Learning',
    subtitle:
      "As machine learning models become more sophisticated, they're increasingly influencing how designers approach user interfaces. This fusion is creating adaptive experiences that learn from user behavior while presenting new ethical considerations...",
    link: 'https://uxmag.com/articles/the-convergence-of-ux-design-and-machine-learning-2024',
    imgSrc:
        'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/thumbnail/9c44a4e7-57d6-4a68-b7bd-bfa05a8ea08d/landscape_newsletterbanner.png',
    chipLabel: 'UX Design',
  },
};

const Blog: React.FC = () => {
  useArticleSEO(undefined, blogsData.mainBlogs[0]); // Use SEO hook for article/blog

  return (
    <div className='blog-container'>
      <h1 className='blog-title'>Blogs</h1>
      <p className='blog-description'>
        Looking for my portfolio? You’ll find here some shots of my most recent
        projects, an exhaustive list of all the projects I contributed to, as
        well as a few words about my role and my inspirations.
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
            <p className='chip-img-subtitle'>
              {blogsData.chipContent.subtitle}
            </p>
          </div>
          <div className='chip-img-read-blog'>
            {/* <Chip label={blogsData.chipContent?.chipLabel} /> */}
            <ReadBlog link={blogsData.chipContent.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
