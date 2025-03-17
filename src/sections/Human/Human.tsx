import React from 'react';
import './Human.css';
import image from '../../assets/aboutMe/mountain-pr.png';

const Human: React.FC = () => {
  return (
    <div className='human'>
      <img className='human-image' src={image} alt='mountain' />
      <div className='human-container'>
        <span className='human-title'>About me as a human</span>
        <span className='human-quote'>
          “I believe in the process but even more in the connections we build
          and strengthen along the way between companies, teams and end-users,
          all as humans.”
        </span>
        <span className='human-description'>
          My name is Praveen Manchi. I am a User Interface and User Experience
          designer. I currently work at Deloitte, where I am part of an amazing
          team that is designing thoughtful experiences to help designers,
          product managers, and engineers collaborate better together. In my
          spare time, I am learning Unreal Engine to create virtual and
          augmented reality experiences for the future. I am passionate about
          building and designing delightful experiences that consider the needs
          of both the business and the end user. My goal is to make customers
          and users satisfied when they use our products and services online.
          delightful experiences that consider the needs of both the business
          and the end user. My goal is to make customers and users satisfied
          when they use our products and services online.and the end user. My
          goal is to make customers and users satisfied when they use our
          products and services online.
        </span>
      </div>
    </div>
  );
};

export default Human;
