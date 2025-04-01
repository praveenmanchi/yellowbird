import React from 'react';
import './MyDesignProcess.css';

const MyDesignProcess: React.FC = () => {
  return (
    <div className='design-process'>
      <div className='design-process-header'>
        <span className='design-process-title'>My Design Process</span>
        <span className='design-process-description'>
        My design process varies slightly depending on the nature of the project at hand. Am I redesigning an existing product, creating a new product from scratch, adding new features to an already existing product?

However, a few steps remain consistent in most of my projects. And those steps, make up my design process.

My design process is a slight modification of the design thinking process. I like the design thinking framework because it is straightforward, easy to follow and it helps me be more creative.
        </span>
      </div>
      <div className='design-process-miro-board'>
        <iframe
          src='https://miro.com/app/embed/uXjVILvj3KE=/?pres=1&frameId=3458764622319928106&embedId=666041412468'
          width='100%'
          height='800'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MyDesignProcess;
