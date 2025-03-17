import React from 'react';
import pM from '../../assets/pr-mn-span.svg';
import './DesignerIntro.css';

const DesignerIntro: React.FC = () => {
  return (
    <div className='designer-intro'>
      <span className='designer-intro__greeting'>Hello there,</span>
      <span className='designer-intro__description'>
        I’m
        <span
          className='designer-intro__logo'
          style={{
            display: 'inline-block',
            verticalAlign: 'sub',
            marginLeft: '8px',
          }}
        >
          <img src={pM} alt='pr' style={{ height: '70px' }} />
        </span>
        <br />a designer who cares about making beautiful things that help
        people.
      </span>
    </div>
  );
};

export default DesignerIntro;
