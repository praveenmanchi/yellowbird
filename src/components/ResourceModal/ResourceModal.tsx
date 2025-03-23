import React from 'react';
import Casestudy from '../casestudy/casestudy';
import './ResourceModal.css';

const ResourceModal: React.FC = () => {
  return (
    <div className='resource-modal-header'>
      <span className='resource-modal-title'>My contribution</span>
      <span className='resource-modal-description'>
        This personal space aims to showcase how I think and work and become a
        place where I can share my thoughts and my journey as a product designer
        in this industry.
      </span>
      <div className='recent-case-studies'>
        <Casestudy />
        <Casestudy />
        <Casestudy />
        <Casestudy />
      </div>
    </div>
  );
};

export default ResourceModal;
