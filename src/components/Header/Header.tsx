import React, { useState, useRef } from 'react';
import { Link } from 'react-router';
import praveenLogo from '../../assets/logo-thunderstorm-96.d1126ac.svg fill.svg';
import './Header.css';
import CaseStudiesModal from '../CaseStudiesModal/CaseStudiesModal';

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsModalVisible(false);
    }
  };

  return (
    <header className='header'>
      <div className='header-left'>
        <Link to='/'>
          <img src={praveenLogo} alt='Praveen Manchi' />
        </Link>
      </div>
      <nav className='header-right'>
        <ul>
          <li>
            <Link to='/about-me'>ABOUT ME</Link>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <Link to='/case-studies'>Case Studies</Link>
            {isModalVisible && (
              <div
                ref={modalRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CaseStudiesModal />
              </div>
            )}
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/resource'>Resource</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
