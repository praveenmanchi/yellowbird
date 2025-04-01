import React from 'react';
import './ResourceModal.css';
import CaseStudyModalCard from '../CaseStudyModalCard/CaseStudyModalCard';
// import cs from '../../assets/caseStudiesModal/cs.png';
import designboard from '../../assets/resource/Design.png';
import UXAI from '../../assets/resource/UI.png';
import iconboard from '../../assets/resource/iconboard.png';
import protiflio from '../../assets/resource/Portfolio.png';

const resourceModalData = [
  {
    img: designboard,
    chipContent: 'Design Board',
    title:
      'A central hub for all things UX/UI design! I curate a diverse collection of articles and resources, empowering learners from beginner  to advanced techniques to elevate your  journey.',
    date: false,
    read: false,
    link: 'http://designboard.club/',
  },
  {
    img: UXAI,
    chipContent: 'AI',
    title:
      'A generative AI tool (I call it UXAI) designed to assist UX/UI designers with inquiries, articles, and refined image searches to spark inspiration.',
      date: false,
      read: false,
    link: 'https://uxai.designboard.club/',
  },
  {
    img: iconboard,
    chipContent: 'UX/UI Icons',
    title:
      'A web app offering a vast collection of free icons for download, allowing you to use and reuse them without any attribution or fees.',
      date: false,
      read: false,
    link: 'https://www.iconboard.site/',
  },
  {
    img: protiflio,
    chipContent: 'Protiflio',
    title: 'The complete source code of my portfolio, along with detailed documentation, enabling you to understand, customize, and build your own version effortlessly.',
    date: false,
    read: false,
    link: 'https://praveenmanchi.netlify.app/',
  },
];

const ResourceModal: React.FC = () => {
  return (
    <div className='resource-modal-header'>
      <span className='resource-modal-title'>
        My Contributions to Community
      </span>
      <span className='resource-modal-description'>
        I'm always eager to test, learn, and put new ideas into practice. As
        part of this I have created few open source projects to help fellow
        designer. This are build by name using different tools, AI and YouTube
        classes.
      </span>
      <div className='recent-case-studies'>
        {resourceModalData?.map((eachCard, idx) => (
          <CaseStudyModalCard data={eachCard} key={idx} resource={true} />
        ))}
      </div>
    </div>
  );
};

export default ResourceModal;
