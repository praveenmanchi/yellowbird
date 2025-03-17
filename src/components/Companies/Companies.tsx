import React from 'react';
import knowMore from '../../assets/aboutMe/know-more.svg';
import './Companies.css';

const Companies: React.FC = () => {
  return (
    <>
      {/* Deloitte */}
      <div className='companies-container'>
        <div className='companies-inner-container'>
          <div className='companies-content'>
            <div className='companies-header'></div>
            <div className='companies-subheader'></div>
          </div>
        </div>
        <div className='companies-details'>
          <span className='company-name'>
            Deloitte South Asia LLP, Product Designer
          </span>
          <span className='company-duration'>July, 2022 - Now (2.6 years)</span>
          <span className='company-description'>
            As in-house Product Designer at CortexAI, collaborated within a
            dynamic team, leading a small team while also contributing
            individually. Worked on web and mobile platforms, spearheading UI
            for applications such as LLM, Generative AI, and in-house AI tools.
            Created UI from scratch, setting high-level standards and
            established design systems. Crafted interfaces for users to search,
            review, and purchase assets like prompts, code & algorithm and
            datasets, facilitating seamless deployment on cloud platforms such
            as AWS and Azure.
          </span>
          <div className='company-footer'>
            <span className='company-footer-content'>Know More</span>
            <img src={knowMore} alt='knowMore' />
          </div>
        </div>
      </div>

      {/* Tata Elexsi */}

      <div className='companies-container'>
        <div className='companies-inner-container'>
          <div className='companies-content'>
            <div
              className='companies-header'
              style={{ marginTop: '0px' }}
            ></div>
            <div
              className='companies-subheader'
              style={{ height: '364px' }}
            ></div>
          </div>
        </div>
        <div className='companies-details'>
          <span className='company-name' style={{ marginTop: '-40px' }}>
            Tata Elxsi, Senior UI Designer
          </span>
          <span className='company-duration'>
            December, 2020 - June, 2022 (1.6 year)
          </span>
          <span
            className='company-description'
            style={{ marginBottom: '60px' }}
          >
            As a UX/UI Designer, drove the design and development of UI,
            including web, mobile, HCI and HMI with exceptional quality across
            projects for esteemed clients in renewable energy, automobile, and
            aviation. Worked on two major OTT platforms, leveraging cutting-edge
            UI enhancements rooted in extensive UX research. Crafted Futuristic
            User Interfaces (FUI) using Blender and Unreal Engine, pushing the
            boundaries of design innovation.
          </span>
        </div>
      </div>

      {/* WAFU Technologies */}
      <div className='companies-container'>
        <div className='companies-inner-container'>
          <div className='companies-content'>
            <div
              className='companies-header'
              style={{ marginTop: '0px' }}
            ></div>
            <div
              className='companies-subheader'
              style={{ height: '342px' }}
            ></div>
          </div>
        </div>
        <div className='companies-details'>
          <span className='company-name' style={{ marginTop: '-40px' }}>
            WAFU Technologies Private Limited, UX/UI Designer
          </span>
          <span className='company-duration'>
            May, 2018 - December, 2020 (2.7 years)
          </span>
          <span className='company-description'>
            Assisted in the design and development of mobile and web products,
            contributing to user interface design, usability testing, and design
            iteration processes. Collaborated with senior designers to translate
            concepts into wireframes, prototypes, and final designs.
          </span>
        </div>
      </div>
    </>
  );
};

export default Companies;
