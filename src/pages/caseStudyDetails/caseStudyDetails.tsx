import React from 'react';
import { useParams } from 'react-router-dom';
import './caseStudyDetails.css';

import chain from '../../assets/caseStudiesDetails/chain.svg';
import dots from '../../assets/caseStudiesDetails/dots.svg';
import figma from '../../assets/caseStudiesDetails/figma-1.svg.svg';
import xd from '../../assets/caseStudiesDetails/adobe-xd-2.svg.svg';
import sketch from '../../assets/caseStudiesDetails/sketch-2.svg.svg';
import invision from '../../assets/caseStudiesDetails/invision.svg.svg';

import benzImg1 from '../../assets/caseStudyImages/benz/1.png';
import benzImg2 from '../../assets/caseStudyImages/benz/2.png';
import benzImg3 from '../../assets/caseStudyImages/benz/3.png';
import benzImg4 from '../../assets/caseStudyImages/benz/4.png';
import benzImg5 from '../../assets/caseStudyImages/benz/5.png';
import benzImg6 from '../../assets/caseStudyImages/benz/6.png';
import benzImg7 from '../../assets/caseStudyImages/benz/7.png';
import benzImg8 from '../../assets/caseStudyImages/benz/8.png';
import benzImg9 from '../../assets/caseStudyImages/benz/9.png';

import nobrokerbanner from '../../assets/caseStudyImages/nobroker/nobroker_banner.jpg';
import nobroker1 from '../../assets/caseStudyImages/nobroker/1.jpg';
import nobroker2 from '../../assets/caseStudyImages/nobroker/2.jpg';
import nobroker3 from '../../assets/caseStudyImages/nobroker/3.jpg';
import nobroker4 from '../../assets/caseStudyImages/nobroker/4.jpg';
import nobroker5 from '../../assets/caseStudyImages/nobroker/5.jpg';
import nobroker6 from '../../assets/caseStudyImages/nobroker/6.jpg';
import nobroker7 from '../../assets/caseStudyImages/nobroker/7.jpg';

import paysaf1 from '../../assets/caseStudyImages/pay/1.jpg';
import paysaf2 from '../../assets/caseStudyImages/pay/2.jpg';
import paysaf3 from '../../assets/caseStudyImages/pay/3.jpg';
import paysaf4 from '../../assets/caseStudyImages/pay/4.jpg';
import paysaf5 from '../../assets/caseStudyImages/pay/5.jpg';
import paysaf6 from '../../assets/caseStudyImages/pay/6.jpg';
// import paysaf7 from '../../assets/caseStudyImages/pay/7.jpg';
import paysaf8 from '../../assets/caseStudyImages/pay/8.jpg';
import paysaf9 from '../../assets/caseStudyImages/pay/9.jpg';

import ciscobanner from '../../assets/caseStudyImages/cisco/banner_cisco.png';
import cisco1 from '../../assets/caseStudyImages/cisco/home-1.png';
import cisco2 from '../../assets/caseStudyImages/cisco/home-2.png';
import cisco3 from '../../assets/caseStudyImages/cisco/home-3.png';
import cisco4 from '../../assets/caseStudyImages/cisco/home-4.png';
import cisco5 from '../../assets/caseStudyImages/cisco/home-5.png';
import cisco6 from '../../assets/caseStudyImages/cisco/home-6.png';

import LMS1 from '../../assets/caseStudyImages/mue-zero/mue-1-min.jpeg';
import LMS2 from '../../assets/caseStudyImages/mue-zero/mue22.png';

import car1 from '../../assets/caseStudyImages/Instrumentcluster/innns.png';
import car2 from '../../assets/caseStudyImages/Instrumentcluster/instrument cluster .jpg';
// import car3 from '../../assets/caseStudyImages/Instrumentcluster/instrument cluster_small.png';

import abc1 from '../../assets/caseStudyImages/abc/abc-1.png';
import abc2 from '../../assets/caseStudyImages/abc/abc-2.png';
import abc3 from '../../assets/caseStudyImages/abc/abc-3.png';
import abc4 from '../../assets/caseStudyImages/abc/abc-4.png';
// import abc5 from '../../assets/caseStudyImages/abc/group2.png';

