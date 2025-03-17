import React from 'react';
import uxUiLogo from '../../assets/ux-ui-logo.svg';
import './Body.css';
import FeaturedProjectsSection from '../../sections/FeaturedProjectsSection/FeaturedProjectsSection';
import MySpaceSection from '../../sections/MySpaceSection/MySpaceSection';
import DesignerIntro from '../../sections/DesignerIntro/DesignerIntro';

const Body: React.FC = () => {
  return (
    <main className='body-main'>
      <DesignerIntro />
      <div className='home-main-container'>
        <div className='content-wrapper'>
          <h1 className='main-heading'>What can I do for you?</h1>
          <div className='business-section'>
            <div className='business-content'>
              <h1 className='business-heading'>For businesses!</h1>
              <p className='business-description'>
                I create user-friendly interfaces that are super valuable for
                customers and a breeze for engineers to implement.
              </p>
            </div>
            <div className='business-content'>
              <h1 className='business-heading'>For startups!</h1>
              <p className='business-description'>
                I help you pinpoint the problem and whip up a minimum viable
                product (MVP). If you’re short on engineering talent, I can
                suggest some great tools to get you started.
              </p>
            </div>
            <div className='business-content'>
              <h1 className='business-heading'>For product teams!</h1>
              <p className='business-description'>
                I design fun growth experiments and help your team tackle
                challenges in fresh ways to create an even better product.
              </p>
            </div>
          </div>
        </div>
        <div className='image-wrapper'>
          <img src={uxUiLogo} alt='ux-ui' />
        </div>
      </div>
      <FeaturedProjectsSection />
      <MySpaceSection />
    </main>
  );
};

export default Body;
