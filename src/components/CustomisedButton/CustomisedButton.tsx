import React, { useState } from 'react';
import './CustomisedButton.css';

interface CustomisedButtonProps {
  link?: string;
  img?: string;
  label?: string;
  onClick?: () => void;
}

const CustomisedButton: React.FC<CustomisedButtonProps> = ({
  link,
  label,
  img,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <button
      className={`custom-button ${isHovered ? 'hovered' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
      <img
        src={img}
        alt={label || 'button icon'}
        className={isHovered ? 'hovered-img' : ''}
      />
    </button>
  );
};

export default CustomisedButton;