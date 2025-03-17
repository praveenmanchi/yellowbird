import React from 'react';
import arrow from '../../assets/forward-arrow.svg';
import figmaLogo from '../../assets/figma.svg'
import './CaseStudyCard.css';



const CaseStudyCard: React.FC = () => {
    return (
        <div className="case-study-card" style={{ background: 'linear-gradient(to bottom, gray, black)' }}>
            <div className="case-study-content">
            <div className="case-study-header">
            <h5 className="case-study-title">INSIGHTS</h5>
            <div className="case-study-meta">
            <div className="case-study-date">
                <h1 className="case-study-date-header">5%</h1>
                <p className="case-study-date-desc">Increase in
                resume building</p>
            </div>
            <div className="case-study-date">
                <h1 className="case-study-date-header">5%</h1>
                <p className="case-study-date-desc">Increase in
                Click rates for Job Description and AI </p>
            </div>
            </div>
            </div>
            <div className="case-study-details">
            <h5 className="case-study-company">Abu Dhabi Executive Office</h5>
            <h2 className="case-study-description">Help designers and developers create consistents</h2>
            <div className="case-study-info">
                <div className="case-study-info-item">
                <div className="case-study-info-header">
                    <h5>Position</h5>
                    <h5>Lead Designer</h5>
                </div>
                <div className="case-study-info-header">
                    <h5>Expertise</h5>
                    <h5>Design Systems</h5>
                </div>
                <div className="case-study-info-header">
                    <h5>Tools</h5>
                    <img src={figmaLogo} alt='' className="case-study-logo" />
                </div>
                </div>
                <div className='case-study-button-container'>
                <button className="case-study-button">
                READ CASE STUDY
                <img src={arrow} alt='' className="case-study-arrow" />
                </button>
                </div>
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default CaseStudyCard;