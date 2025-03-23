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
        {/* <h1 className='about-me-quote'>
        “I believe in the process but even more in the connections we build
          and strengthen along the way between companies, teams and end-users,
          all as humans.”
          </h1> */}
        <span className='human-description'>
       My name is Praveen Manchi, and I am a User Interface and User Experience designer. I currently work at Deloitte, where I collaborate with an amazing team to design thoughtful experiences that enhance collaboration between designers, product managers, and engineers.
        In my spare time, I am learning Unreal Engine to explore virtual and augmented reality for the future. I am passionate about crafting delightful experiences that balance business goals with user needs, ensuring customer satisfaction across digital products and services.
        </span>
        <span className='human-description'>
          
        </span>
        <span className='human-description'>
        I have led the design of AI-driven applications that replaced manual workflows, enabling seamless decision-making and automation. My work involved creating intuitive interfaces that transformed complex processes into user-friendly experiences, from training machine learning models to designing scalable marketplaces for AI assets. By conducting in-depth research, iterative testing, and establishing robust design systems, I ensured that highly technical tools became accessible to a diverse user base. My ability to navigate the challenges of limited user feedback in enterprise applications has sharpened my skills in crafting research-driven, impactful solutions that balance business objectives with user needs.
        </span>
      </div>
    </div>
  );
};

export default Human;
