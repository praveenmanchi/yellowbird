import React from 'react';
import './MySpaceSection.css';
import MySpaceCard from '../../components/MySpaceCard/MySpaceCard';
import { cardData } from '../../constants/mySpaceConstants';

const MySpaceSection: React.FC = () => {
    return (
        <div className="my-space-section">
            <h6 className="my-space-section__welcome">Welcome to my space on the Internets</h6>
            <h2 className="my-space-section__headline">Words are cool and everything but what about taking a deep dive into my universe?</h2>
            <div className='my-space-section__cards'>
            {cardData.map((card, index) => (
                <MySpaceCard key={index} card={card} />
            ))}
            </div>
        </div>
    );
};

export default MySpaceSection;