import React from 'react';
import { useParams } from 'react-router-dom';
import csBanner from '../../assets/caseStudiesDetails/cs-banner.png';
import chain from '../../assets/caseStudiesDetails/chain.svg';
import dots from '../../assets/caseStudiesDetails/dots.svg';
import figma from '../../assets/caseStudiesDetails/figma-1.svg.svg';
import xd from '../../assets/caseStudiesDetails/adobe-xd-2.svg.svg';
import sketch from '../../assets/caseStudiesDetails/sketch-2.svg.svg';
import invision from '../../assets/caseStudiesDetails/invision.svg.svg';
import benzBanner from '../../assets/caseStudyImages/benz/banner_benz.png';
import benzImg1 from '../../assets/caseStudyImages/benz/1.png';
import benzImg2 from '../../assets/caseStudyImages/benz/2.png';
import benzImg3 from '../../assets/caseStudyImages/benz/3.png';
import benzImg4 from '../../assets/caseStudyImages/benz/4.png';
import benzImg5 from '../../assets/caseStudyImages/benz/5.png';
import benzImg6 from '../../assets/caseStudyImages/benz/6.png';
import benzImg7 from '../../assets/caseStudyImages/benz/7.png';
import benzImg8 from '../../assets/caseStudyImages/benz/8.png';
import benzImg9 from '../../assets/caseStudyImages/benz/9.png';
import './caseStudyDetails.css';

const caseStudies = {
  bestornothing: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468',
    },
    {
      template: 'image',
      imgSrc: benzImg2,
    },

    {
      template: 'image',
      imgSrc: benzImg3,
    },

    {
      template: 'image',
      imgSrc: benzImg4,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468',
    },
  ],
  nobroker: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468',
    },
    {
      template: 'image',
      imgSrc: benzImg2,
    },

    {
      template: 'image',
      imgSrc: benzImg3,
    },

    {
      template: 'image',
      imgSrc: benzImg4,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468',
    },
  ],
  ciscofoods: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
  paysafe: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
  lms: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
  instrumentcluster: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
  abc: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
  infoentertainment: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'AMG Driving Academy Case Study',
      description:
        'A deep dive into the user experience design process for AMG Driving Academy, including research, wireframing, and UI prototyping.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: benzImg1,
    },
  ],
};

const CaseStudyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return <h2>Case Study Not Found</h2>;
  }

  return (
    <div className='case-study-details-container'>
      {caseStudy?.map((eachSec, idx) => {
        return (
          <>
            {eachSec?.template === 'image' && (
              <img
                className='case-study-details-banner-img'
                src={eachSec?.imgSrc}
                alt=''
              />
            )}

            {eachSec?.template === 'content' && (
              <div className='case-study-details-content'>
                <div className='case-study-details-header'>
                  <span className='case-study-details-title'>
                    {eachSec.title}
                  </span>
                  <div className='case-study-details-link-container'>
                    <div className='link-container'>
                      <img src={chain} alt='' />
                    </div>
                    <div className='link-container'>
                      <img src={dots} alt='' />
                    </div>
                  </div>
                </div>
                <div className='case-study-details-footer'>
                  <div className='footer-section-desc'>
                    {eachSec.description}
                  </div>
                  <div className='footer-section-desc-icons'>
                    <img src={figma} alt='' className='desc-icon' />
                    <img src={xd} alt='' className='desc-icon' />
                    <img src={sketch} alt='' className='desc-icon' />
                    <img src={invision} alt='' className='desc-icon' />
                  </div>
                </div>
              </div>
            )}

            {eachSec?.template === 'iframe' && (
              <div className='design-process-miro-board'>
                <iframe
                  src={eachSec?.srcUrl}
                  width='100%'
                  height='800'
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default CaseStudyDetails;