import flightbanner from '../../assets/caseStudyImages/informatica/air-1.png';
// import flight2 from '../../assets/caseStudyImages/informatica/air-2.png';
import flight3 from '../../assets/caseStudyImages/informatica/airfull.png';

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
        'AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event. AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
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
        'https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556934523919&embedId=634206250766',
    },
    {
      template: 'image',
      imgSrc: benzImg5,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556935056038&embedId=347979214595',
    },
    {
      template: 'image',
      imgSrc: benzImg6,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556930073563&embedId=228051356671',
    },
    {
      template: 'image',
      imgSrc: benzImg7,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk5F1bQ0lJCJXdz3XWBp2ci%2FDo-best-or-nothing%3Ftype%3Ddesign%26node-id%3D1%253A2%26t%3DrQA5nrTDnCorjyp5-1',
    },
    {
      template: 'image',
      imgSrc: benzImg8,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk5F1bQ0lJCJXdz3XWBp2ci%2FDo-best-or-nothing%3Fpage-id%3D1%253A2%26type%3Ddesign%26node-id%3D1-224424%26viewport%3D370%252C626%252C0.02%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A224424%26show-proto-sidebar%3D1',
    },
    {
      template: 'image',
      imgSrc: benzImg9,
    },
  ],


  nobroker: [
    {
      template: 'image',
      imgSrc: nobrokerbanner,
    },
    {
      template: 'content',
      title: 'NoBroker Heuristic Evaluation',
      description:
        'Create a seamless and user-friendly a new user experience to occupy a new flat, house or any property and also a brokerage-free proptech company that provides all sorts of real estate services under marketplace, which includes buying, renting, packers & movers, and home services Re-designing a new user experience to occupy a new flat, house or any property at https://www.nobroker.in/ (Personal Casestudy, not affiliated with any company)',
      category: 'Web App',
      client: 'NDA',
      tools: [figma, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: nobroker1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FXIoJ5Y3lSvZwElq91Qt5Zm%2FNobroker-1%3Fnode-id%3D1-2%26t%3DA25AaWvBIegF0nC2-1',
    },
    {
      template: 'image',
      imgSrc: nobroker2,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FG5TFaKvKVEjmALWDicSR0B%2FNobroker-2%3Fnode-id%3D1-40%26t%3DOFm7CAKqy3JQMcBy-1',
    },
    {
      template: 'image',
      imgSrc: nobroker3,
    },
    {
      template: 'image',
      imgSrc: nobroker4,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FQZ2W2epOOx4rHOH1bRk0bI%2FNobroker-UI%3Fnode-id%3D1-28871%26t%3DDDEZqQbGMtQ1ZwkX-1',
    },
    {
      template: 'image',
      imgSrc: nobroker5,
    },
    {
      template: 'image',
      imgSrc: nobroker6,
    },

    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FQZ2W2epOOx4rHOH1bRk0bI%2FNobroker-UI%3Fnode-id%3D1-2%26t%3DDDEZqQbGMtQ1ZwkX-1',
    },

    {
      template: 'image',
      imgSrc: nobroker7,
    },
  ],




  
  paysafe: [
    {
      template: 'image',
      imgSrc: paysaf1,
    },
    {
      template: 'content',
      title: 'Paysafe',
      description:
        'Create a seamless and user-friendly payment process for both web and mobile applications, enabling users to pay their utility bills efficiently and securely.',
      category: 'Web App',
      client: 'Paysafe',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: paysaf2,
    },
    {
      template: 'image',
      imgSrc: paysaf3,
    },
    {
      template: 'image',
      imgSrc: paysaf4,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVMxj4NnI=/?moveToViewport=-19662,-18222,33319,19690&embedId=882233882431',
    },
    {
      template: 'image',
      imgSrc: paysaf5,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVMxj4NnI=/?moveToViewport=-19662,-18222,33319,19690&embedId=882233882431',
    },
    {
      template: 'image',
      imgSrc: paysaf6,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/embed/uXjVO6G7kMw=/?pres=1&frameId=3458764556935056038&embedId=347979214595',
    },
    {
      template: 'image',
      imgSrc: paysaf8,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fs2Q3P2KtgvsjxH9BHQ6Y0U%2FPayments-case-study-(Community)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DdeBDDzKyPqdyTpNB-1',
    },
    {
      template: 'image',
      imgSrc: paysaf9,
    },

  ],


  ciscofoods: [
    {
      template: 'image',
      imgSrc: ciscobanner,
    },
    {
      template: 'content',
      title: 'Food Delivery Website for the senior citizens',
      description:
        'showcases a thoughtfully designed food delivery website tailored to the unique needs and preferences of senior citizens in India. With accessibility at the forefront, the proposed solution aims to create an inclusive and seamless online experience for this often overlooked demographic. Through meticulous research and user understanding, the presentation delves into the challenges faced by seniors when navigating digital platforms, such as vision, hearing, and motor capability limitations. It explores creative solutions to address these barriers, ensuring that the website is not only functional but also intuitive and enjoyable to use.',
      category: 'Web App',
      client: 'Benz',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: cisco1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVOKM2BcA=/?moveToViewport=118,-1002,13929,6484',
    },
    {
      template: 'image',
      imgSrc: cisco2,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVOKM2BcA=/?moveToViewport=118,-1002,13929,6484',
    },
    {
      template: 'image',
      imgSrc: cisco3,
    },
    {
      template: 'image',
      imgSrc: cisco4,
    },
    {
      template: 'image',
      imgSrc: cisco5,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://xd.adobe.com/embed/45ede586-5dc6-4f4c-abe9-6a3d30d79a1c-10be/',
    },
    {
      template: 'image',
      imgSrc: cisco6,
    },
  ],
  
  lms: [
    {
      template: 'image',
      imgSrc: LMS2,
    },
    {
      template: 'content',
      title: 'Learning management system',
      description:
        'Created UI for learning management system is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, materials or learning and development programs. The learning management system concept emerged directly from e-Learning',
      category: 'Web App',
      client: 'Mue-Zero',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: LMS1,
    },
  ],

  instrumentcluster: [
    {
      template: 'image',
      imgSrc: car1,
    },
    {
      template: 'content',
      title: 'Car Instrument Cluster',
      description:
        'A UI for cars instrument cluster houses the various displays and indicators that enable a driver to operate the vehicle. Among these are several gauges – often a speedometer, odometer, tachometer, oil pressure gauge, fuel gauge, etc. – as well as various indicators for system malfunctions and warnings.',
      category: 'Web App',
      client: 'Tata Motors',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: car2,
    },
  ],

  abc: [
    {
      template: 'image',
      imgSrc: benzImg1,
    },
    {
      template: 'content',
      title: 'Big Data Analytics Suite',
      description:
        'ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.',
      category: 'Web App',
      client: 'ABC',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: abc1,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772',
    },
    {
      template: 'image',
      imgSrc: abc2,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772',
    },
    {
      template: 'image',
      imgSrc: abc3,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772',
    },
    {
      template: 'image',
      imgSrc: abc4,
    },
    {
      template: 'iframe',
      srcUrl:
        'https://xd.adobe.com/embed/9977cdad-88d5-40e9-b08f-8a58ccc156cf-cc24/',
    },

  
  ],

  infoentertainment: [
    {
      template: 'image',
      imgSrc: flightbanner,
    },
    {
      template: 'content',
      title: 'Inflight Entertainment System',
      description:
        'In-flight entertainment (IFE) systems are designed to enrich the passenger experience and streamline the onboard experience. IFE systems can include: Moving-map systems: Display a map of the planes position and direction, Audio entertainment: Includes music, news, information, and comedy, Video entertainment: Includes personal televisions (PTVs) and larger video screens, Games: Includes video games that can be networked for interactive playing, In-flight magazines: Provide details about the airline fleet, as well as articles about destinations, travel, and tourism information.',
      category: 'Web App',
      client: 'NDA',
      tools: [figma, xd, sketch, invision],
      published: '01-04-2025',
    },
    {
      template: 'image',
      imgSrc: flight3,
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
